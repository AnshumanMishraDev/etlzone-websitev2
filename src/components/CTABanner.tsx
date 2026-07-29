/* CTABanner - reusable call-to-action section for any page */
import ScrollReveal from "./ScrollReveal";

export default function CTABanner({
  heading,
  subtext,
  linkText = "Schedule a Delivery Conversation",
  href = "/contact"
}: {
  heading?: string;
  subtext?: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <section className="closer">
      <ScrollReveal>
        <h2>{heading || "Scoping an S/4HANA Migration and Need Execution Capacity?"}</h2>
        {subtext && <p style={{ color: "#dbe4ff", maxWidth: 600, margin: "0 auto 30px", position: "relative", fontSize: 15.5 }}>{subtext}</p>}
        <a href={href} className="btn-primary">{linkText} →</a>
      </ScrollReveal>
    </section>
  );
}
