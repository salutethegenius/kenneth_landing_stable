export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://kennethmoncur.com";

export const siteName =
  "Kenneth C. Moncur — Almanack of Systems, Code & Legacy";

export const siteDescription =
  "A personal guide to freedom, discipline, and sovereign thinking in the digital age, rooted in Bahamian culture.";

export const defaultOgImage = `${siteUrl}/og-default.png`;

