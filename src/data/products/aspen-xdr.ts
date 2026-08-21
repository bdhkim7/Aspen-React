import type { ProductPageContent } from "@/types/product";

export const aspenXdr: ProductPageContent = {
  slug: "aspen-xdr",
  title: "AspenXDR",
  description:
    "Straight-arm digital X-ray system for versatile diagnostic imaging (FDA 510(k) Cleared).",
  hero: {
    tagline: "Straight-Arm Digital Radiography",
    name: "AspenXDR",
    image: "/assets/images/projects/XDR_480_300.png",
    imageFit: "contain",
  },
  intro: {
    eyebrow: "Introducing AspenXDR",
    heading: "Versatile straight-arm imaging for busy clinical spaces",
    headingHighlight: "straight-arm imaging",
    body: "AspenXDR is a straight-arm digital X-ray system built for versatile diagnostic imaging. Its compact footprint and efficient workflow help clinics deliver high-quality radiographs without the complexity of a full traditional room layout.",
    image: "/assets/images/projects/XDR_480_300.jpeg",
    imageFit: "contain",
    featureCards: [
      {
        title: "Clinic-Ready Footprint",
        bullets: [
          "Straight-arm design suited for space-conscious rooms",
          "Supports everyday general radiography workflows",
        ],
      },
      {
        title: "Digital Diagnostic Quality",
        bullets: [
          "Pairs with Aspen DR detectors and acquisition software",
          "Built for clear, consistent radiographic results",
        ],
      },
      {
        title: "Efficient Operation",
        bullets: [
          "Streamlined positioning for higher patient throughput",
          "Designed for versatile diagnostic imaging needs",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "AspenXDR",
    heading: "Highlights",
    items: [
      {
        title: "Straight-Arm Flexibility",
        body: "A versatile straight-arm system that supports a wide range of general radiography exams while keeping the room layout efficient. AspenXDR helps teams move from patient setup to image acquisition quickly, supporting busy outpatient and clinic environments.",
        image: "/assets/images/projects/XDR_480_300.jpeg",
        imageFit: "contain",
      },
    ],
  },
  cta: {
    heading: "Learn more about versatile digital imaging with",
    highlight: "AspenXDR",
    brochureHref: "/assets/brochure/AspenXDR_brochure.pdf",
    brochureFilename: "AspenXDR-Brochure.pdf",
  },
};
