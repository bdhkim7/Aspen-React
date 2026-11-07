import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/ProductPageView";
import {
  getProductContent,
  getProductStaticParams,
  isSoftwareSlug,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProductStaticParams();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProductContent(slug);
  return {
    title: content?.title ?? "Product",
    description: content?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  if (isSoftwareSlug(slug)) notFound();

  const content = getProductContent(slug);
  if (!content) notFound();

  return <ProductPageView product={content} />;
}
