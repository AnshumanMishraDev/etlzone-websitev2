/* Services overview page - lists all 6 service categories as tiles */
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FullFooter from "@/components/FullFooter";

/* Service list - add new services here */
const serviceList = [
  { num: "01", title: "SAP Data Migration", desc: "End-to-end SAP data migration planning and execution across ECC and non-HANA SAP environments.", slug: "sap-data-migration" },
  { num: "02", title: "SAP S/4HANA Migration", desc: "Specialist ECC to S/4HANA migration execution, including LTMC/Migration Cockpit workstreams.", slug: "sap-s4hana-migration" },
  { num: "03", title: "Data Cleaning", desc: "Source data cleansing and standardization before load, so migration errors get caught early.", slug: "data-cleaning" },
  { num: "04", title: "Data Mapping", desc: "Source-to-target field mapping across SAP objects, aligned to your target data model.", slug: "data-mapping" },
  { num: "05", title: "Data Validation & Reconciliation", desc: "Post-load validation and source-to-target reconciliation to confirm migration accuracy.", slug: "data-validation-reconciliation" },
  { num: "06", title: "Migration Testing & Cutover", desc: "Mock load cycles, cutover rehearsal, and go-live execution support for SAP migration programs.", slug: "migration-testing-cutover" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-simple">
        <span className="eyebrow">Our Services</span>
        <h1>SAP Data Migration Services, <span className="highlight">Delivered as a Specialist Workstream</span></h1>
        <p className="sub">Six focused SAP data migration disciplines your team can bring in individually or as a full end-to-end workstream — from planning through go-live.</p>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">What We Deliver</span>
              <h2>SAP Migration Capabilities Built for SI Delivery Teams</h2>
              <p>Every service below is scoped to plug into an existing SAP program without adding overhead to your delivery structure.</p>
            </ScrollReveal>
          </div>
          <div className="service-grid">
            {serviceList.map((s) => (
              <ScrollReveal key={s.slug} className="service-tile">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=70&w=900&auto=format&fit=crop" alt={s.title} />
                <div className="tile-body">
                  <span className="tile-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={`/services/${s.slug}`} className="tile-link">Explore this service →</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="closer">
        <ScrollReveal>
          <h2>Need One Workstream or the Full Migration Lifecycle?</h2>
          <p style={{ color: "#dbe4ff", maxWidth: 600, margin: "0 auto 30px", position: "relative", fontSize: 15.5 }}>We scope engagements as narrowly or as fully as your program needs.</p>
          <a href="/contact" className="btn-primary">Talk to Us About Your Program</a>
        </ScrollReveal>
      </section>

      <FullFooter />
    </>
  );
}
