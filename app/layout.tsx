import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=Space+Grotesk:wght@500;600;700" +
  "&family=Inter:wght@400;500;600" +
  "&family=JetBrains+Mono:wght@400;500" +
  "&display=swap";

const siteUrl = "https://umar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdulla Yakubov | React Native & Full Stack Developer",
    template: "%s — Abdulla Yakubov",
  },
  description:
    "Abdulla Yakubov is a 17-year-old React Native & Full Stack Developer building high-performance, polished products across web and mobile with React Native, TypeScript, Next.js, and React.",
  keywords: [
    "Abdulla Yakubov",
    "React Native Developer",
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Mobile Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Abdulla Yakubov" }],
  creator: "Abdulla Yakubov",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Abdulla Yakubov | React Native & Full Stack Developer",
    description:
      "Building high-performance, polished products across web and mobile with React Native, TypeScript, Next.js, and React.",
    siteName: "Abdulla Yakubov",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abdulla Yakubov | React Native & Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulla Yakubov | React Native & Full Stack Developer",
    description:
      "Building high-performance, polished products across web and mobile with React Native, TypeScript, Next.js, and React.",
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
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
