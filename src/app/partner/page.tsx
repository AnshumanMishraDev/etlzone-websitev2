/* Partner page - engagement models comparison */
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Flexible SAP data migration engagement models for System Integrators — staff augmentation, subcontracted workstreams, and fixed-scope module delivery.",
};

const models = [
  {
    title: "Staff Augmentation",
    desc: "SAP data migration specialists integrated directly into your existing delivery team.",
    best: "Projects requiring flexible capacity, rapid onboarding, and seamless team integration.",
    engagement: "Month-to-month flexibility. Pay per resource. No fixed commitment.",
    scope: "SAP ECC to S/4HANA support, Data migration cockpit configuration, cutover planning assistance.",
  },
  {
    title: "Subcontracted Workstream",
    desc: "Full ownership of a defined SAP data migration workstream delivered under your brand.",
    best: "Risk isolation, focused delivery, and accountability. Projects with clear phase boundaries.",
    engagement: "Structured contract. Fixed scope. Defined timeline. Regular status updates in your cadence.",
    scope: "SAP BODS configuration, data conversion, migration testing, cutover execution, post-go-live support.",
  },
  {
    title: "Fixed-Scope Module Delivery",
    desc: "End-to-end delivery of a specific module or technical layer — turnkey execution.",
    best: "Budget certainty, specialized expertise, and minimal integration overhead.",
    engagement: "Fixed fee. Fixed timeline. Clear success criteria. Turnkey handoff.",
    scope: 'Example: "BODS load layer only" or "SAP Migration Cockpit only" or "Data validation & reconciliation."',
  },
];

const tableRows = [
  ["Duration", "Flexible (month-to-month)", "Defined phase (3-12 months)", "Fixed timeline (4-16 weeks)"],
  ["Cost Model", "Resource-based (T&M)", "Phase-based or milestone", "Fixed price"],
  ["Risk Profile", "Shared with your team", "ETLZone owns delivery", "Fixed scope = predictable"],
  ["Skill Transfer", "High (embedded team)", "Documented handoff", "Technical documentation"],
  ["Visibility", "Daily (your PMO)", "Your status cadence", "Milestone-based reporting"],
  ["Best For", "Surge capacity, learning", "Full offloading, risk mitigation", "Specialized tasks, budget certainty"],
];

const scenarios = [
  { icon: "📋", question: "We need SAP migration specialists for 6 months but aren't sure on exact scope", answer: "Staff Augmentation. Flexible monthly billing, easy to scale up or down, your team maintains control. Ideal for exploratory phases or resource gaps." },
  { icon: "🎯", question: "We want to offload the entire SAP data migration workstream — we're handling other WIPs", answer: "Subcontracted Workstream. ETLZone owns the phase from data mapping through cutover. You maintain client relationship. We deliver under your name, under your PM cadence, with your SLAs." },
  { icon: "💰", question: "We need data reconciliation & validation only — fixed cost, fixed timeline", answer: "Fixed-Scope Module Delivery. Define the scope, agree on fee and timeline, get certified deliverables. No scope creep." },
  { icon: "🚀", question: "We're running a greenfield S/4HANA implementation and need SAP data migration cockpit expertise", answer: "Any of the three. Greenfield implementations often benefit from Staff Augmentation early (design phase) and Subcontracted Workstream later (build + cutover). We can blend models." },
  { icon: "📊", question: "We need SAP BODS configuration and migration testing only", answer: "Fixed-Scope Module Delivery. Define the scope, agree on SLAs, deliver turnkey. Minimal dependency on your other teams." },
];

const timelineSteps = [
  { step: "Initiate", desc: "You reach out. We listen to your program scope and needs." },
  { step: "Scope", desc: "We define engagement type, resource needs, and timeline." },
  { step: "Contract", desc: "NDA, engagement agreement, SLAs finalized." },
  { step: "Kickoff", desc: "Resources onboarded. Integration with your team begins." },
  { step: "Execution", desc: "Delivery per engagement model. Your visibility, our accountability." },
  { step: "Handoff", desc: "Knowledge transfer, documentation, clean exit." },
];

export default function PartnerPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Flexible Partnership Models</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            Three Ways to Engage <span className="highlight">ETLZone</span>
          </h1>
          <p className="sub">Choose the SAP data migration engagement model that fits your implementation program. From staff augmentation to full workstream delivery, we offer flexible SAP consulting services and partnership arrangements for System Integrators and enterprises.</p>
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
              <p>Whether you need flexible capacity, full workstream ownership, or fixed-scope delivery, ETLZone adapts to your S/4HANA migration program structure.</p>
            </ScrollReveal>
          </div>
          <div className="engagement-grid">
            {models.map((m, i) => (
              <ScrollReveal key={i} className="engagement-card">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <p><strong>Best for:</strong> {m.best}</p>
                <p><strong>Engagement:</strong> {m.engagement}</p>
                <p><strong>Scope:</strong> {m.scope}</p>
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
                {tableRows.map((row, i) => (
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

      {/* Scenario FAQs */}
      <section>
        <div className="container">
          <div className="section-head">
            <h2 style={{ marginBottom: 40 }}>Which Model Fits Your Scenario?</h2>
          </div>
          <div className="faq-list">
            {scenarios.map((s, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question" style={{ cursor: "default" }}>
                  {s.icon} &quot;{s.question}&quot;
                </div>
                <div className="faq-answer" style={{ maxHeight: 200 }}>
                  <div className="faq-answer-inner"><strong>Recommendation:</strong> {s.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-light">
        <div className="container">
          <div className="section-head"><h2 style={{ marginBottom: 50 }}>Our Engagement Process</h2></div>
          <div className="timeline">
            {timelineSteps.map((t, i) => (
              <div key={i} className="timeline-step">
                <div className="step-circle"><span>{i + 1}</span></div>
                <h4>{t.step}</h4>
                <p>{t.desc}</p>
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
