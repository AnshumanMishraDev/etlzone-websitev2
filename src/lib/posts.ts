/* Blog posts reader - parses markdown files from src/content/blog/ */
/* Add a .md file with frontmatter to create a new blog post automatically */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string; /* rendered HTML body */
}

/* Read all .md files and return posts sorted by date (newest first) */
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: data.slug || file.replace(/\.md$/, ""),
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      image: data.image || "",
      date: data.date || "",
      readTime: data.readTime || "",
      content: marked.parse(content) as string,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/* Get a single post by slug */
export function getPostBySlug(slug: string): BlogPost | null {
  const post = getAllPosts().find((p) => p.slug === slug);
  return post || null;
}

/* All slugs for generateStaticParams */
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
