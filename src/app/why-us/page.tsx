/* Why Us page - detailed reasons SIs choose Etlzone */
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export const metadata: Metadata = {
  title: "Why Choose Etlzone",
  description: "Why System Integrators bring Etlzone into their SAP migration programs: narrow scope, drop-in delivery, surge capacity, and NDA confidentiality as standard.",
};

export default function WhyUsPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Why SIs Choose Etlzone</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            Built for System Integrators, <span className="highlight">Not for Enterprise End-Clients</span>
          </h1>
          <p className="sub">A specialist SAP migration subcontractor built to reduce delivery risk, not add to it.</p>
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
              <h2>Why System Integrators Bring Etlzone Into Their SAP Migration Programs</h2>
              <p>Four reasons that make Etlzone a drop-in delivery partner rather than another vendor to manage.</p>
            </ScrollReveal>
          </div>
          <div className="why-grid">
            {[
              { num: "01", title: "Narrow Scope, Deep Depth", desc: "We only do SAP data migration. No analytics, no app development, no general BI, so there's no scope creep and no competing priorities on your project timeline." },
              { num: "02", title: "Drop-In Delivery", desc: "We work inside your PM tooling, your status cadence, your naming conventions. Your client sees your delivery, not ours." },
              { num: "03", title: "Surge Capacity Without Headcount Risk", desc: "Bring us in for a migration phase, release us at go-live. No bench cost between engagements." },
              { num: "04", title: "NDA & Confidentiality as Standard", desc: "Confidentiality isn't a negotiation; it's the default posture for every SAP migration engagement we take on." },
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
        </div>
      </section>

      <CTABanner heading="Need Specialist SAP Migration Capacity on Your Next Program?" linkText="Talk to Us" />
      <FullFooter />
    </>
  );
}
