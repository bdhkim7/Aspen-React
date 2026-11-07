import { LocaleLink } from "@/components/LocaleLink";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

type PageBreadcrumbProps = {
  title: string;
  /** Banner-style shell used on About; default is the standard area. */
  variant?: "default" | "about";
  /** About banner uses h1; FAQs historically used h2. */
  headingLevel?: "h1" | "h2";
};

export async function PageBreadcrumb({
  title,
  variant = "default",
  headingLevel = "h1",
}: PageBreadcrumbProps) {
  const Heading = headingLevel;
  const t = getDictionary(await getLocale());
  const wrapClass =
    variant === "about"
      ? "about-banner-wrap banner-space about-us-bg"
      : "breadcrumb-area";

  return (
    <div className={wrapClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_box text-center">
              <Heading className="breadcrumb-title">{title}</Heading>
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <LocaleLink href="/">{t.breadcrumb.home}</LocaleLink>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
