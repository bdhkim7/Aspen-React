import type { ProductPageContent } from "@/types/product";

export const aspenFdr: ProductPageContent = {
  slug: "aspen-fdr",
  title: "AspenFDR",
  description:
    "Advanced digital X-ray system covering radiography needs for clinics with dedicated imaging space (FDA 510(k) Cleared).",
  hero: {
    tagline: "Floor-Mounted Digital Radiography",
    name: "AspenFDR",
    image: "/assets/images/projects/FDR_480x300.png",
    imageFit: "contain",
  },
  intro: {
    eyebrow: "Introducing AspenFDR",
    heading: "Advanced digital X-ray for clinics with dedicated room space",
    headingHighlight: "dedicated room space",
    body: "AspenFDR is our advanced digital radiography system for clinics and imaging rooms that need dependable floor-mounted performance. It delivers a full radiographic workflow with smooth positioning, strong patient capacity, and quiet actuator-driven movement.",
    image: "/assets/images/products/FDR/installed.jpg",
    imageFit: "cover",
    featureCards: [
      {
        title: "Elevating Table System",
        bullets: [
          "6-way elevating table with up to 550 lb patient capacity",
          "Pillar-styled table for wheelchair accessibility",
        ],
      },
      {
        title: "Quiet, Reliable Motion",
        bullets: [
          "Actuator-driven movement for silent, dependable operation",
          "Electrical magnetic brake control for vertical/longitudinal travel",
        ],
      },
      {
        title: "Operator-Friendly Controls",
        bullets: [
          "Tube handle with built-in inclinometer",
          "Front display for articulation angle feedback",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "AspenFDR",
    heading: "Highlights",
    items: [
      {
        title: "Room-Ready Radiography",
        body: "Designed for dedicated X-ray rooms, AspenFDR supports a complete floor-mounted digital radiography setup for clinics and hospitals that need consistent daily throughput.",
        image: "/assets/images/products/FDR/display.jpg",
        imageFit: "cover",
      },
      {
        title: "Precise Tube Positioning",
        body: "Tube rotation of ±135° and column rotation of ±90° give technologists the range needed for flexible exam setups, with manual movement supported by magnetic brake control.",
        image: "/assets/images/products/FDR/installed2.jpg",
        imageFirst: true,
        imageFit: "cover",
      },
      {
        title: "Need Heavy-Duty Performance?",
        body: "Looking for our freestanding heavy-duty floor-mounted line? Explore AspenFDR H.D. for extreme rigidity and rapid alignment without wall attachments.",
        image: "/assets/images/products/FDR-HD/FDR-HD-main-with-stand.png",
        imageFit: "contain",
      },
    ],
  },
  cta: {
    heading: "Download the brochure and explore",
    highlight: "AspenFDR",
    brochureHref: "/assets/brochure/AspenFDR_brochure.pdf",
    brochureFilename: "AspenFDR-Brochure.pdf",
  },
};
