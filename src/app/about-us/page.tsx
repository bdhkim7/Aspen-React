import type { Metadata } from "next";
import { AboutPageView } from "@/components/pages/AboutPageView";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await getLocale());
  return {
    title: t.about.title,
    description: t.meta.description,
  };
}

export default function AboutPage() {
  return <AboutPageView />;
}
