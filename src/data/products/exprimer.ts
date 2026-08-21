import type { ProductPageContent } from "@/types/product";

export const exprimer: ProductPageContent = {
  slug: "exprimer",
  title: "Exprimer - DRTECH Flat Panel Detectors",
  description: "Smart Detector for Ultimate Portability and Performance - delivers best-in-class image quality in multitude of environments",
  hero: {
    tagline: "Ultimate portability and performance",
    name: "Exprimer",
    image: "/assets/images/products/Exprimer/exprimer-main.png",
    imageStyle: { maxWidth: "80%", marginLeft: "10%" },
  },
  intro: {
    eyebrow: "Introducing DRTECH Flat Panel Detectors",
    heading: "Smart Detector for Ultimate Portability and Performance",
    headingHighlight: "Portability and Performance",
    body: "Exprimer delivers the best-in-class image quality in multitude of environments for various applications in its a Cassette-sized form factor. Experience Exprimer's superior performance that will boost productivity and provide diagnostic confidence with its latest digital detector technology.",
    image: "/assets/images/products/Exprimer/EVS2430W-06-1024x662.png",
    featureCards: [
      {
        icon: "/assets/images/svg/basic_hammer.svg",
        title: "Unibody Design",
        bullets: [
          "Unibody design allows for maximum durability and minimum damages on drop",
        ],
      },
      {
        icon: "/assets/images/svg/basic_case.svg",
        title: "Portable",
        bullets: [
          "Weighing in at just 2.98 kg, Exprimer delivers maximum mobility for the user",
        ],
      },
      {
        icon: "/assets/images/svg/basic_life_buoy.svg",
        title: "Waterproof",
        bullets: [
          "Waterproofing is built in to protect from  moisture damage for EVS 3643 & 2430W",
        ],
      },
    ],
  },
  keyFeatures: {
    eyebrow: "Meet Exprimer",
    heading: "Key Features",
    items: [
      {
        icon: "/assets/images/svg/basic_picture.svg",
        title: "Crisp Images",
      },
      {
        icon: "/assets/images/svg/basic_case.svg",
        title: "Light & Slim Design",
      },
      {
        icon: "/assets/images/svg/basic_accelerator.svg",
        title: "2 Seconds Image Acquisition Time",
      },
      {
        icon: "/assets/images/svg/basic_gear.svg",
        title: "High MTF & DQE",
      },
      {
        icon: "/assets/images/svg/linea-ecommerce-money.svg",
        title: "TRUVIEW ® ART",
      },
      {
        icon: "/assets/images/svg/basic_rss.svg",
        title: "Lossless AED",
      },
    ],
  },
  video: {
    youtubeId: "BBHxDVtHf0U",
    startSeconds: 6,
  },
  highlights: {
    eyebrow: "Dive In",
    heading: "Proprietary Features",
    items: [
      {
        title: "Fast Image Display",
        body: "Fast image preview and display time of Exprimer products allow for more effective and efficient operation leading to increased productivity. Image preview in both wired and wireless modes are achieved less than 2 seconds and a full image is acquired in 4.5 and 6 seconds respectively.",
        image: "/assets/images/products/Exprimer/fast-image-display-1024x595.png",
      },
      {
        title: "EVS 4343",
        bullets: [
          "17×17\" wired Flat panel detector for General Radiography",
          "Robust and safety design against shock and drop",
          "High definition images by direct deposition Csl",
          "Fast Image acquisition time less than 2 seconds",
          "Highly reliable and stable GenRad",
        ],
        image: "/assets/images/products/Exprimer/EVS4343/2.png",
      },
      {
        title: "EVS 3643W",
        bullets: [
          "Unibody design for increased stability",
          "Ultimate portability with ergonomic handle",
          "Light weight at just 2.98 kg with robust design",
          "Water-proof for increased reliability [IPX4]",
        ],
        image: "/assets/images/products/Exprimer/EVS3643/1.png",
        imageFirst: true,
      },
      {
        title: "EVS 2430W",
        bullets: [
          "High deﬁnition imaging with smallest 76um pixel",
          "Ultimate portability · WPCS Power System (Wireless Charging)",
          "Smart information by OLED display",
          "Light weight 1.9 kg (w. battery) with modern design",
          "Various applications available (GenRad, Mobile, Neonatal/Pediatric, Equine, Vet. Portable, NDT, etc)",
        ],
        image: "/assets/images/products/Exprimer/2430/1.png",
      },
    ],
  },
  specs: [
    { label: "Detector Type (EVS 4343)", value: "Direct deposition CsI or Gadox" },
    { label: "Detector Type (EVS 3643W)", value: "Direct deposition CsI or Gadox" },
    { label: "Detector Type (EVS 2430W)", value: "Direct deposition CsI or Gadox" },
    { label: "Dimensions (mm) (EVS 4343)", value: "460 (H) x 460 (V) x 15 (D)" },
    { label: "Dimensions (mm) (EVS 3643W)", value: "386 (H) x 460 (V) x 14.5 (D)" },
    { label: "Dimensions (mm) (EVS 2430W)", value: "267.5 (H) x 327.5 (V) x 15 (D)" },
    { label: "Weight (with battery) (EVS 4343)", value: "4.5 kg" },
    { label: "Weight (with battery) (EVS 3643W)", value: "2.98 kg (including Battery 3.3 kg)" },
    { label: "Weight (with battery) (EVS 2430W)", value: "1.85 kg" },
    { label: "Active Area (EVS 4343)", value: "430 X 430 ㎜" },
    { label: "Active Area (EVS 3643W)", value: "358 X 430 ㎜" },
    { label: "Active Area (EVS 2430W)", value: "233.47 x 291.84 mm" },
    { label: "Pixel Pitch (EVS 4343)", value: "140 ㎛" },
    { label: "Pixel Pitch (EVS 3643W)", value: "140 ㎛" },
    { label: "Pixel Pitch (EVS 2430W)", value: "76 ㎛" },
    { label: "Resolution (EVS 4343)", value: "3072 x 3072 pixels" },
    { label: "Resolution (EVS 3643W)", value: "2560 X 3072 pixels" },
    { label: "Resolution (EVS 2430W)", value: "3072 X 3840 pixels" },
    { label: "Grayscale (EVS 4343)", value: "14 bit" },
    { label: "Grayscale (EVS 3643W)", value: "14/16 bit" },
    { label: "Grayscale (EVS 2430W)", value: "16 bit" },
    { label: "Power (EVS 4343)", value: "DC 12V, 5.0A" },
    { label: "Power (EVS 3643W)", value: "DC 12V, 5.0A" },
    { label: "Power (EVS 2430W)", value: "DC 12V, 5.0A" },
    { label: "Communication Type (EVS 4343)", value: "Gigabit Ethernet" },
    { label: "Communication Type (EVS 3643W)", value: "Gigabit Ethernet/,IEEE 802.11n" },
    { label: "Communication Type (EVS 2430W)", value: "Gigabit Ethernet, IEEE 802.11n" },
    { label: "X-ray I/F (EVS 4343)", value: "Lossless AED / Sync Trigger" },
    { label: "X-ray I/F (EVS 3643W)", value: "Lossless AED / Sync Trigger" },
    { label: "X-ray I/F (EVS 2430W)", value: "Lossless AED" },
    { label: "Image Acquisition Time (EVS 4343)", value: "Wired- 2.0 sec" },
    { label: "Image Acquisition Time (EVS 3643W)", value: "Wired: 4.5 s | Wireless: 6 s" },
    { label: "Image Acquisition Time (EVS 2430W)", value: "Wired: 4.5 s | Wireless: 6 s" },
  ],
  cta: {
    heading: "Elevate your clients' experience with",
    highlight: "Exprimer",
    brochureHref: "/assets/brochure/exprimer-brochure.pdf",
    brochureFilename: "exprimer-brochure.pdf",
  },
  gallery: [
    {
      title: "Diagnostic Images",
      images: [
        "/assets/images/products/Exprimer/diagnostic/1.jpg",
        "/assets/images/products/Exprimer/diagnostic/2.jpg",
        "/assets/images/products/Exprimer/diagnostic/3.jpg",
        "/assets/images/products/Exprimer/diagnostic/4.jpg",
      ],
    },
  ],
};
