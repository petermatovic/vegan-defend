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
  Check,
  Shuffle,
  Moon,
  Sun,
} from "lucide-react";
import { mythsData, categories } from "./data/mythsData";
import MythChart from "./components/MythChart";
import "./index.css";

// Diakritiku odstránime, aby "proteín" našlo aj "protein" a naopak.
const normalize = (str) =>
  (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Hrubý "stem" – orežeme na prvých 5 znakov, aby sme zachytili slovenské
// skloňovanie (rakovina / rakovinu / rakoviny → "rakov").
const stem = (w) => w.slice(0, 5);

// Rozdelíme text na zmysluplné slová (3+ znakov).
const tokenize = (str) =>
  normalize(str)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 3);

// Odkaz na konkrétny mýtus (na zdieľanie).
const mythLink = (id) =>
  `${window.location.origin}${window.location.pathname}?m=${id}`;

function App() {
  const [activeMyth, setActiveMyth] = useState(null);
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
  const recognitionRef = useRef(null);
  const responseRef = useRef(null);
  const toastTimer = useRef(null);

  // ---- Téma (svetlá/tmavá) -------------------------------------------------
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("vd-theme", theme);
  }, [theme]);

  // ---- Krátke oznámenie (toast) -------------------------------------------
  const flash = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  // ---- Otvorenie / zatvorenie mýtu + synchronizácia s URL ------------------
  const openMyth = useCallback((myth, { updateUrl = true } = {}) => {
    setActiveMyth(myth);
    if (updateUrl && myth && myth.id !== "fallback") {
      const url = new URL(window.location);
      url.searchParams.set("m", myth.id);
      window.history.pushState({ m: myth.id }, "", url);
    }
  }, []);

  const closeMyth = useCallback(() => {
    setActiveMyth(null);
    const url = new URL(window.location);
    url.searchParams.delete("m");
    window.history.pushState({}, "", url);
  }, []);

  // Štruktúrované dáta pre Google (FAQPage) – šanca na rich results vo výsledkoch.
  useEffect(() => {
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mythsData
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
  }, []);

  // Pri načítaní (a pri tlačidlách späť/vpred) otvor mýtus podľa URL.
  useEffect(() => {
    const applyFromUrl = () => {
      const id = new URLSearchParams(window.location.search).get("m");
      const found = id ? mythsData.find((m) => m.id === id) : null;
      setActiveMyth(found || null);
    };
    applyFromUrl();
    window.addEventListener("popstate", applyFromUrl);
    return () => window.removeEventListener("popstate", applyFromUrl);
  }, []);

  // Predpočítaný vyhľadávací index pre rýchle a presné hľadanie.
  const searchIndex = useMemo(
    () =>
      mythsData.map((myth) => {
        const normKeywords = (myth.keywords || []).map(normalize);
        const phrases = normKeywords.filter((kw) => kw.includes(" "));
        const stems = new Set();
        for (const kw of normKeywords) {
          for (const w of kw.split(/[^a-z0-9]+/)) {
            if (w.length >= 3) stems.add(stem(w));
          }
        }
        return { myth, phrases, stems };
      }),
    []
  );

  // Skórované hľadanie – nájde najlepšiu zhodu, nie len prvú.
  const matchMyth = useCallback(
    (text) => {
      if (!text.trim()) return;
      const q = normalize(text);
      const qStems = [...new Set(tokenize(text).map(stem))];

      let best = null;
      let bestScore = 0;
      for (const entry of searchIndex) {
        let score = 0;
        for (const phrase of entry.phrases) {
          if (q.includes(phrase)) score += 5;
        }
        for (const s of qStems) {
          if (entry.stems.has(s)) score += 2;
        }
        if (score > bestScore) {
          bestScore = score;
          best = entry.myth;
        }
      }

      if (best) {
        openMyth(best);
      } else {
        setActiveMyth({
          id: "fallback",
          query: `Zachytené: "${text}"`,
          reality:
            "Tento konkrétny argument zatiaľ nemám v databáze. Vo všeobecnosti však platí: dobre zostavená rastlinná strava znižuje riziko chronických ochorení a podľa stanoviska Academy of Nutrition and Dietetics je vhodná pre všetky fázy života. Skús preformulovať mýtus alebo vyber niektorý z kariet nižšie.",
          sources: [
            {
              title: "Academy of Nutrition and Dietetics Position",
              url: "https://pubmed.ncbi.nlm.nih.gov/27886704/",
            },
          ],
          chartType: "none",
          image: "🌱",
        });
      }
    },
    [searchIndex, openMyth]
  );

  // Inicializácia rozpoznávania reči (Web Speech API).
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "sk-SK";
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
  }, [matchMyth]);

  // Po vybratí mýtu jemne odscrolluj k odpovedi (hlavne na mobile).
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
    const m = mythsData[Math.floor(Math.random() * mythsData.length)];
    openMyth(m);
  };

  // ---- Zdieľanie a kopírovanie --------------------------------------------
  const buildShareText = (m) => {
    const src =
      m.sources?.map((s) => `• ${s.title}: ${s.url}`).join("\n") || "";
    return `❝ ${m.query} ❞\n\n✅ ${m.reality}\n\n📚 Zdroje:\n${src}\n\n🌿 Vegan Defender · ${mythLink(
      m.id
    )}`;
  };

  const copyAnswer = async (m) => {
    try {
      await navigator.clipboard.writeText(buildShareText(m));
      flash("Odpoveď skopírovaná do schránky");
    } catch {
      flash("Kopírovanie sa nepodarilo");
    }
  };

  const shareMyth = async (m) => {
    const url = mythLink(m.id);
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Vegan Defender",
          text: `❝ ${m.query} ❞`,
          url,
        });
      } catch {
        /* používateľ zrušil zdieľanie */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        flash("Odkaz skopírovaný do schránky");
      } catch {
        flash("Kopírovanie sa nepodarilo");
      }
    }
  };

  // Filtrovanie kariet podľa kategórie a textu.
  const filteredMyths = useMemo(() => {
    const q = normalize(searchText);
    return mythsData.filter((myth) => {
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
  }, [activeCategory, searchText]);

  // Počty mýtov v jednotlivých kategóriách (pre štítky).
  const categoryCounts = useMemo(() => {
    const counts = {};
    for (const m of mythsData) counts[m.category] = (counts[m.category] || 0) + 1;
    return counts;
  }, []);

  // Súvisiace mýty (rovnaká kategória) pod odpoveďou.
  const relatedMyths = useMemo(() => {
    if (!activeMyth || activeMyth.id === "fallback") return [];
    return mythsData
      .filter((m) => m.category === activeMyth.category && m.id !== activeMyth.id)
      .slice(0, 3);
  }, [activeMyth]);

  const hasVoice =
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition);

  return (
    <div className="app-container">
      <button
        className="theme-toggle"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        aria-label="Prepnúť svetlý/tmavý režim"
        title="Svetlý / tmavý režim"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero */}
      <header className="hero-section">
        <h1 className="hero-title">
          Vegan <span className="hero-accent">Defender</span>
        </h1>
        <p className="hero-subtitle">
          Generátor vedecky podložených odpovedí na najčastejšie mýty a
          domnienky o rastlinnej strave.
        </p>

        <form onSubmit={handleSearchSubmit} className="input-wrapper">
          {hasVoice && (
            <button
              type="button"
              onClick={toggleListen}
              className={`voice-btn ${isListening ? "recording" : ""}`}
              title="Povedz mýtus"
              aria-label="Hlasové zadanie mýtu"
            >
              <Mic size={20} />
            </button>
          )}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
            placeholder="Napíš alebo povedz mýtus (napr. Odkiaľ berieš proteín?)"
            aria-label="Vyhľadať mýtus"
          />
          {searchText && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => setSearchText("")}
              aria-label="Vymazať"
            >
              <X size={18} />
            </button>
          )}
          <button type="submit" className="submit-btn" aria-label="Hľadať">
            <Search size={20} />
          </button>

          {isListening && <span className="listening-text">Počúvam ťa...</span>}
        </form>

        <button className="random-btn" onClick={showRandom}>
          <Shuffle size={16} /> Prekvap ma náhodným mýtom
        </button>
      </header>

      {/* Odpoveď */}
      {activeMyth && (
        <section
          ref={responseRef}
          className="glass-panel response-container"
          aria-live="polite"
        >
          <button
            className="response-close"
            onClick={closeMyth}
            aria-label="Zavrieť odpoveď"
          >
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
                  <BookOpen size={16} /> Vedecké zdroje:
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
                  <button
                    className="action-btn"
                    onClick={() => copyAnswer(activeMyth)}
                  >
                    <Copy size={16} /> Kopírovať odpoveď
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => shareMyth(activeMyth)}
                  >
                    <Share2 size={16} /> Zdieľať
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
              <h4 className="related-title">Pozri aj súvisiace mýty</h4>
              <div className="related-list">
                {relatedMyths.map((m) => (
                  <button
                    key={m.id}
                    className="related-chip"
                    onClick={() => openMyth(m)}
                  >
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
      <nav className="category-bar" aria-label="Kategórie mýtov">
        <button
          className={`category-chip ${
            activeCategory === "Všetky" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("Všetky")}
        >
          Všetky <span className="chip-count">{mythsData.length}</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-chip ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} <span className="chip-count">{categoryCounts[cat] || 0}</span>
          </button>
        ))}
      </nav>

      <p className="result-count">
        {filteredMyths.length}{" "}
        {filteredMyths.length === 1 ? "mýtus" : "mýtov"} v databáze
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
          <p className="empty-state">
            Pre „{searchText}“ sa nenašiel žiadny mýtus v tejto kategórii.
          </p>
        )}
      </div>

      <footer className="app-footer">
        Vegan Defender · {mythsData.length} vedecky podložených odpovedí
      </footer>

      {/* Toast */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
