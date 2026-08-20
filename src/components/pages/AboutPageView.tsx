import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const certifications = [
  {
    title: "FDA",
    image: "/assets/images/accreditation/fda.png",
    text: "FDA is a federal agency of the United States Department of Health and Human Services. The systems provided for the U.S market have been registered and hold an FDA 510(K) when applicable.",
  },
  {
    title: "Cofepris",
    image: "/assets/images/accreditation/cofepris.png",
    text: "Cofepris is a regulatory body of the Mexican government that is responsible for regulating a variety of health related topics in Mexico, including medical devices.",
  },
  {
    title: "ISO 13485",
    image: "/assets/images/accreditation/iso.png",
    text: "ISO 13485 is a quality management system for the design and manufacture of medical devices. We have been assessed and found in compliance with ISO 13485:2016. As a result, our facility proudly has this certificate hanging in our front lobby.",
  },
];

const values = [
  {
    icon: "fal fa-life-ring",
    title: "Products ready to support your needs",
    text: "Each of our products are ready to support your needs today, reflecting multiple years of design, development, testing and regulatory efforts",
  },
  {
    icon: "fal fa-lock-alt",
    title: "We're in this for the long-haul",
    text: "It's not a quick sale—we're in this for the long-haul, investing projects and products that represent long-term, sustainable growth",
  },
  {
    icon: "fal fa-globe",
    title: "Sustainable growth",
    text: "We develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
  },
  {
    icon: "fal fa-medal",
    title: "Future-oriented Product Roadmaps",
    text: "Because of the naturally lengthy development cycles involved in the products, we provide product roadmaps that are essential to your organization's success",
  },
];

export function AboutPageView() {
  return (
    <div className="site-wrapper-reveal">
      <div className="about-banner-wrap banner-space about-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h1 className="breadcrumb-title">About us</h1>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">About us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-large-images-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_60">
                <h6 className="section-sub-title mb-20">Our company</h6>
                <h3 className="heading">
                  Aspen Imaging Healthcare&apos;s <span className="text-color-primary"> Quality</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="cybersecurity-about-box section-space--pb_70">
            <div className="row">
              <div className="col-lg-6">
                <img src="/assets/images/addons/map.png" className="img-fluid" alt="Global reach" />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="cybersecurity-about-text">
                  <div className="text">
                    Aspen Imaging Healthcare has always maintained the highest production standards
                    for quality, safety and efficiency, holding an extensive list of accreditation
                    from key global customers, platforms, and standard agencies across various
                    market sectors and geographic regions.
                    <br />
                    <br />
                    Below is the list of our national and international accreditation
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="heading text-center section-space--mb_60">
            <span className="text-color-primary"> Our Mission</span>: To become a globally trusted
            healthcare equipment provider with unmatched services and solutions.
          </h3>

          <div className="row">
            <div className="col-12">
              <div className="feature-images__six">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="ht-box-images style-06">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <div className="default-image">
                            <img
                              className="img-fulid"
                              src="/assets/images/icons/mitech-box-image-style-06-image-01-120x120.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Our vision</h5>
                          <div className="text">
                            We strive to improve <strong>clinical and diagnostic outcomes</strong>{" "}
                            with every system that we design, deliver and install
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="ht-box-images style-06">
                      <div className="image-box-wrap">
                        <div className="box-image">
                          <div className="default-image">
                            <img
                              className="img-fulid"
                              src="/assets/images/icons/mitech-box-image-style-06-image-02-120x120.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Our Core</h5>
                          <div className="text">
                            <strong>Market-leading product quality and reliability</strong>
                          </div>
                          <br />
                          <div className="text">
                            Factory responsiveness, and <strong>agile manufacturing </strong> that
                            can quickly adapt to changing requirements
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-large-images-wrapper bg-gray section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_30">
                <h6 className="section-sub-title mb-20">Our Standards</h6>
                <h3 className="heading">
                  Our <span className="text-color-primary"> Certifications and Accreditations</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row row--35">
            {certifications.map((cert) => (
              <div key={cert.title} className="col-lg-4 col-md-6 mt-30">
                <div className="box-large-image__box">
                  <div className="box-large-image__midea">
                    <div className="images-midea">
                      <img src={cert.image} className="img-fluid" alt={cert.title} style={{ height: 300 }} />
                      <div className="heading-wrap">
                        <h5 className="heading">{cert.title}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="box-large-image__content mt-30 text-center">
                    <p>{cert.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-delivering-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_20">
                <h3 className="heading">
                  Let&apos;s build a better tomorrow. <span className="text-color-primary">Together</span>.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-icon-wrapper section-space--pb_80 section-space--pt_80 border-bottom">
        <div className="container">
          <div className="feature-list__three">
            <div className="row">
              {values.map((value) => (
                <div key={value.title} className="col-lg-6">
                  <div className="grid-item animate">
                    <div className="ht-box-icon style-03">
                      <div className="icon-box-wrap">
                        <div className="content-header">
                          <div className="icon">
                            <i className={value.icon} />
                          </div>
                          <h5 className="heading">{value.title}</h5>
                        </div>
                        <div className="content">
                          <div className="text">{value.text}</div>
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

      <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
        <div className="container">
          <div className="row">
            {[
              ["70", "Returning Distributors"],
              ["1000", "Finished projects"],
              ["35", "Skilled Experts"],
              ["15", "Countries"],
            ].map(([count, label], index) => (
              <div key={label} className="col-md-3 col-sm-6">
                <div className="fun-fact--two text-center">
                  <h6 className="fun-fact__text">{index === 3 ? "Serving over" : "Over"}</h6>
                  <div className="fun-fact__count counter">{count}</div>
                  <h6 className="fun-fact__text">{label}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
