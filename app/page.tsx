import Link from "next/link";

const projects = [
  {
    slug: "colleague-ai",
    title: "Colleague AI",
    tagline: "Led end-to-end UX research for an NSF-funded AI platform, handed off to UW's EPAL for development.",
    tags: ["UX Research", "AI", "EdTech"],
    illustration: (
      <svg width="100%" height="100%" viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="440" height="200" fill="#EAF3DE"/>
        <rect x="30" y="36" width="180" height="128" rx="8" fill="#ffffff" opacity="0.7"/>
        <rect x="46" y="54" width="100" height="10" rx="3" fill="#3B6D11" opacity="0.5"/>
        <rect x="46" y="70" width="148" height="7" rx="3" fill="#3B6D11" opacity="0.3"/>
        <rect x="46" y="82" width="130" height="7" rx="3" fill="#3B6D11" opacity="0.25"/>
        <rect x="46" y="94" width="140" height="7" rx="3" fill="#3B6D11" opacity="0.2"/>
        <rect x="46" y="118" width="64" height="24" rx="5" fill="#639922" opacity="0.35"/>
        <rect x="46" y="118" width="64" height="24" rx="5" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0.3"/>
        <rect x="116" y="118" width="54" height="24" rx="5" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0.25"/>
        <rect x="230" y="28" width="182" height="144" rx="8" fill="#ffffff" opacity="0.6"/>
        <rect x="246" y="44" width="80" height="9" rx="3" fill="#639922" opacity="0.6"/>
        <rect x="246" y="60" width="150" height="6" rx="3" fill="#3B6D11" opacity="0.25"/>
        <rect x="246" y="72" width="138" height="6" rx="3" fill="#3B6D11" opacity="0.2"/>
        <rect x="246" y="84" width="144" height="6" rx="3" fill="#3B6D11" opacity="0.18"/>
        <rect x="246" y="100" width="150" height="6" rx="3" fill="#3B6D11" opacity="0.15"/>
        <rect x="246" y="120" width="150" height="36" rx="5" fill="#EAF3DE" opacity="0.8"/>
        <rect x="254" y="128" width="90" height="6" rx="2" fill="#3B6D11" opacity="0.3"/>
        <rect x="254" y="139" width="70" height="6" rx="2" fill="#3B6D11" opacity="0.2"/>
        <circle cx="390" cy="44" r="14" fill="#639922" opacity="0.25"/>
        <circle cx="390" cy="44" r="8" fill="#639922" opacity="0.4"/>
      </svg>
    ),
  },
  {
    slug: "relationships-pandemic",
    title: "Relationships During the Pandemic",
    tagline: "Explored how COVID-19 transformed dating culture — mixed methods research across 44 survey respondents and 8 interviews.",
    tags: ["Mixed Methods", "Exploratory", "Social"],
    illustration: (
      <svg width="100%" height="100%" viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="440" height="200" fill="#EEEDFE"/>
        <circle cx="140" cy="100" r="62" fill="#AFA9EC" opacity="0.35"/>
        <circle cx="200" cy="90" r="50" fill="#7F77DD" opacity="0.3"/>
        <circle cx="300" cy="105" r="58" fill="#534AB7" opacity="0.25"/>
        <circle cx="140" cy="100" r="62" fill="none" stroke="#534AB7" strokeWidth="0.5" opacity="0.4"/>
        <circle cx="200" cy="90" r="50" fill="none" stroke="#534AB7" strokeWidth="0.5" opacity="0.35"/>
        <circle cx="300" cy="105" r="58" fill="none" stroke="#534AB7" strokeWidth="0.5" opacity="0.3"/>
        <rect x="60" y="158" width="320" height="7" rx="3" fill="#3C3489" opacity="0.18"/>
        <rect x="100" y="170" width="240" height="7" rx="3" fill="#3C3489" opacity="0.12"/>
        <circle cx="140" cy="100" r="12" fill="#ffffff" opacity="0.5"/>
        <circle cx="300" cy="105" r="12" fill="#ffffff" opacity="0.5"/>
        <rect x="166" y="82" width="68" height="36" rx="6" fill="#ffffff" opacity="0.55"/>
        <rect x="174" y="90" width="52" height="5" rx="2" fill="#3C3489" opacity="0.3"/>
        <rect x="174" y="100" width="40" height="5" rx="2" fill="#3C3489" opacity="0.2"/>
      </svg>
    ),
  },
  {
    slug: "trellis",
    title: "Trellis",
    tagline: "Designed a platform connecting consumers with minority-owned businesses — from research through high-fidelity prototype.",
    tags: ["UX Research", "UX Design", "Community"],
    illustration: (
      <svg width="100%" height="100%" viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="440" height="200" fill="#E1F5EE"/>
        <rect x="24" y="24" width="118" height="152" rx="8" fill="#ffffff" opacity="0.65"/>
        <rect x="36" y="38" width="94" height="54" rx="4" fill="#9FE1CB" opacity="0.5"/>
        <rect x="36" y="100" width="60" height="7" rx="3" fill="#0F6E56" opacity="0.4"/>
        <rect x="36" y="112" width="80" height="6" rx="3" fill="#0F6E56" opacity="0.25"/>
        <rect x="36" y="122" width="70" height="6" rx="3" fill="#0F6E56" opacity="0.2"/>
        <rect x="36" y="140" width="50" height="20" rx="4" fill="#1D9E75" opacity="0.3"/>
        <rect x="161" y="24" width="118" height="152" rx="8" fill="#ffffff" opacity="0.65"/>
        <rect x="173" y="38" width="94" height="54" rx="4" fill="#5DCAA5" opacity="0.4"/>
        <rect x="173" y="100" width="72" height="7" rx="3" fill="#0F6E56" opacity="0.4"/>
        <rect x="173" y="112" width="88" height="6" rx="3" fill="#0F6E56" opacity="0.25"/>
        <rect x="173" y="122" width="64" height="6" rx="3" fill="#0F6E56" opacity="0.2"/>
        <rect x="173" y="140" width="50" height="20" rx="4" fill="#1D9E75" opacity="0.25"/>
        <rect x="298" y="24" width="118" height="152" rx="8" fill="#ffffff" opacity="0.65"/>
        <rect x="310" y="38" width="94" height="54" rx="4" fill="#9FE1CB" opacity="0.35"/>
        <rect x="310" y="100" width="56" height="7" rx="3" fill="#0F6E56" opacity="0.4"/>
        <rect x="310" y="112" width="84" height="6" rx="3" fill="#0F6E56" opacity="0.25"/>
        <rect x="310" y="122" width="76" height="6" rx="3" fill="#0F6E56" opacity="0.2"/>
        <rect x="310" y="140" width="50" height="20" rx="4" fill="#1D9E75" opacity="0.2"/>
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span className="hero__status-text">OPEN TO WORK · SEATTLE, WA</span>
          </div>
          <h1 className="hero__headline">
            I help people navigate<br />
            <em className="hero__headline-em">complexity</em> to clarity.
          </h1>
          <p className="hero__sub">
            Focused on understanding how people interact with complex systems —
            examining breakdowns, uncovering insights, and making technology
            work for people.
          </p>
          <div className="hero__values">
            <span className="hero__value">curiosity</span>
            <span className="hero__value">empathy</span>
            <span className="hero__value">clarity</span>
          </div>
          <div className="hero__actions">
            <Link href="/work" className="btn btn--primary">View my work</Link>
            <Link href="/about" className="btn btn--ghost">About me</Link>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
            <Link href="/work" className="section-link">All projects →</Link>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="project-card">
                <div className="project-card__cover project-card__cover--illustrated">
                  {project.illustration}
                </div>
                <div className="project-card__body">
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>
                  <span className="project-card__cta">Read case study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="container about-teaser__inner">
          <div className="about-teaser__text">
            <h2>Background in tech.<br />Heart in people.</h2>
            <p>
              My path into UX began in Information Technology — manufacturing
              technician, technical support engineer. Working with complex systems
              and real users built strong technical instincts and deep empathy for
              user limitations.
            </p>
            <p>
              I hold a Master&rsquo;s in Human Centered Design and Engineering from
              the University of Washington. I&rsquo;m interested in the future of
              human-robot interaction and how design can make emerging technology
              work for people.
            </p>
            <Link href="/about" className="btn btn--ghost">More about me →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
