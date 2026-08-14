/* Blog route layout - provides server-side metadata (page itself is a client component) */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practitioner insights on SAP data migration, S/4HANA conversion, and cutover planning, written for SI delivery teams and migration practitioners.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
