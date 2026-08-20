import type { CSSProperties } from "react";
import type { ProductPageContent } from "@/types/product";

const productImagesBase =
  "/assets/images/products/Europa90/product images";

export const europa90: ProductPageContent = {
  slug: "europa-90",
  title: "Europa90",
  description:
    "Portable X-ray with a 10.1 inch built-in screen for instant on-device image viewing.",
  hero: {
    tagline: "Portable Power. Professional Results.",
    name: "Europa90",
    image: "/assets/images/products/Europa90/images_2.png",
  },
  intro: {
    eyebrow: "Introducing Europa",
    heading: "The control of a full X-ray unit with maximum flexibility",
    body: "Europa90 delivers dependable radiographic performance in a compact portable generator with the added benefit of instant on-device image viewing. Its space-efficient design and smooth detector/workstation integration make it well-suited for a wide range of clinical environments where mobility and workflow efficiency matter.",
    image: "/assets/images/products/Europa90/image_1.png",
    featureCards: [
      {
        icon: "/assets/images/svg/wireless.svg",
        title: "Integrated Display & Controls",
        bullets: [
          "Acquire images to your on-board workstation",
          "Send images via Wi-Fi to any PACs or storage",
          "Receive remote tech support via TeamViewer",
        ],
      },
      {
        icon: "/assets/images/svg/battery.svg",
        title: "Portable and Space-Efficient",
        bullets: [
          "Long-lasting standby battery life",
          "Tested for many charge cycles",
        ],
      },
      {
        icon: "/assets/images/svg/xray.svg",
        title: "Works Seamlessly with iODR DR Detectors",
        bullets: [
          "No installation or construction required",
          "No dedicated X-ray room or physical setup needed",
        ],
        disclaimer:
          "*Europa systems are compatible with iODR detectors. (Please consult our sales team to confirm compatibility with your specific DR panel).",
      },
    ],
  },
  highlights: {
    eyebrow: "Europa90",
    heading: "Highlights",
    items: [
      {
        title: "Intuitive On-Device Viewing & Controls",
        bullets: [
          "Integrated 10.1' LCD for immediate image viewing",
          "Touchscreen interface for quick parameter adjustments",
          "Simple, user-friendly operation supporting efficient workflows",
        ],
        image: `${productImagesBase}/Europa90_front and back.png`,
        imageWrapperStyle: { backgroundColor: "#e2e1df" } satisfies CSSProperties,
      },
      {
        title: "Consistent X-ray Output",
        bullets: [
          "Adjustable 50-90 kV / 2-5 mA",
          "0.5 mm focal spot. 0.04-1.3 sec exposure range",
          "Reliable performance for routine radiographic use",
        ],
        image: `${productImagesBase}/product-images_5.png`,
        imageFirst: true,
        imageStyle: { maxWidth: "75%" } satisfies CSSProperties,
        imageWrapperStyle: { backgroundColor: "#e2e1df", textAlign: "center" } satisfies CSSProperties,
      },
      {
        title: "Portable & Lightweight",
        bullets: ["Approximately 4.9 kg (10.8lb)", "Easy to move across clinical environments."],
        image: `${productImagesBase}/product-images_7.png`,
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
      {
        title: "Designed for Space-Limited Environments",
        bullets: [
          "Compact footprint for use in tight or constrained spaces",
          "Easy positioning for flexible imaging setups",
        ],
        image: "/assets/images/products/Europa85/diagnostic image/1.png",
        imageFirst: true,
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
      {
        title: "Seamless Operation with iODR DR Detectors & Workstation",
        bullets: [
          "Easy integration with Aspen's iODR flat panel detectors and their acquisition software for complete digital radiography",
          "Compatible with iODR wirelessly or tethered with DR panel",
          "DICOM sending, storage, and PACS/EMR integration are handled by the workstation for streamlined operation",
        ],
        image: "/assets/images/products/Europa85/diagnostic image/2.png",
        imageStyle: { height: "100%" } satisfies CSSProperties,
      },
    ],
  },
  inTheBox: {
    image: `${productImagesBase}/Europa90_inside the box.png`,
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
        "Europa90 supports external display viewing to enhance image visibility during procedures—availability may depend on system setup.",
      image: `${productImagesBase}/Europa90_mirroring-kit.png`,
      imageStyle: { height: 280 } satisfies CSSProperties,
      details: [
        "Images can be transferred wirelessly to PACS, printers, or storage using built-in Wi-Fi & Bluetooth",
        "Ideal for teaching, procedure guidance, or viewing by multiple parties",
        "Battery-powered PC allows basic operations without external source",
      ],
    },
    {
      id: "stand",
      title: "Europa stand with detector pocket",
      summary:
        "A portable medical-grade stand that securely holds Europa90 for hands-free, precise X-ray imaging in any setting.",
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
        "Maximize the performance of Europa90 with our iODR1417-GF for instant, wireless imaging",
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
        "Pre-loaded with Aspen-compatible software for immediate image review and processing.",
        "Configured for wireless connectivity with Europa90 and iODR detectors.",
        "Ideal for clinics that prefer a separate workstation display.",
      ],
    },
  ],
  specs: [
    { label: "Dimensions", value: '367 mm (W) x 201 mm (H) x 188 mm (D) or 14.45" (W) x 7.91" (H) x 7.40" (D)' },
    { label: "Weight", value: "About 4.9 kg / 10.8 lb" },
    { label: "Display", value: "10.1 Inch LCD Panel (Resolution: 1920 × 1200)" },
    { label: "Input Power", value: "100-240 V~, 50/60 Hz, 1.5 A" },
    { label: "Device Power Source", value: "22.2 VDC, 2200mAh" },
    { label: "Frequency", value: "70kHz ± 10kHz" },
    { label: "kV, mA", value: "50-90 kV / 2-5 mA" },
    { label: "X-Ray Exposure Time Range", value: "0.04 ~ 1.3 sec" },
    { label: "X-Ray Tube Focal Spot", value: "0.5 mm" },
  ],
  cta: {
    heading: "Get reliable X-ray power wherever care takes place with",
    highlight: "Europa90",
    brochureHref: "/assets/brochure/Europa90_Brochure_EN_v2_compressed.pdf",
    brochureFilename: "Europa-90-Brochure.pdf",
  },
  gallery: [
    {
      title: "Product Images (for reference only)",
      images: Array.from({ length: 12 }, (_, index) =>
        `${productImagesBase}/product-images_${index + 1}.png`,
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
