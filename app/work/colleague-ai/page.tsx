import Link from "next/link";

export default function ColleagueAIPage() {
  return (
    <article className="case-study">
      <div className="container">

        {/* Header */}
        <header className="cs-header">
          <Link href="/work" className="cs-back">← All work</Link>
          <h1 className="cs-title">Colleague AI</h1>
          <p className="cs-tagline">
            Led end-to-end UX research for an NSF-funded AI platform — findings
            and prototype were adopted by UW&rsquo;s Education Policy Analytics Lab
            for development.
          </p>
          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <span className="cs-meta-label">My Role</span>
              <span className="cs-meta-value">Primary Researcher · UX Research, UX Design, UX Operations</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">6 months</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Research Type</span>
              <span className="cs-meta-value">Generative Research</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">Contextual Inquiry, In-depth Interview, Competitive Analysis, Co-Design</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">Team of 4</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-value">Google Forms, Miro, Figma, Qualtrics, Google G-Suite</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Stakeholder</span>
              <span className="cs-meta-value">UW Education Policy Analytics Lab (NSF-funded)</span>
            </div>
          </div>
        </header>

        <div className="cs-cover-placeholder" />

        {/* Background */}
        <section className="cs-section">
          <h2>Background & Goal</h2>
          <p>
            Colleague AI is an AI-powered lesson recommendation platform for
            K–12 teachers, built in partnership with UW&rsquo;s Education Policy
            Analytics Lab (EPAL) under a National Science Foundation grant. As
            the primary researcher on a team of 4, I owned the full research
            lifecycle — planning, recruitment, interviews, co-design, usability
            testing, and synthesis — while also contributing to UX design and
            research operations.
          </p>
          <p>
            When I joined, EPAL had preliminary market data but no direct teacher
            input. My goal was to close that gap: understand how teachers actually
            plan lessons, where existing tools break down, and what an AI
            recommendation system would need to earn their trust.
          </p>
        </section>

        {/* Problem */}
        <section className="cs-section">
          <h2>Problem</h2>
          <blockquote className="cs-quote">
            &ldquo;It would be great to have a centralized platform where I can find
            resources in one place.&rdquo;
          </blockquote>
          <p>
            Teachers weren&rsquo;t struggling to find resources — they were overwhelmed
            by them across too many disconnected tools. But as we introduced AI
            recommendations, a deeper need surfaced: teachers didn&rsquo;t want more
            options, they wanted vetted ones they could trust. This reframed our
            entire design direction.
          </p>
        </section>

        {/* Process */}
        <section className="cs-section">
          <h2>Process Overview</h2>
          <p>For this project, I approached with five steps to understand K-12 workflows that led to a design solution.</p>
          <div className="cs-process-steps">
            {["Planning", "Research", "Prototype", "Usability", "Final Design"].map((step, i) => (
              <div key={step} className="cs-step">
                <div className="cs-step__num">{i + 1}</div>
                <div className="cs-step__label">{step}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Methods */}
        <section className="cs-section">
          <h2>Research Methods</h2>

          <h3>Contextual Inquiry + Interview</h3>
          <p>
            During the sessions, teachers screen-shared and walked through their
            lesson planning process including their experience using online
            platforms and educational tools that aid in their teaching.
          </p>

          <h3>Competitive Analysis</h3>
          <p>
            Reviewed education platforms to identify product gaps, strengths and
            weaknesses, and main differentiators.
          </p>

          <h3>Co-Design</h3>
          <p>
            After discovering pain points, needs, and identifying opportunities
            through our research, we conducted remote co-design sessions with
            K-12 teachers.
          </p>

          <div className="cs-callout">
            <h4>Key Takeaways</h4>
            <ul className="cs-list">
              <li>K-12 teachers want to adopt new technology quickly and effectively.</li>
              <li>They need support with vetting content for alignment with educational standards.</li>
              <li>Building interactive lessons that boost student engagement.</li>
              <li>Tailoring materials to meet varied student needs.</li>
              <li>Teachers need tools that enable filtering and customizing materials for diverse learners.</li>
              <li>Sharing resources for collaboration with peers.</li>
            </ul>
          </div>
        </section>

        {/* Persona */}
        <section className="cs-section">
          <h2>Persona</h2>
          <p>
            Based on our research findings, I created detailed personas
            representing typical K-12 educators. Each persona encapsulated their
            motivations, challenges, and goals, providing a holistic view of our
            target users. This helped our team empathize with educators&rsquo; needs
            and align the platform features accordingly.
          </p>
          <div className="cs-image-placeholder cs-image-placeholder--wide">
            Persona — replace with your image
          </div>
        </section>

        {/* Sketch & Storyboard */}
        <section className="cs-section">
          <h2>Sketch &amp; Storyboard</h2>
          <p>
            After synthesizing the data, I created an affinity map to identify
            emerging themes, which then informed the development of an empathy
            map. Based on these insights, I sketched ideas and visualized the
            user journey as part of the ideation process.
          </p>
          <div className="cs-image-row">
            <div className="cs-image-placeholder">Sketching</div>
            <div className="cs-image-placeholder">Storyboard 1</div>
            <div className="cs-image-placeholder">Storyboard 2</div>
          </div>
        </section>

        {/* Usability */}
        <section className="cs-section">
          <h2>Usability Evaluation</h2>
          <p>
            For the usability evaluation, I created a medium-fidelity prototype
            and re-invited six K–12 teachers. During the sessions, I aimed to
            evaluate the design&rsquo;s intuitiveness and effectiveness in supporting
            lesson planning.
          </p>
          <p>I used 4 user flows to conduct usability testing:</p>
          <ul className="cs-list">
            <li>Flow 1: Initial landing page review</li>
            <li>Flow 2: Finding and saving a lesson plan</li>
            <li>Flow 3: Editing a lesson plan</li>
            <li>Flow 4: Leave feedback and follow creator</li>
          </ul>

          <div className="cs-callout">
            <h4>Key Takeaways</h4>
            <ul className="cs-list">
              <li>Need to avoid unfamiliar jargon</li>
              <li>Data use &amp; privacy concerns</li>
              <li>Navigation &amp; search clarity</li>
              <li>Clear feedback mechanisms</li>
            </ul>
          </div>
        </section>

        {/* Final Design */}
        <section className="cs-section">
          <h2>Final Design</h2>
          <div className="cs-image-grid">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="cs-image-placeholder">
                Final Design Screen {n}
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="cs-section">
          <h2>Outcome</h2>
          <p>
            Following a final presentation to EPAL stakeholders, the
            high-fidelity prototype and research recommendations were adopted for
            development — validating that the research had surfaced needs the
            client hadn&rsquo;t previously articulated.
          </p>
          <p>
            Returning participants from co-design sessions confirmed streamlined
            task flows in the final usability testing compared to the
            mid-fidelity version, particularly in finding, saving, and editing
            lesson plans.
          </p>
        </section>

        {/* Nav */}
        <nav className="cs-nav">
          <Link href="/work/relationships-pandemic" className="cs-nav__next">
            Next project: Relationships During the Pandemic →
          </Link>
        </nav>
      </div>
    </article>
  );
}
