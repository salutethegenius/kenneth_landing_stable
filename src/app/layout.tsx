import type { Metadata, Viewport } from "next";
import { defaultOgImage, siteDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const faviconSvg = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1C1209"/><circle cx="32" cy="32" r="26" stroke="rgba(244,237,216,0.45)" stroke-width="1.2" fill="none"/><path d="M 18 12 L 18 52" stroke="white" stroke-width="4" stroke-linecap="butt" opacity="0.88"/><path d="M 15 12 L 21 12" stroke="white" stroke-width="2" stroke-linecap="butt" opacity="0.88"/><path d="M 15 52 L 21 52" stroke="white" stroke-width="2" stroke-linecap="butt" opacity="0.88"/><path d="M 20 32 L 48 12" stroke="white" stroke-width="3" stroke-linecap="butt" opacity="0.8"/><path d="M 20 32 L 30 26" stroke="white" stroke-width="4.5" stroke-linecap="butt" opacity="0.8"/><path d="M 20 33 L 48 52" stroke="white" stroke-width="3" stroke-linecap="butt" opacity="0.8"/><path d="M 20 33 L 30 38" stroke="white" stroke-width="4.5" stroke-linecap="butt" opacity="0.8"/><circle cx="20" cy="32.5" r="4" fill="#C4A050"/></svg>'
);

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  potentialAction: {
    "@type": "ReadAction",
    target: `${siteUrl}/pages/table_of_contents`,
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kenneth C. Moncur",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={`data:image/svg+xml,${faviconSvg}`}
          type="image/svg+xml"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdWebsite, jsonLdPerson]),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=DM+Mono:wght@400;500&family=Barlow:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
