import type { ProductPageContent } from "@/types/product";

export const rosem: ProductPageContent = {
  slug: "rosem",
  title: "Rose M - Smart & Slim Digital Mammography Solution",
  description: "World's first slim cassette-type digital mammography upgrade solution with exceptional image quality",
  hero: {
    tagline: "Smart & Slim Digital Mammography Solution",
    name: "Rose M",
    image: "/assets/images/products/RoseM/RoseM-main.png",
    imageStyle: { maxWidth: "80%", marginLeft: "10%" },
  },
  intro: {
    eyebrow: "Introducing DRTECH Rose M",
    heading: "World's First Cassette-type Digital Mammography Solution",
    headingHighlight: "Mammography Solution",
    body: "RoseM is the world's first slim cassette-type digital mammography upgrade solution (retrofit) that provides exceptional image quality with 76㎛ pixel size (smallest in Csl) and fast image acquisition.",
    bodyHighlight: "RoseM is designed to allow for an easy upgrade on existing analog mammography devices through its broad and tested compatibility that perfectly works with all mammography units in operation worldwide.",
    image: "/assets/images/products/RoseM/RoseM-d.png",
    featureCards: [
      {
        icon: "/assets/images/svg/basic_lightbulb.svg",
        title: "Low Cost Solution",
        bullets: [
          "Cost-saving solution with quality results and high ROI",
        ],
      },
      {
        icon: "/assets/images/svg/basic_magnifier_plus.svg",
        title: "High Image Quality",
        bullets: [
          "RoseM produces high resolution image with 76 ㎛ pixel size",
        ],
      },
      {
        icon: "/assets/images/svg/basic_mixer2.svg",
        title: "Easy Upgrade",
        bullets: [
          "RoseM's excellent compatibility allows for easy upgrade from analog to digital",
        ],
      },
    ],
  },
  keyFeatures: {
    eyebrow: "Meet Rose M",
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
        title: "< 10 Seconds Image Acquisition Time",
      },
      {
        icon: "/assets/images/svg/basic_gear.svg",
        title: "Microscopic Pixels",
      },
      {
        icon: "/assets/images/svg/linea-ecommerce-money.svg",
        title: "TRUVIEW ® ART",
      },
      {
        icon: "/assets/images/svg/basic_rss.svg",
        title: "AEC Compatibility",
      },
    ],
  },
  video: {
    youtubeId: "iErBYffqNvA",
  },
  specs: [
    { label: "Dimensions (1824C)", value: "194.5 x 267.5 x 14.2 mm" },
    { label: "Dimensions (2430C)", value: "253.7 x 327.5 x 14.2 mm" },
    { label: "Weight (1824C)", value: "0.92 kg (Detector Only)" },
    { label: "Weight (2430C)", value: "1.2 kg (Detector Only)" },
    { label: "Conversion Layer", value: "Direct deposition CsI or Gadox" },
    { label: "Pixel Pitch", value: "76 ㎛" },
    { label: "Resolution (1824C)", value: "2,304 x 3,072" },
    { label: "Resolution (2430C)", value: "3,072 x 3,840" },
    { label: "MTF", value: "65 @ 3 Ip/mm" },
    { label: "Preview Time", value: "2 seconds" },
    { label: "Cycle Time", value: "10 – 13 seconds" },
    { label: "Communication Type", value: "Gigabit Ethernet" },
    { label: "AEC Sensing", value: "System Compatible AEC" },
    { label: "Chest Wall Distance", value: "≤ 2.0 mm" },
  ],
  cta: {
    heading: "Elevate your clients' experience with",
    highlight: "Rose M",
    brochureHref: "/assets/brochure/RoseM-brochure.pdf",
    brochureFilename: "RoseM-brochure.pdf",
  },
  gallery: [
    {
      title: "Product Images",
      images: [
        "/assets/images/products/RoseM/RoseM-01.png",
        "/assets/images/products/RoseM/RoseM-02.png",
        "/assets/images/products/RoseM/RoseM-03.png",
        "/assets/images/products/RoseM/RoseM-04.jpg",
      ],
    },
    {
      title: "Diagnostic Images",
      images: [
        "/assets/images/products/RoseM/DI1.png",
        "/assets/images/products/RoseM/DI2.png",
        "/assets/images/products/RoseM/DI3.png",
        "/assets/images/products/RoseM/DI4.png",
      ],
    },
  ],
};
