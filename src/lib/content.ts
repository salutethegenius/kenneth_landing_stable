import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "..", "kenneth_landing", "src");

function ensureContentRoot(): string {
  if (!fs.existsSync(CONTENT_ROOT)) {
    throw new Error(`Content root not found: ${CONTENT_ROOT}`);
  }
  return CONTENT_ROOT;
}

function safeReadFile(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

/** Resolve .md file by slug; tries exact, then with .md extension. */
function resolveMd(baseDir: string, slug: string): string | null {
  const root = ensureContentRoot();
  const withExt = slug.endsWith(".md") ? slug : `${slug}.md`;
  const full = path.join(root, baseDir, withExt);
  if (fs.existsSync(full)) return full;
  const alt = path.join(root, baseDir, slug.replace(/-/g, "_") + ".md");
  if (fs.existsSync(alt)) return alt;
  return null;
}

export type ContentResult = {
  content: string;
  data: Record<string, unknown>;
  slug: string;
} | null;

export function getPageBySlug(slug: string): ContentResult {
  const filePath = resolveMd("pages", slug);
  if (!filePath) return null;
  const raw = safeReadFile(filePath);
  if (!raw) return null;
  const { data, content } = matter(raw);
  return { content, data, slug };
}

export function getBookBySlug(slug: string): ContentResult {
  const root = ensureContentRoot();
  const booksDir = path.join(root, "books");
  const withExt = slug.endsWith(".md") ? slug : `${slug}.md`;
  const full = path.join(booksDir, withExt);
  if (fs.existsSync(full)) {
    const raw = safeReadFile(full);
    if (!raw) return null;
    const { data, content } = matter(raw);
    return { content, data, slug };
  }
  const altSlug = slug.replace(/-/g, "_");
  const altPath = path.join(booksDir, altSlug + ".md");
  if (fs.existsSync(altPath)) {
    const raw = safeReadFile(altPath);
    if (!raw) return null;
    const { data, content } = matter(raw);
    return { content, data, slug: altSlug };
  }
  return null;
}

export function getBuildingDigitalWealthBySlug(slug: string): ContentResult {
  const filePath = resolveMd("books/building-digital-wealth", slug);
  if (!filePath) return null;
  const raw = safeReadFile(filePath);
  if (!raw) return null;
  const { data, content } = matter(raw);
  return { content, data, slug };
}

export function getBookFrameworkBySlug(slug: string): ContentResult {
  const filePath = resolveMd("books/frameworks", slug);
  if (!filePath) return null;
  const raw = safeReadFile(filePath);
  if (!raw) return null;
  const { data, content } = matter(raw);
  return { content, data, slug };
}

function listMdSlugs(dir: string): string[] {
  const root = ensureContentRoot();
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  const names = fs.readdirSync(full);
  return names
    .filter((n) => n.endsWith(".md"))
    .map((n) => n.replace(/\.md$/, ""));
}

/** Only top-level .md files in books/ (no subdirs). */
export function listBookSlugs(): string[] {
  const root = ensureContentRoot();
  const booksDir = path.join(root, "books");
  if (!fs.existsSync(booksDir)) return [];
  const names = fs.readdirSync(booksDir, { withFileTypes: true });
  return names
    .filter((d) => d.isFile() && d.name.endsWith(".md"))
    .map((d) => d.name.replace(/\.md$/, ""));
}

export function listPageSlugs(): string[] {
  return listMdSlugs("pages");
}

export function listBuildingDigitalWealthSlugs(): string[] {
  return listMdSlugs("books/building-digital-wealth");
}

export function listBookFrameworkSlugs(): string[] {
  return listMdSlugs("books/frameworks");
}
