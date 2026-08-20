import type { Metadata } from "next";
import { FaqsPageView } from "@/components/pages/FaqsPageView";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Aspen Imaging products, distributors, certifications, and technical support.",
};

export default function FaqsPage() {
  return <FaqsPageView />;
}
