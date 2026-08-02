/* Dynamic service detail page - renders content from src/data/services.ts based on slug */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";
import { services } from "@/data/services";

/* Pre-generate all 6 service pages at build time */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* Dynamic SEO metadata per service */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/services">Services</Link> / {service.title}
      </div>

      {/* Hero with image */}
      <div className="hero-grid no-header-gap">
        <div>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            {service.title}, <span className="highlight">{service.subtitle}</span>
          </h1>
          <p className="sub">{service.hero}</p>
          <div className="hero-ctas">
            <a href="/contact" className="btn-primary">Talk to Us About Your Migration</a>
            <a href="/services" className="btn-secondary">See All Services →</a>
          </div>
        </div>
        <div className="hero-img-wrap">
          <img src={service.imageUrl} alt={service.title} />
        </div>
      </div>

      <div className="trust-strip">
        <strong>25+ SAP migration projects delivered</strong><span className="divider">·</span>
        Team background includes Accenture &amp; SLB<span className="divider">·</span>
        NDA by default on every engagement
      </div>

      {/* Overview / Includes */}
      <section className="bg-light">
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Overview</span>
              <h2>{service.overviewTitle}</h2>
              <p>{service.overviewDesc}</p>
            </ScrollReveal>
          </div>
          <div className="included-grid">
            {service.includes.map((item, i) => (
              <ScrollReveal key={i} className="included-card">
                <div className="check-icon">✓</div>
                <div><h3>{item.title}</h3><p>{item.desc}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk callout - only shown on Data Cleaning page */}
      {service.riskCallout && (
        <section>
          <div className="container">
            <ScrollReveal>
              <div className="risk-callout">
                <div className="risk-icon">{service.riskCallout.icon}</div>
                <p><strong>Dirty data is the #1 cause of migration timeline slippage</strong> — not scope, not tooling, not resourcing. Catching data quality issues at the cleansing stage is far cheaper than catching them during a failed mock load, or worse, during cutover weekend.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Migration path grid - only shown on S/4HANA Migration page */}
      {service.pathGrid && (
        <section>
          <div className="container">
            <div className="section-head">
              <ScrollReveal>
                <span className="section-eyebrow">{service.pathGrid.eyebrow}</span>
                <h2>Brownfield or Greenfield — We Scope to Your Approach</h2>
                <p>The right migration path changes what data work is required. We adapt our workstream to whichever your program has already committed to.</p>
              </ScrollReveal>
            </div>
            <div className="path-grid">
              {service.pathGrid.cards.map((card, i) => (
                <ScrollReveal key={i} className="path-card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </ScrollReveal>
              ))}
            </div>
            <div className="inline-cta">
              <p>Not sure which path fits your program? <a href="/contact">Talk to us and we&apos;ll help you decide →</a></p>
            </div>
          </div>
        </section>
      )}

      {/* Process steps */}
      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Our Process</span>
              <h2>{service.processTitle}</h2>
            </ScrollReveal>
          </div>
          <div className="process-list">
            {service.process.map((step, i) => (
              <ScrollReveal key={i} className="process-step">
                <div className="process-num">{i + 1}</div>
                <div><h3>{step.title}</h3><p>{step.desc}</p></div>
              </ScrollReveal>
            ))}
          </div>
          <div className="inline-cta">
            <p>Want to see this process mapped to your object list? <a href="/contact">Talk to us →</a></p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-light">
        <div className="container">
          <div className="mid-cta">
            <ScrollReveal>
              <h2>Scoping a Migration Workstream?</h2>
              <p>Tell us the object scope and timeline — we&apos;ll tell you exactly how we&apos;d plug in.</p>
              <a href="/contact" className="btn-primary">Schedule a Delivery Conversation</a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section>
        <div className="container">
          <div className="section-head">
            <ScrollReveal>
              <span className="section-eyebrow">Related Services</span>
              <h2>Often Delivered Alongside {service.title}</h2>
            </ScrollReveal>
          </div>
          <div className="related-grid">
            {service.related.map((r, i) => (
              <ScrollReveal key={i} className="related-card">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <Link href={`/services/${r.slug}`}>Explore →</Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-light">
          <div className="container">
            <div className="section-head">
              <ScrollReveal>
                <span className="section-eyebrow">FAQs</span>
                <h2>Common Questions About {service.title}</h2>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <FAQ items={service.faqs} />
            </ScrollReveal>
          </div>
        </section>
      )}

      <CTABanner heading="Need Migration Execution Capacity?" linkText="Talk to Us" />
      <FullFooter />
    </>
  );
}
