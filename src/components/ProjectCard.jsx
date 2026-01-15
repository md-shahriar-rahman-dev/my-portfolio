import { Link } from "react-router-dom";
import "./projectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.name}
        className="project-img"
        loading="lazy"
      />
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.short}</p>
        <div className="tech-list">
          {project.tech &&
            project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
        </div>
        <div className="project-actions">
          <Link className="btn" to={`/projects/${project.id}`}>
            View Details
          </Link>
          <a
            className="btn outline"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </article>
  );
}
