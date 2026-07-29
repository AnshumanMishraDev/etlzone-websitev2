"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Service dropdown links - add/edit service pages here */
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

  /* Detect scroll to make nav background more opaque */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={scrolled ? { background: "rgba(255,255,255,0.92)" } : undefined}>
      <nav>
        {/* Logo - replace src with your logo file */}
        <Link href="/" className="logo">
          <img src="/etlzone-logo-v2.png" alt="ETLZone" style={{ height: 32, width: "auto" }} />
        </Link>

        {/* Navigation links - order matches all pages */}
        <ul className="nav-links">
          <li><Link href="/about" className="nav-btn">About</Link></li>
          <li><Link href="/why-us" className="nav-btn">Why Us</Link></li>
          <li><Link href="/results" className="nav-btn">Results</Link></li>
          <li><Link href="/partner" className="nav-btn">Partner With Us</Link></li>
          <li><Link href="/blog" className="nav-btn">Blog</Link></li>

          {/* Services dropdown - shows 6 service links on hover */}
          <li
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            style={{ position: "relative" }}
          >
            {isHome ? (
              <a href="#services" className="nav-btn">Services ▾</a>
            ) : (
              <Link href="/services" className="nav-btn">Services ▾</Link>
            )}
            {servicesOpen && (
              <ul className="nav-dropdown-menu">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="nav-dropdown-item">{s.label}</Link>
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
