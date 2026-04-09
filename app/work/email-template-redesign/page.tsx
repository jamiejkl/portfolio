import Link from "next/link";

export default function EmailTemplateRedesignPage() {
  return (
    <article className="case-study">
      <div className="container">

        <header className="cs-header">
          <Link href="/work" className="cs-back">← All work</Link>
          <div className="cs-status-badge">Ongoing</div>
          <h1 className="cs-title">Email Template Redesign</h1>
          <p className="cs-tagline">
            Investigating why partner agencies aren&rsquo;t completing annual
            verification emails — and redesigning the experience to improve
            response rates for a critical community resource database.
          </p>
          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <span className="cs-meta-label">My Role</span>
              <span className="cs-meta-value">UX Researcher / UX Designer (Solo)</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Status</span>
              <span className="cs-meta-value">Ongoing</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">Homage Senior Services — Aging & Disability Team</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-value">Microsoft Forms, SharePoint, Outlook, Miro, Figma</span>
            </div>
          </div>
        </header>

        <div className="cs-cover-placeholder" />

        <section className="cs-section">
          <h2>Overview</h2>
          <p>
            Homage Senior Services is a non-profit serving older adults and
            people with disabilities in Snohomish County, WA — connecting them
            with community resources to support independent living.
          </p>
          <p>
            As a resource database curator, I manage 800+ partner agency
            listings and conduct annual outreach to verify service information
            via email. Through this work, I noticed consistently low
            verification rates and decided to investigate why.
          </p>
          <div className="cs-callout">
            <h4>Key Finding</h4>
            <p style={{margin: 0}}>
              52% of respondents (15 of 29) said &ldquo;No&rdquo; or &ldquo;Maybe&rdquo; when asked
              if they&rsquo;d ever received the annual verification email.
            </p>
          </div>
        </section>

        <section className="cs-section">
          <h2>Problem</h2>
          <p>
            Over 12 months of outreach to 500+ partner agencies, the average
            verification completion rate was only 25%. When partners don&rsquo;t
            verify directly, accuracy depends on secondary sources like agency
            websites — which may be outdated or incomplete.
          </p>
        </section>

        <section className="cs-section">
          <h2>Why It Matters</h2>
          <p>
            The resource database feeds directly into Washington Community
            Living Connections, a public portal that older adults, people with
            disabilities, and caregivers use to find services. When agency
            information is outdated, real people hit dead ends while seeking
            help.
          </p>
        </section>

        <section className="cs-section">
          <h2>Goal</h2>
          <p>
            Improve partner agency verification completion rate while
            maintaining information accuracy for community members.
          </p>
        </section>

        <section className="cs-section">
          <h2>Research</h2>
          <h3>Survey</h3>
          <p>
            I surveyed 379 partner agency contacts and received 27 responses
            (~7%). The goal was to understand barriers to completing the
            verification email.
          </p>
          <ul className="cs-list">
            <li>Many don&rsquo;t recall the email — 17 of 27 said &ldquo;No&rdquo; or &ldquo;Maybe&rdquo;</li>
            <li>Lack of time is the top barrier among those who recognized it</li>
            <li>People simply forget — better follow-up or design could help</li>
            <li>Motivation isn&rsquo;t the problem — most want to keep information accurate</li>
            <li>Technical confusion exists — some were unsure how to update or had link issues</li>
          </ul>

          <h3>Follow-up Interviews</h3>
          <p>
            I conducted 15-minute interviews with two survey respondents. Key findings:
          </p>
          <ul className="cs-list">
            <li>&ldquo;Short and sweet&rdquo; is critical — visual appearance matters as much as length</li>
            <li>Context matters — partners need reminders of the connection to Homage</li>
            <li>Trust is fragile — both hesitate at links due to phishing awareness training</li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Next Steps</h2>
          <p>This project is ongoing. Next steps include:</p>
          <ul className="cs-list">
            <li>Design a clearer, more scannable email template in Figma</li>
            <li>Test two versions — direct link vs. embedded verification form</li>
            <li>Measure impact on completion rates after rollout</li>
          </ul>
        </section>

        <nav className="cs-nav">
          <Link href="/work/colleague-ai" className="cs-nav__next">
            Next project: Colleague AI →
          </Link>
        </nav>

      </div>
    </article>
  );
}