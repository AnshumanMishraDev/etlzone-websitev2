/* Root layout - wraps all pages with the header + global SEO metadata */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://etlzone.com"),
  title: {
    default: "SAP Data Migration Delivery Partner | Etlzone Solutions",
    template: "%s | Etlzone Solutions",
  },
  description: "Etlzone is a specialist SAP data migration subcontract delivery partner for System Integrators. ECC to S/4HANA migration, BODS, LTMC, IDoc conversion and cutover reconciliation delivered under your brand.",
  keywords: ["SAP data migration", "ECC to S/4HANA migration", "SAP BODS", "SAP LTMC", "IDoc conversion", "SAP migration partner", "SAP delivery partner"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Etlzone Solutions",
    title: "SAP Data Migration Delivery Partner | Etlzone Solutions",
    description: "Specialist SAP data migration services for SAP ECC to S/4HANA migration, including SAP Migration Cockpit, SAP BODS, Data Conversion and Cutover Planning.",
    url: "https://etlzone.com",
    images: [
      {
        url: "/etlzone-logo-v2.png",
        width: 1200,
        height: 630,
        alt: "Etlzone Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP Data Migration Delivery Partner | Etlzone Solutions",
    description: "Specialist SAP data migration services for SAP ECC to S/4HANA migration.",
    images: ["/etlzone-logo-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
