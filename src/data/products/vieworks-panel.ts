import type { ProductPageContent } from "@/types/product";

export const vieworksPanel: ProductPageContent = {
  slug: "vieworks-panel",
  title: "Vieworks Detectors - Hospital-grade Flat Panel Detectors",
  description: "Hospital-grade flat panel detectors optimized for Aspen Imaging products with crisp image quality and reliable performance",
  hero: {
    tagline: "Hospital-grade Flat Panel Detectors",
    name: "Vieworks Detectors",
    image: "/assets/images/products/vieworks/14x17/1417W-front.png",
    imageStyle: { maxWidth: "50%", marginLeft: "25%" },
  },
  intro: {
    eyebrow: "Introducing Vieworks Flat Panel Detectors",
    heading: "Optimized Performance with Aspen Imaging Products",
    headingHighlight: "Aspen Imaging Products",
    body: "Aspen Imaging Healthcare has proudly partnered with Medlink Imaging (a division of Vieworks) for our digital radiography panels & software to drive the optimal performance of our devices.",
    bodyHighlight: "Providing asymmetric value, Vieworks offers customers high-end features, crisp image quality, unmatched product reliability & technical support at affordable prices",
    image: "/assets/images/products/vieworks/14x17/1417W-R-per.png",
    imageStyle: { maxWidth: "50%", marginLeft: "25%" },
    featureCards: [
      {
        icon: "/assets/images/svg/wireless.svg",
        title: "Wired & Wireless Options",
        bullets: [
          "8-hour integrated battery (Wireless)",
          "Panel weight with one battery: 4.3 lbs",
          "OLED screen: provides an easy method to check your battery & connection status",
        ],
      },
      {
        icon: "/assets/images/svg/hospital-grade.svg",
        title: "Hospital-grade Quality",
        bullets: [
          "5 year manufacturers warranty",
          "IP67 dust & water resistance",
          "Rugged: passes 100cm drop and 400kg uniform load test",
        ],
      },
      {
        icon: "/assets/images/svg/linea-basic-pencil-ruler.svg",
        title: "Multiple Panel Sizes",
        bullets: [
          "10 inches x 12 inches (1012N)",
          "14 inches x 17 inches (1417W)",
          "17 inches x 17 inches (1717V)",
        ],
      },
    ],
  },
  keyFeatures: {
    eyebrow: "Meet Vieworks Panels",
    heading: "Key Features",
    items: [
      {
        icon: "/assets/images/svg/basic_picture.svg",
        title: "Crisp Images",
      },
      {
        icon: "/assets/images/svg/linea-basic-case.svg",
        title: "Light & Slim Design",
      },
      {
        icon: "/assets/images/svg/basic_accelerator.svg",
        title: "2 Seconds Image Acquisition Time",
      },
      {
        icon: "/assets/images/svg/linea-basic-gear.svg",
        title: "High MTF & DQE",
      },
      {
        icon: "/assets/images/svg/linea-ecommerce-money.svg",
        title: "Anytime™",
      },
      {
        icon: "/assets/images/svg/basic_rss.svg",
        title: "InsideAP™",
      },
    ],
  },
  video: {
    youtubeId: "h4dtJuwvOG8",
  },
  highlights: {
    eyebrow: "VXVue",
    heading: "A Powerful Engine with an Intuitive User Interface",
    items: [
      {
        title: "VXVue: A Powerful Engine with an Intuitive User Interface",
        body: "The VXVUE acquisition software is an award winning intelligent software solution that integrates the most advanced imaging processing. VXvue's image viewer program contains specialized modules to acquire, adjust, and manage diagnostic images created by the VIVIX-S Series.",
        image: "/assets/images/products/vieworks/sw2.jpg",
      },
      {
        title: "VXVue: Award-winning software",
        body: "VXVue's post-processing algorithm will further enhance image quality through features like fine details without visual artifacts, soft tissue delineation, Non-grid chest processing, grid line removal with clear resolution, and fine tuning. Furthermore, VXVue allows for easy customization through 3 types of image processing (soft, normal, hard predefined parameters), customizable themes & skins, and the freedom to choose layouts, logos and fonts",
        image: "/assets/images/products/vieworks/sw1.jpg",
        imageFirst: true,
      },
      {
        title: "Customized Workstation",
        bullets: [
          "Dell 24\" Touchscreen Monitor",
          "Dell Workstation PC with 5-Year Manufacturer Warranty",
          "Customized & Optimized",
        ],
        body: "The Vieworks detectors are shipped with customized workstation that is preloaded with award-winning VXVue acquisition software for a truly plug-and-play experience",
        image: "/assets/images/products/vieworks/workstation.png",
      },
    ],
  },
  addOns: [
    {
      id: "rugged",
      title: "Rugged Tablet",
      summary: "The most durable tablet that has passed drop, temperature, and water tests",
      image: "/assets/images/products/vieworks/rugged.png",
      details: [
        "Using Latitude 7212 Rugged Extreme Tablet with Vieworks QX link mini pacs server",
        "Passed drop test from 100 cm (4 ft)",
        "Passed temperature test from -20F to 145F",
        "IP-65 rated for maximum protection against dust, dirt, and water",
      ],
    },
    {
      id: "upgrade",
      title: "Upgrade to QX Link 3.3",
      summary: "Upgrade Mini PACs to QX Link 3.0 for more diverse features",
      image: "/assets/images/products/vieworks/qxlink.png",
      details: [
        "Customizable toolbars",
        "Flexible display layout",
        "Specific Viewing Modes for CT & MRI",
        "Image Filters & Pseudo Color",
        "60+ Measurement Tools with graphic guide for Chiropractic, Orthopedic, Podiatry, Veterinary, DICOM SR",
      ],
    },
    {
      id: "case",
      title: "Wireless Panel Case",
      summary: "The most durable panel encasement for wireless Vieworks Detectors",
      image: "/assets/images/products/vieworks/encasement.png",
      details: [
        "IP 5X waterproof, drop, dust, and particulate protected",
        "Quick release locks for easy on and off",
        "Smooth non-porous surface with curved corners",
        "Lightweight with optional cutouts for LEDs and power button",
      ],
    },
  ],
  specs: [
    { label: "Model", value: "1717V / 1417W / 1012N" },
    { label: "Scintillator", value: "Cesium or Gadolinium" },
    { label: "Pixel Pitch (1717V/1417W)", value: "140 ㎛" },
    { label: "Pixel Pitch (1012N)", value: "124 ㎛" },
    { label: "Spatial Resolution (1717V/1417W)", value: "3.5 lp/㎜" },
    { label: "Spatial Resolution (1012N)", value: "4.0 lp/㎜" },
    { label: "Pixels (1717V)", value: "3072 x 3072 pixels" },
    { label: "Pixels (1417W)", value: "2560 x 3072 pixels" },
    { label: "Pixels (1012N)", value: "2048 x 2560 pixels" },
    { label: "Grayscale", value: "16 bit / 14 bit" },
    { label: "Image Acquisition Time", value: "2 seconds (wired), 3-4.5s (wireless)" },
    { label: "Data Interface", value: "Gigabit Ethernet, IEEE 802.11 a/b/g/n" },
    { label: "X-ray Voltage Range", value: "40 - 150 kVp" },
    { label: "Warranty", value: "5 Years: Panel & Workstation" },
  ],
  cta: {
    heading: "Elevate your clients' experience with",
    highlight: "Vieworks Detectors",
    brochureHref: "/assets/brochure/vieworks_brochure.pdf",
    brochureFilename: "vieworks_brochure.pdf",
  },
  gallery: [
    {
      title: "10\" x 12\" Panel",
      images: [
        "/assets/images/products/vieworks/10x12/front.png",
        "/assets/images/products/vieworks/10x12/back.png",
        "/assets/images/products/vieworks/10x12/side.png",
        "/assets/images/products/vieworks/10x12/bottom.png",
      ],
    },
    {
      title: "14\" x 17\" Panel",
      images: [
        "/assets/images/products/vieworks/14x17/1417W-front.png",
        "/assets/images/products/vieworks/14x17/1417W-L-per.png",
        "/assets/images/products/vieworks/14x17/1417W-R-per.png",
        "/assets/images/products/vieworks/14x17/1417W-side.png",
      ],
    },
    {
      title: "17\" x 17\" Panel",
      images: [
        "/assets/images/products/vieworks/17x17/1717V_1.png",
        "/assets/images/products/vieworks/17x17/front.jpg",
        "/assets/images/products/vieworks/17x17/side.png",
        "/assets/images/products/vieworks/17x17/plugged.png",
      ],
    },
    {
      title: "Diagnostic Images",
      images: [
        "/assets/images/products/vieworks/diagnostic/1.jpg",
        "/assets/images/products/vieworks/diagnostic/2.jpg",
        "/assets/images/products/vieworks/diagnostic/3.jpg",
        "/assets/images/products/vieworks/diagnostic/4.jpg",
      ],
    },
    {
      title: "VXVue Software",
      images: [
        "/assets/images/products/vieworks/SW/VXVue/1.jpg",
        "/assets/images/products/vieworks/SW/VXVue/2.jpg",
        "/assets/images/products/vieworks/SW/VXVue/3.png",
        "/assets/images/products/vieworks/SW/VXVue/4.jpg",
      ],
    },
    {
      title: "QXlink Software",
      images: [
        "/assets/images/products/vieworks/SW/QXlink/1.png",
        "/assets/images/products/vieworks/SW/QXlink/2.png",
        "/assets/images/products/vieworks/SW/QXlink/3.png",
        "/assets/images/products/vieworks/SW/QXlink/4.png",
      ],
    },
  ],
};
