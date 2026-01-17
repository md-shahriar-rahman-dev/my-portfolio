import { useParams } from "react-router-dom";
import { getProjectById } from "../data/projects";
import "./projectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = getProjectById(id);
  
  if (!p) {
    return (
      <div className="project-not-found">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">🔍</div>
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist or has been moved.</p>
            <a href="/#projects" className="btn primary-btn">
              Browse All Projects
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Extend project data with additional details if needed
  const project = {
    ...p,
    difficulty: p.difficulty || "Intermediate",
    category: p.category || "Full-Stack",
    status: p.status || "Completed",
    date: p.date || "2023",
    features: p.features || ["User Authentication", "Responsive Design", "CRUD Operations"],
    timeline: p.timeline || "2-4 weeks"
  };

  return (
    <main id="main" className="project-detail">
      {/* Project Hero Section */}
      <section className="project-hero">
        <div className="container">
          <div className="hero-content">
            <div className="project-breadcrumbs">
              <a href="/#projects" className="breadcrumb-link">
                <span className="breadcrumb-icon">←</span>
                Back to Projects
              </a>
            </div>
            
            <div className="hero-header">
              <div className="project-category-badge" data-category={project.category.toLowerCase()}>
                {project.category}
              </div>
              <h1 className="project-title">{project.name}</h1>
              <p className="project-tagline">{project.short}</p>
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-icon">📅</span>
                <span className="meta-text">{project.date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">⚡</span>
                <span className="meta-text">{project.timeline}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🎯</span>
                <span className="meta-text">{project.difficulty}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📊</span>
                <span className="meta-text">{project.status}</span>
              </div>
            </div>

            <div className="hero-actions">
              {project.live && (
                <a href={project.live} className="btn primary-btn" target="_blank" rel="noopener noreferrer">
                  <span className="btn-icon">🚀</span>
                  <span className="btn-text">Live Demo</span>
                </a>
              )}
              {project.repo && (
                <a href={project.repo} className="btn outline-btn" target="_blank" rel="noopener noreferrer">
                  <span className="btn-icon">💻</span>
                  <span className="btn-text">View Code</span>
                </a>
              )}
              <a href="/#contact" className="btn secondary-btn">
                <span className="btn-icon">💬</span>
                <span className="btn-text">Discuss Project</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image Gallery */}
      <section className="project-gallery">
        <div className="container">
          <div className="gallery-main">
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="main-project-image"
              loading="eager"
            />
            <div className="image-overlay-caption">
              <span className="caption-icon">📸</span>
              <span className="caption-text">Main interface of the application</span>
            </div>
          </div>
          
          {/* Additional images if available */}
          {project.images && project.images.length > 0 && (
            <div className="gallery-thumbnails">
              {project.images.slice(0, 3).map((img, index) => (
                <div className="thumbnail-item" key={index}>
                  <img src={img} alt={`${project.name} view ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Content */}
      <div className="project-content-wrapper">
        <div className="container">
          <div className="project-content-grid">
            {/* Main Content Column */}
            <div className="main-content">
              {/* Project Overview */}
              <section className="project-section">
                <h2 className="section-title">
                  <span className="section-icon">📋</span>
                  Project Overview
                </h2>
                <div className="section-content">
                  <p className="project-description">{project.desc}</p>
                </div>
              </section>

              {/* Key Features */}
              <section className="project-section">
                <h2 className="section-title">
                  <span className="section-icon">✨</span>
                  Key Features
                </h2>
                <div className="section-content">
                  <div className="features-grid">
                    {project.features.map((feature, index) => (
                      <div className="feature-card" key={index}>
                        <div className="feature-icon">
                          {index === 0 && "🔐"}
                          {index === 1 && "📱"}
                          {index === 2 && "📊"}
                          {index > 2 && "✅"}
                        </div>
                        <div className="feature-content">
                          <h4>{feature}</h4>
                          <p>Implemented with modern best practices</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Challenges Faced */}
              <section className="project-section">
                <h2 className="section-title">
                  <span className="section-icon">⚡</span>
                  Challenges & Solutions
                </h2>
                <div className="section-content">
                  <div className="challenge-card">
                    <div className="challenge-header">
                      <span className="challenge-icon">🎯</span>
                      <h3>Technical Challenges</h3>
                    </div>
                    <p className="challenge-description">{project.challenges}</p>
                    <div className="solution-section">
                      <h4>How I Solved It:</h4>
                      <ul className="solution-list">
                        <li>Implemented efficient algorithms</li>
                        <li>Used appropriate data structures</li>
                        <li>Optimized database queries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Future Improvements */}
              <section className="project-section">
                <h2 className="section-title">
                  <span className="section-icon">🚀</span>
                  Future Improvements
                </h2>
                <div className="section-content">
                  <div className="improvements-list">
                    <div className="improvement-item">
                      <span className="improvement-icon">📈</span>
                      <div className="improvement-content">
                        <h4>Scalability Enhancements</h4>
                        <p>{project.improvements}</p>
                      </div>
                    </div>
                    <div className="improvement-item">
                      <span className="improvement-icon">🔧</span>
                      <div className="improvement-content">
                        <h4>Additional Features</h4>
                        <p>Implement user analytics dashboard and admin panel</p>
                      </div>
                    </div>
                    <div className="improvement-item">
                      <span className="improvement-icon">⚡</span>
                      <div className="improvement-content">
                        <h4>Performance Optimization</h4>
                        <p>Implement caching and code splitting for better performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Column */}
            <aside className="project-sidebar">
              {/* Tech Stack */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <span className="sidebar-icon">🛠️</span>
                  Tech Stack
                </h3>
                <div className="tech-stack-tags">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index} data-tech={tech.toLowerCase()}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <span className="sidebar-icon">📊</span>
                  Project Info
                </h3>
                <div className="project-info-list">
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">{project.category}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Difficulty</span>
                    <span className="info-value">{project.difficulty}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Timeline</span>
                    <span className="info-value">{project.timeline}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <span className="sidebar-icon">🔗</span>
                  Project Links
                </h3>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🌐</span>
                      <span className="link-text">Live Demo</span>
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} className="project-link repo-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">💻</span>
                      <span className="link-text">Source Code</span>
                    </a>
                  )}
                  {project.docs && (
                    <a href={project.docs} className="project-link docs-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">📚</span>
                      <span className="link-text">Documentation</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Related Skills */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <span className="sidebar-icon">🎯</span>
                  Skills Applied
                </h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <span className="skill-name">React Development</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">API Integration</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">UI/UX Design</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Problem Solving</span>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Project */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <span className="sidebar-icon">📤</span>
                  Share Project
                </h3>
                <div className="share-buttons">
                  <button className="share-btn" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <span className="share-icon">🔗</span>
                    <span className="share-text">Copy Link</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="project-navigation">
        <div className="container">
          <div className="nav-buttons">
            <a href="/#projects" className="nav-btn prev-btn">
              <span className="nav-icon">←</span>
              <span className="nav-text">All Projects</span>
            </a>
            <a href="/#contact" className="nav-btn next-btn">
              <span className="nav-text">Let's Work Together</span>
              <span className="nav-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}