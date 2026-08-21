import type { ProductPageContent } from "@/types/product";

export const mobilePanelHolder: ProductPageContent = {
  slug: "mobile-panel-holder",
  title: "Mobile Panel Holder",
  description:
    "Mobile detector positioning stand for flexible DR panel alignment in clinical and mobile environments.",
  hero: {
    tagline: "Where Mobility Meets Precision",
    name: "Mobile Panel Holder",
    image: "/assets/images/addons/mobilePanelStand.png",
    imageFit: "contain",
  },
  intro: {
    eyebrow: "Position Detectors with Confidence",
    heading: "Turn any tight space into a functional imaging zone",
    headingHighlight: "functional imaging zone",
    body: "In high-pressure imaging environments, every second and every angle matter. The Mobile Panel Holder (Mobile Positioner Pro) by Aspen Imaging is built to help technologists move fast, align accurately, and deliver results with confidence.\n\nWith a compact frame, intuitive height adjustment, and full rotational freedom, it brings efficiency, safety, and control to bedside, surgical, and mobile imaging workflows.",
    featureCards: [
      {
        title: "Wide Positioning Range",
        bullets: [
          'Elevates detectors from floor level to 73"',
          "26 secure height positions for precise setup",
        ],
      },
      {
        title: "Full Articulation",
        bullets: [
          "360° rotation with ±90° tilt",
          "Ideal for cross-table and flexible exam angles",
        ],
      },
      {
        title: "Broad Panel Compatibility",
        bullets: [
          'Compatible with most DR panels and cases (8x10" to 17x17")',
          "Four locking wheels for stable mobility",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "Mobile Panel Holder",
    heading: "Highlights",
    items: [
      {
        title: "Ready in Minutes",
        body: "Quick, tool-free assembly gets your mobile imaging setup ready fast—ideal for ER, surgical suites, and shared clinical spaces. Locking wheels and a compact frame keep the stand secure during positioning while remaining easy to relocate between rooms.",
        image: "/assets/images/addons/mobilePanelStand.png",
        imageFit: "contain",
      },
    ],
  },
  cta: {
    heading: "Talk with Aspen about adding a",
    highlight: "Mobile Panel Holder",
    brochureHref: "/contact-us",
    brochureFilename: "",
    action: "contact",
  },
};
