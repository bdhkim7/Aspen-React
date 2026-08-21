import type { CSSProperties } from "react";
import type { ProductPageContent } from "@/types/product";

const productImagesBase =
  "/assets/images/products/Europa85/product images";

export const europa85: ProductPageContent = {
  slug: "europa-85",
  title: "Europa85",
  description:
    "Portable X-ray with a 7 inch built-in screen for instant on-device image viewing.",
  hero: {
    tagline: "Portable Power. Professional Results",
    name: "Europa85",
    image: "/assets/images/products/Europa85/product images/Europa85_7.png",
  },
  intro: {
    eyebrow: "Introducing Europa",
    heading: "The control of a full X-ray unit with the flexibility of a portable system",
    headingHighlight: "portable system",
    body: "We've designed Europa85 to give healthcare professionals the flexibility of a portable X-ray generator with the precision of a clinical room.\n\nAs the world's first patented handheld X-ray with built-in image visualization, Europa85 delivers an unprecedented combination of immediacy, mobility, and clinical efficiency by eliminating the need for external monitors during image acquisition.",
    image: "/assets/images/products/Europa85/product images/Europa85_1.png",
  },
  highlights: {
    eyebrow: "Europa 85",
    heading: "Highlights",
    items: [
      {
        title: "Integrated 7\" Diagnostic Display",
        body: "Europa85 allows clinicians to view captured X-ray images instantly on its high-resolution built-in screen. This eliminates workflow delays and ensures immediate confirmation of diagnostic quality.",
        image: `${productImagesBase}/Europa85_front and back.png`,
        imageWrapperStyle: { backgroundColor: "#e2e1df" } satisfies CSSProperties,
      },
      {
        title: "Advanced Imaging Quality",
        body: "Adjustable 50-90 kV / 2-5 mA X-ray output and 0.04~1.3 sec exposure range. High-resolution imaging with 0.8 mm focal spot for precise diagnostics.",
        image: `${productImagesBase}/product-images_12.png`,
        imageFirst: true,
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
      {
        title: "All-in-One Handheld X-ray System",
        body: "With imaging controls, exposure, and display integrated into one device, Europa85 simplifies X-ray acquisition and reduces dependence on external equipment.",
        image: `${productImagesBase}/product-images_7.png`,
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
      {
        title: "Clinical-Grade Imaging Quality",
        body: "Engineered with advanced imaging technology, Europa85 delivers high-quality digital radiographs suitable for a broad spectrum of clinical applications.",
        image: "/assets/images/products/Europa85/diagnostic image/10.png",
        imageFirst: true,
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
      {
        title: "Fast Workflow with Instant Verification",
        body: "Immediate on-device viewing minimizes retakes, accelerates diagnosis, and supports faster clinical decision-making, especially in urgent or time-sensitive environments.",
        image: "/assets/images/products/Europa85/diagnostic image/2.png",
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
    ],
  },
  keyFeatures: {
    eyebrow: "Meet Europa85",
    heading: "Key Features",
    image: "/assets/images/products/Europa85/product images/image_1.png",
    items: [
      {
        icon: "/assets/images/svg/linea-basic-gear.svg",
        title: "All-In-One PC Workstation",
      },
      {
        icon: "/assets/images/svg/linea-basic-case.svg",
        title: "Extreme Light Weight",
      },
      {
        icon: "/assets/images/svg/basic_headset.svg",
        title: "Remote Support",
      },
    ],
  },
  inTheBox: {
    image: "/assets/images/products/Europa85/product images/image_2.png",
    accessories: [
      "Hand Switch",
      "Charger",
      "Power Cord",
      "Stylus Pen",
      "Carrying Strap",
      "Wireless Mouse",
    ],
  },
  addOns: [
    {
      id: "mirroring",
      title: "Mirroring Output",
      summary:
        "Europa85 supports external display viewing to enhance image visibility during procedures—availability may depend on system setup.",
      image: "/assets/images/products/Europa85/product images/image_3.png",
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
        "A portable medical-grade stand that securely holds Europa85 for hands-free, precise X-ray imaging in any setting.",
      image: "/assets/images/products/Europa85/product images/image_4.png",
      details: [
        "Engineered for secure mounting of Europa85, ensuring consistent imaging without unwanted movement.",
        "Lightweight frame with medical-grade casters makes it easy to move, ideal for emergency or shared-use areas.",
        "Clean, modern build for hospital environments.",
        "Integrated arms allow extension to support both the workstation and detector for complete mobile operation.",
      ],
    },
    {
      id: "panel-holder",
      title: "Detector holder",
      summary:
        "Mobile stand designed to hold the iODR panel detector, perfect for keeping your portable imaging setup in one place.",
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
        "Maximize the performance of Europa85 with our iODR1417-GF for instant, wireless imaging",
      image: "/assets/images/products/iODR1417-GF/product-images/01.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Connects seamlessly for real-time image acquisition without cables.",
        "Ideal for bedside, mobile units, or tight clinical spaces—no need for bulky setups.",
        "Combined with Europa85, the IODR1417-GF delivers sharp, reliable images for extremities and more.",
        "Effortless setup with iODR panels allows fast adoption and smoother workflow.",
      ],
    },
    {
      id: "pelican",
      title: "Pelican Case",
      summary:
        "Protect your Europa85 with a rugged case, built for transport and ready for any environment",
      image: "/assets/images/products/Europa85/product images/image_6.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Shockproof, dustproof, and waterproof—keeps your Europa85 safe in any environment.",
        "Custom foam interior and ergonomic handle make mobility effortless.",
        "Delivers a clean, organized look for clinical visits, demos, or mobile services.",
        "Ideal for travel, remote care, or mobile units—built to handle rough conditions.",
      ],
    },
    {
      id: "laptop",
      title: "Pre-configured Laptop",
      summary:
        "Pair Europa85 with a pre-configured laptop, ready for image viewing and processing out of the box",
      image: "/assets/images/products/Europa85/product images/image_7.png",
      imageStyle: { height: 280, display: "block", margin: "0 auto" } satisfies CSSProperties,
      details: [
        "Includes everything needed for image acquisition, processing, and sharing—no extra setup required.",
        "Laptop is pre-configured with AspenView software to work seamlessly with iODR panels and the Europa85 interface.",
        "Perfect for mobile imaging teams—carry, connect, and start diagnosing in minutes.",
        "Delivers a unified, ready-to-use solution ideal for demos, home care, or remote diagnostics.",
      ],
    },
  ],
  specs: [
    { label: "Dimensions", value: '266 mm (W) x 167 mm (H) x 156 mm (D) or 10.5" (W) x 6.6" (H) x 6.1" (D)' },
    { label: "Weight", value: "About 3.6 kg / 8 lbs" },
    { label: "Display", value: "7 Inch LCD Panel (Resolution: 1024 x 600 px)" },
    { label: "Input Power", value: "100-240 V~, 50/60 Hz, 1.0 A max" },
    { label: "Device Power Source", value: "22.2 VDC, 2200mAh" },
    { label: "Frequency", value: "70kHz ± 10kHz" },
    { label: "kV, mA", value: "50~85 kV (1kV step) / 2~5 mA (1mA step)" },
    { label: "X-Ray Exposure Time Range", value: "0.03~ 2.0 sec" },
    { label: "X-Ray Tube Model", value: "Toshiba D–081B" },
    { label: "X-Ray Tube Focal Spot", value: "0.5 mm" },
  ],
  cta: {
    heading: "Get reliable X-ray power wherever care takes place with",
    highlight: "Europa85",
    brochureHref: "/assets/brochure/Europa85_Brochure_EN_v2_compressed.pdf",
    brochureFilename: "Europa-85-Brochure.pdf",
  },
  gallery: [
    {
      title: "Product Images",
      images: Array.from({ length: 12 }, (_, index) =>
        `${productImagesBase}/product-images_${index + 1}.png`,
      ),
    },
    {
      title: "Diagnostic Images",
      images: Array.from({ length: 8 }, (_, index) =>
        `/assets/images/products/Europa85/diagnostic image/${index + 1}.png`,
      ),
    },
  ],
};
