/* About page - company story, specialization, leadership */
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function AboutPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">About ETLZone</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            A Specialist SAP Data Migration Firm, <span className="highlight">Built to Deliver Under Your Brand</span>
          </h1>
          <p className="sub">ETLZone Solutions LLP is a Mumbai-based SAP data migration services partner specializing in ECC to S/4HANA migrations and SAP BODS implementation. We work exclusively as a subcontract and staffing partner to SAP System Integrators and implementation consulting firms.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="ETLZone team collaborating" />
        </div>
      </div>

      {/* Who We Are */}
      <section className="bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Who We Are</span>
              <h2>An SAP-Only Migration Team, Not a General SAP Consultancy</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="intro-box">
              <p><strong>ETLZone Solutions LLP</strong> is a Mumbai-based SAP data migration services partner specializing in ECC to S/4HANA migrations, SAP BODS, and data migration cockpit configuration.</p>
              <p>We work exclusively as a subcontract and staffing partner to SAP System Integrators — we don&apos;t compete for direct enterprise relationships or white-label our brand into your client engagements. Our <strong>50+ SAP-certified specialists</strong> bring deep expertise in ECC to S/4HANA conversions, greenfield implementations, and complex data migrations.</p>
              <p>Based in Mumbai with UTC-friendly operations, we embed seamlessly into your programs with focused delivery and no competing priorities.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Specialization - pivot story */}
      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Our Specialization</span>
              <h2>Why ETLZone Went All-In on SAP Data Migration</h2>
              <p>We started as a broader data and analytics firm. We deliberately narrowed because depth beats breadth when your program&apos;s go-live is on the line.</p>
            </ScrollReveal>
          </div>
          <div className="pivot-grid">
            <ScrollReveal>
              <div className="pivot-card before">
                <span className="pivot-label">Where We Started</span>
                <h3>General Data &amp; Analytics</h3>
                <ul>
                  <li>Tableau &amp; Power BI dashboards</li>
                  <li>General data integrations</li>
                  <li>Custom application development</li>
                  <li>Mixed-priority delivery teams</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="pivot-card after">
                <span className="pivot-label">Where We Are Now</span>
                <h3>SAP Data Migration Services, Exclusively</h3>
                <ul>
                  <li>ECC to S/4HANA migration &amp; conversions</li>
                  <li>Greenfield SAP implementation support</li>
                  <li>SAP BODS &amp; SAP Migration Cockpit configuration</li>
                  <li>IDoc handling, data conversion &amp; validation</li>
                  <li>Data migration cutover planning &amp; execution</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <p className="exclusion-note">We made this call because SI partners don&apos;t need another generalist vendor — they need a migration specialist who shows up, owns the scoped workstream, and leaves no loose ends at go-live.</p>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="exclusions bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Scope Discipline</span>
              <h2>What We Don&apos;t Do</h2>
              <p>Deliberate exclusions keep scope exactly where you set it.</p>
            </ScrollReveal>
          </div>
          <div className="exclusion-grid">
            {[
              { title: "General SAP Consulting", desc: "No functional configuration, no broader SAP advisory work — we stay in the data migration lane exclusively." },
              { title: "Analytics &amp; BI", desc: "No Tableau, Power BI, or dashboarding — that chapter is completely closed to avoid scope overlap." },
              { title: "Application Development", desc: "No custom app builds. We don&apos;t compete for adjacent scope on your program or with other delivery partners." },
            ].map((item, i) => (
              <ScrollReveal key={i} className="exclusion-card">
                <div className="x-icon">✕</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Leadership &amp; Team</span>
              <h2>Led by SAP Delivery Veterans. Executed by Certified Specialists</h2>
              <p>Our team brings deep SAP data migration expertise from tier-1 consulting firms, now focused exclusively on supporting System Integrators.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="leader-card">
              <div className="leader-avatar">MS</div>
              <div>
                <h3>Mohammed Samim Ansari</h3>
                <span className="leader-role">Founder &amp; Principal SAP Migration Architect</span>
                <p>Samim brings <strong>12+ years of SAP data migration delivery</strong> experience from Accenture and SLB, where he led end-to-end ECC to S/4HANA migration programs across manufacturing, pharma, and automotive sectors. At Accenture, he architected SAP BODS and SAP Migration Cockpit solutions for Global 500 companies, managing complex data conversions and greenfield implementations at scale.</p>
                <p>Frustrated by the generalist approach at larger consulting firms, Samim founded ETLZone to focus on what he does best: uncompromised SAP data migration delivery for System Integrators who need specialist execution capacity without the overhead.</p>
                <div className="leader-tags">
                  {["Ex-Accenture", "Ex-SLB", "SAP Certified", "SAP Data Migration", "ECC to S/4HANA Architect"].map((tag, i) => (
                    <span key={i} className="leader-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="team-stats-card">
              <h3>Our SAP Data Migration Team</h3>
              <div className="team-stats-grid">
                <div className="stat-item"><span className="number">50+</span><span className="label">SAP-Certified Migration Specialists</span></div>
                <div className="stat-item"><span className="number">12+ Yrs</span><span className="label">Combined ECC to S/4HANA Expertise</span></div>
                <div className="stat-item"><span className="number">3</span><span className="label">Key Sectors: Pharma, Auto, Manufacturing</span></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner heading="Ready to Discuss ETLZone as Your SAP Data Migration Partner?" subtext="Let&apos;s explore how we fit into your next SAP implementation program." linkText="Schedule a Conversation" href="mailto:officials@etlzone.com" />
      <FullFooter />
    </>
  );
}
