import fs from "node:fs";
import path from "node:path";
import { ContactForm } from "@/components/ContactForm";
import { LegacyPageEnhancer } from "@/components/LegacyPageEnhancer";

type LegacyHtmlPageProps = {
  slug: string;
  includeContact?: boolean;
};

function readLegacyHtml(slug: string): string | null {
  const filePath = path.join(process.cwd(), "src", "content", "pages", `${slug}.html`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export function LegacyHtmlPage({ slug, includeContact = true }: LegacyHtmlPageProps) {
  const html = readLegacyHtml(slug);
  if (!html) return null;

  return (
    <>
      <LegacyPageEnhancer />
      <div className="legacy-html-page" dangerouslySetInnerHTML={{ __html: html }} />
      {includeContact ? <ContactForm /> : null}
    </>
  );
}

export function hasLegacyHtml(slug: string): boolean {
  const filePath = path.join(process.cwd(), "src", "content", "pages", `${slug}.html`);
  return fs.existsSync(filePath);
}

export function getLegacyTitle(slug: string): string | undefined {
  const manifestPath = path.join(process.cwd(), "src", "data", "html-pages-manifest.json");
  if (!fs.existsSync(manifestPath)) return undefined;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as Record<
    string,
    { title: string }
  >;
  return manifest[slug]?.title;
}
