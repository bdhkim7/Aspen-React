import type { ContentPageData } from "@/types/content";
import { historyPage } from "./history";
import { leadershipPage } from "./leadership";

export const aboutContentBySlug: Record<string, ContentPageData> = {
  leadership: leadershipPage,
  history: historyPage,
};

export function getAboutContent(slug: string): ContentPageData | undefined {
  return aboutContentBySlug[slug];
}

export { historyPage, leadershipPage };
