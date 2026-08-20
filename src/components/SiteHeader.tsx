"use client";

import Link from "next/link";
import { useState } from "react";
import {
  accessoryLinks,
  companyLinks,
  contactLinks,
  detectorLinks,
  medicalSystemLinks,
  softwareLinks,
  veterinaryLinks,
  type NavLink,
} from "@/data/site";

function MenuLinks({ links }: { links: NavLink[] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          {link.external ? (
            <a href={link.href} download>
              <span>{link.label}</span>
            </a>
          ) : (
            <Link href={link.href}>
              <span>{link.label}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="header-area header-area--absolute">
        <div className="preview-header-inner header-sticky">
          <div className="container-fluid container-fluid--cp-150">
            <div className="row">
              <div className="col-lg-12">
                <div className="header position-relative">
                  <div className="header__logo">
                    <Link href="/">
                      <img
                        src="/assets/images/logo/Aspen-Imaging_Logo_Full_Stacked_Gray.png"
                        className="img-fluid responsive-logo"
                        alt="Aspen Imaging"
                      />
                    </Link>
                  </div>

                  <div className="header__navigation preview-menu d-none d-xl-block">
                    <nav className="navigation-menu navigation-menu-right">
                      <ul>
                        <li className="has-children has-children--multilevel-submenu">
                          <a>
                            <span>Company</span>
                          </a>
                          <ul className="submenu">
                            {companyLinks.map((link) => (
                              <li key={link.href}>
                                <Link href={link.href}>
                                  <span>{link.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>

                        <li className="has-children">
                          <a href="#products">
                            <span>Solutions</span>
                          </a>
                          <ul className="megamenu megamenu--mega">
                            <li>
                              <h2 className="page-list-title">Flat Panel Detectors</h2>
                              <h4 className="page-list-title">iODR Series</h4>
                              <MenuLinks links={detectorLinks} />
                              <br />
                              <h4 className="page-list-title">Accessories</h4>
                              <MenuLinks links={accessoryLinks} />
                            </li>
                            <li>
                              <h2 className="page-list-title">Medical Systems</h2>
                              <MenuLinks links={medicalSystemLinks} />
                              <br />
                              <h4 className="page-list-title">Software</h4>
                              <MenuLinks links={softwareLinks} />
                            </li>
                            <li>
                              <h2 className="page-list-title">Veterinary</h2>
                              <MenuLinks links={veterinaryLinks} />
                            </li>
                          </ul>
                        </li>

                        <li className="has-children has-children--multilevel-submenu">
                          <a>
                            <span>Contact</span>
                          </a>
                          <ul className="submenu">
                            {contactLinks.map((link) => (
                              <li key={link.href}>
                                <Link href={link.href}>
                                  <span>{link.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header__actions--preview">
                    <div className="header__actions">
                      <button
                        type="button"
                        className="mobile-navigation-icon d-block d-xl-none"
                        aria-label="Open menu"
                        onClick={() => setMobileOpen(true)}
                      >
                        <i />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay${mobileOpen ? " active" : ""}`}
        id="mobile-menu-overlay"
      >
        <div className="mobile-menu-overlay__inner">
          <div className="mobile-menu-overlay__header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 col-8">
                  <div className="logo">
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                      <img
                        src="/assets/images/logo/logo-dark.png"
                        className="img-fluid"
                        alt="Aspen Imaging"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-4">
                  <div className="mobile-menu-content text-right">
                    <button
                      type="button"
                      className="mobile-navigation-close-icon"
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul>
                <li className="has-children">
                  <span>Company</span>
                  <ul className="sub-menu">
                    {companyLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={() => setMobileOpen(false)}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="has-children">
                  <span>Solutions</span>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/software/aspenview" onClick={() => setMobileOpen(false)}>
                        <span>AspenView</span>
                      </Link>
                    </li>
                    {medicalSystemLinks.map((link) => (
                      <li key={`${link.href}-${link.label}`}>
                        {link.external ? (
                          <a href={link.href} download>
                            <span>{link.label}</span>
                          </a>
                        ) : (
                          <Link href={link.href} onClick={() => setMobileOpen(false)}>
                            <span>{link.label}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                    {detectorLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={() => setMobileOpen(false)}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                    {veterinaryLinks.slice(0, 3).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={() => setMobileOpen(false)}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="has-children">
                  <span>Contact</span>
                  <ul className="sub-menu">
                    {contactLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={() => setMobileOpen(false)}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
