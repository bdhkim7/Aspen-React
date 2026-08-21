import type { ProductPageContent } from "@/types/product";

export const fdrHd: ProductPageContent = {
  slug: "fdr-hd",
  title: "AspenFDR H.D. - Heavy Duty Floor-mounted X-Ray System",
  description: "Heavy-Duty line of digital floor mounted x-ray systems designed to be your imaging workhorse, manufactured to last decades",
  hero: {
    tagline: "Heavy Duty Floor-mounted X-Ray Systems",
    name: "AspenFDR H.D.",
    image: "/assets/images/products/FDR-HD/FDR-HD-main.png",
    imageStyle: { maxWidth: "80%", marginLeft: "5%" },
  },
  intro: {
    eyebrow: "Introducing AspenFDR H.D. (Heavy Duty)",
    heading: "Built for Extreme Rigidity & Rapid Alignment",
    headingHighlight: "Extreme Rigidity",
    body: "The AspenFDR H.D. promotes a freestanding design without wall attachments for rapid installation and ease of alignment. Aspen Imaging Healthcare's Heavy-Duty line of digital floor mounted x-ray systems are designed to be your imaging workhorse, manufactured to last decades",
    image: "/assets/images/products/FDR-HD/FDR-HD-main-with-stand.png",
    imageStyle: { maxWidth: "90%", marginLeft: "15%" },
    featureCards: [
      {
        icon: "/assets/images/svg/basic_geolocalize-05.svg",
        title: "5 Year Warranty & Made in USA",
        bullets: [
          "Made in the US from precision machined components (93% domestic content)",
        ],
      },
      {
        icon: "/assets/images/svg/basic_anchor.svg",
        title: "Extreme Rigidity",
        bullets: [
          "Manufactured with aircraft aluminum and strong steel construction",
          "All motion components are made from ball bearing and oilite®",
        ],
      },
      {
        icon: "/assets/images/svg/basic_hammer.svg",
        title: "Protected Surfaces",
        bullets: [
          "Durable powder coated surfaces",
          "All mechanical components are electroplated for superior corrosion protection",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "Meet FDR Heavy Duty's",
    heading: "Key Components",
    items: [
      {
        title: "Floor-Mounted Tube Stand",
        body: "Featuring an exclusive, seamless column for extreme rigidity, the AspenFDR H.D. supports up to 1.5 million heat unit x-ray tubes and 180-degrees x-ray tube rotation",
        image: "/assets/images/products/FDR-HD/tune-stand.png",
      },
      {
        title: "Table",
        bullets: [
          "Height-adjustable Table",
          "Tested 60,000 up/down with a 650lb load",
          "Bariatric package gives Bariatric magnet booster for extra-strong table-top retention when loading patients",
          "Slide out pc board for easy service and installation",
        ],
        body: "This elevating 6-way table is designed as a stand-alone system, consisting of plug-in cables and a single board interface compatible with all standard X-ray equipment. The table height is adjustabl to accommodate ambulatory, wheelchair, or gurney patients, accomplishing easier transfer for both patient and operator. The vertical movement is motorized and controlled by applying pressure to the foot pedals, which can be depressed.",
        image: "/assets/images/products/FDR-HD/table.png",
        imageFirst: true,
      },
      {
        title: "Wall Stand",
        bullets: [
          "Counterweights are secured by twin, multistranded stainless steel cables",
          "Finished with durable powder coated surfaces and bright nickel hardware, to give long-lasting, professional appearance – true hospital-grade quality",
        ],
        body: "Aspen Imaging wall stands are fully counterbalanced units and use electronic positive locks for patients and technician safety in the event of power failure. Featuring seamless columns for extreme rigidity, these columns contain hardened, serviceable, bearing braces for enduring life.",
        image: "/assets/images/products/FDR-HD/wall-stand.png",
      },
    ],
  },
  specs: [
    { label: "Standard Longitudinal Length", value: "92\"" },
    { label: "Height", value: "12\"" },
    { label: "Minimum Distance to Wall", value: "79\"" },
    { label: "Max Height of Tube Center", value: "16\" (13.75\" also available)" },
    { label: "Collapsed Length from Tube Stand", value: "25\"" },
    { label: "Travel from Table Center", value: "+/- 5\" in Both Directions" },
    { label: "Column Rotation", value: "180 Degress" },
    { label: "Tube Rotation", value: "180 Degress" },
    { label: "Footprint", value: "120\" x 20\"" },
    { label: "Electrical Requirements", value: "115/220 VAC, 50/60HZ, 5 Amps" },
    { label: "Maximum Patient Weight", value: "600 lbs / 765 lb (XL option)" },
    { label: "Tabletop Dimensions", value: "84\" X 30.25\"" },
    { label: "Tabletop Height", value: "23\" to 34\"" },
    { label: "Side Clearance", value: "17\"" },
    { label: "Cassette Holder Travel", value: "20\"" },
    { label: "Table Pedestal Length", value: "50.75\"" },
    { label: "Table Pedestal Width", value: "28.37\"" },
    { label: "Table Electrical Requirements", value: "115 VAC, 50/60 HZ, 10 Amps" },
    { label: "Detector Size", value: "17x17 or 14x17" },
    { label: "Wall Stand Electrical Requirements", value: "24 VDC, 50/60 HZ, 1.5 A" },
  ],
  cta: {
    heading: "Elevate your clients' experience with",
    highlight: "FDR Heavy Duty",
    brochureHref: "/assets/brochure/FDRHD-Brochure.pdf",
    brochureFilename: "FDRHD-Brochure.pdf",
  },
  gallery: [
    {
      title: "Installation Images",
      images: [
        "/assets/images/products/FDR-HD/G1.jpg",
        "/assets/images/products/FDR-HD/G2.jpg",
        "/assets/images/products/FDR-HD/G3.jpg",
        "/assets/images/products/FDR-HD/G4.jpg",
      ],
    },
  ],
};
