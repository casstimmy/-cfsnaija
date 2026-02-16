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
    default: "Naija Steel Manufacturing Ltd",
    template: "%s | Naija Steel",
  },
  description:
    "Nigeria's trusted steel manufacturing company. Cold-formed steel fabrication, CFS construction, structural steel solutions, and integrated engineering services.",
  keywords: [
    "steel manufacturing",
    "cold-formed steel",
    "CFS construction",
    "steel fabrication",
    "structural steel",
    "Nigeria steel",
    "steel building",
    "Naija Steel",
  ],
  authors: [{ name: "Naija Steel Manufacturing Ltd" }],
  openGraph: {
    title: "Naija Steel Manufacturing Ltd",
    description:
      "Nigeria's trusted steel manufacturing company — precision steel fabrication and CFS construction.",
    type: "website",
    locale: "en_NG",
    siteName: "Naija Steel",
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
