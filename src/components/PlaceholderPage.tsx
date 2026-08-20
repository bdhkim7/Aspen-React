import Link from "next/link";

type PlaceholderPageProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PlaceholderPage({
  title,
  description,
  eyebrow = "Content migration in progress",
}: PlaceholderPageProps) {
  return (
    <div className="site-wrapper-reveal">
      <div className="section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h6 className="section-sub-title mb-20">{eyebrow}</h6>
              <h1 className="heading mb-20">{title}</h1>
              <p className="mb-30">{description}</p>
              <p className="mb-30">
                This route is live so navigation, SEO URLs, and redirects work.
                Full copy and product photography will be ported from the static
                HTML site next, page by page.
              </p>
              <Link href="/contact-us" className="ht-btn ht-btn-md">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
