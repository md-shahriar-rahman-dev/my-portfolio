import "./hero.css";
import placeholderProfile from "../assets/my-photo.png";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      {/* Animated background elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* LEFT CONTENT */}
          <div className="hero-content">
            {/* Greeting */}
            <div className="greeting-container">
              <span className="greeting-wave">👋</span>
              <span className="greeting-text">Hello there! I'm</span>
            </div>

            {/* Name */}
            <h1 id="hero-heading" className="hero-title">
              Md. Shahriar Rahman
            </h1>

            {/* Description */}
            <p className="hero-desc">
              I craft{" "}
              <span className="highlight-text">
                exceptional digital experiences
              </span>{" "}
              with modern web technologies. Passionate about creating
              <span className="highlight-text">
                {" "}
                performant, accessible,
              </span>{" "}
              and
              <span className="highlight-text"> user-centered</span>{" "}
              applications that make an impact.
            </p>

            {/* Stats */}
            <div className="hero-stats">
  <div className="stat">
    <div className="stat-number">50+</div>
    <div className="stat-label">Projects</div>
  </div>

  <div className="stat-divider"></div>

  <div className="stat">
    <div className="stat-number">∞</div>
    <div className="stat-label">Learning</div>
  </div>

  <div className="stat-divider"></div>

  <div className="stat">
    <div className="stat-number">100%</div>
    <div className="stat-label">Commitment</div>
  </div>
</div>


            {/* Actions */}
            <div className="hero-actions">
              <a
                className="btn primary"
                href="/resume.pdf"
                download="Md_Shahriar_Rahman_Resume.pdf"
              >
                <span className="btn-icon">📄</span>
                <span className="btn-text">Download Resume</span>
              </a>

              <a className="btn outline" href="#projects">
                <span className="btn-icon">🚀</span>
                <span className="btn-text">View Projects</span>
              </a>

              <a className="btn secondary" href="#contact">
                <span className="btn-icon">💬</span>
                <span className="btn-text">Let's Talk</span>
              </a>
            </div>

            {/* Socials */}
            {/* Social links */}
<div className="socials" aria-label="Social links">
  <div className="socials-label">Connect with me</div>

  <div className="socials-container">
    {/* GitHub */}
    <a
      className="social-link"
      href="https://github.com/md-shahriar-rahman-dev"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <div className="social-icon-wrapper">
        <svg
          className="social-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10 10 0 0012 2z" />
        </svg>
      </div>
      <span className="social-tooltip"></span>
    </a>

    {/* LinkedIn */}
    <a
      className="social-link"
      href="https://www.linkedin.com/in/md-shahriar-rahman-dev/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <div className="social-icon-wrapper">
        <svg
          className="social-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </div>
      <span className="social-tooltip"></span>
    </a>

    {/* Twitter */}
    <a
      className="social-link"
      href="https://x.com/srtonmoy911"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
    >
      <div className="social-icon-wrapper">
        <svg
          className="social-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <span className="social-tooltip"></span>
    </a>

    {/* Email */}
    <a
      className="social-link"
      href="sahriarrahman701@gmail.com"
      aria-label="Email"
    >
      <div className="social-icon-wrapper">
        <svg
          className="social-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </div>
      <span className="social-tooltip"></span>
    </a>
  </div>
</div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image">
            <div className="profile-container">
              <div className="profile-frame">
                <img
                  src={placeholderProfile}
                  alt="Md. Shahriar Rahman profile"
                  className="profile"
                />
                <div className="profile-decoration"></div>
              </div>

              {/* Tech badges */}
              <div className="tech-badge badge-1">React</div>
              <div className="tech-badge badge-2">JS</div>
              <div className="tech-badge badge-3">CSS3</div>
              <div className="tech-badge badge-4">Next.js</div>

              {/* Designation under profile */}
              <div className="profile-designation">
                <div className="designation-container">
                  <div className="designation-wrapper">
                    <span className="designation">Frontend Developer</span>
                    <span className="designation-sub">UI/UX Enthusiast</span>
                    <span className="designation-sub">Problem Solver</span>
                  </div>
                  <div className="designation-cursor"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll down</div>
        <div className="scroll-arrow">
          <div className="scroll-arrow-line"></div>
          <div className="scroll-arrow-line"></div>
        </div>
      </div>
    </section>
  );
}
