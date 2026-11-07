import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { FunFacts } from "@/components/FunFacts";
import { TypedHeadline } from "@/components/TypedHeadline";
import { LocaleLink } from "@/components/LocaleLink";
import { ProductGrid } from "@/components/ProductGrid";
import { applications, heroSlides } from "@/data/catalog";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export default async function HomePage() {
  const t = getDictionary(await getLocale());
  return (
    <>
      <section id="section-1">
        <div className="content-slider">
          {heroSlides.map((slide, index) => (
            <input
              key={slide.id}
              type="radio"
              id={slide.id}
              className="sec-1-input"
              name="banner"
              defaultChecked={index === 0}
            />
          ))}

          <div className="slider">
            {heroSlides.map((slide, index) => (
              <div key={slide.id} id={`top-banner-${index + 1}`} className="banner">
                <div className="processing-hero pt-lg-5 mt-20">
                  <div className="container-fluid">
                    <div className="row align-items-center carousel-split">
                      <div className="col-7 carousel-split__media">
                        <LocaleLink href={slide.href}>
                          <div className="processing-hero-images">
                            <Image
                              className="img-fluid mb-10 responsive-hero-image"
                              src={slide.image}
                              alt={t.home.hero[slide.id]?.imageAlt ?? slide.imageAlt}
                              width={960}
                              height={640}
                              priority={index === 0}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                        </LocaleLink>
                      </div>
                      <div className="col-5 carousel-split__copy">
                        <div className="carousel-copy">
                          <p className="carousel-eyebrow">
                            {t.home.hero[slide.id]?.eyebrow ?? slide.eyebrow}
                          </p>
                          <h1 className="carousel-title">{slide.title}</h1>
                          <p className="carousel-desc">
                            {t.home.hero[slide.id]?.description ?? slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav>
            <div className="controls">
              {heroSlides.map((slide, index) => (
                <label key={slide.id} htmlFor={slide.id}>
                  <span className="progressbar">
                    <span className="progressbar-fill" />
                  </span>
                  <span>{String(index + 1).padStart(2, "0")}</span> {slide.navLabel}
                </label>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <div className="accordion-wrapper projectinfotechno-bg section-space--ptb_100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-wrapper faq-custom-col">
                <div className="section-title section-space--mb_40">
                  <h6 className="section-sub-title mb-20">{t.home.companyEyebrow}</h6>
                  <h3 className="heading">
                    {t.home.companyHeadingBefore}
                    <span className="text-color-primary">{t.home.companyHeadingHighlight}</span>
                    {t.home.companyHeadingAfter}
                  </h3>
                </div>
                <div className="cybersecurity-about-text">
                  <div className="text">
                    {t.home.companyBody.split("\n\n").map((paragraph, index) => (
                      <span key={paragraph.slice(0, 24)}>
                        {index > 0 ? (
                          <>
                            <br />
                            <br />
                          </>
                        ) : null}
                        {paragraph}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rv-video-section">
                <div className="main-video-box video-popup">
                  <a
                    href="https://www.youtube.com/watch?v=ooFaAwyDKNA"
                    className="video-link mt-30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="single-popup-wrap">
                      <Image
                        className="img-fluid border-radus-5"
                        src="/assets/images/products/Europa90/product images/Europa90_main_ankle.png"
                        alt="Europa90 imaging"
                        width={800}
                        height={560}
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div className="ht-popup-video video-button">
                        <div className="video-mark">
                          <div className="wave-pulse wave-pulse-1" />
                          <div className="wave-pulse wave-pulse-2" />
                        </div>
                        <div className="video-button__two">
                          <div className="video-play">
                            <span className="video-play-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-wrapper-reveal">
        <ProductGrid />

        <FunFacts />

        <div className="feature-images-wrapper section-space--ptb_100 applications-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_10">
                  <h3 className="heading">
                    {t.home.applicationsHeadingBefore}
                    <span className="text-color-primary">{t.home.applicationsHeadingHighlight}</span>
                    {t.home.applicationsHeadingAfter}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="applications-scroll" tabIndex={0} aria-label={t.home.applicationsLabel}>
            <div className="applications-scroll__track">
              {applications.map((app, index) => {
                const copy = t.home.applications[index];
                return (
                  <LocaleLink
                    key={`${app.href}-${app.title}`}
                    href={app.href}
                    className="applications-card single-svg-icon-box"
                  >
                    <div className="applications-card__icon">
                      <Image src={app.icon} alt="" width={64} height={64} />
                    </div>
                    <h5 className="applications-card__title">{copy?.title ?? app.title}</h5>
                    <p className="applications-card__text">{copy?.text ?? app.text}</p>
                    <span className="applications-card__cta">
                      {t.home.seeIndustry} <i className="fa fa-long-arrow-right ml-1" />
                    </span>
                  </LocaleLink>
                );
              })}
            </div>
          </div>
          <p className="applications-scroll__hint">{t.home.scrollHint}</p>
        </div>

        <div className="processing-computing-area bg-gray-2">
          <div className="typed-text-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 ml-auto mr-auto">
                  <div className="typed-text-wrap">
                    <TypedHeadline text={t.home.connect} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
