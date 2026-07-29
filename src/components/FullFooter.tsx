/* FullFooter - detailed footer with logo, links, and contact info */
import Link from "next/link";

export default function FullFooter() {
  return (
    <footer style={{ padding: "60px 24px 30px" }}>
      <div className="footer-grid">
        {/* Brand column */}
        <div className="footer-col">
          <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/etlzone-logo-v2.png" alt="ETLZone" style={{ height: 32, width: "auto", background: "#fff", borderRadius: 8, padding: "4px 8px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }} />
          </div>
          <p>ETLZone Solutions LLP is a specialist SAP data migration delivery partner for System Integrators — ECC to S/4HANA migration, BODS, LTMC, IDoc handling, and cutover, delivered as a subcontract workstream.</p>
        </div>

        {/* Company links */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/results">Results</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Service links */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/sap-data-migration">SAP Data Migration</Link></li>
            <li><Link href="/services/sap-s4hana-migration">SAP S/4HANA Migration</Link></li>
            <li><Link href="/services/data-cleaning">Data Cleaning</Link></li>
            <li><Link href="/services/data-mapping">Data Mapping</Link></li>
            <li><Link href="/services/data-validation-reconciliation">Data Validation & Reconciliation</Link></li>
            <li><Link href="/services/migration-testing-cutover">Testing & Cutover</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:officials@etlzone.com">officials@etlzone.com</a></li>
            <li><a href="tel:+919867870005">+91 98678 70005</a></li>
            <li>Kandivali (W), Mumbai, India</li>
            <li><a href="https://linkedin.com/company/etlzone-solution" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 ETLZone Solutions LLP. All rights reserved.</span>
        <span>SAP Data Migration Subcontract Delivery Partner for SIs</span>
      </div>
    </footer>
  );
}
