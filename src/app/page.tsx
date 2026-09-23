import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FunFacts } from "@/components/FunFacts";
import { ProductGrid } from "@/components/ProductGrid";
import { applications, heroSlides } from "@/data/catalog";

export default function HomePage() {
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
                        <Link href={slide.href}>
                          <div className="processing-hero-images">
                            <Image
                              className="img-fluid mb-10 responsive-hero-image"
                              src={slide.image}
                              alt={slide.imageAlt}
                              width={960}
                              height={640}
                              priority={index === 0}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="col-5 carousel-split__copy">
                        <div className="carousel-copy">
                          <p className="carousel-eyebrow">{slide.eyebrow}</p>
                          <h1 className="carousel-title">{slide.title}</h1>
                          <p className="carousel-desc">{slide.description}</p>
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
                  <h6 className="section-sub-title mb-20">Our company</h6>
                  <h3 className="heading">
                    Aspen Imaging is redefining the{" "}
                    <span className="text-color-primary"> Medical Imaging</span> industry
                  </h3>
                </div>
                <div className="cybersecurity-about-text">
                  <div className="text">
                    Headquartered in Plano, Texas, Aspen Imaging Healthcare is a leading
                    provider of medical imaging equipment for customers world-wide.
                    <br />
                    <br />
                    We specialize in partnering with highly skilled distributors across
                    multiple regions and market segments to provide best-in-class
                    solutions for their clinical end-users, delivering state of the art
                    products and services such as X-Ray systems, C-arms, and portables
                    with competitive pricing.
                    <br />
                    <br />
                    We invite you to explore our medical imaging solutions to see our
                    experience and attention to detail that set us apart.
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
                    <span className="text-color-primary">Applications</span> We Serve
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="applications-scroll" tabIndex={0} aria-label="Applications we serve">
            <div className="applications-scroll__track">
              {applications.map((app) => (
                <Link
                  key={`${app.href}-${app.title}`}
                  href={app.href}
                  className="applications-card single-svg-icon-box"
                >
                  <div className="applications-card__icon">
                    <Image src={app.icon} alt="" width={64} height={64} />
                  </div>
                  <h5 className="applications-card__title">{app.title}</h5>
                  <p className="applications-card__text">{app.text}</p>
                  <span className="applications-card__cta">
                    See Industry Details <i className="fa fa-long-arrow-right ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <p className="applications-scroll__hint">Scroll to explore</p>
        </div>

        <div className="processing-computing-area bg-gray-2">
          <div className="typed-text-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 ml-auto mr-auto">
                  <div className="typed-text-wrap">
                    <h4 className="cd-headline letters type">
                      <span>Connect with us today and exceed your business demands</span>
                    </h4>
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
