import type { Metadata } from "next";
import { getLegacyTitle, LegacyHtmlPage } from "@/components/LegacyHtmlPage";

export const metadata: Metadata = {
  title: getLegacyTitle("leadership") ?? "Leadership",
};

export default function LeadershipPage() {
  return <LegacyHtmlPage slug="leadership" includeContact={false} />;
}
