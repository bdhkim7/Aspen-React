import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { FunFacts } from "@/components/FunFacts";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { certifications } from "@/data/certifications";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function AboutPageView() {
  const t = getDictionary(await getLocale());

  return (
    <div className="site-wrapper-reveal about-page">
      <PageBreadcrumb title={t.about.title} variant="about" />

      <div className="about-sheet">
        <div className="container">
          <section className="about-block about-open">
            <p className="about-label">{t.about.eyebrow}</p>
            <h2>
              {t.about.headingBefore}
              <span className="about-mark">{t.about.headingHighlight}</span>
              {t.about.headingAfter}
            </h2>
            <div className="about-open__body">
              <div>
                <p className="about-prose">{t.about.intro}</p>
              </div>
              <figure className="about-map">
                <Image
                  src="/assets/images/addons/map.png"
                  alt={t.about.mapAlt}
                  width={640}
                  height={420}
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            </div>
          </section>

          <section className="about-block about-quality" id="quality">
            <p className="about-label">{t.commitment.title}</p>
            <div>
              <h2>
                <span className="about-quality__label">{t.about.missionLabel.trim()}</span>
                {t.about.mission}
              </h2>
              <div className="about-split">
                <article>
                  <p className="about-index">01</p>
                  <h3>{t.about.visionTitle}</h3>
                  <p>
                    {t.about.visionBefore}
                    <strong>{t.about.visionStrong}</strong>
                    {t.about.visionAfter}
                  </p>
                </article>
                <article>
                  <p className="about-index">02</p>
                  <h3>{t.about.coreTitle}</h3>
                  <p>
                    <strong>{t.about.coreStrong}</strong>
                  </p>
                  <p>
                    {t.about.coreBefore}
                    <strong>{t.about.coreStrong2}</strong>
                    {t.about.coreAfter}
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="about-block about-standards" aria-labelledby="about-certs-heading">
            <p className="about-label">{t.certifications.eyebrow}</p>
            <div>
              <div className="about-standards__intro">
                <Image
                  src="/assets/images/logo/Aspen-Imaging_Logo_Full_Stacked_Gray.png"
                  alt="Aspen Imaging"
                  width={180}
                  height={120}
                  style={{ width: 148, height: "auto" }}
                />
                <div>
                  <h2 id="about-certs-heading">
                    {t.certifications.headingBefore}
                    {t.certifications.headingHighlight}
                  </h2>
                  <p className="about-prose">{t.about.accreditationLead}</p>
                </div>
              </div>
              <div className="about-standards__list">
                {certifications.map((cert) => (
                  <article key={cert.title}>
                    <div className="about-standards__mark">
                      <Image
                        src={cert.image}
                        alt=""
                        width={200}
                        height={120}
                        style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: 84 }}
                      />
                    </div>
                    <h3>{cert.title}</h3>
                    <p>{t.certifications.items[cert.title] ?? cert.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="about-block about-practice">
            <p className="about-label">{t.about.togetherHighlight}</p>
            <div>
              <h2>
                {t.about.togetherBefore}
                <span className="about-mark">{t.about.togetherHighlight}</span>.
              </h2>
              <ol className="about-practice__list">
                {t.about.values.map((value, index) => (
                  <li key={value.title}>
                    <p className="about-index">{String(index + 1).padStart(2, "0")}</p>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>
      </div>

      <FunFacts />
      <ContactForm />
    </div>
  );
}
