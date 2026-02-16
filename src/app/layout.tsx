import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Invinvincible Tech & Integrated Services Ltd",
    template: "%s | Invinvincible Tech",
  },
  description:
    "Smart, sustainable, and integrated engineering solutions. CFS construction, aluminum fabrication, facility management, and more.",
  keywords: [
    "CFS construction",
    "cold-formed steel",
    "aluminum fabrication",
    "facility management",
    "engineering services",
    "Nigeria construction",
    "integrated services",
  ],
  authors: [{ name: "Invinvincible Tech & Integrated Services Ltd" }],
  openGraph: {
    title: "Invinvincible Tech & Integrated Services Ltd",
    description:
      "Smart, sustainable, and integrated engineering solutions for modern construction.",
    type: "website",
    locale: "en_NG",
    siteName: "Invinvincible Tech",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
