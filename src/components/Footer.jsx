import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} Md. Shahriar Rahman. All rights reserved.
        </p>
        <nav className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>{" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>{" "}
        </nav>
      </div>
    </footer>
  );
}
