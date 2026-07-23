import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://umar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Umar — Full Stack JavaScript Developer",
    template: "%s — Umar",
  },
  description:
    "Umar is a Full Stack JavaScript Developer building fast, polished products across web and mobile with React, React Native, Next.js and TypeScript.",
  keywords: [
    "Umar",
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Engineer",
    "Mobile App Developer",
    "Expo Developer",
  ],
  authors: [{ name: "Umar" }],
  creator: "Umar",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Umar — Full Stack JavaScript Developer",
    description:
      "Building fast, polished products across web and mobile with React, React Native, Next.js and TypeScript.",
    siteName: "Umar",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Umar — Full Stack JavaScript Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar — Full Stack JavaScript Developer",
    description:
      "Building fast, polished products across web and mobile with React, React Native, Next.js and TypeScript.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
