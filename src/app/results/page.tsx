/* Results page - track record, engagement snapshots */
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export const metadata: Metadata = {
  title: "Results & Track Record",
  description: "Etlzone's track record delivering SAP data migration and S/4HANA conversion programs for System Integrators: 12+ migrations delivered with zero failed go-lives.",
};

export default function ResultsPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Results</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            What Happens When Etlzone <span className="highlight">Joins Your Migration Program</span>
          </h1>
          <p className="sub">Most of our engagements are confidential by contract, delivered under an SI&apos;s brand rather than our own.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Data analytics dashboard" />
        </div>
      </div>

      {/* Stats strip */}
      <section className="stats">
        <div style={{ textAlign: "center", color: "var(--brand-yellow)", fontWeight: 700, fontSize: 12.5, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 26 }}>By the Numbers</div>
        <div className="stats-grid">
          {[
            ["25+", "SAP Migration Projects Completed"],
            ["7+", "Industries Served"],
            ["50+", "SAP-Certified Specialists"],
            ["20,000+", "Hours of SAP Delivery Experience"],
          ].map(([val, label], i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">In Their Words</span>
              <h2>Client &amp; Partner Feedback</h2>
              <p>Shared with permission from the SIs, clients, and partners we have delivered data migration workstreams for.</p>
            </ScrollReveal>
          </div>
          <div className="quote-grid">
            <ScrollReveal className="quote-card">
              <span style={{ fontSize: 46, color: "rgba(20,80,224,0.15)", fontWeight: 900, lineHeight: 1, marginBottom: 12, display: "block", fontFamily: "Georgia,serif" }}>&quot;</span>
              <p style={{ fontSize: 15.5, color: "var(--text-dark)", fontStyle: "italic", marginBottom: 24 }}>I highly recommend Samim for any complex SAP data migration and enterprise transformation initiatives. Having worked closely with him on multiple large business transformation projects, I have seen firsthand his exceptional ability to manage high-stakes data landscapes and ensure seamless transitions to SAP environments. Data migration is notoriously one of the most critical and high-risk phases of any ERP journey, but Samim navigates it with unmatched technical precision and a strategic mindset. He possesses a deep understanding of legacy data extraction, data profiling, cleansing, and validation rules, alongside expert-level mastery of key SAP migration utilities, including SAP BODS, LTMC/Migration Cockpit, LSMW, or Syniti Advanced Data Migration. Beyond his technical acumen, Samim excels at bridging the gap between functional business requirements and technical deployment. He works effectively across cross-functional teams to map data accurately, mitigate risks early, minimize business disruption, and guarantee data integrity during critical cutover windows.</p>
              <div className="quote-attribution">
                <div className="quote-avatar">KA</div>
                <div><h4>Kamal Aneja</h4><span>Technology Delivery Executive, Accenture</span></div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="quote-card">
              <span style={{ fontSize: 46, color: "rgba(20,80,224,0.15)", fontWeight: 900, lineHeight: 1, marginBottom: 12, display: "block", fontFamily: "Georgia,serif" }}>&quot;</span>
              <p style={{ fontSize: 15.5, color: "var(--text-dark)", fontStyle: "italic", marginBottom: 24 }}>We had the pleasure of partnering with ETLZONE Solutions for our data migration project, and the experience exceeded our expectations. Their team demonstrated exceptional expertise, meticulous planning, and a strong commitment to delivering a seamless migration with minimal business disruption. The project was executed on time, with a high level of accuracy and data integrity. Their proactive communication, attention to detail, and ability to address challenges efficiently gave us complete confidence throughout the process. We were particularly impressed by their structured approach, technical competence, and dedication to ensuring a successful outcome. I highly recommend ETLZONE Solutions to any organization looking for a reliable and highly skilled data migration partner.</p>
              <div className="quote-attribution">
                <div className="quote-avatar">NP</div>
                <div><h4>Naina Patel</h4><span>Manager, Commercial Centre of Excellence, Sony Entertainment Television</span></div>
              </div>
            </ScrollReveal>
          </div>

          <div style={{ maxWidth: 680, margin: "36px auto 0" }}>
            <ScrollReveal className="quote-card">
              <span style={{ fontSize: 46, color: "rgba(20,80,224,0.15)", fontWeight: 900, lineHeight: 1, marginBottom: 12, display: "block", fontFamily: "Georgia,serif" }}>&quot;</span>
              <p style={{ fontSize: 15.5, color: "var(--text-dark)", fontStyle: "italic", marginBottom: 24 }}>Samim led the data migration workstream on our SAP project and consistently delivered clean, reconciled data on schedule. He caught data issues before they became cutover problems, communicated clearly at every stage. Highly recommend him for any SAP migration work.</p>
              <div className="quote-attribution">
                <div className="quote-avatar">BK</div>
                <div><h4>Bhanu Murthy Kota</h4><span>SAP Basis SME, ADILABS Consulting Services Pvt. Ltd.</span></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Engagement results by category */}
      <section className="bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Engagement Results</span>
              <h2>Results by Service</h2>
              <p>Figures shared anonymously in line with confidentiality agreements.</p>
            </ScrollReveal>
          </div>

          {[
            { title: "SAP Data Migration & S/4HANA Migration", snapshots: [
              { tag: "Manufacturing", desc: "Full ECC to S/4HANA migration delivered as a subcontracted partner, covering finance and materials management." },
              { tag: "Logistics", desc: "Brought in mid-program to take ownership of a stalled migration workstream, rebuilt the object mapping and load sequence." },
            ]},
            { title: "Data Cleaning & Data Mapping", snapshots: [
              { tag: "Retail", desc: "Standalone data cleansing workstream resolving duplicate vendor and material records before extraction." },
              { tag: "Industrial Equipment", desc: "Source-to-target mapping documentation delivered for a multi-object migration scope." },
            ]},
            { title: "Validation, Testing & Cutover", snapshots: [
              { tag: "Pharmaceuticals", desc: "Post-load reconciliation across finance and sales objects, tracking discrepancies to resolution." },
              { tag: "Energy & Utilities", desc: "Cutover rehearsal and go-live execution support for a multi-phase migration program." },
            ]},
          ].map((group, gi) => (
            <div key={gi} className="service-group">
              <ScrollReveal>
                <div className="service-group-label"><h3>{group.title}</h3><div className="line"></div></div>
              </ScrollReveal>
              <div className="snapshot-grid">
                {group.snapshots.map((s, si) => (
                  <ScrollReveal key={si} className="snapshot-card">
                    <span className="snapshot-tag">{s.tag}</span>
                    <p style={{ fontSize: 14.5, color: "var(--text-muted)" }}>{s.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          <div className="nda-callout">
            <div className="nda-icon">🔒</div>
            <p><strong>Most of our engagements are confidential by contract.</strong> We deliver under our SI partners&apos; brand, not our own, so client and program names are withheld unless explicit permission has been given.</p>
          </div>
        </div>
      </section>

      <CTABanner heading="Want to Talk Through a Reference in More Detail?" linkText="Talk to Us" />
      <FullFooter />
    </>
  );
}
