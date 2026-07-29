import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function WhyUsPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Why SIs Choose ETLZone</span>
          <h1 style={{ fontSize: "clamp(30px,4.2vw,46px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            Built for System Integrators, <span className="highlight">Not for Enterprise End-Clients</span>
          </h1>
          <p className="sub">A specialist SAP migration subcontractor built to reduce delivery risk, not add to it. Here&apos;s why delivery leads bring us into their programs.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Team collaboration" />
        </div>
      </div>

      <section className="why-us">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Our Difference</span>
              <h2>Why System Integrators Bring ETLZone Into Their SAP Migration Programs</h2>
              <p>Four reasons that make ETLZone a drop-in delivery partner rather than another vendor to manage.</p>
            </ScrollReveal>
          </div>
          <div className="why-grid">
            <ScrollReveal className="why-card">
              <div className="why-num">01</div>
              <div>
                <h3>Narrow Scope, Deep Depth</h3>
                <p>We only do SAP data migration. No analytics, no app development, no general BI — so there&apos;s no scope creep and no competing priorities on your project timeline. Every specialist on our team lives and breathes SAP migration execution.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="why-card">
              <div className="why-num">02</div>
              <div>
                <h3>Drop-In Delivery</h3>
                <p>We work inside your PM tooling, your status cadence, your naming conventions. Your client sees your delivery, not ours. No new dashboards, no separate standups — we adapt to how your team already runs.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="why-card">
              <div className="why-num">03</div>
              <div>
                <h3>Surge Capacity Without Headcount Risk</h3>
                <p>Bring us in for a migration phase, release us at go-live. No bench cost between engagements. No long-term commitments that outlast the work. Scale up or down as your program timeline demands.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="why-card">
              <div className="why-num">04</div>
              <div>
                <h3>NDA &amp; Confidentiality as Standard</h3>
                <p>Confidentiality isn&apos;t a negotiation — it&apos;s the default posture for every SAP migration engagement we take on. We sign your NDA, we follow your data handling requirements, and we never present our brand to your client.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner heading="Need Specialist SAP Migration Capacity on Your Next Program?" linkText="Talk to Us" />
      <FullFooter />
    </>
  );
}
