/* Partner page - engagement models comparison */
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function PartnerPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Flexible Partnership Models</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            Three Ways to Engage <span className="highlight">ETLZone</span>
          </h1>
          <p className="sub">Choose the SAP data migration engagement model that fits your implementation program.</p>
          <div className="hero-ctas">
            <a href="/contact" className="btn-primary">Schedule a Scoping Call</a>
          </div>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Business partnership" />
        </div>
      </div>

      {/* Three engagement models */}
      <section id="engage">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Engagement Models</span>
              <h2>SAP Data Migration Services — Choose Your Partnership Model</h2>
              <p>Whether you need flexible capacity, full workstream ownership, or fixed-scope delivery, ETLZone adapts to your program structure.</p>
            </ScrollReveal>
          </div>
          <div className="engagement-grid">
            {[
              { title: "Staff Augmentation", points: ["Flexible monthly capacity", "Rapid onboarding", "Pay per resource", "ECC to S/4HANA support"] },
              { title: "Subcontracted Workstream", points: ["Full workstream ownership", "Risk isolation", "Structured contract", "Your PM cadence"] },
              { title: "Fixed-Scope Module Delivery", points: ["Turnkey execution", "Budget certainty", "Fixed timeline", "Clear success criteria"] },
            ].map((model, i) => (
              <ScrollReveal key={i} className="engagement-card">
                <h3>{model.title}</h3>
                {model.points.map((p, j) => <p key={j}>• {p}</p>)}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="comparison">
        <div className="container">
          <div className="section-head"><h2 style={{ marginBottom: 40 }}>Quick Comparison</h2></div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Factor</th><th>Staff Augmentation</th><th>Subcontracted Workstream</th><th>Fixed-Scope Module</th></tr>
              </thead>
              <tbody>
                {[
                  ["Duration", "Flexible (month-to-month)", "Defined phase (3-12 months)", "Fixed timeline (4-16 weeks)"],
                  ["Cost Model", "Resource-based (T&M)", "Phase-based or milestone", "Fixed price"],
                  ["Risk Profile", "Shared with your team", "ETLZone owns delivery", "Fixed scope = predictable"],
                  ["Best For", "Surge capacity", "Full offloading", "Specialized tasks"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row[0]}</strong></td>
                    {row.slice(1).map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-light">
        <div className="container">
          <div className="section-head"><h2 style={{ marginBottom: 50 }}>Our Engagement Process</h2></div>
          <div className="timeline">
            {["Initiate", "Scope", "Contract", "Kickoff", "Execution", "Handoff"].map((step, i) => (
              <div key={i} className="timeline-step">
                <div className="step-circle"><span>{i + 1}</span></div>
                <h4>{step}</h4>
                <p>{
                  ["You reach out. We listen.", "Define scope and timeline.", "NDA, agreement, SLAs.", "Resources onboarded.", "Delivery begins.", "Knowledge transfer."][i]
                }</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Discuss Your SAP Data Migration Partnership?" linkText="Schedule a Delivery Conversation" />
      <FullFooter />
    </>
  );
}
