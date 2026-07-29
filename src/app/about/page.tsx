import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function AboutPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">About ETLZone</span>
          <h1 style={{ fontSize: "clamp(30px,4.2vw,46px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            A Specialist SAP Data Migration Firm, <span className="highlight">Built to Deliver Under Your Brand</span>
          </h1>
          <p className="sub">ETLZone Solutions LLP is a Mumbai-based SAP data migration services partner specializing in ECC to S/4HANA migrations and SAP BODS implementation. We work exclusively as a subcontract and staffing partner to SAP System Integrators and implementation consulting firms — nothing else, on purpose.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="ETLZone team collaborating" />
        </div>
      </div>

      <section className="bg-light" id="story">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Who We Are</span>
              <h2>An SAP-Only Migration Team, Not a General SAP Consultancy</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="intro-box">
              <p><strong>ETLZone Solutions LLP</strong> is a Mumbai-based SAP data migration services partner specializing exclusively in ECC to S/4HANA migrations, SAP BODS, SAP Migration Cockpit configuration, and data migration services. We work exclusively as a subcontract and staffing partner to SAP System Integrators, implementation consulting firms, and global delivery partners — we do not compete for direct enterprise relationships, and we do not white-label our own brand into your client engagements.</p>
              <p>Founded to solve a specific problem: SAP System Integrators need specialist migration execution capacity without the overhead of maintaining a dedicated in-house team. Our team includes <strong>50+ SAP-certified migration specialists</strong> with deep expertise across ECC to S/4HANA conversions, greenfield implementations, SAP data migration cockpit, SAP BODS, IDoc handling, and cutover execution. We&apos;ve delivered migrations across pharma, automotive, manufacturing, and engineering sectors.</p>
              <p>Based in Mumbai with operations spanning UTC-friendly timezones, we combine SAP delivery depth with cost efficiency and agility. This focus — exclusively on migration, nothing else — is what allows us to embed into your programs without competing for adjacent scope or client mindshare.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="scope">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Our Specialization</span>
              <h2>Why ETLZone Went All-In on SAP Data Migration</h2>
              <p>We started as a broader data and analytics firm. We deliberately narrowed — because depth beats breadth when your program&apos;s go-live is on the line.</p>
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
          <p className="exclusion-note" style={{ marginTop: 24 }}>We made this call because SI partners don&apos;t need another generalist vendor — they need a migration specialist who shows up, owns the scoped workstream, and leaves no loose ends at go-live.</p>
        </div>
      </section>

      <section className="exclusions bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Scope Discipline</span>
              <h2>What We Don&apos;t Do</h2>
              <p>Deliberate exclusions keep scope exactly where you set it. No competing priorities. No scope creep.</p>
            </ScrollReveal>
          </div>
          <div className="exclusion-grid">
            <ScrollReveal className="exclusion-card">
              <div className="x-icon">✕</div>
              <h3>General SAP Consulting</h3>
              <p>No functional configuration, no broader SAP advisory work — we stay in the data migration lane exclusively.</p>
            </ScrollReveal>
            <ScrollReveal className="exclusion-card">
              <div className="x-icon">✕</div>
              <h3>Analytics &amp; BI</h3>
              <p>No Tableau, Power BI, or dashboarding — that chapter is completely closed to avoid scope overlap.</p>
            </ScrollReveal>
            <ScrollReveal className="exclusion-card">
              <div className="x-icon">✕</div>
              <h3>Application Development</h3>
              <p>No custom app builds. We don&apos;t compete for adjacent scope on your program or with other delivery partners.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
                  <span className="leader-tag">Ex-Accenture</span>
                  <span className="leader-tag">Ex-SLB</span>
                  <span className="leader-tag">SAP Certified</span>
                  <span className="leader-tag">12+ Years Migration</span>
                  <span className="leader-tag">ECC to S/4HANA Architect</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="team-stats-card">
              <h3>Our SAP Data Migration Team</h3>
              <div className="team-stats-grid">
                <div className="stat-item">
                  <span className="number">50+</span>
                  <span className="label">SAP-Certified Migration Specialists</span>
                </div>
                <div className="stat-item">
                  <span className="number">12+ Yrs</span>
                  <span className="label">Combined ECC to S/4HANA Expertise</span>
                </div>
                <div className="stat-item">
                  <span className="number">3</span>
                  <span className="label">Key Sectors: Pharma, Auto, Manufacturing</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner heading="Ready to Discuss ETLZone as Your SAP Data Migration Partner?" linkText="Schedule a Conversation" />
      <FullFooter />
    </>
  );
}
