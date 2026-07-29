/* Homepage - full landing page with all sections and scroll-to-section nav */
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="hero-center">
        <span className="eyebrow">SAP Data Migration Specialists</span>
        <h1>SAP Data Migration. <span className="highlight">Subcontract Delivery for SIs.</span></h1>
        <p className="sub">ETLZone is a specialist SAP data migration delivery partner. We execute ECC to S/4HANA migrations, BODS and LTMC workstreams, IDoc conversion, and cutover reconciliation — under your brand, inside your delivery methodology, as an extension of your team.</p>
        <div className="hero-ctas">
          <a href="/contact" className="btn-primary">Talk to Us About a Project</a>
          <a href="/services" className="btn-secondary">Explore Our Services →</a>
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
              <h2>An SAP Data Migration Delivery Partner Built for System Integrators</h2>
              <p>We&apos;re not a competitor for your client relationship — we&apos;re execution capacity for your delivery team.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="positioning-box">
              <h3>We don&apos;t sell directly to enterprises.</h3>
              <p>We deliver SAP data migration workstreams for <strong>System Integrators and consulting firms</strong> who need certified execution capacity — for a specific project, a specific phase, or ongoing bench support.</p>
              <p>If you&apos;re an SI scoping an <strong>S/4HANA migration program</strong> and need SAP migration specialists who can be staffed in, work under NDA, and hand off cleanly at go-live — that&apos;s the entire reason ETLZone exists.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services highlight (linked from #services hash) */}
      <section id="services">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">SAP Migration Services</span>
              <h2>SAP Data Migration Services for S/4HANA Delivery Programs</h2>
              <p>Focused, specialist SAP data migration workstreams your team can plug directly into an existing program.</p>
            </ScrollReveal>
          </div>
          <div className="cards-grid">
            {[
              { icon: "⇄", title: "ECC to S/4HANA Migration", desc: "Full-cycle SAP data migration planning and execution from ECC to S/4HANA — object scoping, mapping, load, and validation." },
              { icon: "⚙", title: "SAP BODS &amp; LTMC", desc: "Extraction, transformation, and load workstreams using SAP BODS and LTMC/Migration Cockpit for S/4HANA-native migrations." },
              { icon: "🔗", title: "IDoc Handling &amp; Conversion", desc: "Migration and validation of interface-dependent data, including IDoc structure conversion and integration testing." },
              { icon: "✓", title: "Cutover &amp; Reconciliation", desc: "Mock load cycles, cutover rehearsal, and post-load reconciliation to de-risk your SAP go-live timeline." },
            ].map((s, i) => (
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
              <span className="section-eyebrow">Why SIs Choose ETLZone</span>
              <h2>Why System Integrators Bring ETLZone Into Their SAP Migration Programs</h2>
              <p>A specialist SAP migration subcontractor built to reduce delivery risk, not add to it.</p>
            </ScrollReveal>
          </div>
          <div className="why-grid">
            {[
              { num: "01", title: "Narrow Scope, Deep Depth", desc: "We only do SAP data migration. No analytics, no app development, no general BI — so there&apos;s no scope creep and no competing priorities on your project timeline." },
              { num: "02", title: "Drop-In Delivery", desc: "We work inside your PM tooling, your status cadence, your naming conventions. Your client sees your delivery, not ours." },
              { num: "03", title: "Surge Capacity Without Headcount Risk", desc: "Bring us in for a migration phase, release us at go-live. No bench cost between engagements." },
              { num: "04", title: "NDA &amp; Confidentiality as Standard", desc: "Confidentiality isn&apos;t a negotiation — it&apos;s the default posture for every SAP migration engagement we take on." },
            ].map((item, i) => (
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
              <h2>Proven SAP Data Migration Delivery Track Record</h2>
              <p><span className="highlight-num">12+</span> end-to-end SAP data migrations delivered across ECC to S/4HANA programs.</p>
              <p>Combined SAP delivery experience across the team, including backgrounds at Accenture and SLB.</p>
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
              <p>Three ways SIs typically bring ETLZone into an SAP data migration program.</p>
            </ScrollReveal>
          </div>
          <div className="engage-list">
            {[
              { title: "Staff Augmentation", desc: "Migration specialists staffed directly into your live SAP project team." },
              { title: "Subcontracted Workstream", desc: "Full ownership of a defined migration workstream, delivered under your program." },
              { title: "Fixed-Scope Module Delivery", desc: "A specific module delivered end-to-end — e.g., the BODS load layer only." },
            ].map((item, i) => (
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
    </>
  );
}
