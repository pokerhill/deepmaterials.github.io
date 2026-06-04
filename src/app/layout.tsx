import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Deep Materials - Thermal Management Solutions",
  description:
    "Your trusted thermal solution partner. Advanced thermal interface materials for consumer electronics, automotive, aerospace, data centers, and telecommunications since 2019.",
  keywords: [
    "thermal management",
    "thermal grease",
    "gap pads",
    "thermal interface materials",
    "TIM",
    "heat dissipation",
    "electronics cooling",
    "Deep Materials",
  ],
  openGraph: {
    title: "Deep Materials - Thermal Management Solutions",
    description:
      "Advanced thermal interface materials engineered for performance. Gap pads, thermal grease, liquid gap fillers, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-dm-midnight text-dm-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
