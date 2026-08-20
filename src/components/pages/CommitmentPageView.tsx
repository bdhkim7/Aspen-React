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

export function CommitmentPageView() {
  return (
    <div className="site-wrapper-reveal">
      <div className="about-banner-wrap banner-space about-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h1 className="breadcrumb-title">Our Commitment to Quality</h1>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Our Commitment to Quality</li>
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
                <img
                  src="/assets/images/logo/Aspen-Imaging_Logo_Full_Stacked_Gray.png"
                  className="img-fluid"
                  alt="Aspen Imaging"
                  style={{ width: "70%" }}
                />
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

      <ContactForm />
    </div>
  );
}
