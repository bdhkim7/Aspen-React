"use client";

import Image from "next/image";
import { useState } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import { useDictionary } from "@/components/LocaleProvider";
import { catalogProducts, type ProductCategory } from "@/data/catalog";

type Filter = "*" | ProductCategory;

const counts = {
  "*": catalogProducts.length,
  handheld: catalogProducts.filter((p) => p.category === "handheld").length,
  "x-ray": catalogProducts.filter((p) => p.category === "x-ray").length,
  flat: catalogProducts.filter((p) => p.category === "flat").length,
} as const;

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("*");
  const t = useDictionary();
  const filters: { id: Filter; label: string }[] = [
    { id: "*", label: t.catalog.showAll },
    { id: "handheld", label: t.catalog.handheld },
    { id: "x-ray", label: t.catalog.xray },
    { id: "flat", label: t.catalog.flat },
  ];

  const visible =
    filter === "*"
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === filter);

  return (
    <div className="projects-wrapper section-space--ptb_100 projects-masonary-wrapper" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_40">
              <h6 className="section-sub-title mb-20">{t.catalog.eyebrow}</h6>
              <h3 className="heading">
                {t.catalog.headingBefore}
                <span className="text-color-primary">{t.catalog.headingHighlight}</span>
              </h3>
            </div>
            <div className="messonry-button text-center section-space--mb_60">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={filter === item.id ? "is-checked" : ""}
                  onClick={() => setFilter(item.id)}
                >
                  <span className="filter-text">{item.label}</span>
                  <span className="filter-counter">{counts[item.id]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-case-wrap">
          <div className="row mesonry-list">
            {visible.map((product) => {
              const body = (
                <div className="projects-image-box">
                  <div className="projects-image">
                    <Image
                      className="img-fluid"
                      src={product.image}
                      alt={product.name}
                      width={480}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="content">
                    <h6 className="heading">{product.name}</h6>
                    <div className="post-categories">
                      {t.catalog.category[product.category] ?? product.categoryLabel}
                    </div>
                    <div className="text">{t.catalog.summary[product.slug] ?? product.summary}</div>
                    <div className="box-projects-arrow">
                      <span className="button-text">{t.catalog.viewDetails}</span>
                      <i className="fa fa-long-arrow-right ml-1" />
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={product.slug} className={`col-lg-3 col-md-6 ${product.category}`}>
                  {product.download ? (
                    <a href={product.href} download className="projects-wrap style-01">
                      {body}
                    </a>
                  ) : (
                    <LocaleLink href={product.href} className="projects-wrap style-01">
                      {body}
                    </LocaleLink>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
