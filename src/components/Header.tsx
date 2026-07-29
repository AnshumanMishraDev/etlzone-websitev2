"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "SAP Data Migration", href: "/services/sap-data-migration" },
  { label: "SAP S/4HANA Migration", href: "/services/sap-s4hana-migration" },
  { label: "Data Cleaning", href: "/services/data-cleaning" },
  { label: "Data Mapping", href: "/services/data-mapping" },
  { label: "Data Validation & Reconciliation", href: "/services/data-validation-reconciliation" },
  { label: "Migration Testing & Cutover", href: "/services/migration-testing-cutover" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ddStyle: React.CSSProperties = {
    position: "absolute", top: "100%", left: 0, background: "#fff",
    borderRadius: 10, boxShadow: "0 8px 30px rgba(15,23,42,0.1)",
    border: "1px solid rgba(20,80,224,0.06)", padding: "6px 0",
    minWidth: 240, listStyle: "none", zIndex: 1001,
  };

  const linkStyle: React.CSSProperties = {
    display: "block", padding: "9px 16px", fontSize: 13.5,
    color: "var(--text-dark)", fontWeight: 500,
    transition: "background .15s ease",
  };

  return (
    <header style={scrolled ? { background: "rgba(255,255,255,0.92)" } : undefined}>
      <nav>
        <Link href="/" className="logo">
          <img src="/etlzone-logo-v2.png" alt="ETLZone" style={{ height: 32, width: "auto" }} />
        </Link>
        <ul className="nav-links" style={{ alignItems: "center" }}>
          <li><Link href="/about" className="nav-btn">About</Link></li>
          <li><Link href="/why-us" className="nav-btn">Why Us</Link></li>
          <li><Link href="/results" className="nav-btn">Results</Link></li>
          <li><Link href="/partner" className="nav-btn">Partner With Us</Link></li>
          <li><Link href="/blog" className="nav-btn">Blog</Link></li>
          <li
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {isHome ? (
              <a href="#services" className="nav-btn">Services ▾</a>
            ) : (
              <Link href="/services" className="nav-btn">Services ▾</Link>
            )}
            {servicesOpen && (
              <ul style={ddStyle}>
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      style={linkStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-light)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link href="/contact" className="nav-btn">Contact</Link></li>
        </ul>
        <Link href="/contact" className="nav-cta">Talk to Us</Link>
      </nav>
    </header>
  );
}
