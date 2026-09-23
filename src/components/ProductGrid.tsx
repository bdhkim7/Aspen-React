"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { catalogProducts, type ProductCategory } from "@/data/catalog";

type Filter = "*" | ProductCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "*", label: "Show All" },
  { id: "handheld", label: "Handheld X-Ray" },
  { id: "x-ray", label: "X-Ray Systems" },
  { id: "flat", label: "Flat Panel Detectors" },
];

const counts = {
  "*": catalogProducts.length,
  handheld: catalogProducts.filter((p) => p.category === "handheld").length,
  "x-ray": catalogProducts.filter((p) => p.category === "x-ray").length,
  flat: catalogProducts.filter((p) => p.category === "flat").length,
} as const;

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("*");

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
              <h6 className="section-sub-title mb-20">Built for Versatility & Efficiency</h6>
              <h3 className="heading">
                Our <span className="text-color-primary"> Product Line Up</span>
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
                    <div className="post-categories">{product.categoryLabel}</div>
                    <div className="text">{product.summary}</div>
                    <div className="box-projects-arrow">
                      <span className="button-text">View Details</span>
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
                    <Link href={product.href} className="projects-wrap style-01">
                      {body}
                    </Link>
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
