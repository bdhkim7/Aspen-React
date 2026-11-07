import { ContactForm } from "@/components/ContactForm";
import { ProductAddOnsSection } from "@/components/product/ProductAddOnsSection";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";
import type { CSSProperties } from "react";
import type { ProductPageContent } from "@/types/product";
import Image from "next/image";

type ProductPageViewProps = {
  product: ProductPageContent;
};

function HighlightedText({
  text,
  highlight,
  as: Tag = "span",
}: {
  text: string;
  highlight?: string;
  as?: "span" | "h3" | "h6";
}) {
  if (!highlight || !text.includes(highlight)) {
    return <Tag>{text}</Tag>;
  }

  const start = text.indexOf(highlight);
  const before = text.slice(0, start);
  const after = text.slice(start + highlight.length);

  return (
    <Tag>
      {before}
      <span className="text-color-primary">{highlight}</span>
      {after}
    </Tag>
  );
}

function ProductMedia({
  src,
  alt,
  fit,
  imageStyle,
  className = "",
  legacyDefaultStyle,
}: {
  src: string;
  alt: string;
  fit?: "contain" | "cover";
  imageStyle?: CSSProperties;
  className?: string;
  legacyDefaultStyle?: CSSProperties;
}) {
  if (!fit) {
    return (
      <img
        src={src}
        alt={alt}
        className={`img-fluid ${className}`.trim()}
        style={imageStyle ?? legacyDefaultStyle}
      />
    );
  }

  return (
    <div className={`product-media product-media--${fit} ${className}`.trim()}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
}

export async function ProductPageView({ product }: ProductPageViewProps) {
  const t = getDictionary(await getLocale()).product;
  const showDiscover =
    Boolean(product.inTheBox) ||
    Boolean(product.addOns?.length) ||
    Boolean(product.specs?.length);

  return (
    <div className="site-wrapper-reveal">
      <div className="preview-hero-area infotechno-bg position-relative section-space--ptb_120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="processing-hero-text">
                <h6>{product.hero.tagline}</h6>
                <h1 className="font-weight--reguler mb-15">
                  <span className="text-color-primary">{product.hero.name}</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product-hero-media">
                <Image
                  src={product.hero.image}
                  alt={product.hero.name}
                  width={720}
                  height={540}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-space--ptb_100">
        <div className="our-experience-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className={product.intro.image ? "col-lg-6" : "col-lg-10 col-xl-8"}>
                <div className="section-title small-mb__40 tablet-mb__40">
                  <h6 className="section-sub-title mb-20">{product.intro.eyebrow}</h6>
                  <h3 className="heading">
                    <HighlightedText
                      text={product.intro.heading}
                      highlight={product.intro.headingHighlight}
                    />
                  </h3>
                  <h6
                    className="text mt-20"
                    style={{ color: "#6c757d", fontWeight: 400, whiteSpace: "pre-line" }}
                  >
                    <HighlightedText
                      text={product.intro.body}
                      highlight={product.intro.bodyHighlight}
                    />
                  </h6>
                </div>
              </div>
              {product.intro.image ? (
                <div className="col-lg-6">
                  <ProductMedia
                    src={product.intro.image}
                    alt={product.hero.name}
                    fit={product.intro.imageFit}
                    imageStyle={product.intro.imageStyle}
                    className="product-media--intro"
                    legacyDefaultStyle={{ width: "120%" }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {product.intro.featureCards?.length ? (
          <div className="container section-space--mt_60">
            <div className="row">
              <div className="col-12">
                <div className="feature-list__one">
                  <div className="row">
                    {product.intro.featureCards.map((card) => (
                      <div key={card.title} className="col-lg-4 col-md-6">
                        <div className="ht-box-icon style-01 single-svg-icon-box">
                          <div className="icon-box-wrap">
                            {card.icon ? (
                              <div className="icon">
                                <img src={card.icon} alt="" width={64} height={64} />
                              </div>
                            ) : (
                              <div className="icon product-feature-icon-fallback" aria-hidden>
                                <span>{card.title.charAt(0)}</span>
                              </div>
                            )}
                            <div className="content">
                              <h5 className="heading">{card.title}</h5>
                              {card.bullets?.length ? (
                                <div className="box-large-image__content mt-40 text-center">
                                  <ul className="check-list">
                                    {card.bullets.map((bullet) => (
                                      <li key={bullet} className="list-item">
                                        {bullet}
                                      </li>
                                    ))}
                                  </ul>
                                  {card.disclaimer ? (
                                    <p className="disclaimer-text">{card.disclaimer}</p>
                                  ) : null}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {product.video ? (
        <section className="section-space--pb_100">
          <div className="container">
            {product.video.title ? (
              <div className="section-title-wrap text-center section-space--mb_40">
                <h3 className="heading">{product.video.title}</h3>
              </div>
            ) : null}
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${product.video.youtubeId}${
                  product.video.startSeconds
                    ? `?start=${product.video.startSeconds}`
                    : ""
                }`}
                title={product.video.title ?? `${product.hero.name} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      ) : null}

      {product.highlights?.items.length ? (
        <section className="section-padding bg-gray-2 pb-5" id="features-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h6 className="section-sub-title mb-20">{product.highlights.eyebrow}</h6>
                  <h3 className="heading mb-20">
                    <span className="text-color-primary">{product.highlights.heading}</span>
                  </h3>
                </div>
              </div>
            </div>

            {product.highlights.items.map((item) => {
              const textCol = (
                <div className="col-lg-6 col-md-6 intelligenceText">
                  <h4>{item.title}</h4>
                  <br />
                  {item.bullets?.length ? (
                    <ul className="check-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.body ? <p>{item.body}</p> : null}
                </div>
              );
              const fillImages = item.images?.length ? item.images : null;
              const imageCol = (
                <div
                  className="col-lg-6 col-md-6 noLRPadding"
                  style={item.imageWrapperStyle}
                >
                  {fillImages && fillImages.length > 1 ? (
                    <div className="product-highlight-pair">
                      {fillImages.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt={item.title}
                          className="product-highlight-fill"
                        />
                      ))}
                    </div>
                  ) : fillImages ? (
                    <img
                      src={fillImages[0]}
                      alt={item.title}
                      className="product-highlight-fill"
                    />
                  ) : (
                    <ProductMedia
                      src={item.image}
                      alt={item.title}
                      fit={item.imageFit}
                      imageStyle={item.imageStyle}
                      className="product-media--highlight"
                    />
                  )}
                </div>
              );

              return (
                <div
                  key={item.title}
                  className={`row align-items-stretch${
                    product.highlights?.flush ? "" : " section-space--mt_40"
                  }`}
                >
                  {item.imageFirst ? (
                    <>
                      {imageCol}
                      {textCol}
                    </>
                  ) : (
                    <>
                      {textCol}
                      {imageCol}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {product.keyFeatures &&
      (product.keyFeatures.items.length > 0 || product.keyFeatures.image) ? (
        <section className="section-padding" style={{ backgroundColor: "#fff" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h6 className="section-sub-title mb-20">{product.keyFeatures.eyebrow}</h6>
                  <h3 className="heading">
                    Key <span className="text-color-primary"> Features </span>
                  </h3>
                </div>
              </div>
            </div>

            {product.keyFeatures.image ? (
              <div className="tooltip-container">
                <div className="lg-container">
                  <img
                    className="lg-image"
                    src={product.keyFeatures.image}
                    alt={`${product.hero.name} key features`}
                  />
                </div>
              </div>
            ) : null}

            <div className="row">
              <div className="col-12">
                <div className="feature-list__two">
                  <div className="row">
                    {product.keyFeatures.items.map((item) => (
                      <div key={item.title} className="col-lg-4 col-md-6">
                        <div className="ht-box-icon style-02 single-svg-icon-box">
                          <div className="icon-box-wrap">
                            <div className="icon">
                              <img src={item.icon} alt="" width={48} height={48} />
                            </div>
                            <div className="content">
                              <h5 className="heading">{item.title}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {showDiscover ? (
        <div className="tabs-wrapper section-space--ptb_100">
          <div className="container">
            {product.inTheBox ? (
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-wrapper text-center">
                      <h6 className="section-sub-title mb-20">{t.discover}</h6>
                      <h3 className="section-title">
                        {t.insideBefore}
                        <span className="text-color-primary">{t.insideHighlight}</span>
                        {t.insideAfter}
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-12 ht-tab-wrap">
                    <div className="tab-history-wrap section-space--mt_40">
                      <div className="row">
                        <div className="col-lg-6 mt-30">
                          <img
                            className="d-block img-fluid"
                            style={{ margin: "auto" }}
                            src={product.inTheBox.image}
                            alt={t.accessoriesAlt}
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="tab-content-inner mt-30">
                            <ul className="check-list section-space--mb_40">
                              <li className="list-item">
                                <strong>
                                  {t.includedFor} {product.hero.name}{" "}
                                </strong>
                                <ul className="circle-list">
                                  {product.inTheBox.accessories.map((accessory) => (
                                    <li
                                      key={accessory}
                                      className="list-item"
                                      style={{ marginBottom: 0 }}
                                    >
                                      {accessory}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {product.addOns?.length || product.specs?.length ? (
              <ProductAddOnsSection
                addOns={product.addOns ?? []}
                specs={product.specs ?? []}
                spaced={Boolean(product.inTheBox)}
              />
            ) : null}
          </div>
        </div>
      ) : null}

      {product.cta ? (
        <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="cta-content md-text-center">
                  <h3 className="heading text-white">
                    {product.cta.heading}{" "}
                    <span className="text-color-secondary">{product.cta.highlight}</span>
                  </h3>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="cta-button-group--one text-center">
                  <a
                    href={product.cta.brochureHref}
                    {...(product.cta.action === "contact" || !product.cta.brochureFilename
                      ? {}
                      : { download: product.cta.brochureFilename })}
                    className="btn btn--white btn-one"
                  >
                    <span className="btn-icon mr-2">
                      <i className="far fa-info-circle" />
                    </span>
                    {product.cta.action === "contact" || !product.cta.brochureFilename
                      ? t.contactUs
                      : t.downloadBrochure}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {product.gallery?.length ? (
        <section className="gallery-area section-padding" id="gallery-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h3 className="heading">
                    {t.galleryBefore}
                    <span className="text-color-primary">{t.galleryHighlight}</span>
                  </h3>
                </div>
              </div>
            </div>

            {product.gallery.map((group) => (
              <div key={group.title}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-wrap text-center section-space--mb_40 section-space--mt_20">
                      <h6 className="section-sub-title mb-20">
                        {t.galleryTitles[group.title] ?? group.title}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="row box-space gallerys">
                  {group.images.map((image) => (
                    <div key={image} className="col-6 col-sm-6 col-md-3">
                      <div className="single-gallery">
                        <a href={image} className="gallery-image" target="_blank" rel="noreferrer">
                          <img src={image} alt="" style={{ width: "100%" }} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <ContactForm />
    </div>
  );
}
