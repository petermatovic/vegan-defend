import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  Suspense,
  lazy,
} from "react";
import { Mic, Search, BookOpen, Quote, ShieldCheck, X } from "lucide-react";
import { mythsData, categories } from "./data/mythsData";
import "./index.css";

// Graf načítavame lenivo (recharts je veľká knižnica) – pozri MythChart.jsx
const MythChart = lazy(() => import("./components/MythChart"));

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

function App() {
  const [activeMyth, setActiveMyth] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Všetky");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const responseRef = useRef(null);

  // Predpočítaný vyhľadávací index pre rýchle a presné hľadanie.
  const searchIndex = useMemo(
    () =>
      mythsData.map((myth) => {
        const normKeywords = (myth.keywords || []).map(normalize);
        // viacslovné kľúčové frázy (silný signál pri zhode)
        const phrases = normKeywords.filter((kw) => kw.includes(" "));
        // množina "stemov" zo všetkých kľúčových slov
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
      const qWords = tokenize(text);
      const qStems = [...new Set(qWords.map(stem))];

      let best = null;
      let bestScore = 0;
      for (const entry of searchIndex) {
        let score = 0;
        // 1) viacslovná fráza ako podreťazec – veľmi silný signál
        for (const phrase of entry.phrases) {
          if (q.includes(phrase)) score += 5;
        }
        // 2) počet RÔZNYCH slov z otázky, ktoré sedia na kľúčové slová
        for (const s of qStems) {
          if (entry.stems.has(s)) score += 2;
        }
        if (score > bestScore) {
          bestScore = score;
          best = entry.myth;
        }
      }

      if (best) {
        setActiveMyth(best);
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
    [searchIndex]
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
      responseRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
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

  // Filtrovanie kariet podľa kategórie a textu (živé prehľadávanie mriežky).
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

  const hasVoice =
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition);

  return (
    <div className="app-container">
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

          {isListening && (
            <span className="listening-text">Počúvam ťa...</span>
          )}
        </form>
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
            onClick={() => setActiveMyth(null)}
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
            </div>

            {activeMyth.chartType && activeMyth.chartType !== "none" && (
              <div className="chart-wrapper">
                <Suspense
                  fallback={<div className="chart-loading">Načítavam graf…</div>}
                >
                  <MythChart myth={activeMyth} />
                </Suspense>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Filtre kategórií */}
      <nav className="category-bar" aria-label="Kategórie mýtov">
        <button
          className={`category-chip ${activeCategory === "Všetky" ? "active" : ""}`}
          onClick={() => setActiveCategory("Všetky")}
        >
          Všetky
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-chip ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
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
            onClick={() => {
              setActiveMyth(myth);
            }}
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
    </div>
  );
}

export default App;
