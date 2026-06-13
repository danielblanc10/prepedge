import { useState } from "react"
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

const CATEGORY_DESCRIPTIONS = {
  "Valuation": "Multiples, comparables, bridge EV / Equity",
  "DCF": "Free cash flows, WACC, valeur terminale",
  "WACC": "Cost of equity, bêta, CAPM",
  "Accounting": "Etats financiers, BFR, EBITDA, IFRS",
  "LBO": "Structure, leviers, TRI, build-up",
  "M&A": "Process sell-side, IM, bridge, SPA",
  "ECM / DCM": "IPO, obligations, marchés de capitaux",
  "Fit": "Motivation, parcours, mises en situation",
  "Brainteasers": "Logique et calcul mental",
}

function Sidebar({ active, setActive }) {
  const navItems = [
    { id: "home", label: "Accueil", icon: "home" },
    { id: "flash", label: "Flashcards", icon: "cards" },
    { id: "stats", label: "Progression", icon: "chart-bar" },
  ]
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-name">PrepEdge</div>
        <div className="brand-sub">IB & PE interview prep</div>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-label">Navigation</div>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? "active" : ""}`}
            onClick={() => setActive(item.id)}
          >
            <i className={`nav-icon ti ti-${item.icon}`} aria-hidden="true"></i>
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

function HomePage({ setActiveMode }) {
  const catCounts = CATEGORIES.map(cat => ({
    cat,
    count: QUESTIONS.filter(q => q.cat === cat).length
  })).sort((a, b) => b.count - a.count)

  return (
    <div className="content home-content">
      <div className="hero">
        <div className="hero-eyebrow">Préparation entretiens IB & PE</div>
        <h1 className="hero-title">Maîtrise chaque<br />question d'entretien.</h1>
        <p className="hero-sub">
          {QUESTIONS.length} flashcards techniques et fit, issues de cours, de guides de référence,
          et de comptes rendus d'entretiens réels (UBS, Stifel, Clairfield, Oaklins).
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setActiveMode("flash")}>
            Commencer une session
            <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </button>
          <button className="btn-ghost" onClick={() => setActiveMode("stats")}>
            Voir la progression
          </button>
        </div>
      </div>

      <div className="home-stats-row">
        <div className="home-stat">
          <div className="home-stat-num">{QUESTIONS.length}</div>
          <div className="home-stat-label">Questions</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-num">{CATEGORIES.length}</div>
          <div className="home-stat-label">Catégories</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-num">3</div>
          <div className="home-stat-label">Niveaux de difficulté</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-num">100%</div>
          <div className="home-stat-label">Contenu vérifié</div>
        </div>
      </div>

      <div className="home-section-label">Explorer par catégorie</div>
      <div className="category-grid">
        {catCounts.map(({ cat, count }) => (
          <button
            key={cat}
            className="category-card"
            onClick={() => setActiveMode("flash", cat)}
          >
            <div className="category-card-top">
              <div className="category-name">{CATEGORY_LABELS[cat] || cat}</div>
              <div className="category-count">{count}</div>
            </div>
            <div className="category-desc">{CATEGORY_DESCRIPTIONS[cat] || ""}</div>
          </button>
        ))}
      </div>

      <div className="home-section-label">Sources</div>
      <div className="sources-row">
        <div className="source-pill">100 Investment Banking Technical Questions — Financial Edge</div>
        <div className="source-pill">La bible des entretiens en finance — Audencia</div>
        <div className="source-pill">Entretiens M&A — comptes rendus réels</div>
        <div className="source-pill">Edge Technical — notes de cours valorisation</div>
      </div>
    </div>
  )
}

function FlashcardMode({ initialCategory }) {
  const [selectedCat, setSelectedCat] = useState(initialCategory || "all")
  const [deck, setDeck] = useState([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [scores, setScores] = useState({ wrong: 0, hard: 0, good: 0 })
  const [finished, setFinished] = useState(false)
  const [selectedDiff, setSelectedDiff] = useState("all")
  const [initialized, setInitialized] = useState(false)

  const allCats = ["all", ...CATEGORIES]
  const difficulties = ["all", "fondamental", "intermédiaire", "avancé"]

  if (!initialized) {
    buildDeckFor(selectedCat, selectedDiff)
    setInitialized(true)
  }

  function buildDeckFor(cat, diff) {
    let cards = getByCategorie(cat)
    if (diff !== "all") cards = cards.filter(q => q.difficulty === diff)
    setDeck(shuffle(cards))
    setIndex(0)
    setFlipped(false)
    setFinished(false)
    setScores({ wrong: 0, hard: 0, good: 0 })
  }

  function onCatChange(cat) {
    setSelectedCat(cat)
    buildDeckFor(cat, selectedDiff)
  }

  function onDiffChange(diff) {
    setSelectedDiff(diff)
    buildDeckFor(selectedCat, diff)
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
          <div className="finish-icon">
            <i className="ti ti-check" aria-hidden="true"></i>
          </div>
          <h2 className="finish-title">Session terminée</h2>
          <p className="finish-sub">{deck.length} cartes passées en revue</p>
          <div className="finish-scores">
            <div className="fscore wrong">
              <div className="fscore-num">{scores.wrong}</div>
              <div className="fscore-label">A revoir</div>
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
          <button className="btn-primary" onClick={() => buildDeckFor(selectedCat, selectedDiff)}>
            Recommencer
          </button>
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
                onClick={() => onCatChange(cat)}
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
                onClick={() => onDiffChange(d)}
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
                  <i className="ti ti-x" aria-hidden="true"></i> A revoir
                </button>
                <button className="card-btn btn-hard" onClick={() => next("hard")}>
                  <i className="ti ti-minus" aria-hidden="true"></i> Difficile
                </button>
                <button className="card-btn btn-good" onClick={() => next("good")}>
                  <i className="ti ti-check" aria-hidden="true"></i> Maîtrisé
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
  const [activeMode, setActiveMode] = useState("home")
  const [pendingCategory, setPendingCategory] = useState("all")

  function navigate(mode, category) {
    if (category) setPendingCategory(category)
    else if (mode === "flash") setPendingCategory("all")
    setActiveMode(mode)
  }

  const topbarInfo = {
    home: { title: "PrepEdge", sub: "Ton hub de préparation IB & PE" },
    flash: { title: "Flashcards techniques", sub: "Valuation · DCF · WACC · Accounting · LBO · M&A · Fit" },
    stats: { title: "Progression", sub: "Vue d'ensemble de ta banque de questions" },
  }

  return (
    <div className="app-layout">
      <Sidebar active={activeMode} setActive={navigate} />
      <div className="main-area">
        <div className="topbar">
          <div>
            <div className="topbar-title">{topbarInfo[activeMode].title}</div>
            <div className="topbar-sub">{topbarInfo[activeMode].sub}</div>
          </div>
        </div>
        {activeMode === "home" && <HomePage setActiveMode={navigate} />}
        {activeMode === "flash" && <FlashcardMode key={pendingCategory} initialCategory={pendingCategory} />}
        {activeMode === "stats" && <StatsMode />}
      </div>
    </div>
  )
}