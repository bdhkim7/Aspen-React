import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/ProductPageView";
import { softwarePages } from "@/data/catalog";
import { getProductContent } from "@/data/products";

type SoftwarePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return softwarePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SoftwarePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProductContent(slug);
  const page = softwarePages.find((item) => item.slug === slug);
  return {
    title: content?.title ?? page?.title ?? "Software",
    description: content?.description ?? page?.description,
  };
}

export default async function SoftwarePage({ params }: SoftwarePageProps) {
  const { slug } = await params;
  const page = softwarePages.find((item) => item.slug === slug);
  if (!page) notFound();

  const content = getProductContent(slug);
  if (!content) notFound();

  return <ProductPageView product={content} />;
}
