import type { ProductPageContent } from "@/types/product";
import { europa90 } from "./europa-90";

export const productContentBySlug: Record<string, ProductPageContent> = {
  "europa-90": europa90,
};

export function getProductContent(slug: string): ProductPageContent | undefined {
  return productContentBySlug[slug];
}
