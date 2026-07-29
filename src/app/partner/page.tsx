import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function PartnerPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Flexible Partnership Models</span>
          <h1 style={{ fontSize: "clamp(30px,4.2vw,46px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
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
            <ScrollReveal className="engagement-card">
              <h3>Staff Augmentation</h3>
              <p>SAP data migration specialists integrated directly into your existing delivery team.</p>
              <p><strong>Best for:</strong> Projects requiring flexible capacity, rapid onboarding, and seamless team integration.</p>
              <p><strong>Engagement:</strong> Month-to-month flexibility. Pay per resource. No fixed commitment.</p>
              <p><strong>Scope:</strong> SAP ECC to S/4HANA support, Data migration cockpit configuration, cutover planning assistance.</p>
            </ScrollReveal>
            <ScrollReveal className="engagement-card">
              <h3>Subcontracted Workstream</h3>
              <p>Full ownership of a defined SAP data migration workstream delivered under your brand.</p>
              <p><strong>Best for:</strong> Risk isolation, focused delivery, and accountability. Projects with clear phase boundaries.</p>
              <p><strong>Engagement:</strong> Structured contract. Fixed scope. Defined timeline. Regular status updates in your cadence.</p>
              <p><strong>Scope:</strong> SAP BODS configuration, data conversion, migration testing, cutover execution, post-go-live support.</p>
            </ScrollReveal>
            <ScrollReveal className="engagement-card">
              <h3>Fixed-Scope Module Delivery</h3>
              <p>End-to-end delivery of a specific module or technical layer — turnkey execution.</p>
              <p><strong>Best for:</strong> Budget certainty, specialized expertise, and minimal integration overhead.</p>
              <p><strong>Engagement:</strong> Fixed fee. Fixed timeline. Clear success criteria. Turnkey handoff.</p>
              <p><strong>Scope:</strong> Example: &quot;BODS load layer only&quot; or &quot;SAP Migration Cockpit only&quot; or &quot;Data validation &amp; reconciliation.&quot;</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="comparison">
        <div className="container">
          <div className="section-head">
            <h2 style={{ marginBottom: 40 }}>Quick Comparison</h2>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Staff Augmentation</th>
                  <th>Subcontracted Workstream</th>
                  <th>Fixed-Scope Module</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Duration</strong></td><td>Flexible (month-to-month)</td><td>Defined phase (3-12 months)</td><td>Fixed timeline (4-16 weeks)</td></tr>
                <tr><td><strong>Cost Model</strong></td><td>Resource-based (T&amp;M)</td><td>Phase-based or milestone</td><td>Fixed price</td></tr>
                <tr><td><strong>Risk Profile</strong></td><td>Shared with your team</td><td>ETLZone owns delivery</td><td>Fixed scope = predictable</td></tr>
                <tr><td><strong>Skill Transfer</strong></td><td>High (embedded team)</td><td>Documented handoff</td><td>Technical documentation</td></tr>
                <tr><td><strong>Visibility</strong></td><td>Daily (your PMO)</td><td>Your status cadence</td><td>Milestone-based reporting</td></tr>
                <tr><td><strong>Best For</strong></td><td>Surge capacity, learning</td><td>Full offloading, risk mitigation</td><td>Specialized tasks, budget certainty</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2 style={{ marginBottom: 40 }}>Which Model Fits Your Scenario?</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question" style={{ cursor: "default" }}>📋 &quot;We need SAP migration specialists for 6 months but aren&apos;t sure on exact scope&quot;</div>
              <div className="faq-answer" style={{ maxHeight: 200 }}>
                <div className="faq-answer-inner"><strong>Recommendation:</strong> Staff Augmentation. Flexible monthly billing, easy to scale up or down, your team maintains control. Ideal for exploratory phases or resource gaps.</div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" style={{ cursor: "default" }}>🎯 &quot;We want to offload the entire SAP data migration workstream&quot;</div>
              <div className="faq-answer" style={{ maxHeight: 200 }}>
                <div className="faq-answer-inner"><strong>Recommendation:</strong> Subcontracted Workstream. ETLZone owns the phase from data mapping through cutover. You maintain client relationship.</div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" style={{ cursor: "default" }}>💰 &quot;We need data reconciliation &amp; validation only — fixed cost, fixed timeline&quot;</div>
              <div className="faq-answer" style={{ maxHeight: 200 }}>
                <div className="faq-answer-inner"><strong>Recommendation:</strong> Fixed-Scope Module Delivery. Define scope, agree on fee and timeline, get certified deliverables. No scope creep.</div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" style={{ cursor: "default" }}>🚀 &quot;We&apos;re running a greenfield S/4HANA implementation&quot;</div>
              <div className="faq-answer" style={{ maxHeight: 200 }}>
                <div className="faq-answer-inner"><strong>Recommendation:</strong> Any of the three. Greenfield implementations often benefit from Staff Augmentation early and Subcontracted Workstream later. We can blend models.</div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" style={{ cursor: "default" }}>📊 &quot;We need SAP BODS configuration and migration testing only&quot;</div>
              <div className="faq-answer" style={{ maxHeight: 200 }}>
                <div className="faq-answer-inner"><strong>Recommendation:</strong> Fixed-Scope Module Delivery. Define scope, agree on SLAs, deliver turnkey. Minimal dependency on your other teams.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="section-head">
            <h2 style={{ marginBottom: 50 }}>Our Engagement Process</h2>
          </div>
          <div className="timeline">
            <div className="timeline-step">
              <div className="step-circle"><span>1</span></div>
              <h4>Initiate</h4>
              <p>You reach out. We listen to your program scope and needs.</p>
            </div>
            <div className="timeline-step">
              <div className="step-circle"><span>2</span></div>
              <h4>Scope</h4>
              <p>We define engagement type, resource needs, and timeline.</p>
            </div>
            <div className="timeline-step">
              <div className="step-circle"><span>3</span></div>
              <h4>Contract</h4>
              <p>NDA, engagement agreement, SLAs finalized.</p>
            </div>
            <div className="timeline-step">
              <div className="step-circle"><span>4</span></div>
              <h4>Kickoff</h4>
              <p>Resources onboarded. Integration with your team begins.</p>
            </div>
            <div className="timeline-step">
              <div className="step-circle"><span>5</span></div>
              <h4>Execution</h4>
              <p>Delivery per engagement model. Your visibility, our accountability.</p>
            </div>
            <div className="timeline-step">
              <div className="step-circle"><span>6</span></div>
              <h4>Handoff</h4>
              <p>Knowledge transfer, documentation, clean exit.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Discuss Your SAP Data Migration Partnership?" linkText="Schedule a Delivery Conversation" />
      <FullFooter />
    </>
  );
}
