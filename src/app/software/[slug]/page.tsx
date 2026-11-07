import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPageView } from "@/components/product/ProductPageView";
import {
  getProductContent,
  getSoftwareStaticParams,
  isSoftwareSlug,
} from "@/data/products";

type SoftwarePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSoftwareStaticParams();
}

export async function generateMetadata({ params }: SoftwarePageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getProductContent(slug);
  return {
    title: content?.title ?? "Software",
    description: content?.description,
  };
}

export default async function SoftwarePage({ params }: SoftwarePageProps) {
  const { slug } = await params;
  if (!isSoftwareSlug(slug)) notFound();

  const content = getProductContent(slug);
  if (!content) notFound();

  return <ProductPageView product={content} />;
}
