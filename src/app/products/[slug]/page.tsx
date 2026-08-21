import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  return {
    title: content?.title ?? page?.title ?? "Product",
    description: content?.description ?? page?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const page = productPages.find((item) => item.slug === slug);
  if (!page) notFound();

  const content = getProductContent(slug);
  if (!content) notFound();

  return <ProductPageView product={content} />;
}
