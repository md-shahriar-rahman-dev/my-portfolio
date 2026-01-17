import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "General Inquiry"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "General Inquiry"
      });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "sahriarrahman701@gmail.com",
      link: "mailto:sahriarrahman701@gmail.com",
      description: "Fastest way to reach me"
    },
    {
      icon: "📱",
      title: "Phone / WhatsApp",
      value: "+880-1752-649293",
      link: "https://wa.me/8801752649293",
      description: "Available for calls & messages"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "md-shahriar-rahman-dev",
      link: "https://www.linkedin.com/in/md-shahriar-rahman-dev/",
      description: "Professional networking"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "md-shahriar-rahman-dev",
      link: "https://github.com/md-shahriar-rahman-dev",
      description: "Check out my projects"
    }
  ];

  return (
    <section id="contact" className="contact">
      {/* Background decorative elements */}
      <div className="contact-shapes">
        <div className="shape contact-shape-1"></div>
        <div className="shape contact-shape-2"></div>
        <div className="shape contact-shape-3"></div>
      </div>

      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            <span className="title-text">Let's Work Together</span>
            <span className="title-icon">💬</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-header">
              <h3>
                <span className="info-icon">📍</span>
                Get In Touch
              </h3>
              <p className="info-subtitle">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target={method.title === "Email" ? "_self" : "_blank"}
                  rel={method.title === "Email" ? "" : "noopener noreferrer"}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                  <div className="method-arrow">→</div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="working-hours">
              <div className="hours-icon">🕒</div>
              <div className="hours-content">
                <h4>Available Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (UTC+6)</p>
                <p>Weekends: Flexible availability</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="response-time">
              <div className="response-icon">⚡</div>
              <div className="response-content">
                <h4>Response Time</h4>
                <p>Usually responds within 24 hours</p>
                <div className="response-badge">Fast Reply</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>
                <span className="form-icon">✉️</span>
                Send a Message
              </h3>
              <p className="form-subtitle">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <span className="label-icon">👤</span>
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <span className="label-icon">📧</span>
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="label-icon">🎯</span>
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Discussion">Project Discussion</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Freelance Work">Freelance Work</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-icon">💭</span>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Describe your project or inquiry in detail..."
                />
                <div className="char-counter">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                  <div className="status-icon">
                    {submitStatus.success ? "✅" : "❌"}
                  </div>
                  <div className="status-message">{submitStatus.message}</div>
                </div>
              )}

              <div className="form-actions">
                <button
                  className="btn primary-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="btn-icon">⏳</span>
                      <span className="btn-text">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">🚀</span>
                      <span className="btn-text">Send Message</span>
                    </>
                  )}
                </button>
                
                <div className="form-note">
                  <span className="note-icon">🔒</span>
                  <span className="note-text">Your information is secure and will not be shared</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="contact-social">
          <h3 className="social-title">Connect with me</h3>
          <p className="social-subtitle">Follow for updates and insights</p>
          
          <div className="social-links">
            <a
              href="https://github.com/md-shahriar-rahman-dev"
              className="social-link github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">🐙</span>
              <span className="social-text">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahriar-rahman-dev/"
              className="social-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">💼</span>
              <span className="social-text">LinkedIn</span>
            </a>
            <a
              href="https://x.com/srtonmoy911"
              className="social-link twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">🐦</span>
              <span className="social-text">Twitter</span>
            </a>
            <a
              href="https://www.facebook.com"
              className="social-link facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">📘</span>
              <span className="social-text">Facebook</span>
            </a>
          </div>
        </div>

        {/* Location Info */}
        <div className="location-info">
          <div className="location-card">
            <div className="location-icon">🌍</div>
            <div className="location-content">
              <h4>Based in Bangladesh</h4>
              <p>Dhaka, Bangladesh (UTC+6)</p>
              <p className="location-note">Available for remote work worldwide</p>
            </div>
          </div>
          <div className="location-card">
            <div className="location-icon">💼</div>
            <div className="location-content">
              <h4>Open for Opportunities</h4>
              <p>Full-time • Contract • Freelance</p>
              <p className="location-note">Let's build something amazing together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}