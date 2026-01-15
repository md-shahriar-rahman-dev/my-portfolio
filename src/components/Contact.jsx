import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href="mailto:sahriarrahman701@gmail.com">
                sahriarrahman701@gmail.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+8801752649293">+880-1752-649293</a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/8801752649293"
                target="_blank"
                rel="noreferrer"
              >
                +880-1752-649293
              </a>
            </p>
          </div>

          <form
            className="contact-form"
            action={`mailto:sahriarrahman701@gmail.com`}
            method="post"
            encType="text/plain"
          >
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />

            <div className="form-actions">
              <button className="btn primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
