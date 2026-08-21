import type { ProductPageContent } from "@/types/product";

export const rs80a: ProductPageContent = {
  slug: "rs80a",
  title: "RS80A with Prestige - Volume Rendering Technology",
  description: "Volume rendering ultrasound system with accurate measurement and advanced lesion diagnosis",
  hero: {
    tagline: "Volume Rendering Technology",
    name: "RS80A with Prestige",
    image: "/assets/images/products/RS80/main-slanted.png",
    imageStyle: { maxWidth: "70%", marginLeft: "20%" },
  },
  intro: {
    eyebrow: "Introducing Samsung's RS80A with Prestige",
    heading: "Volume rendering system with accurate measurement",
    headingHighlight: "accurate measurement",
    body: "RS80A with Prestige is Samsung's premium ultrasound system that integrated exquisite image quality and expert tools, empowering professionals to make faster and more confident decisions.",
    bodyHighlight: "Aspen Imaging Healthcare is an authorized distributor of Samsung Ultrasound System, which are factory-refurbished by Samsung with a series of quality check process to ensure brand new quality.",
    image: "/assets/images/products/RS80/main-front.png",
    featureCards: [
      {
        icon: "/assets/images/svg/basic_picture.svg",
        title: "New serial number given after refurbish process",
      },
      {
        icon: "/assets/images/svg/basic_picture.svg",
        title: "New housing replacement",
      },
      {
        icon: "/assets/images/svg/basic_picture.svg",
        title: "New SW installation from the factory",
      },
      {
        icon: "/assets/images/svg/basic_picture.svg",
        title: "1 Year factory warranty",
      },
    ],
  },
  cta: {
    heading: "Elevate your clients' experience with",
    highlight: "RS80A with Prestige",
    brochureHref: "/assets/brochure/RS85-Brochure.pdf",
    brochureFilename: "RS85-Brochure.pdf",
  },
  gallery: [
    {
      title: "Product Images",
      images: [
        "/assets/images/products/RS80/RS80A_012_L-Perspective.jpg",
        "/assets/images/products/RS80/RS80A_010_Front.jpg",
        "/assets/images/products/RS80/RS80A_007_L-side1.png",
        "/assets/images/products/RS80/RS80A_004_Back.png",
      ],
    },
  ],
};
