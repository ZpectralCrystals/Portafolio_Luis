import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luis-calcina.dev";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luis Fernando Calcina Ticlla | Senior Frontend Developer",
    template: "%s | Luis Fernando Calcina"
  },
  description:
    "Portafolio profesional de Luis Fernando Calcina Ticlla, Senior Frontend Developer especializado en React, Next.js, TypeScript, arquitectura frontend, performance, SEO y migraciones enterprise.",
  keywords: [
    "Luis Fernando Calcina",
    "Senior Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Architecture",
    "Core Web Vitals",
    "SEO técnico",
    "Arequipa Perú"
  ],
  authors: [{ name: "Luis Fernando Calcina Ticlla" }],
  creator: "Luis Fernando Calcina Ticlla",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Luis Fernando Calcina Ticlla | Senior Frontend Developer",
    description:
      "Frontend enterprise con foco en React, Next.js, TypeScript, arquitectura, performance, SEO y liderazgo técnico.",
    url: "/",
    siteName: "Portafolio Luis Fernando Calcina",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Luis Fernando Calcina Ticlla - Senior Frontend Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Fernando Calcina Ticlla | Senior Frontend Developer",
    description:
      "React, Next.js, TypeScript, arquitectura frontend, performance, SEO y liderazgo técnico.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f7f3ec"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
