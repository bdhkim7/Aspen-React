"use client";

import { useState } from "react";
import { useDictionary } from "@/components/LocaleProvider";
import type { ProductAddOn } from "@/types/product";

type ProductAddOnsSectionProps = {
  addOns: ProductAddOn[];
  specs: { label: string; value: string }[];
  /** Extra space when this block follows the in-the-box content. */
  spaced?: boolean;
};

export function ProductAddOnsSection({ addOns, specs, spaced = false }: ProductAddOnsSectionProps) {
  const hasAddOns = addOns.length > 0;
  const hasSpecs = specs.length > 0;
  const [activeTab, setActiveTab] = useState<"addons" | "specs">(
    hasAddOns ? "addons" : "specs",
  );
  const [activeModal, setActiveModal] = useState<ProductAddOn | null>(null);
  const t = useDictionary().product;

  if (!hasAddOns && !hasSpecs) return null;

  return (
    <>
      <div className={`row${spaced ? " section-space--mt_80" : ""}`}>
        <div className="col-lg-12">
          <div className="section-title-wrapper text-center section-space--mb_60">
            <h3 className="section-title">
              {hasAddOns && hasSpecs ? (
                <>
                  {t.addOnsAndSpecsBefore}
                  <span className="text-color-primary">{t.addOnsAndSpecsMid}</span>
                  {t.addOnsAndSpecsAfter}
                </>
              ) : hasAddOns ? (
                t.addOns
              ) : (
                t.specifications
              )}
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 ht-tab-wrap">
          {hasAddOns && hasSpecs ? (
            <div className="text-center">
              <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                <li className={`tab__item nav-item${activeTab === "addons" ? " active" : ""}`}>
                  <a
                    href="#add-ons"
                    className={`nav-link text-center${activeTab === "addons" ? " active" : ""}`}
                    role="tab"
                    aria-selected={activeTab === "addons"}
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveTab("addons");
                    }}
                  >
                    {t.addOns}
                  </a>
                </li>
                <li className={`tab__item nav-item${activeTab === "specs" ? " active" : ""}`}>
                  <a
                    href="#specification"
                    className={`nav-link text-center${activeTab === "specs" ? " active" : ""}`}
                    role="tab"
                    aria-selected={activeTab === "specs"}
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveTab("specs");
                    }}
                  >
                    {t.specification}
                  </a>
                </li>
              </ul>
            </div>
          ) : null}

          {activeTab === "addons" && hasAddOns ? (
            <div className="tab-history-wrap section-space--mt_20">
              <div className="container">
                <div className="row">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="col-lg-4 col-md-6 mb-30">
                      <button
                        type="button"
                        className="projects-wrap style-01 w-100 text-left border-0 bg-transparent p-0"
                        onClick={() => setActiveModal(addOn)}
                      >
                        <div className="projects-image-box">
                          <div className="projects-image">
                            <img
                              className="img-fluid"
                              src={addOn.image}
                              alt={addOn.title}
                              style={addOn.imageStyle}
                            />
                          </div>
                          <div className="content">
                            <h5 className="heading">{addOn.title}</h5>
                            <div className="text">{addOn.summary}</div>
                            <div className="box-projects-arrow">
                              <span className="button-text">{t.viewDetails}</span>
                              <i className="fa fa-long-arrow-right ml-1" />
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="tab-history-wrap section-space--mt_60">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ht-box-images style-08">
                    <div className="image-box-wrap">
                      <div className="content">
                        <table className="table-fill">
                          <thead>
                            <tr>
                              <th className="text-left">{t.item}</th>
                              <th className="text-left">{t.specification}</th>
                            </tr>
                          </thead>
                          <tbody className="table-hover">
                            {specs.map((row) => (
                              <tr key={row.label}>
                                <td className="text-left">{row.label}</td>
                                <td className="text-left">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {activeModal ? (
        <div
          className="modal fade show d-block"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="modal-dialog modal-lg"
            role="document"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{activeModal.title}</h4>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => setActiveModal(null)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="check-list">
                  {activeModal.details.map((detail) => (
                    <li key={detail} className="list-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={() => setActiveModal(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
