/* Blog article page - renders a single post from a markdown file */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import FullFooter from "@/components/FullFooter";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

/* Pre-generate all blog article pages at build time */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* Dynamic SEO metadata per article */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "170px 24px 0" }}>
        <Link href="/blog" style={{ color: "var(--brand-blue)", fontWeight: 600, fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
          ← Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "24px 24px 60px" }}>
        <span className="eyebrow">Article</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "var(--brand-blue-dark)", lineHeight: 1.2, letterSpacing: -1, marginBottom: 16 }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", gap: 16, fontSize: 13.5, color: "var(--text-muted)", marginBottom: 28 }}>
          {post.date && <span>{post.date}</span>}
          {post.readTime && <span>· {post.readTime}</span>}
        </div>
        {post.image && (
          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: 36 }}>
            <img src={post.image} alt={post.title} style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
          </div>
        )}

        {/* Markdown body - styled by .article-body CSS */}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <CTABanner heading="Have Questions About Your Migration?" subtext="Talk to us about scoping an SAP data migration workstream." linkText="Contact us" />
      <FullFooter />
    </>
  );
}
