import "./about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <div className="title-container">
            <h2 className="section-title">About Me</h2>
            <div className="title-line"></div>
          </div>
          <p className="tagline">Developer. Innovator. World Explorer.</p>
        </div>
        
        <div className="about-content">
          <div className="about-grid">
            <div className="about-card journey-card">
              <div className="card-icon">
                <span className="icon">👨‍💻</span>
              </div>
              <h3>My Journey</h3>
              <p>
                My coding journey began in high school with HTML/CSS and JavaScript. 
                Currently, I'm pursuing Computer Science & Engineering at <span className="highlight">Northern University Bangladesh</span>, 
                where I'm deepening my knowledge in modern frameworks like React, algorithms, and software architecture.
              </p>
            </div>
            
            <div className="about-card vision-card">
              <div className="card-icon">
                <span className="icon">💡</span>
              </div>
              <h3>My Vision</h3>
              <p>
                I dream of creating <span className="highlight">all-in-one travel apps</span> that make exploring the world seamless, 
                and <span className="highlight">intelligent life assistant apps</span> that simplify daily decisions—even suggesting guidance 
                from sacred texts when needed. My goal is to build technology that genuinely enhances human life at every step.
              </p>
            </div>
            
            <div className="about-card passion-card">
              <div className="card-icon">
                <span className="icon">🌍</span>
              </div>
              <h3>Passions & Personality</h3>
              <p>
                I'm an avid traveler who believes exploring diverse cultures fuels creativity. 
                I'm <span className="highlight">endlessly curious</span> and committed to lifelong learning—always exploring new frameworks, 
                design patterns, and innovative solutions to complex problems.
              </p>
              </div>
          </div>
          
          <div className="tech-stack">
            <h4>Tech I Love Working With</h4>
            <div className="stack-tags">
              <span className="stack-tag">React</span>
              <span className="stack-tag">JavaScript</span>
              <span className="stack-tag">CSS3</span>
              <span className="stack-tag">Node.js</span>
              <span className="stack-tag">UI/UX Design</span>
              <span className="stack-tag">Responsive Design</span>
              <span className="stack-tag">APIs</span>
              <span className="stack-tag">Mobile Apps</span>
            </div>
          </div>
          
          <div className="philosophy">
            <h4>My Development Philosophy</h4>
            <p className="philosophy-text">
              "I believe technology should be an invisible helper—enhancing life without complicating it. 
              Whether it's a travel app that anticipates your needs or a personal assistant that provides 
              meaningful guidance, good software feels like magic that's actually just thoughtful engineering."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}