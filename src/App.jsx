import { useState, useEffect } from "react"
import { QUESTIONS, CATEGORIES, getByCategorie, shuffle } from "./data/questions"
import "./App.css"

const CATEGORY_LABELS = {
  "all": "Tout",
  "Valuation": "Valuation",
  "DCF": "DCF",
  "WACC": "WACC",
  "Accounting": "Accounting",
  "LBO": "LBO",
  "M&A": "M&A",
  "ECM / DCM": "ECM / DCM",
  "Fit": "Fit",
  "Brainteasers": "Brainteasers",
}

function Sidebar({ active, setActive }) {
  const navItems = [
    { id: "flash", label: "Flashcards", icon: "📇" },
    { id: "stats", label: "Progression", icon: "📊" },
  ]
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-name">PrepEdge</div>
        <div className="brand-sub">IB & PE interview prep</div>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-label">Modes</div>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? "active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="footer-count">{QUESTIONS.length} questions</div>
        <div className="footer-sub">issues de tes PDFs</div>
      </div>
    </div>
  )
}

function FlashcardMode() {
  const [selectedCat, setSelectedCat] = useState("all")
  const [deck, setDeck] = useState([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [scores, setScores] = useState({ wrong: 0, hard: 0, good: 0 })
  const [finished, setFinished] = useState(false)
  const [selectedDiff, setSelectedDiff] = useState("all")

  const allCats = ["all", ...CATEGORIES]
  const difficulties = ["all", "fondamental", "intermédiaire", "avancé"]

  useEffect(() => {
    buildDeck()
  }, [selectedCat, selectedDiff])

  function buildDeck() {
    let cards = getByCategorie(selectedCat)
    if (selectedDiff !== "all") cards = cards.filter(q => q.difficulty === selectedDiff)
    setDeck(shuffle(cards))
    setIndex(0)
    setFlipped(false)
    setFinished(false)
    setScores({ wrong: 0, hard: 0, good: 0 })
  }

  function flip() { setFlipped(true) }

  function next(result) {
    setScores(s => ({ ...s, [result]: s[result] + 1 }))
    if (index + 1 >= deck.length) {
      setFinished(true)
    } else {
      setIndex(i => i + 1)
      setFlipped(false)
    }
  }

  const card = deck[index]
  const progress = deck.length > 0 ? Math.round(((index) / deck.length) * 100) : 0

  if (finished) {
    return (
      <div className="content">
        <div className="finish-screen">
          <div className="finish-icon">✓</div>
          <h2 className="finish-title">Session terminée</h2>
          <p className="finish-sub">{deck.length} cartes passées en revue</p>
          <div className="finish-scores">
            <div className="fscore wrong">
              <div className="fscore-num">{scores.wrong}</div>
              <div className="fscore-label">À revoir</div>
            </div>
            <div className="fscore hard">
              <div className="fscore-num">{scores.hard}</div>
              <div className="fscore-label">Difficile</div>
            </div>
            <div className="fscore good">
              <div className="fscore-num">{scores.good}</div>
              <div className="fscore-label">Maîtrisé</div>
            </div>
          </div>
          <button className="btn-primary" onClick={buildDeck}>Recommencer</button>
        </div>
      </div>
    )
  }

  return (
    <div className="content">
      <div className="filters-row">
        <div className="filter-group">
          <div className="filter-label">Catégorie</div>
          <div className="pills">
            {allCats.map(cat => (
              <button
                key={cat}
                className={`pill ${selectedCat === cat ? "active" : ""}`}
                onClick={() => setSelectedCat(cat)}
              >
                {CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-label">Niveau</div>
          <div className="pills">
            {difficulties.map(d => (
              <button
                key={d}
                className={`pill ${selectedDiff === d ? "active" : ""}`}
                onClick={() => setSelectedDiff(d)}
              >
                {d === "all" ? "Tous" : d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {deck.length === 0 ? (
        <div className="empty-state">Aucune carte pour cette sélection.</div>
      ) : (
        <>
          <div className="progress-row">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: progress + "%" }} />
            </div>
            <div className="progress-text">{index + 1} / {deck.length}</div>
          </div>

          <div className="card-area">
            <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={!flipped ? flip : undefined}>
              <div className="card-meta">
                <span className="card-cat">{card.cat}</span>
                <span className={`card-diff diff-${card.difficulty}`}>{card.difficulty}</span>
              </div>
              <div className="card-question">{card.q}</div>

              {!flipped && (
                <div className="card-hint">Cliquer pour révéler la réponse</div>
              )}

              {flipped && (
                <div className="card-answer">
                  {card.a.split("\n").map((line, i) => (
                    <p key={i} className={line.trim() === "" ? "spacer" : ""}>{line}</p>
                  ))}
                </div>
              )}
            </div>

            {flipped && (
              <div className="card-actions">
                <button className="card-btn btn-wrong" onClick={() => next("wrong")}>
                  ✕ À revoir
                </button>
                <button className="card-btn btn-hard" onClick={() => next("hard")}>
                  − Difficile
                </button>
                <button className="card-btn btn-good" onClick={() => next("good")}>
                  ✓ Maîtrisé
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function StatsMode() {
  const catCounts = CATEGORIES.map(cat => ({
    cat,
    count: QUESTIONS.filter(q => q.cat === cat).length
  }))

  const diffCounts = ["fondamental", "intermédiaire", "avancé"].map(d => ({
    diff: d,
    count: QUESTIONS.filter(q => q.difficulty === d).length
  }))

  return (
    <div className="content">
      <div className="stats-grid">
        <div className="stat-card big">
          <div className="stat-num">{QUESTIONS.length}</div>
          <div className="stat-label">Questions au total</div>
        </div>
        <div className="stat-card big">
          <div className="stat-num">{CATEGORIES.length}</div>
          <div className="stat-label">Catégories</div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-title">Répartition par catégorie</div>
        <div className="bar-list">
          {catCounts.map(({ cat, count }) => (
            <div key={cat} className="bar-row">
              <div className="bar-label">{cat}</div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: Math.round((count / QUESTIONS.length) * 100) + "%" }} />
              </div>
              <div className="bar-count">{count}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-title">Répartition par niveau</div>
        <div className="bar-list">
          {diffCounts.map(({ diff, count }) => (
            <div key={diff} className="bar-row">
              <div className="bar-label">{diff}</div>
              <div className="bar-track">
                <div className={`bar-fill diff-fill-${diff}`} style={{ width: Math.round((count / QUESTIONS.length) * 100) + "%" }} />
              </div>
              <div className="bar-count">{count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeMode, setActiveMode] = useState("flash")

  const topbarInfo = {
    flash: { title: "Flashcards techniques", sub: "Valuation · DCF · WACC · Accounting · LBO · M&A · Fit" },
    stats: { title: "Progression", sub: "Vue d'ensemble de ta banque de questions" },
  }

  return (
    <div className="app-layout">
      <Sidebar active={activeMode} setActive={setActiveMode} />
      <div className="main-area">
        <div className="topbar">
          <div>
            <div className="topbar-title">{topbarInfo[activeMode].title}</div>
            <div className="topbar-sub">{topbarInfo[activeMode].sub}</div>
          </div>
        </div>
        {activeMode === "flash" && <FlashcardMode />}
        {activeMode === "stats" && <StatsMode />}
      </div>
    </div>
  )
}
