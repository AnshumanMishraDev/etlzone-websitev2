import ScrollReveal from "@/components/ScrollReveal";
import FullFooter from "@/components/FullFooter";
import LinkedInPost from "@/components/LinkedInPost";

const posts = [
  "https://www.linkedin.com/posts/etlzone-solutions_sapdatamigration-datamigration-s4hana-activity-7485914136917434368-AyLD",
  "https://www.linkedin.com/posts/etlzone-solutions_sap-go-live-readiness-checklist-activity-7487718539697590272-2Rkg",
];

export default function BlogPage() {
  return (
    <>
      <section className="hero-simple">
        <span className="eyebrow">Blog</span>
        <h1>SAP Migration Insights <span className="highlight">for Delivery Teams</span></h1>
        <p className="sub">Practitioner-level notes on SAP data migration, S/4HANA conversion, and cutover planning — written for the people actually scoping and running these programs.</p>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Latest LinkedIn Posts</span>
              <h2>From the ETLZone Delivery Team</h2>
            </ScrollReveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
            {posts.map((url, i) => (
              <ScrollReveal key={i}>
                <LinkedInPost url={url} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Follow Us</span>
              <h2>More on LinkedIn</h2>
              <p>Follow ETLZone on LinkedIn for the latest SAP migration insights, company updates, and industry commentary.</p>
            </ScrollReveal>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="https://linkedin.com/company/etlzone-solution" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "#0a66c2" }}>
              Follow us on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      <section className="closer">
        <ScrollReveal>
          <h2>Have a Migration Program You&apos;d Like Us to Write About?</h2>
          <p style={{ color: "#dbe4ff", maxWidth: 600, margin: "0 auto 30px", position: "relative", fontSize: 15.5 }}>If there&apos;s a migration topic your team keeps running into, let us know — it might be our next article.</p>
          <a href="/contact" className="btn-primary">Talk to Us</a>
        </ScrollReveal>
      </section>

      <FullFooter />
    </>
  );
}
