import ProjectCard from "./ProjectCard";
import "./projects.css";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
