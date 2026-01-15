import "./education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="edu-list">
          <article className="edu-item">
            <h3>B.Sc. in Computer Science</h3>
            <p className="edu-meta">University of Example — 2018 - 2022</p>
            <p>
              Studied software engineering fundamentals, algorithms, databases,
              and web development. Focused on frontend engineering and
              usability.
            </p>
          </article>

          <article className="edu-item">
            <h3>Full-Stack Web Development Bootcamp</h3>
            <p className="edu-meta">Example Bootcamp — 2023</p>
            <p>
              Intensive bootcamp covering MERN stack, testing, deployment, and
              collaboration practices.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
