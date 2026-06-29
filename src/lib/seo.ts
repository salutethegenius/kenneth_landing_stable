export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "https://kennethmoncur.com";

export const siteName =
  "Kenneth C. Moncur — Founder, Kemis Group of Companies";

export const siteShortName = "Kenneth C. Moncur";

export const siteTagline = "Almanack of Systems, Code & Legacy";

export const siteDescription =
  "My mission is to build the Caribbean's sovereign digital future from The Bahamas.";

export const siteAuthor = "Kenneth C. Moncur";

export const siteEmail = "ken@kemisdigital.com";

export const siteLocale = "en_US";

export const siteKeywords = [
  "Kenneth C. Moncur",
  "Kemis Group of Companies",
  "Bahamian founder",
  "Caribbean digital sovereignty",
  "digital sovereignty",
  "Bahamas technology",
  "VerityOS",
  "LawBey",
  "Caribbean AI infrastructure",
  "sovereign nation framework",
  "Freeport Grand Bahama",
  "essays on systems and legacy",
];

/** Organizations / sites in the KGC family used for Person sameAs schema. */
export const sameAs = [
  "https://thekemisgroup.com",
  "https://lawbey.com",
  "https://kemisdigital.com",
  "https://bahamasopendata.com",
];

export const brandColors = {
  ink: "#1C1209",
  parchment: "#F4EDD8",
  brass: "#C4A050",
  brassLight: "#D9BC78",
};

export const defaultOgImage = `${siteUrl}/og-default.png`;

export const titleTemplate = "%s — Kenneth C. Moncur";

type BuildPageMetadataArgs = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

/** Build consistent per-page Metadata using the root title template. */
export function buildPageMetadata({
  title,
  description,
  path = "",
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
  noindex = false,
}: BuildPageMetadataArgs) {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  return {
    title,
    description,
    keywords: keywords ?? siteKeywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: siteLocale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noindex
      ? { robots: { index: false, follow: true } }
      : { robots: { index: true, follow: true } }),
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: "en",
  potentialAction: {
    "@type": "ReadAction",
    target: `${siteUrl}/pages/table_of_contents`,
  },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kenneth C. Moncur",
  url: siteUrl,
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Kemis Group of Companies",
    url: "https://thekemisgroup.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Freeport",
    addressRegion: "Grand Bahama",
    addressCountry: "BS",
  },
  nationality: { "@type": "Country", name: "The Bahamas" },
  knowsAbout: [
    "Digital sovereignty",
    "Caribbean technology infrastructure",
    "AI infrastructure",
    "Data governance",
    "Bahamian entrepreneurship",
  ],
  sameAs,
};

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  section,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteUrl}${path}`,
    mainEntityOfPage: `${siteUrl}${path}`,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Kenneth C. Moncur",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Kenneth C. Moncur",
      url: siteUrl,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(section ? { articleSection: section } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
