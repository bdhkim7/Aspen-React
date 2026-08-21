import type { ContentPageData } from "@/types/content";
import { military } from "./military";
import { orthopedic } from "./orthopedic";

function comingSoonIndustry(
  slug: string,
  title: string,
  breadcrumb: string,
): ContentPageData {
  return {
    slug,
    title,
    breadcrumb,
    blocks: [{ type: "comingSoon" }],
  };
}

export const industryContentBySlug: Record<string, ContentPageData> = {
  veterinary: comingSoonIndustry("veterinary", "Veterinary", "Veterinary Industry"),
  mobile: comingSoonIndustry("mobile", "Mobile X-Rays", "Mobile Industry"),
  clinics: comingSoonIndustry("clinics", "Clinics & Hospitals", "Clinics Industry"),
  dental: comingSoonIndustry("dental", "Dental", "Dental Industry"),
  "urgent-care": comingSoonIndustry(
    "urgent-care",
    "Urgent Care",
    "Urgent Care Industry",
  ),
  orthopedic,
  military,
};

export function getIndustryContent(slug: string): ContentPageData | undefined {
  return industryContentBySlug[slug];
}
