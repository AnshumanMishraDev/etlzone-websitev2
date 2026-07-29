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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => { setMobileOpen(false); setMobileServicesOpen(false); }, [pathname]);

  const navLinks = (
    <>
      <li><Link href="/about" className="nav-btn" onClick={() => setMobileOpen(false)}>About</Link></li>
      <li><Link href="/why-us" className="nav-btn" onClick={() => setMobileOpen(false)}>Why Us</Link></li>
      <li><Link href="/results" className="nav-btn" onClick={() => setMobileOpen(false)}>Results</Link></li>
      <li><Link href="/partner" className="nav-btn" onClick={() => setMobileOpen(false)}>Partner With Us</Link></li>
      <li><Link href="/blog" className="nav-btn" onClick={() => setMobileOpen(false)}>Blog</Link></li>
      {/* Services - desktop hover, mobile click */}
      <li className="nav-services-li">
        {isHome ? (
          <a href="#services" className="nav-btn" onClick={() => setMobileOpen(false)}>Services ▾</a>
        ) : (
          <Link href="/services" className="nav-btn" onClick={() => setMobileOpen(false)}>Services ▾</Link>
        )}
        <ul className="nav-dropdown-menu">
          {serviceLinks.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="nav-dropdown-item" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>{s.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li><Link href="/contact" className="nav-btn" onClick={() => setMobileOpen(false)}>Contact</Link></li>
    </>
  );

  return (
    <header style={scrolled ? { background: "rgba(255,255,255,0.92)" } : undefined}>
      <nav>
        <Link href="/" className="logo">
          <img src="/etlzone-logo-v2.png" alt="ETLZone" style={{ height: 32, width: "auto" }} />
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links desktop-nav">
          <li><Link href="/about" className="nav-btn">About</Link></li>
          <li><Link href="/why-us" className="nav-btn">Why Us</Link></li>
          <li><Link href="/results" className="nav-btn">Results</Link></li>
          <li><Link href="/partner" className="nav-btn">Partner With Us</Link></li>
          <li><Link href="/blog" className="nav-btn">Blog</Link></li>
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

        {/* Mobile hamburger + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/contact" className="nav-cta mobile-cta">Talk to Us</Link>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${mobileOpen ? "open" : ""}`} />
            <span className={`hamburger-line ${mobileOpen ? "open" : ""}`} />
            <span className={`hamburger-line ${mobileOpen ? "open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            <li><Link href="/about" className="mobile-nav-btn" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link href="/why-us" className="mobile-nav-btn" onClick={() => setMobileOpen(false)}>Why Us</Link></li>
            <li><Link href="/results" className="mobile-nav-btn" onClick={() => setMobileOpen(false)}>Results</Link></li>
            <li><Link href="/partner" className="mobile-nav-btn" onClick={() => setMobileOpen(false)}>Partner With Us</Link></li>
            <li><Link href="/blog" className="mobile-nav-btn" onClick={() => setMobileOpen(false)}>Blog</Link></li>
            {/* Mobile services with expandable sub-links */}
            <li>
              <div
                className="mobile-nav-btn"
                style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>{isHome ? <a href="#services" style={{ color: "inherit", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>Services</a> : <Link href="/services" style={{ color: "inherit", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>Services</Link>}</span>
                <span style={{ fontSize: 12, transition: "transform .2s ease", transform: mobileServicesOpen ? "rotate(180deg)" : "" }}>▾</span>
              </div>
              {mobileServicesOpen && (
                <ul style={{ listStyle: "none", padding: "4px 0 4px 16px" }}>
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="mobile-nav-sub" onClick={() => setMobileOpen(false)}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="/contact" className="mobile-nav-btn" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
