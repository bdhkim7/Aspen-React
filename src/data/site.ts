export const company = {
  name: "Aspen Imaging Healthcare",
  phoneDisplay: "(+1) 214-257-0113",
  phoneHref: "tel:+12142570113",
  supportPhoneDisplay: "(+52) 1-55-1336-0895",
  supportPhoneHref: "tel:+5215513360895",
  email: "sales@aspenimaging.com",
  address: "801 Jupiter Rd Suite 200, Plano, TX 75074, USA",
  mapsUrl: "https://goo.gl/maps/rc6Mj1xm7Bc8ZQ237",
  siteUrl: "https://www.aspenimaging.com",
  social: {
    instagram: "https://www.instagram.com/aspen.imaging_healthcare/",
    facebook: "https://www.facebook.com/aspenimgainghealthcare",
    youtube: "https://www.youtube.com/@AspenImagingHealthcare-AI",
    linkedin: "https://www.linkedin.com/company/aspenimaging/",
  },
} as const;

export type NavLink = { href: string; label: string; external?: boolean };

export const companyLinks: NavLink[] = [
  { href: "/about-us", label: "About us" },
];

export const detectorLinks: NavLink[] = [
  { href: "/products/iodr-1417-gf", label: "iODR1417-GF" },
  { href: "/products/iodr-1417", label: "iODR1417" },
  { href: "/products/iodr-1717", label: "iODR1717" },
];

export const accessoryLinks: NavLink[] = [
  { href: "/products/a-guard", label: "A-Guard" },
  { href: "/products/mobile-panel-holder", label: "Mobile Panel Holder" },
];

export const medicalSystemLinks: NavLink[] = [
  { href: "/products/europa-85l", label: "Europa85L" },
  { href: "/products/europa-85", label: "Europa85" },
  { href: "/products/europa-90", label: "Europa90" },
  { href: "/products/apx-24", label: "APX-24" },
  { href: "/products/aspen-fdr", label: "AspenFDR" },
  { href: "/products/aspen-xdr", label: "AspenXDR" },
];

export const softwareLinks: NavLink[] = [
  { href: "/software/aspenview", label: "AspenView - English" },
  { href: "/software/aspenview-es", label: "AspenView - Spanish" },
];

export const veterinaryLinks: NavLink[] = [
  { href: "/products/aspen-vet", label: "AspenVet Table" },
  { href: "/products/laica-85l", label: "Laica85L" },
  { href: "/products/laica-90", label: "Laica 90" },
  { href: "/products/titan-24", label: "Titan 24" },
];

export const contactLinks: NavLink[] = [
  { href: "/contact-us", label: "Contact us" },
  { href: "/faqs", label: "FAQs" },
];

export const industryLinks: NavLink[] = [
  { href: "/industries/dental", label: "Dental" },
  { href: "/industries/orthopedic", label: "Orthopedic" },
  { href: "/industries/clinics", label: "Clinics & Hospitals" },
  { href: "/industries/mobile", label: "Mobile X-Rays" },
  { href: "/industries/military", label: "Military" },
  { href: "/industries/urgent-care", label: "Urgent Care" },
  { href: "/industries/veterinary", label: "Veterinary" },
];

export const footerSolutionLinks: NavLink[] = [
  { href: "/products/aspen-xdr", label: "AspenXDR" },
  { href: "/products/aspen-fdr", label: "AspenFDR" },
  { href: "/products/europa-85", label: "Europa85" },
  { href: "/products/europa-90", label: "Europa90" },
  { href: "/products/iodr-1417-gf", label: "iODR1417-GF" },
  { href: "/products/iodr-1417", label: "iODR1417" },
  { href: "/products/iodr-1717", label: "iODR1717" },
  { href: "/products/aspen-vet", label: "AspenVet Table" },
  { href: "/products/laica-85l", label: "Laica85L" },
  { href: "/products/laica-90", label: "Laica90" },
];

export const inquiryTypes = [
  "General Information Request",
  "Becoming A Distributor",
  "Technical Support",
] as const;

export const countries = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Brazil",
  "Argentina",
  "Colombia",
  "Chile",
  "Australia",
  "Japan",
  "South Korea",
  "India",
  "United Arab Emirates",
  "Saudi Arabia",
  "South Africa",
  "Other",
] as const;
