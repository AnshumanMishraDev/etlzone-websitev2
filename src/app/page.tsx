/* Homepage - full landing page with all sections and scroll-to-section nav */
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

const serviceCards = [
  { icon: "⇄", title: "SAP ECC to S/4HANA Migration", desc: "Full-cycle SAP ECC to S/4HANA migration services including system conversion, greenfield implementation strategy, and data migration cockpit setup for seamless transitions." },
  { icon: "⚙", title: "SAP Data Migration & Cockpit", desc: "Expert configuration of SAP data migration cockpit, SAP BODS, and legacy data migration from legacy systems with proven data migration tools and structured methodology." },
  { icon: "✦", title: "Data Cleansing & Conversion", desc: "SAP data conversion and cleansing for data quality assurance in S/4HANA. Data migration in SAP ABAP, HANA, and legacy system consolidation with precision validation." },
  { icon: "↔", title: "SAP Data Mapping & Reconciliation", desc: "Comprehensive SAP data mapping, validation, and reconciliation services ensuring data integrity across ECC to S/4HANA migration with detailed data migration steps documentation." },
  { icon: "▶", title: "Migration Testing & Cutover", desc: "End-to-end SAP data migration cutover planning, mock runs, and go-live support. Data migration testing across all workstreams with risk mitigation and cutover plan execution." },
  { icon: "⬡", title: "SAP HANA Data Migration Services", desc: "Specialized SAP HANA migration and data migration in SAP BODS, SAP ADM implementation, and data migration from legacy systems to HANA infrastructure." },
];

const whyUsItems = [
  { num: "01", title: "Narrow Scope, Deep Depth", desc: "We only do SAP data migration. No analytics, no app development, no general BI — so there&apos;s no scope creep and no competing priorities on your project timeline." },
  { num: "02", title: "Drop-In Delivery", desc: "We work inside your PM tooling, your status cadence, your naming conventions. Your client sees your delivery, not ours." },
  { num: "03", title: "Surge Capacity Without Headcount Risk", desc: "Bring us in for a migration phase, release us at go-live. No bench cost between engagements." },
  { num: "04", title: "NDA &amp; Confidentiality as Standard", desc: "Confidentiality isn&apos;t a negotiation — it&apos;s the default posture for every SAP migration engagement we take on." },
];

const engageItems = [
  { title: "Staff Augmentation", desc: "Migration specialists staffed directly into your live SAP project team." },
  { title: "Subcontracted Workstream", desc: "Full ownership of a defined migration workstream, delivered under your program." },
  { title: "Fixed-Scope Module Delivery", desc: "A specific module delivered end-to-end — e.g., the BODS load layer only." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="hero-center">
        <span className="eyebrow">Trusted SAP Data Migration Partner</span>
        <h1>SAP Data Migration Services <span className="highlight">for Enterprises &amp; SAP Partners</span></h1>
        <p className="sub">Etlzone delivers specialist SAP Data Migration Services for SAP ECC to S/4HANA Migration projects, including SAP Migration Cockpit, SAP BODS, Data Conversion and Cutover Planning as an extension of your team.</p>
        <div className="hero-ctas">
          <a href="/contact" className="btn-primary">Talk to Us About a Project</a>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <AnimatedCounter value={25} />
            <span className="stat-label">SAP Migration Projects Completed</span>
          </div>
          <div className="stat-item">
            <AnimatedCounter value={7} />
            <span className="stat-label">Industries Served</span>
          </div>
          <div className="stat-item">
            <AnimatedCounter value={50} />
            <span className="stat-label">SAP-Certified Specialists</span>
          </div>
          <div className="stat-item">
            <AnimatedCounter value={20000} />
            <span className="stat-label">Hours of SAP Delivery Experience</span>
          </div>
        </div>
      </section>

      {/* Positioning - Who we work with */}
      <section className="positioning">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Our Positioning</span>
              <h2>Migration Expertise You Can Rely On</h2>
              <p>From planning to go-live, Etlzone supports SAP implementation with specialist SAP data migration expertise. We combine proven methodologies, technical excellence and strict data security practices to deliver accurate migrations on time and with confidence.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="positioning-box">
              <h3>Built to Strengthen Your SAP Delivery Team</h3>
              <p>We extend your SAP delivery team with certified migration specialists who work under your brand. Clean handoff at go-live, no scope creep.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services highlight (linked from #services hash) */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Our SAP Migration Services</span>
              <h2>Specialist SAP Data Migration Services</h2>
              <p>Specialist SAP data migration services that integrate seamlessly with your implementation team.</p>
            </ScrollReveal>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {serviceCards.map((s, i) => (
              <ScrollReveal key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="/services" className="btn-secondary">View All Services →</a>
          </div>
        </div>
      </section>

      {/* Why Us (linked from #why-us hash) */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Why SIs Choose Etlzone</span>
              <h2>Why System Integrators Bring Etlzone Into Their SAP Migration Programs</h2>
              <p>A specialist SAP migration subcontractor built to reduce delivery risk, not add to it.</p>
            </ScrollReveal>
          </div>
          <div className="why-grid">
            {whyUsItems.map((item, i) => (
              <ScrollReveal key={i} className="why-card">
                <div className="why-num">{item.num}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="/why-us" className="btn-secondary">Learn More About Why Us →</a>
          </div>
        </div>
      </section>

      {/* Track Record (linked from #track-record hash) */}
      <section id="track-record">
        <div className="container">
          <ScrollReveal>
            <div className="track-record-card">
              <h2>12+ S/4HANA migrations delivered. Zero failed go-lives</h2>
              <p>Our team includes SAP-certified migration architects from tier-1 SIs. Every project on time, on budget with certified post-migration support.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Engage models (linked from #engage hash) */}
      <section id="engage">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">How We Engage</span>
              <h2>Flexible SAP Migration Engagement Models for SI Partners</h2>
              <p>Three ways SIs typically bring Etlzone into an SAP data migration program.</p>
            </ScrollReveal>
          </div>
          <div className="engage-list">
            {engageItems.map((item, i) => (
              <ScrollReveal key={i} className="engage-item">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="/partner" className="btn-secondary">See Full Engagement Models →</a>
          </div>
        </div>
      </section>

      <CTABanner />
      <FullFooter />
    </>
  );
}
