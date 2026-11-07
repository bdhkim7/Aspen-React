import type { ProductPageContent } from "@/types/product";

export const laica85l: ProductPageContent = {
  slug: "laica-85l",
  title: "Laica85L",
  description:
    "Portable X-ray with a 7 inch built-in screen for veterinary care",
  hero: {
    tagline: "Portable X-Ray for Veterinary Care",
    name: "laica85L",
    image: "/assets/images/products/Laica85L/Laica85L_6.png",
  },
  intro: {
    eyebrow: "Built for Veterinary Mobility",
    heading: "Portable X-ray power for flexible veterinary workflows",
    headingHighlight: "veterinary workflows",
    body: "Laica85L brings a lightweight, battery-powered X-ray generator to veterinary clinics and hospitals, mobile veterinary services, shelters, equine facilities, and field settings—supporting flexible radiography workflows across a wide range of veterinary environments.",
    image: "/assets/images/products/Laica85L/Laica85L_1.png",
    featureCards: [
      {
        icon: "/assets/images/svg/hospital-grade.svg",
        title: "Easy to carry and position",
        bullets: [
          "Approx. 8 lb (3.5 kg) design",
          "Compact housing with integrated handle",
          "Easy to move between exam rooms and mobile locations",
        ],
      },
      {
        icon: "/assets/images/svg/workstation.svg",
        title: "External workstation workflow",
        bullets: [
          "Compatible laptop or workstation",
          "DR software handles capture, image management, and transfer",
        ],
      },
      {
        icon: "/assets/images/svg/vet.svg",
        title: "Versatile veterinary workflows",
        bullets: [
          "Designed for clinics, hospitals, mobile services, and field settings",
          "Supports a consistent imaging workflow across different locations",
          "Adapts to companion animal, equine, and specialty veterinary use",
        ],
      },
    ],
  },
  keyFeatures: {
    eyebrow: "This is Laica85L",
    heading: "Key Features",
    image: "/assets/images/products/Laica85L/Laica85L-KEY-FEATURES.png",
    items: [
      {
        icon: "/assets/images/svg/linea-basic-case.svg",
        title: "Lightweight 8 lb portable system",
      },
      {
        icon: "/assets/images/svg/linea-basic-gear.svg",
        title: "External DR/laptop workflow",
      },
      {
        icon: "/assets/images/svg/basic_headset.svg",
        title: "Battery-powered mobility",
      },
    ],
  },
  highlights: {
    eyebrow: "Laica85L",
    heading: "Highlights",
    items: [
      {
        title: "Portable Imaging, Wherever Care Happens",
        body: "Lightweight and battery-powered, Laica85L is designed to move between veterinary clinics, mobile services, equine facilities, shelters, and field settings.",
        image: "/assets/images/products/Laica85L/funcionamiento_b.png",
        images: ["/assets/images/products/Laica85L/funcionamiento_b.png"],
      },
      {
        title: "Across Species. Across Settings.",
        body: "From companion animals to equine and wildlife cases, Laica85L supports flexible veterinary radiography workflows—in the clinic or out in the field.",
        image: "/assets/images/products/Laica85L/Laica85L_Web_Dog_Cat_b.png",
        images: [
          "/assets/images/products/Laica85L/Laica85L_Web_Dog_Cat_b.png",
          "/assets/images/products/Laica85L/Laica85L_Web_Lion_b.png",
        ],
        imageFirst: true,
      },
    ],
  },
  inTheBox: {
    image: "/assets/images/products/Laica85L/X-ray-system.png",
    accessories: [
      "Laica85L X-Ray",
      "Handswitch",
      "Charger",
      "iODR1417-GFV Detector",
      "Battery Charger",
      "Flat Panel Detector Batteries (2)",
      "USB Manuals / Documentation",
    ],
  },
  specs: [
    { label: "Dimensions", value: "266 mm (W) × 167 mm (H) × 156 mm (D)" },
    { label: "Weight", value: "3.5 kg (8 lb)" },
    { label: "Power Output", value: "425 W" },
    { label: "Tube Voltage / Current", value: "50–85 kV / 2–5 mA" },
    { label: "Exposure Time", value: "0.03–2.0 s" },
    { label: "Operation", value: "Built-in 7-inch LCD touchscreen" },
    { label: "Collimation", value: "Manual collimator" },
    { label: "Focal Spot", value: "0.8 mm" },
  ],
  cta: {
    heading: "Bring portable X-ray to veterinary care with",
    highlight: "Laica85L",
    brochureHref: "#contact",
    brochureFilename: "Contact Us",
  },
  gallery: [
    {
      title: "Product Images",
      images: Array.from(
        { length: 10 },
        (_, index) =>
          `/assets/images/products/Laica85L/gallery/Laica85L_${index + 1}.png`
      ),
    },
    {
      title: "Veterinary Radiographic Images",
      images: [
        "/assets/images/products/Laica85L/gallery/Laica85L_11.png",
        "/assets/images/products/Laica85L/gallery/Laica85L_12.png",
      ],
    },
  ],
};
