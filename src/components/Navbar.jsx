import { useState, useRef, useEffect } from "react";
import "./navbar.css";

const SECTIONS = ["hero", "about", "skills", "education", "experience", "projects", "contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const navRef = useRef(null);

  const close = () => setOpen(false);

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // update active state and close mobile menu
      setActive(id)
      close()
      history.replaceState(null, '', '#'+id)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 })

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav-header">
        <div className="nav-container">
          <div className="brand">
            <a href="#hero" className="brand-link" onClick={(e)=>handleNavClick(e,'hero')}>Md. Shahriar Rahman</a>
          </div>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span className="hamburger" aria-hidden>
              ☰
            </span>
          </button>

          <nav
            id="primary-navigation"
            ref={navRef}
            className={`nav ${open ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#hero" className={`nav-link ${active==='hero'? 'active':''}`} onClick={(e)=>handleNavClick(e,'hero')}>Home</a>
            <a href="#projects" className={`nav-link ${active==='projects'? 'active':''}`} onClick={(e)=>handleNavClick(e,'projects')}>Projects</a>
            <a href="#about" className={`nav-link ${active==='about'? 'active':''}`} onClick={(e)=>handleNavClick(e,'about')}>About</a>
            <a href="#contact" className={`nav-link ${active==='contact'? 'active':''}`} onClick={(e)=>handleNavClick(e,'contact')}>Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}
