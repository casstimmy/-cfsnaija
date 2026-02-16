import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FORGE - Cold-Formed Steel Construction Solutions",
  description: "Premium cold-formed steel construction services. Design, engineering, and structural solutions for the modern construction industry.",
  keywords: "cold-formed steel, construction, CFS, structural engineering, building solutions",
  openGraph: {
    title: "FORGE - Cold-Formed Steel Construction Solutions",
    description: "Premium cold-formed steel construction services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
