/* Contact page - info card + contact form with Resend API integration */
import ScrollReveal from "@/components/ScrollReveal";
import FullFooter from "@/components/FullFooter";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "ETLZone Solutions LLP",
            description: "Specialist SAP data migration delivery partner for System Integrators, covering ECC to S/4HANA migration, BODS, LTMC, IDoc handling and cutover.",
            email: "officials@etlzone.com",
            telephone: "+91-98678-70005",
            address: { "@type": "PostalAddress", streetAddress: "Kandivali (W)", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
            areaServed: "Worldwide",
            url: "https://etlzone.com/contact.html",
          }),
        }}
      />
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            Scoping an SAP Migration Program? <span className="highlight">Let&apos;s Talk.</span>
          </h1>
          <p className="sub" style={{ marginBottom: 0 }}>Tell us the object scope, timeline, and where you need delivery support — we&apos;ll get back to you with how ETLZone would plug in.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Business meeting" />
        </div>
      </div>

      <section style={{ padding: "70px 24px 100px" }}>
        <div className="contact-grid">
          <ScrollReveal>
            <div className="info-card" style={{ padding: 40, background: "var(--bg-light)", borderRadius: "var(--radius-xl)" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--brand-blue-dark)", marginBottom: 12 }}>Contact Our SAP Data Migration Team</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 14.5, marginBottom: 32 }}>ETLZone Solutions LLP is based in Mumbai and delivers SAP data migration workstreams for System Integrators worldwide. Reach us directly, or use the form to start scoping a workstream.</p>
              {[
                { icon: "✉", label: "Email", value: "officials@etlzone.com", href: "mailto:officials@etlzone.com" },
                { icon: "☎", label: "Phone", value: "+91 98678 70005", href: "tel:+919867870005" },
                { icon: "📍", label: "Location", value: "Kandivali (W), Mumbai, India" },
              ].map((item, i) => (
                <div key={i} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <h3>{item.label}</h3>
                    {item.href ? <a href={item.href} style={{ fontSize: 15.5, color: "var(--text-dark)", fontWeight: 600 }}>{item.value}</a>
                      : <p style={{ fontSize: 15.5, color: "var(--text-dark)", fontWeight: 600 }}>{item.value}</p>}
                  </div>
                </div>
              ))}
              <div className="engage-tags">
                <span>How SIs typically engage us</span>
                {["Staff Augmentation", "Subcontracted Workstream", "Fixed-Scope Module"].map((tag, i) => (
                  <span key={i} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <FullFooter />
    </>
  );
}
