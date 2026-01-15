import "./skills.css";

const SKILLS = {
  Frontend: [
    { name: "React", level: 92, icon: "⚛️", color: "#61DAFB" },
    { name: "HTML/CSS", level: 96, icon: "🎨", color: "#E34F26" },
    { name: "JavaScript", level: 90, icon: "🟨", color: "#F7DF1E" },
    { name: "TypeScript", level: 74, icon: "📘", color: "#3178C6" },
    { name: "Next.js", level: 68, icon: "▲", color: "#000000" },
    { name: "Redux", level: 75, icon: "🔄", color: "#764ABC" },
  ],
  Backend: [
    { name: "Node.js", level: 75, icon: "🟢", color: "#339933" },
    { name: "Express", level: 70, icon: "🚂", color: "#000000" },
    { name: "MongoDB", level: 60, icon: "🍃", color: "#47A248" },
    { name: "Firebase", level: 65, icon: "🔥", color: "#FFCA28" },
    { name: "Python", level: 55, icon: "🐍", color: "#3776AB" },
    { name: "REST API", level: 80, icon: "🔗", color: "#FF6B6B" },
  ],
  Tools: [
    { name: "Git", level: 88, icon: "🐙", color: "#F1502F" },
    { name: "Vite", level: 82, icon: "⚡", color: "#646CFF" },
    { name: "ESLint", level: 70, icon: "📋", color: "#4B32C3" },
    { name: "Figma", level: 65, icon: "🎯", color: "#F24E1E" },
    { name: "Docker", level: 50, icon: "🐳", color: "#2496ED" },
    { name: "VS Code", level: 95, icon: "💻", color: "#007ACC" },
  ],
  "In Learning": [
    { name: "React Native", level: 45, icon: "📱", color: "#61DAFB" },
    { name: "GraphQL", level: 40, icon: "📊", color: "#E10098" },
    { name: "AWS", level: 30, icon: "☁️", color: "#FF9900" },
    { name: "Tailwind CSS", level: 60, icon: "🌀", color: "#38B2AC" },
    { name: "Three.js", level: 35, icon: "✨", color: "#000000" },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="skills-header">
          <h2 id="skills-heading" className="section-title">
            <span className="title-text">Tech Stack & Skills</span>
            <span className="title-icon">🛠️</span>
          </h2>
          <p className="skills-intro">
            A comprehensive overview of my technical expertise, categorized for clarity.
            Proficiency levels represent experience and comfort with each technology.
          </p>
        </div>

        <div className="skill-groups">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <div className="group-header">
                <h3 className="group-title">
                  <span className="group-icon">
                    {group === "Frontend" && "💻"}
                    {group === "Backend" && "⚙️"}
                    {group === "Tools" && "🧰"}
                    {group === "In Learning" && "📚"}
                  </span>
                  {group}
                </h3>
                <div className="group-count">{items.length} skills</div>
              </div>
              
              <div className="skills-container">
                {items.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-header">
                      <div className="skill-icon" style={{ backgroundColor: `${skill.color}20`, borderColor: skill.color }}>
                        <span className="icon-emoji">{skill.icon}</span>
                      </div>
                      <div className="skill-info">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-level-text">
                          {skill.level >= 80 ? "Advanced" : 
                           skill.level >= 60 ? "Intermediate" : 
                           skill.level >= 40 ? "Learning" : "Beginner"}
                        </div>
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <div className="skill-progress-header">
                        <span className="skill-label">Proficiency</span>
                        <span className="skill-value">
                          {skill.level}%
                          {skill.level >= 90 && " 🎯"}
                          {skill.level >= 70 && skill.level < 90 && " ⚡"}
                          {skill.level < 70 && " 📈"}
                        </span>
                      </div>
                      
                      <div className="skill-bar-container">
                        <div
                          className="skill-bar"
                          role="progressbar"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow={skill.level}
                          aria-label={`${skill.name} proficiency ${skill.level} percent`}
                        >
                          <div
                            className="skill-fill"
                            style={{ 
                              width: `${skill.level}%`,
                              background: skill.color
                            }}
                          />
                          <div className="skill-dots">
                            {[...Array(10)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`skill-dot ${skill.level > i * 10 ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="skill-footer">
                      {skill.level >= 80 && (
                        <span className="skill-tag expert">Expert</span>
                      )}
                      {skill.level >= 60 && skill.level < 80 && (
                        <span className="skill-tag proficient">Proficient</span>
                      )}
                      {skill.level < 60 && (
                        <span className="skill-tag learning">Learning</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🏆</div>
            <div className="summary-content">
              <h4>Continuous Growth</h4>
              <p>Always expanding my toolkit with new technologies and best practices</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚡</div>
            <div className="summary-content">
              <h4>Fast Adaptation</h4>
              <p>Quick to learn and apply new frameworks based on project needs</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <h4>Specialized Focus</h4>
              <p>Deep expertise in React ecosystem with broadening backend knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}