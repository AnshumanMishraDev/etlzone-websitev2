/* LinkedInPost - embeds a LinkedIn post via iframe */
/* Extracts post ID from public LinkedIn URL and renders the embed */
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
  return (
    <div>
      <div className="linkedin-post-wrapper">
        <iframe
          src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${postId}`}
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
