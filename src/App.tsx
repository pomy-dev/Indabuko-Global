import type { FC } from 'react'
import CompanyLogo from './assets/IMG/logo.jpg'

const App: FC = () => {
  return (
    <div className="itc-page">
      <header className="itc-header">
        <div className="itc-container itc-header-inner">
          <div className="itc-logo-block">
            <div className="itc-logo-mark itc-logo-mark-image">
              <img src={CompanyLogo} alt="I.T.C" />
            </div>
            <div>
              <div className="itc-logo-text">Indabuko Tech Crafts</div>
              <div className="itc-logo-subtitle">We Build IT. We Solve IT. We Innovate IT.</div>
            </div>
          </div>
          <nav className="itc-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#business-link">Business Link</a>
            <a href="#portfolio">Work</a>
            <a href="#partners">Partners</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="itc-hero">
          <div className="itc-container itc-hero-grid">
            <div>
              <p className="itc-eyebrow">Data‑Driven Technology Studio</p>
              <h1>
                Turning raw data into
                <span className="itc-accent"> decisions, products and growth.</span>
              </h1>
              <p className="itc-hero-lead">
                Indabuko Tech Crafts is a full‑stack, AI‑powered data company. We harvest, process and
                analyze data, then transform it into decision‑ready information, predictive insights and
                production‑grade software for organisations of every size.
              </p>
              <div className="itc-hero-actions">
                <a href="#contact" className="itc-btn itc-btn-primary">
                  Talk to our team
                </a>
                <a href="#services" className="itc-btn itc-btn-ghost">
                  Explore our capabilities
                </a>
              </div>
              <p className="itc-hero-footnote">
                Based at RSTP Phocweni, Manzini, Eswatini &mdash; serving organisations across sectors and
                regions.
              </p>
            </div>
            <div className="itc-hero-panel">
              <div className="itc-hero-card">
                <h2>AI‑Ready Data Partner</h2>
                <ul>
                  <li>Advanced data collection, cleansing and structuring</li>
                  <li>Predictive analytics and insight generation</li>
                  <li>Web, mobile and systems development</li>
                  <li>Offline‑first and low‑connectivity solutions</li>
                  <li>Database design, management and backup at scale</li>
                </ul>
              </div>
              <div className="itc-hero-metrics">
                <div>
                  <div className="itc-metric-icon itc-metric-icon-ai" aria-hidden="true" />
                  <div className="itc-metric-text">
                    <span className="itc-metric-number">AI‑First</span>
                    <span className="itc-metric-label">Orientation</span>
                  </div>
                </div>
                <div>
                  <div className="itc-metric-icon itc-metric-icon-offline" aria-hidden="true" />
                  <div className="itc-metric-text">
                    <span className="itc-metric-number">Offline</span>
                    <span className="itc-metric-label">Data Expertise</span>
                  </div>
                </div>
                <div>
                  <div className="itc-metric-icon itc-metric-icon-fullstack" aria-hidden="true" />
                  <div className="itc-metric-text">
                    <span className="itc-metric-number">Full‑Stack</span>
                    <span className="itc-metric-label">Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="itc-section itc-section-alt">
          <div className="itc-container itc-two-column">
            <div>
              <h2>Company Profile</h2>
              <p>
                Indabuko Tech Crafts was founded by three full‑stack developers with a shared passion for
                data, applied AI and practical technology. Today, we operate as a specialised
                data‑science‑oriented technology company, supported by a carefully mentored pool of interns
                and collaborators.
              </p>
              <p>
                We specialise in generating, computing, processing, analysing and managing data using
                advanced tools and AI. We convert complex datasets into curated reports, dashboards,
                predictions and APIs that businesses can act on immediately.
              </p>
              <p>
                Beyond data, we design and build production‑ready software &mdash; web applications, mobile
                apps and internal systems &mdash; that make those insights available where they matter:
                in the hands of decision‑makers, frontline teams and everyday people.
              </p>
            </div>
            <div className="itc-card itc-card-outline">
              <h3>Vision, Mission &amp; Objectives</h3>
              <div className="itc-key-block">
                <h4>Vision</h4>
                <p>
                  To drive the best and fairest use of technology and data at minimal cost, so that even
                  the &ldquo;mere man&rdquo; can access insight, opportunity and tools once reserved for
                  large organisations.
                </p>
              </div>
              <div className="itc-key-block">
                <h4>Mission</h4>
                <p>
                  To transform the business landscape by making reliable data, smart technology and AI
                  assistance available to both established enterprises and less‑privileged individuals, so
                  they can discover opportunities, act with confidence and build sustainable profit.
                </p>
              </div>
              <div className="itc-key-block">
                <h4>Objectives</h4>
                <ul>
                  <li>Build advanced, time‑relevant technologies rooted in real‑world needs.</li>
                  <li>Solve everyday and strategic technology hurdles for organisations.</li>
                  <li>Innovate new ways of harvesting, managing and monetising data.</li>
                  <li>Champion offline‑first and low‑connectivity access to digital services.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="itc-section">
          <div className="itc-container">
            <h2>What We Do</h2>
            <p className="itc-section-intro">
              We sit at the intersection of data science, software engineering and practical IT support.
              Our work ranges from deep analytics to everyday systems that keep organisations moving.
            </p>

            <div className="itc-grid itc-grid-3">
              <div className="itc-card">
                <h3>Data Management &amp; Analytics</h3>
                <ul>
                  <li>End‑to‑end data harvesting and ingestion</li>
                  <li>Data cleaning, validation and enrichment</li>
                  <li>Advanced analysis, segmentation and clustering</li>
                  <li>Predictive modelling and forecasting using AI</li>
                  <li>Insight reports, dashboards and executive summaries</li>
                </ul>
              </div>
              <div className="itc-card">
                <h3>Database &amp; Offline Data Solutions</h3>
                <ul>
                  <li>Database design, optimisation and administration</li>
                  <li>Enterprise‑grade backup and recovery strategies</li>
                  <li>Offline‑first data access and sync techniques</li>
                  <li>Local data caching for low‑bandwidth environments</li>
                  <li>Secure data storage and access control</li>
                </ul>
              </div>
              <div className="itc-card">
                <h3>Applications &amp; Systems</h3>
                <ul>
                  <li>Web applications and web services (APIs)</li>
                  <li>Android and cross‑platform mobile apps</li>
                  <li>Internal business systems and dashboards</li>
                  <li>Systems integration and data pipelines</li>
                  <li>Custom tools for operations and field teams</li>
                </ul>
              </div>
            </div>

            <div className="itc-grid itc-grid-3 itc-grid-gap-top">
              <div className="itc-card itc-card-muted">
                <h3>AI‑Powered Insight Services</h3>
                <ul>
                  <li>AI‑assisted reporting and commentary on your data</li>
                  <li>Recommendation engines for products and services</li>
                  <li>Scenario modelling and &ldquo;what‑if&rdquo; simulations</li>
                  <li>Knowledge‑base and chatbot experiences</li>
                </ul>
              </div>
              <div className="itc-card itc-card-muted">
                <h3>IT Support, Hardware &amp; Networking</h3>
                <ul>
                  <li>Computer hardware sourcing and configuration</li>
                  <li>Troubleshooting and performance optimisation</li>
                  <li>Local networking and connectivity support</li>
                  <li>On‑site and remote technical assistance</li>
                </ul>
              </div>
              <div className="itc-card itc-card-muted">
                <h3>People, Vacancies &amp; Internships</h3>
                <ul>
                  <li>Structured internship programmes in tech and data</li>
                  <li>Placement and collaboration with partner companies</li>
                  <li>Vacancy announcements across our networks</li>
                  <li>Support for organisations hosting interns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="business-link" className="itc-section itc-section-alt">
          <div className="itc-container itc-two-column">
            <div>
              <h2>Business Link &mdash; Our Flagship Super App</h2>
              <p>
                Business Link is a next‑generation business enablement platform developed by Indabuko Tech
                Crafts. It is designed as an offline‑capable, AI‑supported hub for information, opportunity
                and services.
              </p>
              <p>
                The app does not process payments; instead it focuses on discovery, connection and
                education. Its purpose is to bring together businesses, financial providers, travellers,
                job‑seekers and informal workers into a single, searchable, always‑available environment.
              </p>
            </div>
            <div className="itc-card itc-card-outline">
              <h3>Key Modules</h3>
              <ul className="itc-list-columns">
                <li>Offline‑ready business directory</li>
                <li>Marketing hub for loans, investments and insurance</li>
                <li>Verified financial institution listings</li>
                <li>For‑hire service vehicle marketplace</li>
                <li>Vacancies and tenders board</li>
                <li>Profiles for informal workers and artisans</li>
                <li>Quick posting of informal piece‑jobs</li>
              </ul>
              <h4 className="itc-inline-heading">AI at the Core</h4>
              <p>
                Business Link is powered by AI to help users learn, compare options and receive tailored
                guidance. The AI assistant explains financial products, suggests relevant opportunities and
                helps users navigate the directory based on their context and goals.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="itc-section">
          <div className="itc-container">
            <h2>Accomplished Work &amp; Industry Standing</h2>
            <p className="itc-section-intro">
              Our portfolio spans super apps, core systems and tailored solutions for organisations across
              sectors. We are known for building reliable tools where connectivity and budgets are limited,
              and where data quality is critical.
            </p>

            <div className="itc-grid itc-grid-3">
              <div className="itc-card">
                <h3>Flagship Products</h3>
                <ul>
                  <li>Business Link, the offline‑ready business and opportunity hub</li>
                  <li>Custom analytics dashboards for SMEs and agencies</li>
                  <li>Sector‑specific data collection and reporting systems</li>
                </ul>
              </div>
              <div className="itc-card">
                <h3>Client Projects</h3>
                <ul>
                  <li>Websites and portals for external organisations</li>
                  <li>Mobile apps tailored to field operations and outreach</li>
                  <li>Internal systems for process tracking and reporting</li>
                </ul>
              </div>
              <div className="itc-card">
                <h3>Industry Ranking</h3>
                <p>
                  Indabuko Tech Crafts is recognised as a specialist in data‑centric, offline‑capable
                  solutions in Eswatini. Our full‑stack origins, AI orientation and experience with
                  low‑resource environments position us as a trusted partner for organisations that need
                  both innovation and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="itc-section itc-section-alt">
          <div className="itc-container itc-two-column">
            <div>
              <h2>Partnerships &amp; Collaboration</h2>
              <p>
                We have partnered with multiple companies and agencies to provide technology services,
                data manipulation, analytics and systems support. Our role ranges from end‑to‑end solution
                ownership to behind‑the‑scenes data engineering and integration.
              </p>
              <p>
                With each partner we bring a blend of strategy, engineering and pragmatism &mdash; choosing
                tools and architectures that fit real‑world constraints rather than trends.
              </p>
            </div>
            <div className="itc-card itc-card-outline">
              <h3>What Partners &amp; Employers Gain</h3>
              <ul>
                <li>
                  Access to a data‑science‑oriented engineering team with full‑stack capabilities (web,
                  mobile and systems).
                </li>
                <li>
                  Reliable data pipelines and curated information products that can be resold, embedded or
                  used internally.
                </li>
                <li>
                  A practical innovation lab for piloting new digital ideas, especially in offline or
                  low‑connectivity environments.
                </li>
                <li>
                  A recruitment and internship partner for discovering and shaping emerging tech talent.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="itc-section">
          <div className="itc-container itc-two-column">
            <div>
              <h2>Significance in the Job Market</h2>
              <p>
                Indabuko Tech Crafts plays a dual role in the job market: as a creator of tools that
                connect people to opportunities, and as a home for developers, analysts and interns to grow
                their careers.
              </p>
              <p>
                Through Business Link and our broader platforms, we surface vacancies, tenders, informal
                piece‑jobs and service opportunities, especially for those outside traditional recruitment
                channels. Our systems give visibility to small businesses, informal workers and growing
                professionals.
              </p>
            </div>
            <div className="itc-card itc-card-muted">
              <h3>What Other Companies Can Expect</h3>
              <ul>
                <li>Clear, honest communication and a consultative approach.</li>
                <li>Documentation, training and handover that empower your team.</li>
                <li>Solutions architected for growth, not just quick fixes.</li>
                <li>
                  Support for both tech‑savvy organisations and those just starting their digital journey.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="careers" className="itc-section itc-section-alt">
          <div className="itc-container itc-two-column">
            <div>
              <h2>Careers at Indabuko Tech Crafts</h2>
              <p>
                Our roots are in engineering, learning and experimentation. We are always interested in
                meeting people who are passionate about data, AI, problem‑solving and building tools that
                make a difference for real businesses and communities.
              </p>
              <p>
                Whether you are an experienced professional, a graduate or still a student, Indabuko Tech
                Crafts offers space to grow through real‑world projects, mentorship from full‑stack
                engineers and exposure to data‑driven work.
              </p>
              <div className="itc-hero-actions">
                <a href="mailto:careers@indabukotechcrafts.com" className="itc-btn itc-btn-primary">
                  Send your CV
                </a>
                <a href="mailto:internships@indabukotechcrafts.com" className="itc-btn itc-btn-ghost">
                  Ask about internships
                </a>
              </div>
            </div>
            <div className="itc-card itc-card-outline">
              <h3>Who We&#39;re Looking For</h3>
              <ul>
                <li>Full‑stack developers who enjoy working close to the data.</li>
                <li>Data analysts and aspiring data scientists eager to work with real datasets.</li>
                <li>Mobile and web developers who care about offline‑first experiences.</li>
                <li>
                  Interns and students looking for practical exposure to professional tools and workflows.
                </li>
              </ul>
              <h3 style={{ marginTop: '1rem' }}>How We Work With Talent</h3>
              <ul>
                <li>Mentored internship and graduate programmes on live projects.</li>
                <li>Opportunities to contribute to flagship products like Business Link.</li>
                <li>Collaboration with partner organisations for placements and joint projects.</li>
                <li>
                  A culture that values curiosity, humility, responsibility and continuous learning.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="itc-section itc-section-highlight">
          <div className="itc-container itc-two-column">
            <div>
              <h2>For Any Organisation, In Any Sector</h2>
              <p>
                While our foundation is in data and AI, we regularly support companies whose primary
                business is not technology. Whether you are in finance, logistics, education, agriculture,
                retail or the public sector, we turn your information flows into an asset.
              </p>
            </div>
            <div className="itc-card itc-card-overlay">
              <h3>How We Can Help Unrelated Industries</h3>
              <ul>
                <li>Design and build customer‑facing portals and mobile apps.</li>
                <li>Automate manual reporting, reconciliation and approvals.</li>
                <li>Integrate legacy systems into modern web services.</li>
                <li>Introduce data‑driven decision‑making with minimal disruption.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="itc-footer">
        <div className="itc-container itc-footer-grid">
          <div>
            <h2>Contact Indabuko Tech Crafts</h2>
            <p>
              Ready to explore a project, partnership or internship collaboration? Reach out and our team
              will respond with options tailored to your needs.
            </p>
            <div className="itc-contact-grid">
              <div>
                <h3>Office</h3>
                <p>
                  Royal Science &amp; Technology Park (RSTP)
                  <br />
                  Phocweni, Manzini, Eswatini
                </p>
              </div>
              <div>
                <h3>Direct Channels</h3>
                <p>
                  Phone / WhatsApp:{' '}
                  <a href="tel:+26876957019" aria-label="Phone number">
                    +268 7695 7019
                  </a>
                  <br />
                  Email:{' '}
                  <a href="mailto:indabukocalculus@gmail.com">indabukocalculus@gmail.com</a>
                </p>
              </div>
              <div>
                <h3>Digital</h3>
                <p>
                  Website:{' '}
                  <a href="https://www.indabukotechcrafts.com" target="_blank" rel="noreferrer">
                    www.indabukotechcrafts.com
                  </a>
                  <br />
                  LinkedIn:{' '}
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    Indabuko Tech Crafts
                  </a>
                  <br />
                  Facebook / X / Instagram:{' '}
                  <span>@IndabukoTechCrafts</span>
                </p>
              </div>
            </div>
          </div>
          <div className="itc-footer-note">
            <h3>Work With Us</h3>
            <p>
              We welcome enquiries from companies seeking long‑term data partners, once‑off project support
              or structured internship placements. Tell us about your context and we will advise an
              approach that balances ambition with practicality.
            </p>
          </div>
        </div>
        <div className="itc-footer-bottom">
          <div className="itc-container itc-footer-bottom-inner">
            <span>&copy; {new Date().getFullYear()} Indabuko Tech Crafts. All rights reserved.</span>
            <span>Data‑driven solutions for a connected, inclusive business landscape.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

