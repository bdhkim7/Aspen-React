import type { Metadata } from "next";
import { FaqsPageView } from "@/components/pages/FaqsPageView";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await getLocale());
  return {
    title: t.faqs.title,
    description: t.faqs.description,
  };
}

export default function FaqsPage() {
  return <FaqsPageView />;
}
