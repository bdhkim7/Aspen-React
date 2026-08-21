import type { ProductPageContent } from "@/types/product";

export const apx24: ProductPageContent = {
  slug: "apx-24",
  title: "APX-24",
  description:
    "Compact yet powerful X-Ray unit for human and veterinary use.",
  hero: {
    tagline: "Advanced & Powerful X-Ray",
    name: "APX-24",
    image: "/assets/images/products/APX-24/apxMain.png",
  },
  intro: {
    eyebrow: "Introducing APX-24",
    heading: "Compact yet powerful X-Ray unit",
    headingHighlight: "Compact yet powerful",
    body: "Aspen imaging is introducing APX-24, our most advanced and transportable X-ray unit. APX-24 is compact, lightweight, reliable and easy to use, which makes it ideal for human and veterinary use.\n\nCreate your own D.R. package with one of our Flat Panel Detectors and create high quality images anywhere, anytime. No matter what the requirements are, APX-24 can customize your digital radiography system.",
    image: "/assets/images/products/APX-24/apxMain.png",
    featureCards: [
      {
        icon: "/assets/images/svg/basic_lightbulb.svg",
        title: "Low Cost X-Rays",
        bullets: ["Cost-saving solution with quality results and high ROI"],
      },
      {
        icon: "/assets/images/svg/basic_magnifier_plus.svg",
        title: "High Image Quality",
        bullets: [
          "APX-24 can produce high resolution X-ray images with flat panel detectors",
        ],
      },
      {
        icon: "/assets/images/svg/basic_mixer2.svg",
        title: "Easy to Use",
        bullets: [
          "APX-24 is designed with intuitiveness in mind to facilitate user experience",
        ],
      },
    ],
  },
  addOns: [
    {
      id: "a-guard",
      title: "A-Guard by Aspen Imaging",
      summary: "Engineered for precision. Built for protection.",
      image: "/assets/images/addons/a-guard.png",
      details: [
        "Handling delicate DR panels during daily workflows shouldn't be a gamble. A-Guard by Aspen Imaging redefines mobility and safety with a form factor that reflects true radiographic insight.",
        "Crafted to reduce handling fatigue and minimize risk during transport, A-Guard ensures your DR technology is always shielded—whether in transit or in use. From its sleek, technician-friendly profile to features that anticipate real clinical conditions, every element serves a purpose: to protect your investment and streamline your performance.",
        "No slips. No stress. Just smarter protection—powered by Aspen.",
      ],
    },
    {
      id: "mobile-positioner",
      title: "Mobile Positioner Pro",
      summary: "Where mobility meets precision—and radiology moves smarter.",
      image: "/assets/images/addons/mobilePanelStand.png",
      details: [
        "In high-pressure imaging environments, every second and every angle matter. The Mobile Positioner Pro by Aspen Imaging is built to meet those demands with intelligent engineering that empowers technologists to move fast, align accurately, and deliver results with confidence.",
        "With a compact frame, intuitive height adjustment, and full rotational freedom, Mobile Positioner Pro turns any tight space into a fully functional imaging zone. Whether you're working bedside in the ER, navigating surgical suites, or supporting mobile units, this solution brings efficiency, safety, and control to the forefront of your workflow.",
        "💡 Why choose Mobile Positioner Pro?",
        "Elevates detectors from floor level to 73\" with 26 secure positions, 360° rotation + ±90° tilt for unmatched positioning flexibility, Compatible with most DR panels and cases (8x10\" to 17x17\"), Four locking wheels ensure stability on the move, Quick, tool-free assembly—ready in minutes. For even greater reach and balance, the counterweighted version adds stability ideal for cross-table and mobile imaging applications.",
      ],
    },
  ],
  specs: [
    { label: "Max output power", value: "2.4KW" },
    { label: "Input power", value: "100~120 / 200~240VAC (50Hz/60Hz)" },
    { label: "Inverter frequency", value: "102KHz / 40 KHz" },
    { label: "KV range", value: "40KV~100KV (1KV STEP)" },
    { label: "mAs range", value: "0.32mAs~100mAs" },
    { label: "X-ray tube", value: "TOSHIBA D-125SB" },
    { label: "Focal spot", value: "1.2mm" },
    { label: "Target Angle", value: "16°" },
    { label: "Anode heat storage capacity", value: "35KJ" },
    { label: "Maximum anode cooling rate", value: "250W" },
    { label: "Laser point", value: "650nm / less than 1mV" },
    { label: "Lamp (LED)", value: "More than 100 lux" },
    { label: "Filtration total", value: "Al. Equiv. 2mm" },
    { label: "Weight", value: "27.99 lb / 46.51 lb" },
    { label: "Packaging dimension", value: "25.59 x 15.74 x 13.77 inches" },
    { label: "Warranty", value: "2 years" },
  ],
  cta: {
    heading: "Achieve high ROI with with",
    highlight: "APX-24",
    brochureHref: "/assets/brochure/apx-24.pdf",
    brochureFilename: "apx-24-brochure.pdf",
  },
};
