export type ProductCategory = "handheld" | "x-ray" | "flat";

export type CatalogProduct = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  summary: string;
  href: string;
  image: string;
  download?: boolean;
};

export const catalogProducts: CatalogProduct[] = [
  {
    slug: "iodr-1417-gf",
    name: "iODR1417 - GF",
    category: "flat",
    categoryLabel: "Flat Panel Detector",
    summary:
      "Flexible & Durable flat panel detector built for longevity (FDA 510(k) Cleared)",
    href: "/products/iodr-1417-gf",
    image: "/assets/images/projects/iodr1417_GF.png",
  },
  {
    slug: "europa-90",
    name: "Europa90",
    category: "handheld",
    categoryLabel: "Portable X-Ray",
    summary: "Our most powerful and portable X-Ray Device (FDA 510(k) Cleared)",
    href: "/products/europa-90",
    image: "/assets/images/products/Europa90/images_2.png",
  },
  {
    slug: "europa-85",
    name: "Europa85",
    category: "handheld",
    categoryLabel: "Portable X-Ray",
    summary: "Our most balanced handheld X-Ray Device (FDA 510(k) Cleared)",
    href: "/products/europa-85",
    image: "/assets/images/products/Europa85/product images/Europa85_small.png",
  },
  {
    slug: "europa-85l",
    name: "Europa85L",
    category: "handheld",
    categoryLabel: "Portable X-Ray",
    summary: "Our lightest yet most efficient X-Ray Device (FDA 510(k) Cleared)",
    href: "/products/europa-85l",
    image: "/assets/images/products/Europa85L/Europa85L_small.png",
  },
  {
    slug: "apx-24",
    name: "APX-24",
    category: "handheld",
    categoryLabel: "Portable X-Ray",
    summary:
      "Delivers portable, patient-centered imaging for home health, remote services, and clinic use (FDA 510(k) Cleared)",
    href: "/products/apx-24",
    image: "/assets/images/projects/SPX_480_320.png",
  },
  {
    slug: "aspen-xdr",
    name: "AspenXDR",
    category: "x-ray",
    categoryLabel: "X-Ray Systems",
    summary:
      "Straight-arm digital X-ray system for versatile diagnostic imaging (FDA 510(k) Cleared)",
    href: "/assets/brochure/AspenXDR_brochure.pdf",
    image: "/assets/images/projects/XDR_480_300.jpeg",
    download: true,
  },
  {
    slug: "aspen-fdr",
    name: "AspenFDR",
    category: "x-ray",
    categoryLabel: "X-Ray Systems",
    summary:
      "Our most advanced digital X-ray, covering all radiography needs for clinics with space (FDA 510(k) Cleared)",
    href: "/assets/brochure/AspenFDR_brochure.pdf",
    image: "/assets/images/projects/FDR_480x300.png",
    download: true,
  },
  {
    slug: "aspen-vet",
    name: "Aspen Vet Table",
    category: "x-ray",
    categoryLabel: "X-Ray Systems",
    summary: "Digital X-Ray for Veterinary",
    href: "/products/aspen-vet",
    image: "/assets/images/projects/aspen_vet.png",
  },
  {
    slug: "laica-85l",
    name: "Laica85L",
    category: "handheld",
    categoryLabel: "X-Ray Systems",
    summary: "Lightweight, battery-powered X-Ray for veterinary care",
    href: "/products/laica-85l",
    image: "/assets/images/projects/laica85L.png",
  },
  {
    slug: "laica-90",
    name: "Laica 90",
    category: "handheld",
    categoryLabel: "X-Ray Systems",
    summary: "Powerful, portable X-Ray for Vets",
    href: "/products/laica-90",
    image: "/assets/images/projects/laica90.png",
  },
];

export type HeroSlide = {
  id: string;
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  navLabel: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "banner1",
    href: "/products/europa-90",
    image:
      "/assets/images/products/Europa90/product images/Europa90_front and back_2.png",
    imageAlt: "Europa90 portable X-ray",
    eyebrow: "Shoot. View. Diagnose.",
    title: "Europa90",
    description: 'Portable X-ray with a 10.1" built-in screen',
    navLabel: "Europa90",
  },
  {
    id: "banner2",
    href: "/products/europa-85",
    image: "/assets/images/products/Europa85/product images/Europa85_7.png",
    imageAlt: "Europa85 portable X-ray",
    eyebrow: "Shoot. View. Diagnose.",
    title: "Europa85",
    description: 'Patented imaging you can see instantly on a 7" display',
    navLabel: "Europa85",
  },
  {
    id: "banner3",
    href: "/products/apx-24",
    image: "/assets/images/products/APX-24/apxMain.png",
    imageAlt: "APX-24 X-ray unit",
    eyebrow: "Compact X-ray unit",
    title: "APX-24",
    description: "Lightweight, reliable imaging wherever you need it",
    navLabel: "APX",
  },
  {
    id: "banner4",
    href: "/products/iodr-1417-gf",
    image: "/assets/images/products/iODR1417-GF/iodr1417_GF panel.png",
    imageAlt: "iODR glass-free flat panel detector",
    eyebrow: "Glass-free detector",
    title: "iODR Series",
    description: "Impact-resistant. Flexible. Built for digital radiography.",
    navLabel: "iODR Panels",
  },
];

export type ApplicationCard = {
  href: string;
  title: string;
  text: string;
  icon: string;
};

export const applications: ApplicationCard[] = [
  {
    href: "/industries/veterinary",
    title: "Veterinary",
    icon: "/assets/images/svg/vet.svg",
    text: "Portable X-ray systems for radiographic and dental imaging across veterinarian practices, zoos, equine physicians, and veterinary dental.",
  },
  {
    href: "/industries/mobile",
    title: "Mobile X-Rays",
    icon: "/assets/images/svg/mobile.svg",
    text: "Portability for mobile imaging companies — Europa systems include an on-board PC to acquire and save images without carrying a laptop.",
  },
  {
    href: "/industries/orthopedic",
    title: "Orthopedic Imaging",
    icon: "/assets/images/svg/orthopedic.svg",
    text: "Turn-key orthopedic solutions with products like T4 that auto-track during procedures to increase throughput and reduce repetitive positioning.",
  },
  {
    href: "/industries/military",
    title: "Military",
    icon: "/assets/images/svg/military.svg",
    text: "Rugged portable X-ray systems paired with compatible DR detectors and accessories for mobile imaging in demanding environments.",
  },
  {
    href: "/industries/urgent-care",
    title: "Urgent Care",
    icon: "/assets/images/svg/urgent.svg",
    text: "A wide range of X-ray room and portable solutions built to fit the pace and needs of urgent care centers.",
  },
  {
    href: "/industries/clinics",
    title: "Medical Clinics",
    icon: "/assets/images/svg/medical.svg",
    text: "Diverse devices for clinics — AspenXDR, AspenFDR, iODR detectors, and portable Europa X-ray systems.",
  },
  {
    href: "/industries/clinics",
    title: "Hospitals",
    icon: "/assets/images/svg/medical.svg",
    text: "Hospital-grade medical X-ray systems designed to increase patient throughput and satisfaction.",
  },
];

export type ContentPage = {
  slug: string;
  title: string;
  description: string;
};

export const productPages: ContentPage[] = [
  { slug: "europa-85", title: "Europa85", description: "Balanced handheld portable X-ray." },
  { slug: "europa-90", title: "Europa90", description: "Portable X-ray with a 10.1 inch built-in screen." },
  { slug: "europa-85l", title: "Europa85L", description: "Lightest efficient portable X-ray." },
  { slug: "apx-24", title: "APX-24", description: "Compact portable X-ray unit." },
  { slug: "iodr-1417-gf", title: "iODR1417-GF", description: "Glass-free flat panel detector." },
  { slug: "iodr-1417", title: "iODR1417", description: "iODR series flat panel detector." },
  { slug: "iodr-1717", title: "iODR1717", description: "iODR 17x17 flat panel detector." },
  { slug: "aspen-vet", title: "AspenVet Table", description: "Digital X-ray for veterinary." },
  { slug: "laica-85l", title: "Laica85L", description: "Lightweight veterinary portable X-ray." },
  { slug: "laica-90", title: "Laica 90", description: "Powerful portable X-ray for veterinary care." },
  { slug: "fdr-hd", title: "AspenFDR H.D.", description: "Digital radiography system (legacy page)." },
  { slug: "exprimer", title: "Exprimer", description: "Ultra slim uni-body detector." },
  { slug: "vieworks-panel", title: "Vieworks Panel", description: "Flat panel detector." },
  { slug: "ws80a", title: "WS80A", description: "Legacy product page." },
  { slug: "rs85", title: "RS85", description: "Legacy product page." },
  { slug: "rs80a", title: "RS80A", description: "Legacy product page." },
  { slug: "rosem", title: "Rosem", description: "Legacy product page." },
  { slug: "hs70a", title: "HS70A", description: "Legacy product page." },
  { slug: "hera-w10", title: "HERA-W10", description: "Legacy product page." },
  { slug: "air-touch", title: "AiR-Touch", description: "Legacy product page." },
];

export const industryPages: ContentPage[] = [
  { slug: "dental", title: "Dental", description: "Imaging solutions for dental practices." },
  { slug: "orthopedic", title: "Orthopedic", description: "Imaging solutions for orthopedic care." },
  { slug: "clinics", title: "Clinics & Hospitals", description: "Systems for clinics and hospitals." },
  { slug: "mobile", title: "Mobile X-Rays", description: "Portable imaging for mobile providers." },
  { slug: "military", title: "Military", description: "Rugged portable imaging for demanding environments." },
  { slug: "urgent-care", title: "Urgent Care", description: "X-ray solutions for urgent care centers." },
  { slug: "veterinary", title: "Veterinary", description: "Imaging for veterinary practices." },
];

export const softwarePages: ContentPage[] = [
  { slug: "aspenview", title: "AspenView - English", description: "Acquisition and viewing software." },
  { slug: "aspenview-es", title: "AspenView - Spanish", description: "Software de adquisición y visualización." },
];
