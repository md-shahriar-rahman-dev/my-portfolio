import { useState, useRef, useEffect } from "react";
import "./navbar.css";

const SECTIONS = ["hero", "about", "skills", "education", "experience", "projects", "contact"];
const NAV_LINKS = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👨‍💻" },
  { id: "skills", label: "Skills", icon: "🛠️" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "contact", label: "Contact", icon: "💬" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const close = () => setOpen(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
      close();
      history.replaceState(null, '', '#' + id);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0.25 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && 
          !event.target.closest('.nav-toggle')) {
        close();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`nav-header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <div className="brand">
            <a 
              href="#hero" 
              className="brand-link" 
              onClick={(e) => handleNavClick(e, 'hero')}
              aria-label="Go to home"
            >
              <div className="brand-content">
                <div className="brand-icon">👨‍💻</div>
                <div className="brand-text">
                  <span className="brand-name">Shahriar</span>
                  <span className="brand-title">MERN Developer</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            id="primary-navigation"
            ref={navRef}
            className={`nav ${open ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <ul className="nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${active === link.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    aria-current={active === link.id ? 'page' : undefined}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-label">{link.label}</span>
                    <span className="nav-indicator"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume Button */}
            <div className="nav-actions">
              <a
                href="/resume.pdf"
                className="resume-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
              >
                <span className="resume-icon">📄</span>
                <span className="resume-text">Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
          >
            <div className={`hamburger ${open ? "open" : ""}`}>
              <span className="line line-1" aria-hidden></span>
              <span className="line line-2" aria-hidden></span>
              <span className="line line-3" aria-hidden></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          {open && (
            <div className="nav-overlay" onClick={close} aria-hidden="true"></div>
          )}
        </div>
      </header>
    </>
  );
}