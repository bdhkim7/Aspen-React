import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await getLocale());
  return { title: t.contact.contactUs };
}

export default function ContactPage() {
  return <ContactForm showSupportPhone />;
}
