import "./experience.css";

const EXPERIENCE_DATA = [
  {
    role: "Junior MERN Stack Developer",
    type: "Self-Learning & Projects",
    period: "2022 - Present",
    duration: "2+ Years",
    location: "Remote / Self-Driven",
    description: "Building full-stack applications using MongoDB, Express, React, and Node.js through personal projects, online courses, and continuous learning.",
    icon: "🚀",
    color: "#7dd3fc",
    achievements: [
      "Developed 15+ full-stack projects using modern web technologies",
      "Built RESTful APIs with Express.js and MongoDB for various applications",
      "Created responsive and interactive UIs with React and Tailwind CSS",
      "Implemented user authentication and authorization systems",
      "Deployed applications using Vercel, Netlify, and cloud platforms"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Git", "REST APIs", "Tailwind CSS"]
  },
  {
    role: "Frontend Development Specialist",
    type: "Freelance & Personal Projects",
    period: "2021 - 2022",
    duration: "1 Year",
    location: "Remote",
    description: "Focused on mastering frontend technologies and building responsive, user-friendly interfaces for various project ideas.",
    icon: "💻",
    color: "#60a5fa",
    achievements: [
      "Created 20+ frontend projects using React and vanilla JavaScript",
      "Mastered responsive design principles and CSS frameworks",
      "Learned state management with Context API and Redux",
      "Optimized web performance and accessibility",
      "Collaborated on open-source projects and coding communities"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "SASS", "Bootstrap", "Responsive Design"]
  },
  {
    role: "Programming Foundations",
    type: "Learning Journey",
    period: "2020 - 2021",
    duration: "1 Year",
    location: "Self-Taught",
    description: "Started the programming journey with fundamental concepts, algorithms, and problem-solving skills.",
    icon: "📚",
    color: "#38bdf8",
    achievements: [
      "Learned programming fundamentals with JavaScript and Python",
      "Solved 200+ problems on platforms like LeetCode and HackerRank",
      "Built foundational understanding of data structures and algorithms",
      "Completed online certifications in web development basics",
      "Contributed to beginner-friendly open-source projects"
    ],
    technologies: ["JavaScript", "Python", "Data Structures", "Algorithms", "Git Basics", "Problem Solving"]
  }
];

const PROJECT_MILESTONES = [
  {
    title: "First Full-Stack Application",
    description: "Built a complete MERN stack application with user authentication and CRUD operations",
    date: "2023",
    icon: "🎯"
  },
  {
    title: "Open Source Contribution",
    description: "Made first significant contribution to an open-source project on GitHub",
    date: "2022",
    icon: "🤝"
  },
  {
    title: "First React Project",
    description: "Created a responsive web application using React and modern hooks",
    date: "2021",
    icon: "⚛️"
  },
  {
    title: "First Deployed Website",
    description: "Successfully deployed a personal portfolio website",
    date: "2020",
    icon: "🚀"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      {/* Background elements */}
      <div className="experience-shapes">
        <div className="shape exp-shape-1"></div>
        <div className="shape exp-shape-2"></div>
        <div className="shape exp-shape-3"></div>
      </div>

      <div className="container">
        <div className="experience-header">
          <h2 className="section-title">
            <span className="title-text">My Development Journey</span>
            <span className="title-icon">💼</span>
          </h2>
          <p className="section-subtitle">
            A passionate Junior MERN Stack Developer on a continuous learning path, building real-world skills through projects
          </p>
        </div>

        <div className="experience-content">
          {/* Main timeline */}
          <div className="experience-timeline">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div className="timeline-card" key={index}>
                <div className="timeline-indicator" style={{ backgroundColor: exp.color }}>
                  <span className="indicator-icon">{exp.icon}</span>
                </div>
                
                <article className="experience-card">
                  <div className="card-header">
                    <div className="role-info">
                      <h3>{exp.role}</h3>
                      <div className="role-type" style={{ backgroundColor: `${exp.color}20`, color: exp.color }}>
                        {exp.type}
                      </div>
                    </div>
                    
                    <div className="duration-info">
                      <div className="duration">
                        <span className="duration-icon">🕒</span>
                        <span className="duration-text">{exp.period} • {exp.duration}</span>
                      </div>
                      <div className="location">
                        <span className="location-icon">📍</span>
                        <span className="location-text">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h4 className="achievements-title">
                        <span className="achievements-icon">🏆</span>
                        Key Achievements & Learning
                      </h4>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="achievement-item">
                            <span className="achievement-marker" style={{ backgroundColor: exp.color }}></span>
                            <span className="achievement-text">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="technologies">
                      <h4 className="technologies-title">
                        <span className="technologies-icon">🛠️</span>
                        Technologies Used
                      </h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            className="tech-tag" 
                            key={idx}
                            style={{ 
                              backgroundColor: `${exp.color}15`,
                              borderColor: exp.color,
                              color: exp.color
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="progress-indicator">
                      <div className="progress-label">Skill Development Level</div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: index === 0 ? '85%' : index === 1 ? '75%' : '65%',
                            backgroundColor: exp.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Project Milestones */}
          <div className="milestones-section">
            <h3 className="milestones-title">
              <span className="milestones-icon">📈</span>
              Project Milestones
            </h3>
            <p className="milestones-subtitle">Significant moments in my development journey</p>
            
            <div className="milestones-grid">
              {PROJECT_MILESTONES.map((milestone, index) => (
                <div className="milestone-card" key={index}>
                  <div className="milestone-icon">{milestone.icon}</div>
                  <div className="milestone-content">
                    <h4>{milestone.title}</h4>
                    <p className="milestone-description">{milestone.description}</p>
                    <div className="milestone-date">
                      <span className="date-icon">📅</span>
                      <span className="date-text">{milestone.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="learning-mindset">
            <div className="mindset-icon">🧠</div>
            <div className="mindset-content">
              <h3>My Development Mindset</h3>
              <p>
                "I believe experience isn't just measured in years at companies, but in 
                problems solved, projects built, and skills mastered. Every line of code 
                I write is a step toward becoming a better developer. I'm passionate about 
                creating solutions that matter and continuously expanding my technical toolkit."
              </p>
              <div className="mindset-highlights">
                <div className="highlight">
                  <span className="highlight-icon">💪</span>
                  <span className="highlight-text">Strong problem-solving skills</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🚀</span>
                  <span className="highlight-text">Fast learner & adaptable</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎯</span>
                  <span className="highlight-text">Project-focused approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Looking Forward */}
          <div className="future-goals">
            <h3>Looking Forward</h3>
            <div className="goals-container">
              <div className="goal-card">
                <div className="goal-icon">🏢</div>
                <div className="goal-content">
                  <h4>First Professional Role</h4>
                  <p>Seeking to apply my skills in a collaborative team environment</p>
                </div>
              </div>
              <div className="goal-card">
                <div className="goal-icon">📱</div>
                <div className="goal-content">
                  <h4>Mobile Development</h4>
                  <p>Expand into React Native and mobile app development</p>
                </div>
              </div>
              <div className="goal-card">
                <div className="goal-icon">☁️</div>
                <div className="goal-content">
                  <h4>Cloud & DevOps</h4>
                  <p>Master cloud services and deployment pipelines</p>
                </div>
              </div>
              <div className="goal-card">
                <div className="goal-icon">🤝</div>
                <div className="goal-content">
                  <h4>Open Source</h4>
                  <p>Contribute to meaningful open-source projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}