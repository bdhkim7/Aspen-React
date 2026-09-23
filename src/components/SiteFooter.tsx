import Image from "next/image";
import Link from "next/link";
import { company, footerSolutionLinks, industryLinks } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-area-wrapper bg-gray">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer-widget">
              <div className="footer-widget__logo mb-30">
                <Image
                  src="/assets/images/logo/dark-logo-160x48.png"
                  className="img-fluid"
                  alt={company.name}
                  width={160}
                  height={48}
                />
              </div>
              <ul className="footer-widget__list">
                <li>
                  <i className="info-icon fa fa-map-marker-alt" /> {company.address}
                </li>
                <li>
                  <a href={`mailto:${company.email}`} className="hover-style-link">
                    <i className="info-icon fa fa-envelope" /> {company.email}
                  </a>
                </li>
                <li>
                  <a
                    href={company.phoneHref}
                    className="hover-style-link text-black font-weight--bold"
                  >
                    <i className="info-icon fa fa-phone" /> {company.phoneDisplay}
                  </a>
                </li>
                <li>
                  <Link href="/" className="hover-style-link text-color-primary">
                    www.aspenimaging.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6 col-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Company</h6>
              <ul className="footer-widget__list">
                <li>
                  <Link href="/about-us" className="hover-style-link">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover-style-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6 col-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Solutions</h6>
              <ul className="footer-widget__list">
                {footerSolutionLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    {link.external ? (
                      <a href={link.href} className="hover-style-link" download>
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover-style-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6 col-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Industries</h6>
              <ul className="footer-widget__list">
                {industryLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover-style-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <span className="copyright-text">
                Copyright © {year}{" "}
                <Link href="/">{company.name}.</Link> All Rights Reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="list ht-social-networks solid-rounded-icon">
                <li className="item">
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="social-link"
                  >
                    <i className="fab fa-instagram link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <i className="fab fa-facebook link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href={company.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Youtube"
                    className="social-link"
                  >
                    <i className="fab fa-youtube link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href={company.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin"
                    className="social-link"
                  >
                    <i className="fab fa-linkedin link-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
