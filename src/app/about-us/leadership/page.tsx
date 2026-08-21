import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/ContentPageView";
import { getAboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: getAboutContent("leadership")?.title ?? "Leadership",
};

export default function LeadershipPage() {
  const content = getAboutContent("leadership");
  if (!content) notFound();
  return <ContentPageView page={content} />;
}
