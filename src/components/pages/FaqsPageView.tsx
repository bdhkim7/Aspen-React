import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqSections } from "@/data/faqs";

export function FaqsPageView() {
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h2 className="breadcrumb-title">FAQs</h2>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">FAQs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-wrapper-reveal">
        <div className="accordion-wrapper section-space--ptb_80 border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h3 className="heading">Frequently Asked Questions</h3>
                  <p className="faq-compact__intro">
                    Company, products, distributors, and support — grouped for quick scanning.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-lg-7">
                <FaqAccordion sections={faqSections} />
              </div>
              <div className="col-lg-5">
                <div className="faq-compact__video video-interview video-popup">
                  <a
                    href="https://www.youtube.com/watch?v=9No-FiEInLA"
                    className="video-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="single-popup-wrap">
                      <img
                        className="img-fluid border-radus-5"
                        src="/assets/images/bg/faqs-video-poster.jpg"
                        alt="Aspen Imaging overview video"
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

        <ContactForm />
      </div>
    </>
  );
}
