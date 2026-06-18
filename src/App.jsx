import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  Mic,
  Search,
  BookOpen,
  Quote,
  ShieldCheck,
  X,
  Share2,
  Copy,
  Shuffle,
  Moon,
  Sun,
} from "lucide-react";
import { mythsData, categories } from "./data/mythsData";
import { UI, CATEGORY_LABELS, LANGS } from "./i18n.js";
import MythChart from "./components/MythChart";
import "./index.css";

// Diakritiku odstránime, aby "proteín" našlo aj "protein" a naopak.
const normalize = (str) =>
  (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Hrubý "stem" – orežeme na prvých 5 znakov (slovenské skloňovanie).
const stem = (w) => w.slice(0, 5);

const tokenize = (str) =>
  normalize(str)
    .split(/[^a-z0-9а-я]+/i)
    .filter((w) => w.length >= 3);

const mythLink = (id) =>
  `${window.location.origin}${window.location.pathname}?m=${id}`;

const FALLBACK_SOURCE = {
  title: "Academy of Nutrition and Dietetics Position",
  url: "https://pubmed.ncbi.nlm.nih.gov/27886704/",
};

function App() {
  const [activeId, setActiveId] = useState(null);
  const [fallbackText, setFallbackText] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Všetky");
  const [isListening, setIsListening] = useState(false);
  const [toast, setToast] = useState("");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("vd-theme");
    return (
      saved ||
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "sk";
    const saved = localStorage.getItem("vd-lang");
    if (saved && UI[saved]) return saved;
    const nav = (navigator.language || "sk").slice(0, 2);
    return UI[nav] ? nav : "sk";
  });

  // Preklady (EN/BG dáta) sa načítavajú lenivo – slovenská verzia ich nepotrebuje.
  const [i18n, setI18n] = useState(null);

  const recognitionRef = useRef(null);
  const responseRef = useRef(null);
  const toastTimer = useRef(null);

  const t = UI[lang];

  // Lenivé načítanie prekladového balíka pri prepnutí na EN/BG.
  useEffect(() => {
    if (lang === "sk" || i18n) return;
    let alive = true;
    import("./data/translations/index.js").then((mod) => {
      if (alive) setI18n(mod);
    });
    return () => {
      alive = false;
    };
  }, [lang, i18n]);

  // Mýty preložené do aktuálneho jazyka (kým sa preklad načíta, ukáže sa SK).
  const localizedMyths = useMemo(() => {
    if (lang === "sk" || !i18n) return mythsData;
    return mythsData.map((m) => i18n.localizeMyth(m, lang));
  }, [lang, i18n]);

  // ---- Téma + jazyk (atribúty dokumentu) ----------------------------------
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("vd-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("vd-lang", lang);
  }, [lang]);

  // Štruktúrované dáta pre Google (FAQPage).
  useEffect(() => {
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: localizedMyths
        .filter((m) => m.id !== "fallback")
        .map((m) => ({
          "@type": "Question",
          name: m.query,
          acceptedAnswer: { "@type": "Answer", text: m.reality },
        })),
    };
    let el = document.getElementById("faq-jsonld");
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = "faq-jsonld";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(faq);
  }, [localizedMyths]);

  // ---- Krátke oznámenie (toast) -------------------------------------------
  const flash = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  // ---- Otvorenie / zatvorenie mýtu + synchronizácia s URL ------------------
  const openMyth = useCallback((myth, { updateUrl = true } = {}) => {
    setFallbackText(null);
    setActiveId(myth.id);
    if (updateUrl && myth.id !== "fallback") {
      const url = new URL(window.location);
      url.searchParams.set("m", myth.id);
      window.history.pushState({ m: myth.id }, "", url);
    }
  }, []);

  const closeMyth = useCallback(() => {
    setActiveId(null);
    setFallbackText(null);
    const url = new URL(window.location);
    url.searchParams.delete("m");
    window.history.pushState({}, "", url);
  }, []);

  // Pri načítaní (a tlačidlách späť/vpred) otvor mýtus podľa URL.
  useEffect(() => {
    const applyFromUrl = () => {
      const id = new URLSearchParams(window.location.search).get("m");
      setFallbackText(null);
      setActiveId(id && mythsData.some((m) => m.id === id) ? id : null);
    };
    applyFromUrl();
    window.addEventListener("popstate", applyFromUrl);
    return () => window.removeEventListener("popstate", applyFromUrl);
  }, []);

  // Aktuálne zobrazený (preložený) mýtus.
  const activeMyth = useMemo(() => {
    if (fallbackText !== null) {
      return {
        id: "fallback",
        query: `${t.fallbackPrefix}: "${fallbackText}"`,
        reality: t.fallbackReality,
        sources: [FALLBACK_SOURCE],
        chartType: "none",
        image: "🌱",
      };
    }
    if (!activeId) return null;
    return localizedMyths.find((m) => m.id === activeId) || null;
  }, [activeId, fallbackText, localizedMyths, t]);

  // Vyhľadávací index s TF-IDF váhami – funguje v SK aj EN/BG.
  // Vzácne slová (rakovina, cancer, vápnik) vážia viac než časté (mäso, meat).
  const searchIndex = useMemo(() => {
    const docs = localizedMyths.map((myth) => {
      const titleStems = new Set(tokenize(myth.query).map(stem));
      const textStems = new Set(
        [
          ...tokenize(myth.query),
          ...tokenize(myth.reality),
          ...(myth.keywords || []).flatMap((k) => tokenize(k)),
        ].map(stem)
      );
      const phrases = (myth.keywords || [])
        .map(normalize)
        .filter((kw) => kw.includes(" "));
      return { myth, titleStems, textStems, phrases };
    });

    const N = docs.length || 1;
    const df = {};
    for (const d of docs) for (const s of d.textStems) df[s] = (df[s] || 0) + 1;
    const idf = {};
    for (const s in df) idf[s] = Math.log(1 + N / df[s]);

    return { docs, idf };
  }, [localizedMyths]);

  // Skórované hľadanie – TF-IDF + bonus za zhodu v otázke + SK frázy.
  const matchMyth = useCallback(
    (text) => {
      if (!text.trim()) return;
      const q = normalize(text);
      const qStems = [...new Set(tokenize(text).map(stem))];
      const { docs, idf } = searchIndex;
      const defaultIdf = Math.log(2);

      let best = null;
      let bestScore = 0;
      for (const d of docs) {
        let score = 0;
        for (const phrase of d.phrases) {
          if (q.includes(phrase)) score += 5;
        }
        for (const s of qStems) {
          const w = idf[s] ?? defaultIdf;
          if (d.titleStems.has(s)) score += w * 3;
          else if (d.textStems.has(s)) score += w;
        }
        if (score > bestScore) {
          bestScore = score;
          best = d.myth;
        }
      }

      if (best) {
        openMyth(best);
      } else {
        setActiveId(null);
        setFallbackText(text);
      }
    },
    [searchIndex, openMyth]
  );

  // Rozpoznávanie reči (Web Speech API) – jazyk podľa výberu.
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = t.speechLang;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript);
      matchMyth(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
  }, [matchMyth, t.speechLang]);

  // Po vybratí mýtu jemne odscrolluj k odpovedi.
  useEffect(() => {
    if (activeMyth && responseRef.current) {
      responseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeMyth]);

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setSearchText("");
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    matchMyth(searchText);
  };

  const showRandom = () => {
    const m = localizedMyths[Math.floor(Math.random() * localizedMyths.length)];
    openMyth(m);
  };

  // ---- Zdieľanie a kopírovanie --------------------------------------------
  const buildShareText = (m) => {
    const src = m.sources?.map((s) => `• ${s.title}: ${s.url}`).join("\n") || "";
    return `❝ ${m.query} ❞\n\n✅ ${m.reality}\n\n📚 ${t.sources}\n${src}\n\n🌿 Vegan Defender · ${mythLink(
      m.id
    )}`;
  };

  const copyAnswer = async (m) => {
    try {
      await navigator.clipboard.writeText(buildShareText(m));
      flash(t.toastCopied);
    } catch {
      flash(t.toastFail);
    }
  };

  const shareMyth = async (m) => {
    const url = mythLink(m.id);
    if (navigator.share) {
      try {
        await navigator.share({ title: "Vegan Defender", text: `❝ ${m.query} ❞`, url });
      } catch {
        /* zrušené */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        flash(t.toastLink);
      } catch {
        flash(t.toastFail);
      }
    }
  };

  // Filtrovanie kariet podľa kategórie a textu.
  const filteredMyths = useMemo(() => {
    const q = normalize(searchText);
    return localizedMyths.filter((myth) => {
      const inCategory =
        activeCategory === "Všetky" || myth.category === activeCategory;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        normalize(myth.query).includes(q) ||
        normalize(myth.reality).includes(q) ||
        (myth.keywords || []).some((kw) => normalize(kw).includes(q))
      );
    });
  }, [activeCategory, searchText, localizedMyths]);

  const categoryCounts = useMemo(() => {
    const counts = {};
    for (const m of mythsData) counts[m.category] = (counts[m.category] || 0) + 1;
    return counts;
  }, []);

  const relatedMyths = useMemo(() => {
    if (!activeMyth || activeMyth.id === "fallback") return [];
    return localizedMyths
      .filter((m) => m.category === activeMyth.category && m.id !== activeMyth.id)
      .slice(0, 3);
  }, [activeMyth, localizedMyths]);

  const hasVoice =
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition);

  const catLabel = (key) => CATEGORY_LABELS[lang]?.[key] || key;

  return (
    <div className="app-container">
      {/* Horné ovládanie: jazyk + téma */}
      <div className="lang-switch" role="group" aria-label={t.langAria}>
        {LANGS.map((l) => (
          <button
            key={l.code}
            className={`lang-btn ${lang === l.code ? "active" : ""}`}
            onClick={() => setLang(l.code)}
            title={l.name}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        className="theme-toggle"
        onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
        aria-label={t.themeTitle}
        title={t.themeTitle}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero */}
      <header className="hero-section">
        <h1 className="hero-title">
          Vegan <span className="hero-accent">Defender</span>
        </h1>
        <p className="hero-subtitle">{t.subtitle}</p>

        <form onSubmit={handleSearchSubmit} className="input-wrapper">
          {hasVoice && (
            <button
              type="button"
              onClick={toggleListen}
              className={`voice-btn ${isListening ? "recording" : ""}`}
              title={t.voiceTitle}
              aria-label={t.voiceAria}
            >
              <Mic size={20} />
            </button>
          )}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
            placeholder={t.searchPlaceholder}
            aria-label={t.searchAria}
          />
          {searchText && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => setSearchText("")}
              aria-label={t.clearAria}
            >
              <X size={18} />
            </button>
          )}
          <button type="submit" className="submit-btn" aria-label={t.searchBtnAria}>
            <Search size={20} />
          </button>

          {isListening && <span className="listening-text">{t.listening}</span>}
        </form>

        <button className="random-btn" onClick={showRandom}>
          <Shuffle size={16} /> {t.random}
        </button>
      </header>

      {/* Odpoveď */}
      {activeMyth && (
        <section
          ref={responseRef}
          className="glass-panel response-container"
          aria-live="polite"
        >
          <button className="response-close" onClick={closeMyth} aria-label={t.closeAria}>
            <X size={20} />
          </button>
          <div className="response-header">
            <h2 className="myth-statement">
              <Quote className="quote-icon" size={32} />"{activeMyth.query}"
            </h2>
          </div>

          <div className="response-grid">
            <div>
              <p className="science-fact">
                <ShieldCheck className="shield-icon" size={24} />
                {activeMyth.reality}
              </p>

              <div className="sources-box">
                <h4 className="sources-title">
                  <BookOpen size={16} /> {t.sources}
                </h4>
                <ul className="sources-list">
                  {activeMyth.sources.map((source, idx) => (
                    <li key={idx}>
                      •{" "}
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {activeMyth.id !== "fallback" && (
                <div className="action-row">
                  <button className="action-btn" onClick={() => copyAnswer(activeMyth)}>
                    <Copy size={16} /> {t.copyAnswer}
                  </button>
                  <button className="action-btn" onClick={() => shareMyth(activeMyth)}>
                    <Share2 size={16} /> {t.share}
                  </button>
                </div>
              )}
            </div>

            {activeMyth.chartType && activeMyth.chartType !== "none" && (
              <div className="chart-wrapper">
                <MythChart myth={activeMyth} />
              </div>
            )}
          </div>

          {relatedMyths.length > 0 && (
            <div className="related">
              <h4 className="related-title">{t.related}</h4>
              <div className="related-list">
                {relatedMyths.map((m) => (
                  <button key={m.id} className="related-chip" onClick={() => openMyth(m)}>
                    <span className="myth-icon">{m.image}</span>
                    <span>{m.query}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Filtre kategórií */}
      <nav className="category-bar" aria-label="Kategórie">
        <button
          className={`category-chip ${activeCategory === "Všetky" ? "active" : ""}`}
          onClick={() => setActiveCategory("Všetky")}
        >
          {t.all} <span className="chip-count">{mythsData.length}</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-chip ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {catLabel(cat)}{" "}
            <span className="chip-count">{categoryCounts[cat] || 0}</span>
          </button>
        ))}
      </nav>

      <p className="result-count">
        {filteredMyths.length}{" "}
        {filteredMyths.length === 1 ? t.mythWordOne : t.mythWordMany}{" "}
        {t.inDatabase}
      </p>

      {/* Mriežka mýtov */}
      <div className="myth-grid">
        {filteredMyths.map((myth) => (
          <button
            key={myth.id}
            onClick={() => openMyth(myth)}
            className={`myth-btn ${activeMyth?.id === myth.id ? "active" : ""}`}
          >
            <span className="myth-icon">{myth.image}</span>
            <span>{myth.query}</span>
          </button>
        ))}
        {filteredMyths.length === 0 && (
          <p className="empty-state">{t.emptyState(searchText)}</p>
        )}
      </div>

      <footer className="app-footer">{t.footer(mythsData.length)}</footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
