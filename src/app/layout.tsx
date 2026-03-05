import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenneth C. Moncur — Almanack of Systems, Code & Legacy",
  description:
    "A personal guide to freedom, discipline, and sovereign thinking in the digital age — rooted in Bahamian culture.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const faviconSvg = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1C1209"/><circle cx="32" cy="32" r="26" stroke="rgba(244,237,216,0.45)" stroke-width="1.2" fill="none"/><path d="M 18 12 L 18 52" stroke="white" stroke-width="4" stroke-linecap="butt" opacity="0.88"/><path d="M 15 12 L 21 12" stroke="white" stroke-width="2" stroke-linecap="butt" opacity="0.88"/><path d="M 15 52 L 21 52" stroke="white" stroke-width="2" stroke-linecap="butt" opacity="0.88"/><path d="M 20 32 L 48 12" stroke="white" stroke-width="3" stroke-linecap="butt" opacity="0.8"/><path d="M 20 32 L 30 26" stroke="white" stroke-width="4.5" stroke-linecap="butt" opacity="0.8"/><path d="M 20 33 L 48 52" stroke="white" stroke-width="3" stroke-linecap="butt" opacity="0.8"/><path d="M 20 33 L 30 38" stroke="white" stroke-width="4.5" stroke-linecap="butt" opacity="0.8"/><circle cx="20" cy="32.5" r="4" fill="#C4A050"/></svg>'
);

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
