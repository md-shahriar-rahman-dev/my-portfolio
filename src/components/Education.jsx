import "./education.css";

const EDUCATION_DATA = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Northern University Bangladesh",
    period: "2021 - Present",
    location: "Dhaka, Bangladesh",
    description: "Currently pursuing my undergraduate degree with a focus on Software Engineering, Algorithms, and Web Technologies. Specializing in modern web development and user-centered design principles.",
    cgpa: "3.75/4.00 (Current)",
    courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"],
    icon: "🎓",
    color: "#7dd3fc"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Notre Dame College, Dhaka",
    period: "2018 - 2020",
    location: "Dhaka, Bangladesh",
    description: "Completed higher secondary education in Science with distinction. Developed strong foundation in mathematics and physics, which laid the groundwork for computational thinking.",
    gpa: "5.00/5.00",
    courses: ["Mathematics", "Physics", "Chemistry", "ICT"],
    icon: "📚",
    color: "#60a5fa"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School & College",
    period: "2008 - 2018",
    location: "Dhaka, Bangladesh",
    description: "Completed secondary education with outstanding results. Developed initial interest in computer science through basic programming courses.",
    gpa: "5.00/5.00",
    courses: ["General Science", "Mathematics", "Bangla", "English"],
    icon: "🏫",
    color: "#38bdf8"
  },
  {
    degree: "Web Development Certification",
    institution: "Online Platform (Self-Learning)",
    period: "2020 - Present",
    location: "Remote",
    description: "Continuously upgrading skills through online courses and certifications in modern web technologies including React, Node.js, and cloud platforms.",
    achievements: ["React Development", "Advanced JavaScript", "UI/UX Design", "Git & GitHub"],
    icon: "💻",
    color: "#818cf8"
  }
];

export default function Education() {
  return (
    <section id="education" className="education">
      {/* Background decorative elements */}
      <div className="education-shapes">
        <div className="shape shape-edu-1"></div>
        <div className="shape shape-edu-2"></div>
        <div className="shape shape-edu-3"></div>
      </div>

      <div className="container">
        <div className="education-header">
          <h2 className="section-title">
            <span className="title-text">Education & Learning Journey</span>
            <span className="title-icon">📖</span>
          </h2>
          <p className="section-subtitle">
            My academic background and continuous learning path that shaped my technical expertise
          </p>
        </div>

        <div className="education-content">
          {/* Timeline visualization */}
          <div className="timeline">
            <div className="timeline-line"></div>
            
            {EDUCATION_DATA.map((edu, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-marker" style={{ backgroundColor: edu.color }}>
                  <span className="marker-icon">{edu.icon}</span>
                </div>
                
                <article className="edu-card">
                  <div className="edu-card-header" style={{ borderLeftColor: edu.color }}>
                    <div className="edu-degree">
                      <h3>{edu.degree}</h3>
                      <div className="degree-badge" style={{ backgroundColor: `${edu.color}20`, color: edu.color }}>
                        {edu.cgpa || edu.gpa || "Ongoing"}
                      </div>
                    </div>
                    
                    <div className="edu-meta">
                      <div className="institution">
                        <span className="meta-icon">🏛️</span>
                        <span className="meta-text">{edu.institution}</span>
                      </div>
                      <div className="period">
                        <span className="meta-icon">📅</span>
                        <span className="meta-text">{edu.period}</span>
                      </div>
                      <div className="location">
                        <span className="meta-icon">📍</span>
                        <span className="meta-text">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="edu-card-body">
                    <p className="edu-description">{edu.description}</p>
                    
                    <div className="edu-details">
                      <div className="details-section">
                        <h4 className="details-title">
                          <span className="details-icon">📊</span>
                          Key Courses & Subjects
                        </h4>
                        <div className="course-tags">
                          {edu.courses?.map((course, idx) => (
                            <span className="course-tag" key={idx}>{course}</span>
                          ))}
                          {edu.achievements?.map((achievement, idx) => (
                            <span className="course-tag" key={idx}>{achievement}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="edu-progress">
                      <div className="progress-label">Relevance to Current Career</div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: index === 0 ? '95%' : index === 1 ? '75%' : index === 2 ? '60%' : '85%',
                            backgroundColor: edu.color
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Learning philosophy section */}
          <div className="learning-philosophy">
            <div className="philosophy-icon">💡</div>
            <div className="philosophy-content">
              <h3>My Learning Philosophy</h3>
              <p>
                "Education is not just about acquiring degrees but about developing 
                problem-solving skills and staying curious. I believe in continuous 
                learning through both formal education and practical projects."
              </p>
            </div>
          </div>

          {/* Ongoing learning */}
          <div className="ongoing-learning">
            <h3>Currently Learning & Exploring</h3>
            <div className="learning-topics">
              <div className="topic-card">
                <div className="topic-icon">⚡</div>
                <div className="topic-content">
                  <h4>Advanced React Patterns</h4>
                  <p>State management, performance optimization</p>
                </div>
              </div>
              <div className="topic-card">
                <div className="topic-icon">☁️</div>
                <div className="topic-content">
                  <h4>Cloud & DevOps</h4>
                  <p>AWS, Docker, CI/CD pipelines</p>
                </div>
              </div>
              <div className="topic-card">
                <div className="topic-icon">📱</div>
                <div className="topic-content">
                  <h4>Mobile Development</h4>
                  <p>React Native, Progressive Web Apps</p>
                </div>
              </div>
              <div className="topic-card">
                <div className="topic-icon">🧠</div>
                <div className="topic-content">
                  <h4>AI & Machine Learning</h4>
                  <p>Practical applications in web development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}