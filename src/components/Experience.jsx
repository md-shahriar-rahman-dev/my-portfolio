import "./experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="exp-list">
          <article className="exp-item">
            <h3>Frontend Developer</h3>
            <p className="exp-meta">Acme Inc — Jan 2024 - Present</p>
            <ul>
              <li>
                Built reusable React components and a design system used across
                projects.
              </li>
              <li>
                Improved bundle size and load time by optimizing assets and code
                splitting.
              </li>
            </ul>
          </article>

          <article className="exp-item">
            <h3>Junior Web Developer</h3>
            <p className="exp-meta">Startup XYZ — Jun 2022 - Dec 2023</p>
            <ul>
              <li>
                Implemented responsive UI and client-side routing for the main
                product.
              </li>
              <li>
                Collaborated with designers to refine UX and accessibility.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
