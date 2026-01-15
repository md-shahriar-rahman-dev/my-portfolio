import { useParams } from "react-router-dom";
import { getProjectById } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = getProjectById(id);
  if (!p) return <div className="container">Project not found.</div>;

  return (
    <main id="main" className="project-detail container">
      <h1>{p.name}</h1>
      <img
        src={p.image}
        alt={`${p.name} screenshot`}
        loading="lazy"
        style={{ maxWidth: "100%", borderRadius: 10, marginTop: 8 }}
      />

      <p>
        <strong>Tech Stack:</strong> {p.tech.join(", ")}
      </p>
      <p>{p.desc}</p>

      <p>
        <strong>Live:</strong>{" "}
        <a href={p.live} target="_blank" rel="noreferrer">
          View live project
        </a>
      </p>
      <p>
        <strong>GitHub (client):</strong>{" "}
        <a href={p.repo} target="_blank" rel="noreferrer">
          {p.repo}
        </a>
      </p>

      <h3>Challenges faced</h3>
      <p>{p.challenges}</p>

      <h3>Potential improvements & future plans</h3>
      <p>{p.improvements}</p>
    </main>
  );
}
