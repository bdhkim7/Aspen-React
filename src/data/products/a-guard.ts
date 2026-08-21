import type { ProductPageContent } from "@/types/product";

export const aGuard: ProductPageContent = {
  slug: "a-guard",
  title: "A-Guard",
  description:
    "Protective DR panel carrier engineered for safer transport and daily clinical handling.",
  hero: {
    tagline: "Engineered for Precision. Built for Protection.",
    name: "A-Guard",
    image: "/assets/images/addons/a-guard.png",
    imageFit: "contain",
  },
  intro: {
    eyebrow: "Protect Your Investment",
    heading: "Smarter protection for delicate DR panels",
    headingHighlight: "Smarter protection",
    body: "Handling delicate DR panels during daily workflows shouldn't be a gamble. A-Guard by Aspen Imaging redefines mobility and safety with a form factor that reflects true radiographic insight.\n\nCrafted to reduce handling fatigue and minimize risk during transport, A-Guard ensures your DR technology is always shielded—whether in transit or in use.",
    image: "/assets/images/addons/a-guard-bu.png",
    imageFit: "contain",
    featureCards: [
      {
        title: "Transport Protection",
        bullets: [
          "Shields DR panels during transit between rooms or sites",
          "Helps minimize drop and handling risk",
        ],
      },
      {
        title: "Technician-Friendly Design",
        bullets: [
          "Sleek profile built for real clinical conditions",
          "Reduces handling fatigue during busy shifts",
        ],
      },
      {
        title: "Daily Workflow Ready",
        bullets: [
          "Supports in-use and in-transit protection",
          "Purpose-built to protect your DR investment",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "A-Guard",
    heading: "Highlights",
    items: [
      {
        title: "No Slips. No Stress.",
        body: "From its technician-friendly profile to features that anticipate real clinical conditions, every element serves a purpose: protect your investment and streamline performance.",
        image: "/assets/images/addons/a-guard.png",
        imageFit: "contain",
      },
    ],
  },
  cta: {
    heading: "Ask our team about protecting your panels with",
    highlight: "A-Guard",
    brochureHref: "/contact-us",
    brochureFilename: "",
    action: "contact",
  },
};
