import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacyTitle, hasLegacyHtml, LegacyHtmlPage } from "@/components/LegacyHtmlPage";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { ProductPageView } from "@/components/product/ProductPageView";
import { productPages } from "@/data/catalog";
import { getProductContent } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProductContent(slug);
  const page = productPages.find((item) => item.slug === slug);
  const legacyTitle = getLegacyTitle(slug);
  return {
    title: content?.title ?? legacyTitle ?? page?.title ?? "Product",
    description: content?.description ?? page?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const page = productPages.find((item) => item.slug === slug);
  if (!page) notFound();

  const content = getProductContent(slug);
  if (content) {
    return <ProductPageView product={content} />;
  }

  if (hasLegacyHtml(slug)) {
    return <LegacyHtmlPage slug={slug} />;
  }

  return <PlaceholderPage title={page.title} description={page.description} />;
}
