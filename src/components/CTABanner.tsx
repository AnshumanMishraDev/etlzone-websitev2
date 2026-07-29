import ScrollReveal from "./ScrollReveal";

export default function CTABanner({ heading, linkText = "Schedule a Delivery Conversation", href = "/contact" }: { heading?: string; linkText?: string; href?: string }) {
  return (
    <section className="closer">
      <ScrollReveal>
        <h2>{heading || "Scoping an S/4HANA Migration and Need Execution Capacity?"}</h2>
        <a href={href} className="btn-primary">{linkText} →</a>
      </ScrollReveal>
    </section>
  );
}
