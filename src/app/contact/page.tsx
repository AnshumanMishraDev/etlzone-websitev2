import ScrollReveal from "@/components/ScrollReveal";
import FullFooter from "@/components/FullFooter";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="hero-simple">
        <span className="eyebrow">Contact Us</span>
        <h1>Scoping an SAP Migration Program? <span className="highlight">Let&apos;s Talk.</span></h1>
        <p className="sub">Tell us the object scope, timeline, and where you need delivery support — we&apos;ll get back to you with how ETLZone would plug in.</p>
      </section>

      <section style={{ padding: "70px 24px 100px" }}>
        <div className="contact-grid">
          <ScrollReveal>
            <div className="info-card">
              <h2>Contact Our SAP Data Migration Team</h2>
              <p className="lead">ETLZone Solutions LLP is based in Mumbai and delivers SAP data migration workstreams for System Integrators worldwide. Reach us directly, or use the form to start scoping a workstream.</p>
              <div className="info-item">
                <div className="info-icon">✉</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:officials@etlzone.com">officials@etlzone.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">☎</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919867870005">+91 98678 70005</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>Kandivali (W), Mumbai, India</p>
                </div>
              </div>
              <div className="engage-tags">
                <span>How SIs typically engage us</span>
                <span className="tag-pill">Staff Augmentation</span>
                <span className="tag-pill">Subcontracted Workstream</span>
                <span className="tag-pill">Fixed-Scope Module</span>
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
