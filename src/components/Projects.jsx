import ProjectCard from "./ProjectCard";
import "./projects.css";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  // Categories for filtering
  const categories = ["All", "Full-Stack", "Frontend", "React", "Node.js", "MongoDB"];
  
  // Featured projects (first 2-3 projects)
  const featuredProjects = PROJECTS.slice(0, 3);
  const otherProjects = PROJECTS.slice(3);

  return (
    <section id="projects" className="projects">
      {/* Background decorative elements */}
      <div className="projects-shapes">
        <div className="shape proj-shape-1"></div>
        <div className="shape proj-shape-2"></div>
        <div className="shape proj-shape-3"></div>
      </div>

      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">
            <span className="title-text">Featured Projects</span>
            <span className="title-icon">🚀</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my work – from full-stack applications to interactive frontend experiences
          </p>
          
          {/* Project stats */}
          <div className="projects-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Hands-on Code</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-number">MERN</div>
              <div className="stat-label">Stack Focus</div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="featured-projects">
          <h3 className="featured-title">
            <span className="featured-icon">⭐</span>
            Spotlight Projects
          </h3>
          <div className="featured-grid">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} featured={true} />
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div className="all-projects">
          <div className="projects-header-secondary">
            <h3>All Projects</h3>
            <div className="project-counter">
              <span className="counter-number">{PROJECTS.length}</span>
              <span className="counter-label">Spotlight Projects</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="category-filters">
            <div className="filters-label">Filter by technology:</div>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button key={category} className="filter-btn active">
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {/* <div className="project-grid">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div> */}

        
          {/* <div className="load-more-container">
            <button className="load-more-btn">
              <span className="btn-icon">🔍</span>
              <span className="btn-text">View More Projects</span>
            </button>
          </div> */}
        </div>

        {/* Project Showcase Info */}
        <div className="projects-info">
          <div className="info-card">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <h4>Project Philosophy</h4>
              <p>Each project focuses on solving real problems, implementing best practices, and creating user-friendly experiences.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <div className="info-content">
              <h4>Development Approach</h4>
              <p>Modern tech stack, clean code architecture, responsive design, and performance optimization.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <div className="info-content">
              <h4>Learning Focus</h4>
              <p>Every project is an opportunity to learn new technologies and improve development skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}