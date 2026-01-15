import "./skills.css";

const SKILLS = {
  Frontend: [
    { name: "React", level: 92 },
    { name: "HTML/CSS", level: 96 },
    { name: "TypeScript", level: 74 },
    { name: "Next.js", level: 68 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 60 },
  ],
  Tools: [
    { name: "Git", level: 88 },
    { name: "Vite", level: 82 },
    { name: "ESLint", level: 70 },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading">Skills</h2>
        <p className="skills-intro">
          Categorized skill set with visual indicators for proficiency
          (placeholder values).
        </p>

        <div className="skill-groups">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              {items.map((s) => (
                <div className="skill" key={s.name}>
                  <div className="skill-row">
                    <div className="skill-label">{s.name}</div>
                    <div className="skill-value">{s.level}%</div>
                  </div>

                  <div
                    className="skill-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={s.level}
                    aria-label={`${s.name} proficiency ${s.level} percent`}
                  >
                    <div
                      className="skill-fill"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
