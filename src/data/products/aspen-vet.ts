import type { ProductPageContent } from "@/types/product";

export const aspenVet: ProductPageContent = {
  slug: "aspen-vet",
  title: "AspenVet",
  description: "Digital X-Ray for Veterinary",
  hero: {
    tagline: "Digital X-Ray for Veterinary",
    name: "AspenVet",
    image: "/assets/images/products/AspenVet/AspenVet.png",
  },
  intro: {
    eyebrow: "Meet AspenVet",
    heading: "Product Highlight",
    body: "The perfect station for your four-legged patients: AspenVet",
    image: "/assets/images/products/AspenVet/AspenVet.png",
    imageFit: "contain",
  },
  video: {
    title: "Product Highlight",
    youtubeId: "W1GMKCFkuvU",
  },
  specs: [
    { label: "Stand", value: "4-way Floating Stand, Fixed Table" },
    {
      label: "TUBE (E-7239X)",
      value: "Target Angle 16 , 125kVp, 140kHU, Focal Spot (1.0 / 2.0)",
    },
    { label: "COLLIMATOR", value: "MC-D (M)" },
    { label: "Effective Area", value: "425.6 mm × 345.24 mm" },
    {
      label: "GENERATOR (POSKOM, 32kW)",
      value:
        "High Frequency type, Touch Screen Control, mA Range: 10 - 400 mA, kVp Range: 40 - 125 kVp, mAs Range: 0.1-500 mAs, Single Phase 220 V",
    },
    { label: "HIGH VOLTAGE CABLE", value: "40 VA" },
    { label: "MAXIMUM WEIGHT CAPACITY", value: "Up to 150 Kg" },
  ],
  cta: {
    heading: "The perfect station for your four-legged patients:",
    highlight: "AspenVet",
    brochureHref: "/assets/brochure/AspenVet table_brochure_en.pdf",
    brochureFilename: "AspenVet-brochure.pdf",
  },
};
