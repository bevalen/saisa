import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Missions Trip · India 2026",
  description:
    "Join Ben & Celine Valentin for a family missions trip to India in November 2026. Serve alongside local ministry, build relationships, and experience God's heart for the nations.",
  openGraph: {
    title: "Family Missions Trip · India 2026",
    description:
      "Join us for a life-changing family missions trip to India. November 2026.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ben with children in India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Missions Trip · India 2026",
    description:
      "Join us for a life-changing family missions trip to India. November 2026.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
