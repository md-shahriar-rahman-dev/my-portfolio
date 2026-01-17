import "./footer.css";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Show/hide footer based on scroll direction
      if (position < scrollPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { text: "Home", href: "#hero" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: "🐙", label: "GitHub", href: "https://github.com/md-shahriar-rahman-dev" },
    { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/md-shahriar-rahman-dev/" },
    { icon: "🐦", label: "Twitter", href: "https://x.com/srtonmoy911" },
    { icon: "📧", label: "Email", href: "mailto:sahriarrahman701@gmail.com" }
  ];

  const resourceLinks = [
    { text: "Resume", href: "/resume.pdf", icon: "📄" },
    { text: "Privacy Policy", href: "#", icon: "🔒" },
    { text: "Terms of Use", href: "#", icon: "📝" },
    { text: "Sitemap", href: "#", icon: "🗺️" }
  ];

  return (
    <footer className={`site-footer ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Scroll to top button */}
      <button 
        className={`scroll-top-btn ${scrollPosition > 500 ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="scroll-icon">↑</span>
      </button>

      {/* Footer Wave Decoration */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(30, 41, 59, 0.8)" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,202.7C672,213,768,235,864,240C960,245,1056,235,1152,224C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-header">
              <h3 className="brand-name">Md. Shahriar Rahman</h3>
              <p className="brand-tagline">MERN Stack Developer</p>
            </div>
            <p className="brand-description">
              Creating exceptional digital experiences with modern web technologies.
              Passionate about building performant, accessible applications.
            </p>
            
            {/* Social Links */}
            <div className="footer-social">
              <h4 className="social-title">Connect with me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <span className="icon-emoji">{social.icon}</span>
                    <span className="icon-tooltip">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="links-title">Quick Links</h4>
            <ul className="footer-links-list">
              {footerLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-resources">
            <h4 className="resources-title">Resources</h4>
            <ul className="resources-list">
              {resourceLinks.map((resource, index) => (
                <li key={index} className="resource-item">
                  <a 
                    href={resource.href} 
                    className="resource-link"
                    target={resource.text === 'Resume' ? '_blank' : '_self'}
                    rel={resource.text === 'Resume' ? 'noopener noreferrer' : ''}
                  >
                    <span className="resource-icon">{resource.icon}</span>
                    <span className="resource-text">{resource.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="newsletter-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get notified about new projects and updates.
            </p>
            <form className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="newsletter-btn">
                  <span className="btn-icon">✉️</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          {/* Copyright */}
          <div className="copyright">
            <p className="copyright-text">
              © {currentYear} <span className="highlight">Md. Shahriar Rahman</span>. All rights reserved.
            </p>
            <p className="copyright-note">
              Made with <span className="heart">❤️</span> using React
            </p>
          </div>

          {/* Additional Info */}
          <div className="footer-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span className="info-text">Dhaka, Bangladesh</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <span className="info-text">UTC+6</span>
            </div>
            <div className="info-item">
              <span className="info-icon">⚡</span>
              <span className="info-text">Available for opportunities</span>
            </div>
          </div>

          {/* Back to Top */}
          <button className="back-to-top" onClick={scrollToTop}>
            <span className="back-icon">↑</span>
            <span className="back-text">Back to Top</span>
          </button>
        </div>

        {/* Footer Credits */}
        <div className="footer-credits">
          <p className="credits-text">
            Built with modern web technologies | Optimized for performance
          </p>
          
        </div>
      </div>
    </footer>
  );
}