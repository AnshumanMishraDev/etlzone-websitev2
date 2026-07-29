"use client";
import ScrollReveal from "@/components/ScrollReveal";
import FullFooter from "@/components/FullFooter";

const posts = [
  {
    title: "SAP Data Migration Insights — Expert Perspectives for System Integrators",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/posts/etlzone-solutions_sapdatamigration-datamigration-s4hana-activity-7485914136917434368-AyLD",
  },
  {
    title: "SAP Data Migration Insights — Expert Perspectives for System Integrators",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    linkedinUrl: "https://www.linkedin.com/posts/etlzone-solutions_sap-go-live-readiness-checklist-activity-7487718539697590272-2Rkg",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Blog</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            SAP Migration Insights <span className="highlight">for Delivery Teams</span>
          </h1>
          <p className="sub">Practitioner-level notes on SAP data migration, S/4HANA conversion, and cutover planning — written for the people scoping and running these programs.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Blog" />
        </div>
      </div>

      <section style={{ padding: "60px 24px" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-eyebrow">Featured Articles</span>
            <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: "var(--brand-blue-dark)", letterSpacing: -0.8, marginBottom: 8 }}>From the ETLZone Delivery Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {posts.map((post, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
                  border: "1px solid rgba(20,80,224,0.04)",
                  transition: "transform .3s ease, box-shadow .3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(20,80,224,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                >
                  <div style={{ height: 160, overflow: "hidden" }}>
                    <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s ease" }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
                    />
                  </div>
                  <div style={{ padding: 20 }}>
                    <p style={{ fontSize: 11, color: "var(--brand-blue)", fontWeight: 600, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>
                      LinkedIn Article
                    </p>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--brand-blue-dark)", lineHeight: 1.3, marginBottom: 14 }}>
                      {post.title}
                    </h3>
                    <a
                      href={post.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "8px 18px",
                        background: "#0a66c2",
                        color: "#fff",
                        borderRadius: 8,
                        fontWeight: 600,
                        fontSize: 13,
                        transition: "all .2s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#004182"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#0a66c2"; }}
                    >
                      Read on LinkedIn →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light" style={{ padding: "50px 24px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 500 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--brand-blue-dark)", marginBottom: 6 }}>Follow Us on LinkedIn</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 20 }}>Stay updated with the latest SAP migration insights.</p>
          <a href="https://linkedin.com/company/etlzone-solution" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "#0a66c2", padding: "10px 20px", fontSize: 13 }}>Follow us on LinkedIn →</a>
        </div>
      </section>

      <section className="closer">
        <ScrollReveal>
          <h2>Have a Migration Program You&apos;d Like Us to Write About?</h2>
          <p style={{ color: "#dbe4ff", maxWidth: 600, margin: "0 auto 30px", position: "relative", fontSize: 15.5 }}>If there&apos;s a migration topic your team keeps running into, let us know — it might be our next article.</p>
          <a href="/contact" className="btn-primary">Contact us →</a>
        </ScrollReveal>
      </section>

      <FullFooter />
    </>
  );
}
