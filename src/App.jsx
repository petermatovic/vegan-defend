import React, { useState, useEffect, useRef } from 'react';
import { Mic, Search, BookOpen, Quote, ShieldCheck, PlayCircle } from 'lucide-react';
import { mythsData } from './data/mythsData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './index.css';

function App() {
  const [activeMyth, setActiveMyth] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'sk-SK'; // Slovak language
      recognition.interimResults = false;
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchText(transcript);
        matchMyth(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

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

  // Keyword Matching Logic
  const matchMyth = (text) => {
    if (!text.trim()) return;
    
    const lowerText = text.toLowerCase();
    
    // Find the myth where any of its keywords is in the text
    const matched = mythsData.find(myth => 
      myth.keywords.some(kw => lowerText.includes(kw))
    );

    if (matched) {
      setActiveMyth(matched);
    } else {
      // Very basic fallback if no keywords matched
      setActiveMyth({
        id: "fallback",
        query: `Zachytené: "${text}"`,
        reality: "Tento špecifický argument ešte nemám v prémiovej databáze. Ale všeobecne platí: rastlinná strava znižuje riziko chronických ochorení a je plne schopná pokryť výživové požiadavky človeka vo všetkých fázach života. (Stanovisko Americkej dietetickej asociácie).",
        sources: [{ title: "Academy of Nutrition and Dietetics Position", url: "https://pubmed.ncbi.nlm.nih.gov/27886704/" }],
        chartType: "none",
        image: "🌱"
      });
    }
  };

  // Render specific charts dynamically
  const renderChart = (myth) => {
    if (myth.chartType === "none" || !myth.chartData) return null;

    return (
      <div className="chart-container glass-panel mt-8">
        <h3 className="text-center font-bold text-[var(--color-primary)] mb-4">{myth.chartTitle}</h3>
        <ResponsiveContainer width="100%" height="100%">
          {myth.chartType === "bar" ? (
            <BarChart data={myth.chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" unit={myth.chartUnit} />
              <YAxis dataKey="name" type="category" width={120} tick={{fill: "var(--color-text-light)", fontSize: 13}}/>
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
              <Bar dataKey={myth.chartDataKey} radius={[0, 4, 4, 0]}>
                {myth.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={myth.chartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey={myth.chartDataKey}
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {myth.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Vegan <span style={{color: 'var(--color-secondary)'}}>Defender</span></h1>
        <p className="hero-subtitle">Generátor vedecky podložených odpovedí na najdookola kladené mýty a domnienky o rastlinnej strave.</p>
        
        <form onSubmit={handleSearchSubmit} className="input-wrapper relative">
          <button 
            type="button" 
            onClick={toggleListen}
            className={`voice-btn ${isListening ? 'recording' : ''}`}
            title="Povedz mýtus"
          >
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input" 
            placeholder="Povedz alebo napíš mýtus (napr. Odkiaľ berieš proteín?)"
          />
          <button type="submit" className="text-[var(--color-primary)] p-2 hover:bg-gray-100 rounded-full transition-colors">
             <Search size={20} />
          </button>
          
          {isListening && <span className="listening-text animate-pulse">Počúvam ťa...</span>}
        </form>
      </div>

      {/* Preset Myths Grid */}
      <h3 className="mb-4 text-[var(--color-text-light)] text-center text-sm uppercase tracking-widest font-bold">Najčastejšie mýty</h3>
      <div className="myth-grid">
        {mythsData.map((myth) => (
          <button 
            key={myth.id}
            onClick={() => {
              setActiveMyth(myth);
              setSearchText("");
            }}
            className={`myth-btn ${activeMyth?.id === myth.id ? 'active' : ''}`}
          >
            <span className="myth-icon">{myth.image}</span>
            <span>{myth.query}</span>
          </button>
        ))}
      </div>

      {/* Response Panel */}
      {activeMyth && (
        <div className="glass-panel response-container">
          <div className="response-header">
            <h2 className="myth-statement">
              <Quote className="text-[var(--color-accent)] opacity-50" size={32} />
              "{activeMyth.query}"
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="science-fact"><ShieldCheck className="inline text-[var(--color-secondary)] mb-1 mr-2" size={24}/>{activeMyth.reality}</p>
              
              <div className="sources-box">
                <h4 className="sources-title"><BookOpen size={16}/> Vedecké zdroje:</h4>
                <ul className="sources-list">
                  {activeMyth.sources.map((source, idx) => (
                    <li key={idx}>
                      • <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline font-medium break-words">
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
               {renderChart(activeMyth)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
