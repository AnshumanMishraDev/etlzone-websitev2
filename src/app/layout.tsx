/* Root layout - wraps all pages with the header */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SAP Data Migration Delivery Partner for SIs | ETLZone Solutions",
  description: "ETLZone is a specialist SAP data migration subcontract delivery partner for System Integrators. ECC to S/4HANA migration, BODS, LTMC, IDoc conversion and cutover reconciliation delivered under your brand.",
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
