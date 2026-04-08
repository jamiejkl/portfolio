import Link from "next/link";

export default function TrellisPage() {
  return (
    <article className="case-study">
      <div className="container">

        <header className="cs-header">
          <Link href="/work" className="cs-back">← All work</Link>
          <h1 className="cs-title">Trellis</h1>
          <p className="cs-tagline">
            A platform where consumers can connect, identify, and explore
            minority-owned small businesses — bridging the gap in representation
            and community engagement.
          </p>
          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <span className="cs-meta-label">My Role</span>
              <span className="cs-meta-value">UX Research, UX Design</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">9 weeks</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methodology</span>
              <span className="cs-meta-value">User-Centered Design</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">User Interview, Focus Group, Survey</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">Team of 3</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-value">Google Forms, Lucidchart, Figma, Google G-Suite</span>
            </div>
          </div>
        </header>

        <div className="cs-cover-placeholder" />

        {/* HMW */}
        <section className="cs-section">
          <blockquote className="cs-quote">
            &ldquo;How might we bridge the gap in representation by designing an
            interactive platform that promotes and celebrates minority-owned
            small businesses and connects consumers with community
            opportunities?&rdquo;
          </blockquote>
        </section>

        {/* Background */}
        <section className="cs-section">
          <h2>Background &amp; Goal</h2>
          <p>
            Trellis is an online website platform where consumers can connect,
            identify, and explore minority-owned small businesses for their
            consumer needs. It is also a place where users can find local
            volunteer or internship opportunities to give back to their community
            and work with local small businesses in creating more unity and more
            representation in their area.
          </p>
          <p>
            Trellis aims to bridge that gap by designating a platform all to
            minority communities and businesses for users to easily search
            through and find what fits their needs.
          </p>
        </section>

        {/* Problem */}
        <section className="cs-section">
          <h2>Problem</h2>
          <p>
            As social movements gain momentum, more people are seeking ways to
            spend their money ethically and intentionally. Yet, finding
            minority-owned small businesses that meet specific needs can be
            time-consuming without recommendations or word of mouth. Similarly,
            discovering community volunteer events or internship opportunities is
            often challenging, as this information is rarely centralized or easy
            to access.
          </p>
        </section>

        {/* Research Methods */}
        <section className="cs-section">
          <h2>Research Methods</h2>

          <h3>1. User Interview</h3>
          <p>
            I invited and conducted 3 semi-structured 1-on-1 in-depth interviews
            with 4 small business owners representing minority-owned businesses. I
            sent out a screener via social media and reached out to family and
            friends for recruiting participants. Every business owner has
            different values and a mission for their business — I conducted
            interviews to understand their perspective as local business owners.
          </p>

          <h3>2. Focus Group</h3>
          <p>
            After reviewing screener responses and demographic data, I decided to
            conduct a customer focus group with participants who preferred
            shopping at local stores. I invited 3 participants and had an
            interactive discussion around their shopping experience, habits, and
            frustrations/barriers.
          </p>

          <h3>3. Survey</h3>
          <p>
            Two surveys targeting consumers and business owners were shared
            across Slack channels, social networks, family, and friends. A total
            of 26 responses provided sufficient quantitative data to identify
            patterns in consumer behavior and minority-owned small business
            owners&rsquo; overall experiences.
          </p>
        </section>

        {/* Affinity Map */}
        <section className="cs-section">
          <h2>Affinity Map</h2>
          <p>
            Based on session notes and recordings, I transcribed data using
            Google Sheets and created an affinity map to organize ideas by groups
            and themes.
          </p>
          <div className="cs-image-placeholder cs-image-placeholder--wide">
            Affinity Map — replace with your image
          </div>
        </section>

        {/* Persona */}
        <section className="cs-section">
          <h2>Persona</h2>
          <p>
            Based on user interviews, focus group, and survey analysis, I created
            3 qualitative personas: primary, secondary, and tertiary to convey
            the research findings. I included survey data because interviews and
            focus groups had a small sample size (26 responses total).
          </p>
          <div className="cs-image-row">
            <div className="cs-image-placeholder">Camila (Primary)</div>
            <div className="cs-image-placeholder">Shannon (Secondary)</div>
            <div className="cs-image-placeholder">Maisha / Kenji (Tertiary)</div>
          </div>
        </section>

        {/* Design Requirements */}
        <section className="cs-section">
          <h2>Design Requirements</h2>
          <p>After synthesizing interview and survey data, I came up with 5 design requirements:</p>
          <div className="cs-req-list">
            {[
              {
                title: "Searchability",
                desc: "Users should be able to search for local businesses and view results on a map. Filters should include price, location, distance, business hours, accessibility, and ownership type.",
              },
              {
                title: "Shareability",
                desc: "Users should be able to easily share the application and local business listings on social media.",
              },
              {
                title: "Rateability",
                desc: "Users should have the ability to rate, write reviews, and upload photos of businesses they visit.",
              },
              {
                title: "Visibility",
                desc: "Business owners should have opportunities to promote their services and raise awareness about their mission or causes.",
              },
              {
                title: "Community Engagement",
                desc: "Users and business owners should have access to a shared space to connect, support local initiatives, and promote community events.",
              },
            ].map((req) => (
              <div key={req.title} className="cs-req-item">
                <h4 className="cs-req-item__title">{req.title}</h4>
                <p>{req.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideation */}
        <section className="cs-section">
          <h2>Ideation</h2>
          <p>
            Based on our design requirements, I first sketched to visualize the
            platform design and refined initial sketches into a low-fidelity
            prototype.
          </p>
          <div className="cs-image-row">
            <div className="cs-image-placeholder">Sketch</div>
            <div className="cs-image-placeholder">Low-fi: Landing, News Feed, Community</div>
            <div className="cs-image-placeholder">Low-fi: Search, Filter, Directory</div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="cs-section">
          <h2>Competitive Analysis &amp; MVP</h2>
          <p>
            To prepare for development, I conducted a competitive analysis and
            reviewed feature parity across minority-owned web platforms and local
            discovery platforms like Nextdoor and Yelp. Key opportunities for
            differentiation:
          </p>
          <ul className="cs-list">
            <li><strong>Streamlined UX</strong> — a clean interface improving on cluttered existing directories.</li>
            <li><strong>Identity-Based Filtering</strong> — filters by ownership identity (Black-owned, LGBTQ+-owned, women-owned, etc.).</li>
            <li><strong>Integrated Review Insights</strong> — embedded ratings and curated critic feedback.</li>
            <li><strong>Community Impact Score</strong> — a metric highlighting businesses&rsquo; involvement in local causes.</li>
            <li><strong>Volunteer Opportunity Matching</strong> — connecting users with local organizations seeking support.</li>
          </ul>
        </section>

        {/* Usability Testing */}
        <section className="cs-section">
          <h2>Usability Testing</h2>
          <p>
            Following ideation, I developed a clickable medium-fidelity
            prototype with Figma and conducted remote usability testing with 6
            participants recruited through my personal network.
          </p>
          <div className="cs-image-row">
            {["Landing", "Business listing", "Business detail", "Volunteer landing", "Volunteer listing", "Volunteer posting"].map((label) => (
              <div key={label} className="cs-image-placeholder cs-image-placeholder--sm">{label}</div>
            ))}
          </div>
          <p>Sample questions included:</p>
          <ul className="cs-list">
            <li>On a scale of 1 to 7, how would you rate the usefulness of this tool?</li>
            <li>What was the most challenging task today, and why?</li>
            <li>How likely are you to use a platform like this (1–7)? Which features would you use, and why?</li>
            <li>Would you recommend this platform to friends or colleagues?</li>
          </ul>
        </section>

        {/* Design Solution */}
        <section className="cs-section">
          <h2>Design Solution</h2>
          <p>
            Based on usability testing results, I focused on addressing key
            findings: developing a new slogan and logo for Trellis, refining
            wording and visual design, restructuring the information architecture
            to better represent racial and ethnic categories, enhancing the
            filtering system, adding dedicated contact and sign-up pages, and
            introducing an &ldquo;Internships and Opportunities&rdquo; wizard.
          </p>
          <div className="cs-image-grid">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <div key={n} className="cs-image-placeholder">
                Design Screen {n}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a
              href="https://www.figma.com/proto/GnJCCrygA5ySiwZnYeewyG/K9-Design---Trellis-Celebrate-Diversity?node-id=77-3253"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              View Prototype in Figma ↗
            </a>
          </div>
        </section>

        {/* Reflection */}
        <section className="cs-section">
          <h2>Final Reflection</h2>
          <p>
            I have a deep appreciation for the dedication of small business
            owners and the effort it takes to keep their businesses going. During
            this project, I had the opportunity to speak with several business
            owners who are deeply committed to social causes and community impact.
          </p>
          <p>
            One key lesson I took away is that designing with intention is
            difficult. While I aimed to create thoughtful and inclusive design
            solutions, usability testing reminded me that I am not the user. What
            seems intuitive or meaningful to me may not resonate the same way
            with others.
          </p>
          <p>
            Overall, this project reminded me why I care so deeply about
            User-Centered Design — creating tools that empower people, especially
            those whose voices are often overlooked.
          </p>
        </section>

        {/* Nav */}
        <nav className="cs-nav">
          <Link href="/work/colleague-ai" className="cs-nav__next">
            ← Back to Colleague AI
          </Link>
        </nav>

      </div>
    </article>
  );
}
