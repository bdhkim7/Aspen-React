import Image from "next/image";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
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
                    <Image
                      src={cert.image}
                      className="img-fluid"
                      alt={cert.title}
                      width={400}
                      height={300}
                      style={{ height: 300, width: "auto", maxWidth: "100%" }}
                    />
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
  );
}
