import Link from "next/link";

export default function PandemicPage() {
  return (
    <article className="case-study">
      <div className="container">

        <header className="cs-header">
          <Link href="/work" className="cs-back">← All work</Link>
          <h1 className="cs-title">Relationships During the Pandemic</h1>
          <p className="cs-tagline">
            Exploring how COVID-19 transformed dating culture in the U.S. —
            examining immediate impacts during lockdowns and longer-term shifts
            in post-pandemic society.
          </p>
          <div className="cs-meta-grid">
            <div className="cs-meta-item">
              <span className="cs-meta-label">My Role</span>
              <span className="cs-meta-value">UX Research, UX Operations</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">9 weeks</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Research Type</span>
              <span className="cs-meta-value">Exploratory Research</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">Mixed Methods — Public Survey, Remote Interview, Diary Study</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">Team of 3</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-value">Google Forms, Miro, Google G-Suite</span>
            </div>
          </div>
        </header>

        <div className="cs-cover-placeholder" />

        {/* Background */}
        <section className="cs-section">
          <h2>Background &amp; Goal</h2>
          <p>
            The COVID-19 pandemic significantly disrupted daily life across the
            globe, including the ways people connect, communicate, and form
            romantic relationships. In early 2020, the United States implemented
            shelter-at-home orders and social distancing guidelines to curb the
            spread of the virus. These public health measures drastically limited
            in-person interactions and altered the landscape of dating, leading
            to shifts in behavior, attitudes, and expectations around romantic
            connection.
          </p>
          <p>
            Although the most acute phase of the pandemic has passed, its
            influence continues to shape relationship norms today. This research
            explores how the pandemic transformed dating culture in the United
            States, examining both the immediate impacts during lockdowns and the
            longer-term changes that have persisted in post-pandemic society.
          </p>
        </section>

        {/* Research Questions */}
        <section className="cs-section">
          <h2>Research Questions</h2>
          <h3>Primary Question</h3>
          <ul className="cs-list">
            <li>How has the pandemic changed dating and romantic relationships?</li>
          </ul>
          <h3>Sub Questions</h3>
          <ul className="cs-list">
            <li>How have attitudes and behaviors toward dating changed during the pandemic?</li>
            <li>How does the virtual setting affect two people in a dating relationship?</li>
            <li>How has the pandemic affected the dating process, timeline, and pace?</li>
            <li>How are communication and physical intimacy achieved and maintained?</li>
          </ul>
        </section>

        {/* Recruitment */}
        <section className="cs-section">
          <h2>Recruitment &amp; Methods</h2>

          <h3>Remote Interview</h3>
          <p>
            We invited 8 participants who were seeking, currently dating, or in
            relationships during the pandemic and conducted 1-hour-long
            interviews.
          </p>

          <h3>Public Survey</h3>
          <p>
            We sent out 19 questions and received 44 respondents through social
            media and personal connections within 4 weeks. 77% of people said
            they were meeting in-person. Survey topics included: current dating
            status, demographics, motivation for dating, tools and methods used,
            changes in attitude and behaviors, and the most challenging aspects
            of dating during the pandemic.
          </p>

          <h3>Diary Study</h3>
          <p>
            We had 5 participants. At the beginning of the study, we sent out 1
            onboarding questionnaire and 7 journal entries spanning 3 weeks. Each
            diary entry had a different theme and could consist of any
            combination of text, audio, photos, and video. At the end of every
            entry, participants also answered the same 5-point Likert scale
            prompt to capture a quantitative &ldquo;pulse&rdquo; of their experiences.
          </p>
          <p>Diary entry themes: Communication, Tools, Types, Interaction, Approaches, Reflection.</p>
        </section>

        {/* Interview */}
        <section className="cs-section">
          <h2>Interview</h2>
          <p>
            Conducted 1-hour-long interviews with participants in different
            phases of the dating process — from newly committed, single and
            currently dating, broke up during the pandemic, to being in a
            relationship for years.
          </p>
          <p>Sample questions included:</p>
          <ul className="cs-list">
            <li>How has the pandemic affected your plans for the future?</li>
            <li>What advice would you give to someone who wants to know how they can be successful at dating during the pandemic?</li>
          </ul>
          <p>
            At the end of interviews, we gave participants a 5-minute
            &ldquo;feeling board&rdquo; interactive activity to gain insight into their
            dating experience during the pandemic in a visual way.
          </p>
        </section>

        {/* Data Analysis */}
        <section className="cs-section">
          <h2>Data Analysis</h2>
          <ul className="cs-list">
            <li>Conducted interview transcriptions and performed detailed analysis of each participant&rsquo;s responses.</li>
            <li>Applied descriptive coding techniques to interpret qualitative data.</li>
            <li>Identified key themes and recurring patterns across interviews.</li>
            <li>Utilized affinity diagramming to synthesize findings and draw final conclusions.</li>
          </ul>
        </section>

        {/* Findings */}
        <section className="cs-section">
          <h2>Findings</h2>

          <h3>Communication</h3>
          <ul className="cs-list">
            <li>COVID-19 was a commonly used icebreaker topic, but also served as a filter before meeting in person.</li>
            <li>Much of the communication in dating relationships was facilitated by online tools and applications.</li>
            <li>In-person conversations were preferred for deeper, more serious, and nuanced topics.</li>
            <li>There was an increase in willingness and desire to engage more openly and vulnerably in conversations with partners and dating prospects.</li>
          </ul>

          <h3>Motivation</h3>
          <ul className="cs-list">
            <li>For some singles, loneliness from prolonged isolation motivated many to seek companionship through dating.</li>
            <li>For others, &ldquo;it just happened&rdquo; when they weren&rsquo;t actively looking.</li>
            <li>Many selected: &ldquo;I&rsquo;m happy with my life, but it could be better if I found the right person to share it with.&rdquo;</li>
          </ul>

          <h3>Interaction</h3>
          <ul className="cs-list">
            <li>The most challenging aspect was not being able to meet in-person as easily; physical safety was a major concern.</li>
            <li>Dates were more casual, especially for those in committed relationships. &ldquo;I don&rsquo;t even dress up for my dates anymore.&rdquo;</li>
            <li>Emotional support became a key aspect of sustaining relationships and coping with pandemic-induced stressors.</li>
            <li>&ldquo;COVID pods&rdquo; emerged as a new social convention.</li>
          </ul>
        </section>

        {/* Nav */}
        <nav className="cs-nav">
          <Link href="/work/trellis" className="cs-nav__next">
            Next project: Trellis →
          </Link>
        </nav>

      </div>
    </article>
  );
}
