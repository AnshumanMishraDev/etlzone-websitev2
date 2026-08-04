/* Blog listing page - equal cards for all posts, driven by markdown files */
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Blog</span>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.18, letterSpacing: -1, marginBottom: 20 }}>
            SAP Migration Insights <span className="highlight">for Delivery Teams</span>
          </h1>
          <p className="sub">Practitioner-level notes on SAP data migration, S/4HANA conversion, and cutover planning — written for the people scoping and running these programs.</p>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=75&w=1200&auto=format&fit=crop" alt="Blog" />
        </div>
      </div>

      <section style={{ padding: "60px 24px" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-eyebrow">Featured Articles</span>
            <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: "var(--brand-blue-dark)", letterSpacing: -0.8, marginBottom: 8 }}>From the Etlzone Delivery Team</h2>
          </div>

          {posts.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--text-muted)" }}>No posts yet — add a markdown file to src/content/blog/ to publish.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} className="blog-card">
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-img">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        {post.date && <span>{post.date}</span>}
                        {post.readTime && <span>· {post.readTime}</span>}
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="blog-card-cta">Read article →</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner heading="Have a Migration Program You&apos;d Like Us to Write About?" subtext="If there&apos;s a migration topic your team keeps running into, let us know." linkText="Contact us" />
      <FullFooter />
    </>
  );
}
