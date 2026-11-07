import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { faqSections } from "@/data/faqs";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function FaqsPageView() {
  const t = getDictionary(await getLocale());
  const sections = t.faqs.sections.length > 0 ? t.faqs.sections : faqSections;

  return (
    <>
      <PageBreadcrumb title={t.faqs.title} headingLevel="h2" />

      <div className="site-wrapper-reveal">
        <div className="accordion-wrapper section-space--ptb_80 border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h3 className="heading">{t.faqs.heading}</h3>
                  <p className="faq-compact__intro">{t.faqs.intro}</p>
                </div>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-lg-7">
                <FaqAccordion sections={sections} />
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
                      <Image
                        className="img-fluid border-radus-5"
                        src="/assets/images/bg/faqs-video-poster.jpg"
                        alt="Aspen Imaging overview video"
                        width={640}
                        height={360}
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

        <ContactForm />
      </div>
    </>
  );
}
