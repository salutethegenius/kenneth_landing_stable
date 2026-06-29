import type { MetadataRoute } from "next";
import { brandColors, siteName, siteTagline } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — ${siteTagline}`,
    short_name: "Moncur Almanack",
    description:
      "Essays, frameworks, and the work of Kenneth C. Moncur — building the Caribbean's sovereign digital future from The Bahamas.",
    start_url: "/",
    display: "standalone",
    background_color: brandColors.ink,
    theme_color: brandColors.ink,
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
