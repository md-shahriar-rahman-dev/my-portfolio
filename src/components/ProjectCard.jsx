import { Link } from "react-router-dom";
import "./projectCard.css";

export default function ProjectCard({ project, featured = false }) {
  const {
    id,
    name,
    short,
    image,
    tech = [],
    live,
    github,
    category = "Full-Stack",
    status = "Completed",
    difficulty = "Intermediate"
  } = project;

  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      {/* Card Image with Overlay */}
      <div className="project-image-container">
        <div className="project-img-wrapper">
          <img
            src={image}
            alt={name}
            className="project-img"
            loading="lazy"
          />
          <div className="project-img-overlay">
            <div className="overlay-content">
              <div className="quick-links">
                {github && (
                  <a
                    href={github}
                    className="quick-link github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                  >
                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {live && (
                  <a
                    href={live}
                    className="quick-link live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo"
                  >
                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </a>
                )}
              </div>
              <Link to={`/projects/${id}`} className="details-btn">
                <span className="details-icon">🔍</span>
                <span className="details-text">Quick View</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Project Badges */}
        <div className="project-badges">
          <span className="project-category" data-category={category.toLowerCase()}>
            {category}
          </span>
          <span className="project-status" data-status={status.toLowerCase()}>
            <span className="status-dot"></span>
            {status}
          </span>
          {featured && (
            <span className="featured-badge">
              <span className="featured-icon">⭐</span>
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{name}</h3>
          <span className="project-difficulty" data-difficulty={difficulty.toLowerCase()}>
            {difficulty}
          </span>
        </div>
        
        <p className="project-description">{short}</p>
        
        {/* Tech Stack */}
        <div className="tech-section">
          <div className="tech-label">Tech Stack</div>
          <div className="tech-list">
            {tech.slice(0, 5).map((t, index) => (
              <span key={t} className="tech-tag" title={t}>
                {t}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="tech-tag more-tag" title={`${tech.length - 5} more technologies`}>
                +{tech.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Project Metrics */}
        <div className="project-metrics">
          <div className="metric">
            <span className="metric-icon">⚡</span>
            <span className="metric-text">Full-Stack</span>
          </div>
          <div className="metric">
            <span className="metric-icon">🎯</span>
            <span className="metric-text">MERN</span>
          </div>
          <div className="metric">
            <span className="metric-icon">📱</span>
            <span className="metric-text">Responsive</span>
          </div>
        </div>

        {/* Project Actions */}
        <div className="project-actions">
          <Link 
            className="btn primary-btn" 
            to={`/projects/${id}`}
            aria-label={`View details of ${name}`}
          >
            <span className="btn-icon">📖</span>
            <span className="btn-text">View Details</span>
          </Link>
          
          {live && (
            <a
              className="btn outline-btn"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${name}`}
            >
              <span className="btn-icon">🚀</span>
              <span className="btn-text">Live Demo</span>
            </a>
          )}
          
          {github && (
            <a
              className="btn secondary-btn"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code of ${name}`}
            >
              <span className="btn-icon">💻</span>
              <span className="btn-text">Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}