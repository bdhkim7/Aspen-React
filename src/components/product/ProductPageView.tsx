import { ContactForm } from "@/components/ContactForm";
import { ProductAddOnsSection } from "@/components/product/ProductAddOnsSection";
import type { ProductPageContent } from "@/types/product";

type ProductPageViewProps = {
  product: ProductPageContent;
};

export function ProductPageView({ product }: ProductPageViewProps) {
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
              <div className="processing-hero-images-wrap">
                <div className="processing-hero-images">
                  <img
                    src={product.hero.image}
                    className="img-fluid"
                    style={{ maxWidth: "99%", marginLeft: "5%" }}
                    alt={product.hero.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-space--ptb_100">
        <div className="our-experience-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title small-mb__40 tablet-mb__40">
                  <h6 className="section-sub-title mb-20">{product.intro.eyebrow}</h6>
                  <h3 className="heading">
                    The control of a full X-ray unit with{" "}
                    <span className="text-color-primary"> maximum flexibility</span>
                  </h3>
                  <h6 className="text mt-20" style={{ color: "#6c757d", fontWeight: 400 }}>
                    {product.intro.body.split("instant on-device image viewing.")[0]}
                    <span className="text-color-primary"> instant on-device image viewing. </span>
                    {product.intro.body.split("instant on-device image viewing. ")[1]}
                  </h6>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={product.intro.image}
                  className="img-fluid"
                  alt={product.hero.name}
                  style={{ width: "120%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature-list__one">
                <div className="row">
                  {product.intro.featureCards.map((card) => (
                    <div key={card.title} className="col-lg-4 col-md-6">
                      <div className="ht-box-icon style-01 single-svg-icon-box">
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <img src={card.icon} alt="" width={64} height={64} />
                          </div>
                          <div className="content">
                            <h5 className="heading">{card.title}</h5>
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

          {product.highlights.items.map((item) => (
            <div key={item.title} className="row section-space--mt_20">
              {item.imageFirst ? (
                <>
                  <div
                    className="col-lg-6 col-md-6 noLRPadding"
                    style={item.imageWrapperStyle}
                  >
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                      style={item.imageStyle}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 intelligenceText">
                    <h4>{item.title}</h4>
                    <br />
                    <ul className="check-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-6 col-md-6 intelligenceText">
                    <h4>{item.title}</h4>
                    <br />
                    <ul className="check-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 noLRPadding"
                    style={item.imageWrapperStyle}
                  >
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                      style={item.imageStyle}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="tabs-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrapper text-center">
                <h6 className="section-sub-title mb-20">Discover More</h6>
                <h3 className="section-title">
                  What&apos;s <span className="text-color-primary"> Inside </span> the Box
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
                      alt="Included accessories"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-content-inner mt-30">
                      <ul className="check-list section-space--mb_40">
                        <li className="list-item">
                          <strong>Included Accessories for {product.hero.name} </strong>
                          <ul className="circle-list">
                            {product.inTheBox.accessories.map((accessory) => (
                              <li key={accessory} className="list-item" style={{ marginBottom: 0 }}>
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

          <ProductAddOnsSection addOns={product.addOns} specs={product.specs} />
        </div>
      </div>

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
                  download={product.cta.brochureFilename}
                  className="btn btn--white btn-one"
                >
                  <span className="btn-icon mr-2">
                    <i className="far fa-info-circle" />
                  </span>
                  Download Brochure (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="gallery-area section-padding" id="gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
                <h3 className="heading">
                  Photo <span className="text-color-primary"> Gallery </span>
                </h3>
              </div>
            </div>
          </div>

          {product.gallery.map((group) => (
            <div key={group.title}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-wrap text-center section-space--mb_40 section-space--mt_20">
                    <h6 className="section-sub-title mb-20">{group.title}</h6>
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

      <ContactForm />
    </div>
  );
}
