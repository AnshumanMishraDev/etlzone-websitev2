/* sitemap.xml - lists all public pages for search engines */
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://etlzone.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/why-us",
    "/results",
    "/partner",
    "/contact",
    "/blog",
    "/blog/ecc-to-s4hana-migration-checklist-12-months-before-go-live",
    "/blog/sap-ecc-2027-deadline-what-happens-if-you-miss-it",
  ];

  const serviceSlugs = [
    "sap-data-migration",
    "sap-s4hana-migration",
    "data-cleaning",
    "data-mapping",
    "data-validation-reconciliation",
    "migration-testing-cutover",
  ];

  const routes = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];

  return routes;
}
