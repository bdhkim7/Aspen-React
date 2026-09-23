import Image from "next/image";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactForm } from "@/components/ContactForm";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

export function CommitmentPageView() {
  return (
    <div className="site-wrapper-reveal">
      <PageBreadcrumb title="Our Commitment to Quality" variant="about" />

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
                <Image
                  src="/assets/images/logo/Aspen-Imaging_Logo_Full_Stacked_Gray.png"
                  className="img-fluid"
                  alt="Aspen Imaging"
                  width={480}
                  height={320}
                  style={{ width: "70%", height: "auto" }}
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

      <CertificationsSection />

      <ContactForm />
    </div>
  );
}
