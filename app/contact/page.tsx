export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-inner">
          <p className="hero__eyebrow">Contact</p>
          <h1 className="contact-title">Let&rsquo;s have a coffee chat.</h1>
          <p className="contact-sub">
            I&rsquo;m currently open to UX Research and UX Operations roles in the
            Seattle area, with a strong interest in robotics, AI, and emerging
            technology. Feel free to reach out — I&rsquo;d love to connect.
          </p>

          <div className="contact-links">
            <a
              href="mailto:jamiejaelk@gmail.com"
              className="contact-link"
            >
              <span className="contact-link__label">Email</span>
              <span className="contact-link__value">jamiejaelk@gmail.com ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jamiejk"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link__label">LinkedIn</span>
              <span className="contact-link__value">linkedin.com/in/jamiejk ↗</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Tp5RD6ZMmUJuPz6QuRC1WLxcJs4Zcx1I/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link__label">Resume</span>
              <span className="contact-link__value">Download PDF ↗</span>
            </a>
          </div>

          <div className="contact-note">
            <p>Based in Seattle, WA &mdash; open to hybrid and remote roles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
