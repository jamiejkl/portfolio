import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-intro">
          <div className="about-intro__text">
            <p className="hero__eyebrow">About Me</p>
            <h1 className="about-intro__headline">I&rsquo;m glad you found me.</h1>
            <p>
              I&rsquo;m a UX Researcher with a background in Human Centered Design
              and Engineering (HCDE). I believe good design starts with
              understanding people — their needs, constraints, and motivations.
              I&rsquo;m passionate about uncovering insights and navigating ambiguity
              to wade toward clarity using both qualitative and quantitative
              data, and translating them into design decisions.
            </p>
            <p>
              My path into UX began with a background in Information Technology
              (IT), where I worked as a manufacturing technician and technical
              support engineer. Working closely with complex systems and real
              users helped me develop strong technical skills, empathy for user
              limitations, and a thoughtful approach to problem-solving and
              communication.
            </p>
            <p>
              I find my purpose helping people lower barriers for their needs
              and navigate complexity to clarity.
            </p>
            <div className="about-intro__actions">
              <a
                href="https://drive.google.com/file/d/1Tp5RD6ZMmUJuPz6QuRC1WLxcJs4Zcx1I/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Download Resume ↗
              </a>
              <a
                href="https://www.linkedin.com/in/jamiejk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section__title">Education</h2>
          <div className="edu-list">
            <div className="edu-item">
              <div className="edu-item__year">2024</div>
              <div>
                <p className="edu-item__degree">
                  M.S. Human Centered Design and Engineering
                </p>
                <p className="edu-item__school">University of Washington</p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-item__year">2020</div>
              <div>
                <p className="edu-item__degree">
                  B.S. Information Technology
                </p>
                <p className="edu-item__school">Montclair State University</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section__title">Skills & Methods</h2>
          <div className="skills-grid">
            <div className="skills-group">
              <h3 className="skills-group__label">Research Methods</h3>
              <div className="tag-list">
                {[
                  "Contextual Inquiry",
                  "In-depth Interview",
                  "Diary Study",
                  "Co-Design",
                  "Usability Testing",
                  "Public Survey",
                  "Focus Group",
                  "Competitive Analysis",
                  "Affinity Diagramming",
                ].map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-group">
              <h3 className="skills-group__label">Tools</h3>
              <div className="tag-list">
                {[
                  "Figma",
                  "Miro",
                  "Qualtrics",
                  "Google Forms",
                  "Lucidchart",
                  "Google G-Suite",
                ].map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-group">
              <h3 className="skills-group__label">Expertise</h3>
              <div className="tag-list">
                {[
                  "UX Research",
                  "UX Design",
                  "UX Operations",
                  "Mixed Methods",
                  "Generative Research",
                  "Data Analysis",
                  "Persona Development",
                  "Human-Centered Design",
                ].map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section about-story">
          <h2 className="about-section__title">A little more about me</h2>
          <p>
            A while ago, I visited beautiful Victoria, BC, and one of its
            famous attractions, The Butchart Gardens. Throughout the garden,
            there were garbage bins that I found perfectly suited to the
            environment. They weren&rsquo;t high-tech, but I found them amusing and
            harmonious with their surroundings.
          </p>
          <p>
            They made me think about how nature can inspire us to design
            everyday objects differently. I appreciated the garden&rsquo;s
            intentional design approach, where human-made elements and nature
            felt seamlessly intertwined, creating a calm and cohesive
            experience.
          </p>
          <p>
            That kind of thoughtfulness — designing for context, not just
            function — is what drives me in my work.
          </p>
        </section>
      </div>
    </div>
  );
}
