import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacyTitle, hasLegacyHtml, LegacyHtmlPage } from "@/components/LegacyHtmlPage";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { softwarePages } from "@/data/catalog";

type SoftwarePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return softwarePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SoftwarePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = softwarePages.find((item) => item.slug === slug);
  const legacyTitle = getLegacyTitle(slug);
  return { title: legacyTitle ?? page?.title ?? "Software" };
}

export default async function SoftwarePage({ params }: SoftwarePageProps) {
  const { slug } = await params;
  const page = softwarePages.find((item) => item.slug === slug);
  if (!page) notFound();

  if (hasLegacyHtml(slug)) {
    return <LegacyHtmlPage slug={slug} />;
  }

  return <PlaceholderPage title={page.title} description={page.description} />;
}
