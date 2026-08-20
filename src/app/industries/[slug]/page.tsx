import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacyTitle, hasLegacyHtml, LegacyHtmlPage } from "@/components/LegacyHtmlPage";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { industryPages } from "@/data/catalog";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);
  const legacyTitle = getLegacyTitle(slug);
  return { title: legacyTitle ?? page?.title ?? "Industry" };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);
  if (!page) notFound();

  if (hasLegacyHtml(slug)) {
    return <LegacyHtmlPage slug={slug} />;
  }

  return <PlaceholderPage title={page.title} description={page.description} />;
}
