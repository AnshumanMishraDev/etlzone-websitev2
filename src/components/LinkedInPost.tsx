function extractPostId(url: string): string | null {
  const match = url.match(/activity[-:]\d+/);
  if (match) return match[0].replace("activity", "").replace("-", "").replace(":", "");
  return null;
}

export default function LinkedInPost({ url }: { url: string }) {
  const postId = extractPostId(url);
  if (!postId) {
    return <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Invalid LinkedIn post URL</p>;
  }
  const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:share:${postId}`;
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 12, background: "#fff", boxShadow: "0 4px 16px rgba(15,23,42,0.05)", border: "1px solid rgba(20,80,224,0.06)", maxWidth: 550, margin: "0 auto" }}>
        <iframe
          src={embedUrl}
          width="100%"
          height={500}
          style={{ border: "none", display: "block" }}
          allowFullScreen
          title="LinkedIn Post"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: 12 }}>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-blue)", fontWeight: 600, fontSize: 13.5 }}>
          View on LinkedIn →
        </a>
      </div>
    </div>
  );
}
