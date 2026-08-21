import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/ContentPageView";
import { getAboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: getAboutContent("history")?.title ?? "Our History",
};

export default function HistoryPage() {
  const content = getAboutContent("history");
  if (!content) notFound();
  return <ContentPageView page={content} />;
}
