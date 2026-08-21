import type { CSSProperties } from "react";
import type { ProductPageContent } from "@/types/product";

export const europa85l: ProductPageContent = {
  slug: "europa-85l",
  title: "Europa85L",
  description:
    "Ultra-portable X-ray system with lightweight design for mobile extremity imaging.",
  hero: {
    tagline: "Lightweight Design. Heavyweight Imaging",
    name: "Europa85L",
    image: "/assets/images/products/Europa85L/Europa85L_6.png",
  },
  intro: {
    eyebrow: "Built for Portability & Performance",
    heading: "Full-unit performance meets portable versatility",
    headingHighlight: "portable versatility",
    body: "The Europa85L is an ultra-portable X-ray system engineered for environments where mobility, flexibility, and efficient workflow matter most. Built with a lightweight form factor and advanced power efficiency, Europa85L supports extremity image acquisition in portable imaging settings, with images viewed and managed through an external workstation or PACS for seamless integration",
    bodyHighlight: "ultra-portable X-ray",
    image: "/assets/images/products/Europa85L/Europa85L_1.png",
    featureCards: [
      {
        icon: "/assets/images/svg/hospital-grade.svg",
        title: "Lightweight 8 Lb Design",
        bullets: [
          "Easy to carry, position and transport",
          "ideal for mobile use and space-limited environments",
        ],
      },
      {
        icon: "/assets/images/svg/basic_share.svg",
        title: "External Workstation Workflow",
        bullets: [
          "Operate with your preferred laptop or medical workstation",
          "images are captured and viewed through external DR acquisition software",
        ],
      },
      {
        icon: "/assets/images/svg/cycle.svg",
        title: "Flexible DR Compatibility",
        bullets: [
          "Works with iODR and other compatible DR detection",
          "Fits naturally into portable extremity radiography setups",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "Europa85L",
    heading: "Highlights",
    items: [
      {
        title: "Portable, Lightweight Construction",
        body: "Weighing only 8 lb, Europa85L makes it easy to manuever between patient rooms, mobile setups or temporary locations.\n\nIts compact form factor allow for simple positioning during extremity radiographic procedures",
        image: "/assets/images/products/Europa85L/Europa85L_2.png",
        imageWrapperStyle: { backgroundColor: "#e2e1df" } satisfies CSSProperties,
      },
      {
        title: "External Workstation Integration",
        body: "Europa85L operates with an external workstation. Image capture, processing, and DICOM transfers are all handled entirely by the workstation's DR software, which supports flexible configuration options",
        image: "/assets/images/products/Europa85/diagnostic image/10.png",
        imageFirst: true,
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
      {
        title: "Reliable X-ray Output",
        body: "Europa85L provides consistent generator performance for extremity radiographic imaging with:\n\nAdjustable 50-85kV\n\n2-5mA range\n\n0.8mm focal spot\n\n0.03-2.0 second exposure time",
        image: "/assets/images/products/Europa85L/Europa85L_9.png",
        imageWrapperStyle: { backgroundColor: "#e2e1df", alignContent: "end" } satisfies CSSProperties,
      },
      {
        title: "Designed for Space-Limited Use",
        body: "Its compact design allows Europa85L to be a perfect fit for:\n\nSmall imaging rooms\n\nMobile carts\n\nTemporary care areas",
        image: "/assets/images/products/Europa85L/Europa85L_7.png",
        imageFirst: true,
        imageWrapperStyle: { backgroundColor: "#e2e1df" } satisfies CSSProperties,
      },
      {
        title: "Compatible with iODR DR Detectors",
        body: "Europa85L pairs seamlessly with Aspen's iODR Dr detectors, supporting both wireless and tethered iODR panel connections",
        image: "/assets/images/products/iODR1417-GF/product-images/low.png",
        imageStyle: { height: "100%" } satisfies CSSProperties,
        imageWrapperStyle: { backgroundColor: "#e2e1df" } satisfies CSSProperties,
      },
    ],
  },
  keyFeatures: {
    eyebrow: "Meet Europa85L",
    heading: "Key Features",
    image: "/assets/images/products/Europa85L/features.png",
    items: [],
  },
  inTheBox: {
    image: "/assets/images/products/Europa85L/inside.png",
    accessories: ["Hand Switch", "Charger", "Power Cord", "Carrying Strap"],
  },
  addOns: [
    {
      id: "weight-stand",
      title: "Weight Bearing Stand",
      summary:
        "Europa85L pairs with the RC imaging weight-bearing stand for safe lateral exams, while providing protection for the DR panel",
      image: "/assets/images/products/Europa85L/RC Imaging Weight Bearing Stand.png",
      imageStyle: { height: 280 } satisfies CSSProperties,
      details: [
        "Images can be transferred wirelessly to PACS, printers, or storage using built-in Wi-FI & Bluetooth",
        "Ideal for teaching, procedure guidance, or viewing by multiple parties",
        "Battery-powered PC allows basic operations without external source",
      ],
    },
    {
      id: "stand",
      title: "Europa stand with detector pocket",
      summary:
        "A portable medical-grade stand that securely holds Europa90 for hands-free, precise extremity X-ray imaging.",
      image: "/assets/images/products/Europa85/product images/image_4.png",
      details: [
        "Engineered for secure mounting of Europa90, ensuring consistent imaging without unwanted movement.",
        "Lightweight frame with medical-grade casters makes it easy to move, ideal for emergency or shared-use areas.",
        "Clean, modern build for hospital environments.",
        "Integrated arms allow extension to support both the workstation and detector for complete mobile operation.",
      ],
    },
    {
      id: "panel-holder",
      title: "Detector holder",
      summary:
        "Mobile stand designed to hold the iODR panel detector, perfect for keeping your portable extremity imaging setup in one place.",
      image: "/assets/images/products/Europa85/product images/image_5.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Custom brackets are designed to securely hold iODR panels, creating a fully integrated mobile imaging setup. (Please consult our sales team to confirm compatibility with non-iODR panels).",
        "The stand enables tilt, rotation, and height adjustment for optimal positioning of the IODR panel, with manual tension controls for smooth, stable alignment.",
        "Stable base with lockable wheels allows safe mobility while keeping the IODR panel securely positioned during image acquisition.",
      ],
    },
    {
      id: "iodr",
      title: "Works with iODR1417",
      summary:
        "Maximize the performance of Europa90 with our iODR1417-GF for instant, wireless extremity imaging",
      image: "/assets/images/products/iODR1417-GF/product-images/01.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Connects seamlessly for real-time image acquisition without cables.",
        "Ideal for bedside, mobile units, or tight clinical spaces—no need for bulky setups.",
        "Combined with Europa90, the IODR1417-GF delivers sharp, reliable images for extremities and more.",
        "Effortless setup with iODR panels allows fast adoption and smoother workflow.",
      ],
    },
    {
      id: "pelican",
      title: "Pelican Case",
      summary:
        "Protect your Europa90 with a rugged case, built for transport and ready for any environment",
      image: "/assets/images/products/Europa85/product images/image_6.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Shockproof, dustproof, and waterproof—keeps your Europa90 safe in any environment.",
        "Custom foam interior and ergonomic handle make mobility effortless.",
        "Delivers a clean, organized look for clinical visits, demos, or mobile services.",
        "Ideal for travel, remote care, or mobile units—built to handle rough conditions.",
      ],
    },
    {
      id: "laptop",
      title: "Pre-configured Laptop",
      summary:
        "Pair Europa90 with a pre-configured laptop, ready for image viewing and processing out of the box",
      image: "/assets/images/products/Europa85/product images/image_7.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Includes everything needed for image acquisition, processing, and sharing—no extra setup required.",
        "Laptop is pre-configured with AspenView software to work seamlessly with iODR panels and the Europa90 interface.",
        "Perfect for mobile extremity imaging teams—carry, connect, and start diagnosing in minutes.",
        "Delivers a unified, ready-to-use solution ideal for demos, home care, or remote diagnostics.",
      ],
    },
  ],
  specs: [
    { label: "Dimensions", value: "266 mm (W) x 167 mm (H) x 156 mm (D)" },
    { label: "Weight", value: "About 3.6 kg or 8 lb" },
    { label: "Power output", value: "425W" },
    { label: "kV / mA", value: "50 ~ 85 kV / 2~5 mA" },
    { label: "Exposure Time", value: "0.03 ~ 2 seconds" },
    { label: "Operation", value: "Via built-in LCD touch screen" },
    { label: "Battery Capacity", value: "22.2 VDC / 2200 mAh" },
    { label: "Heat Capacity", value: "8000J" },
    { label: "Focal Spot", value: "0.8 mm" },
    { label: "Anode Angle", value: "16 degrees" },
  ],
  cta: {
    heading: "Get reliable extremity X-ray power wherever portable care is needed with",
    highlight: "Europa85L",
    brochureHref: "/assets/brochure/Europa85L_Brochure_EN_compressed.pdf",
    brochureFilename: "Europa-85L-Brochure.pdf",
  },
  gallery: [
    {
      title: "Product Images",
      images: Array.from({ length: 12 }, (_, index) =>
        `/assets/images/products/Europa85L/Europa85L_${index + 1}.png`,
      ),
    },
    {
      title: "Diagnostic Images",
      images: Array.from({ length: 8 }, (_, index) =>
        `/assets/images/products/Europa90/diagnostic image/${index + 1}.png`,
      ),
    },
  ],
};
