import type { Metadata } from "next";
import { getLegacyTitle, LegacyHtmlPage } from "@/components/LegacyHtmlPage";

export const metadata: Metadata = {
  title: getLegacyTitle("history") ?? "Our History",
};

export default function HistoryPage() {
  return <LegacyHtmlPage slug="history" includeContact={false} />;
}
