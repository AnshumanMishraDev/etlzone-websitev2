/* Results page - track record, testimonials, engagement snapshots */
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function ResultsPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Results</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            What Happens When ETLZone <span className="highlight">Joins Your Migration Program</span>
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
              <h2>Named Client &amp; Partner Feedback</h2>
              <p>Shared with explicit permission from the SI or client named below.</p>
            </ScrollReveal>
          </div>
          <div className="quote-grid">
            {[1, 2].map((i) => (
              <ScrollReveal key={i} className="quote-card">
                <span style={{ fontSize: 46, color: "rgba(20,80,224,0.15)", fontWeight: 900, lineHeight: 1, marginBottom: 12, display: "block", fontFamily: "Georgia,serif" }}>&quot;</span>
                <p style={{ fontSize: 15.5, color: "var(--text-dark)", fontStyle: "italic", marginBottom: 24 }}>[Insert approved client/partner quote here.]</p>
                <div className="quote-attribution">
                  <div className="quote-avatar">??</div>
                  <div><h4>[Name]</h4><span>[Title, Company]</span></div>
                </div>
              </ScrollReveal>
            ))}
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
            { title: "SAP Data Migration &amp; S/4HANA Migration", snapshots: [
              { tag: "Manufacturing", desc: "Full ECC to S/4HANA migration delivered as a subcontracted partner, covering finance and materials management." },
              { tag: "Logistics", desc: "Brought in mid-program to take ownership of a stalled migration workstream, rebuilt the object mapping and load sequence." },
            ]},
            { title: "Data Cleaning &amp; Data Mapping", snapshots: [
              { tag: "Retail", desc: "Standalone data cleansing workstream resolving duplicate vendor and material records before extraction." },
              { tag: "Industrial Equipment", desc: "Source-to-target mapping documentation delivered for a multi-object migration scope." },
            ]},
            { title: "Validation, Testing &amp; Cutover", snapshots: [
              { tag: "Pharmaceuticals", desc: "Post-load reconciliation across finance and sales objects, tracking discrepancies to resolution." },
              { tag: "Energy &amp; Utilities", desc: "Cutover rehearsal and go-live execution support for a multi-phase migration program." },
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
            <p><strong>Most of our engagements are confidential by contract.</strong> We deliver under our SI partners&apos; brand, not our own — so client and program names are withheld unless explicit permission has been given.</p>
          </div>
        </div>
      </section>

      <CTABanner heading="Want to Talk Through a Reference in More Detail?" linkText="Talk to Us" />
      <FullFooter />
    </>
  );
}
