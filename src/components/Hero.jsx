import "./hero.css";
import placeholderProfile from "../assets/my-photo.png";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 id="hero-heading" className="hero-title">
            Hi, I'm <span className="name">Md. Shahriar Rahman</span>
          </h1>
          <p className="designation">Frontend Developer</p>
          <p className="hero-desc">
            I build modern, accessible web applications focused on performance
            and delightful UX.
          </p>

          <div className="hero-actions">
            <a
              className="btn primary"
              href="/resume.pdf"
              download="Md_Shahriar_Rahman_Resume.pdf"
              aria-label="Download resume"
            >
              Download Resume
            </a>
            <a
              className="btn outline"
              href="#projects"
              aria-label="View projects"
            >
              View Projects
            </a>
          </div>

          <div className="socials" aria-label="Social links">
            <a
              className="social-link"
              href="https://github.com/md-shahriar-rahman-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="social-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.39.2 2.42.1 2.67.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10 10 0 0012 2z"
                  fill="currentColor"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              className="social-link"
              href="https://linkedin.com/in/placeholder"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="social-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.2h.05c.54-1 1.86-2.2 3.83-2.2 4.1 0 4.86 2.7 4.86 6.2V24h-4v-7.3c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.9-2.79 3.86V24h-4V8z"
                  fill="currentColor"
                />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              className="social-link"
              href="https://twitter.com/placeholder"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="social-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.15 12.15 0 013 4.79a4.28 4.28 0 001.32 5.71c-.66-.02-1.28-.2-1.82-.5v.05a4.28 4.28 0 003.43 4.19c-.6.16-1.23.2-1.88.08a4.28 4.28 0 003.99 2.97A8.58 8.58 0 012 19.54a12.09 12.09 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.64 8.64 0 0022.46 6z"
                  fill="currentColor"
                />
              </svg>
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={placeholderProfile}
            alt="Md. Shahriar Rahman profile"
            className="profile"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
