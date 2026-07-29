import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";

export default function ResultsPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Results</span>
          <h1 style={{ fontSize: "clamp(30px,4.2vw,46px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            What Happens When ETLZone <span className="highlight">Joins Your Migration Program</span>
          </h1>
          <p className="sub">Most of our engagements are confidential by contract, delivered under an SI&apos;s brand rather than our own. Here&apos;s what we can share — named where we have permission, measured where NDA applies.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Data analytics dashboard" />
        </div>
      </div>

      <section className="stats">
        <div className="stats-eyebrow" style={{ textAlign: "center", color: "var(--brand-yellow)", fontWeight: 700, fontSize: 12.5, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 26 }}>By the Numbers</div>
        <div className="stats-grid">
          <div className="stat-item"><span className="stat-number">25+</span><span className="stat-label">SAP Migration Projects Completed</span></div>
          <div className="stat-item"><span className="stat-number">7+</span><span className="stat-label">Industries Served</span></div>
          <div className="stat-item"><span className="stat-number">50+</span><span className="stat-label">SAP-Certified Specialists</span></div>
          <div className="stat-item"><span className="stat-number">20,000+</span><span className="stat-label">Hours of SAP Delivery Experience</span></div>
        </div>
      </section>

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
            <ScrollReveal className="quote-card">
              <span className="quote-mark">&quot;</span>
              <p className="quote-text">[Insert approved client/partner quote here — ask for one concrete number if possible: object count, timeline held, or accuracy rate.]</p>
              <div className="quote-attribution">
                <div className="quote-avatar">??</div>
                <div>
                  <h4>[Name]</h4>
                  <span>[Title, Company]</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="quote-card">
              <span className="quote-mark">&quot;</span>
              <p className="quote-text">[Insert second approved quote here. If from an SI partner, ask them to speak to what it&apos;s like to subcontract migration work to ETLZone.]</p>
              <div className="quote-attribution">
                <div className="quote-avatar">??</div>
                <div>
                  <h4>[Name]</h4>
                  <span>[Title, Company]</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <p className="nda-note" style={{ maxWidth: 800, margin: "36px auto 0", textAlign: "center", color: "var(--text-muted)", fontSize: 14.5, fontStyle: "italic" }}>Have a client or SI partner willing to be quoted? Replace the placeholders above with their name, title, and approved wording.</p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Engagement Results</span>
              <h2>Results by Service</h2>
              <p>Figures shared anonymously in line with client and partner confidentiality agreements.</p>
            </ScrollReveal>
          </div>

          <div className="service-group">
            <ScrollReveal>
              <div className="service-group-label"><h3>SAP Data Migration &amp; S/4HANA Migration</h3><div className="line"></div></div>
            </ScrollReveal>
            <div className="snapshot-grid">
              <ScrollReveal className="snapshot-card">
                <span className="snapshot-tag">Manufacturing</span>
                <p>Full ECC to S/4HANA migration delivered as a subcontracted partner, covering finance and materials management, embedded inside the SI&apos;s existing delivery cadence through go-live.</p>
              </ScrollReveal>
              <ScrollReveal className="snapshot-card">
                <span className="snapshot-tag">Logistics &amp; Distribution</span>
                <p>Brought in mid-program to take ownership of a stalled migration workstream, rebuilding the object mapping and load sequence to get the program back on track.</p>
              </ScrollReveal>
            </div>
          </div>

          <div className="service-group">
            <ScrollReveal>
              <div className="service-group-label"><h3>Data Cleaning &amp; Data Mapping</h3><div className="line"></div></div>
            </ScrollReveal>
            <div className="snapshot-grid">
              <ScrollReveal className="snapshot-card">
                <span className="snapshot-tag">Retail &amp; Consumer Goods</span>
                <p>Standalone data cleansing workstream ahead of a broader SAP migration program, resolving duplicate vendor and material records before extraction began.</p>
              </ScrollReveal>
              <ScrollReveal className="snapshot-card">
                <span className="snapshot-tag">Industrial Equipment</span>
                <p>Source-to-target mapping documentation delivered for a multi-object migration scope, signed off with the client&apos;s functional leads before build.</p>
              </ScrollReveal>
            </div>
          </div>

          <div className="service-group">
            <ScrollReveal>
              <div className="service-group-label"><h3>Validation, Testing &amp; Cutover</h3><div className="line"></div></div>
            </ScrollReveal>
            <div className="snapshot-grid">
              <ScrollReveal className="snapshot-card">
                <span className="snapshot-tag">Pharmaceuticals</span>
                <p>Post-load reconciliation across finance and sales objects, tracking discrepancies to resolution before the client&apos;s sign-off milestone.</p>
              </ScrollReveal>
              <ScrollReveal className="snapshot-card">
                <span className="snapshot-tag">Energy &amp; Utilities</span>
                <p>Cutover rehearsal and go-live execution support for a multi-phase migration program, running mock load cycles until the runbook held within the agreed window.</p>
              </ScrollReveal>
            </div>
          </div>

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
