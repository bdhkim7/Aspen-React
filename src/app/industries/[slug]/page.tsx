import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/ContentPageView";
import { industryPages } from "@/data/catalog";
import { getIndustryContent } from "@/data/industries";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getIndustryContent(slug);
  const page = industryPages.find((item) => item.slug === slug);
  const t = getDictionary(await getLocale());
  return { title: t.industries[slug] ?? content?.title ?? page?.title ?? "Industry" };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);
  if (!page) notFound();

  const content = getIndustryContent(slug);
  if (!content) notFound();

  return <ContentPageView page={content} />;
}
