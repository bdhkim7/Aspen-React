import type { ProductPageContent } from "@/types/product";

export const laica90: ProductPageContent = {
  slug: "laica-90",
  title: "Laica90",
  description: "The power of x-ray room in the size of a camera",
  hero: {
    tagline: "The power of x-ray room in the size of a camera",
    name: "Laica90",
    image: "/assets/images/products/laica90/laica90.png",
  },
  intro: {
    eyebrow: "Introducing Laica90",
    heading: "Bringing portable x-ray solution to Veterinary",
    headingHighlight: "Veterinary",
    body: "Laica90 is aimed at delivering outstanding diagnostic precision in the palm of the vet's hands. In its small form factor, Laica90 is able to provide high quality x-ray imaging, ensuring clear visualization of anatomical details and allowing for accurate veterinary diagnostics.",
    image: "/assets/images/products/laica90/laica90 fte.png",
    featureCards: [
      {
        icon: "/assets/images/svg/basic_lightbulb.svg",
        title: "Low Cost Solution",
        bullets: ["Cost-saving solution with quality results and high ROI"],
      },
      {
        icon: "/assets/images/svg/basic_magnifier_plus.svg",
        title: "High Image Quality",
        bullets: [
          "Laica90 produces high resolution images, upto 100 exposures on a full charge",
        ],
      },
      {
        icon: "/assets/images/svg/basic_mixer2.svg",
        title: "Ease of Use",
        bullets: [
          "Neither construction nor installation needed, or additional electrical power source",
        ],
      },
    ],
  },
  specs: [
    { label: "Power Output", value: "450 We" },
    { label: "Exposure Time", value: "0.04 ~1.3 sec" },
    { label: "Collimator", value: "Multi-leaf collimator" },
    { label: "Anode Type", value: "Stationary anode" },
    { label: "Target Anode Angle", value: "19 degreesV" },
    { label: "Focal Spot", value: "0,5mm" },
    { label: "Anode Heat Storage", value: "10,000 J" },
    { label: "Battery Capacity", value: "22.2 VDC / 2,200 mAh" },
    { label: "Weight", value: "4.9 kg ± 5% / 9.9 lb" },
    { label: "Dimensions", value: '367 x 201 x 188 mm / 14.40" x 7.87" x 6.31"' },
  ],
  cta: {
    heading: "Elevate veterinary experience with",
    highlight: "laica90",
    brochureHref: "/assets/brochure/Laica90 Brochure_en.pdf",
    brochureFilename: "laica90-brochure.pdf",
  },
  gallery: [
    {
      title: "Product & Diagnostic Images",
      images: [
        "/assets/images/products/laica90/x-ray images/1.jpeg",
        "/assets/images/products/laica90/x-ray images/2.jpeg",
        "/assets/images/products/laica90/x-ray images/3.jpeg",
        "/assets/images/products/laica90/x-ray images/4.jpeg",
      ],
    },
  ],
};
