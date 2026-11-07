import type { Metadata } from "next";
import { LocaleLink } from "@/components/LocaleLink";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await getLocale());
  return { title: t.thankYou.title };
}

export default async function ThankYouPage() {
  const t = getDictionary(await getLocale());

  return (
    <div className="site-wrapper-reveal">
      <div className="section-space--ptb_100">
        <div className="container">
          <h1 className="heading mb-20">{t.thankYou.title}</h1>
          <p className="mb-30">{t.thankYou.body}</p>
          <LocaleLink href="/" className="ht-btn ht-btn-md">
            {t.thankYou.back}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
