import type { ContentPageData } from "@/types/content";

export const orthopedic: ContentPageData = {
  slug: "orthopedic",
  title: "Orthopedic Industry",
  description: "X-ray solutions for orthopedic practices and imaging centers",
  breadcrumb: "Orthopedic Industry",
  blocks: [
    {
      type: "heading",
      text: "Serving Orthopedic Industry",
      highlight: "Orthopedic",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Aspen Imaging Healthcare proudly supports orthopedic industry with the best-in class products and support. From portable and powerful x-ray systems to our trusted stationary digital x-ray rooms, we are offering a range of products to suit the various needs.",
    },
    {
      type: "imageText",
      title: "Europa",
      body: "Equipped with rugged Case, Europa provides the agility and the rigidity essential to portable x-ray systems, with an on-board PC to acquire, save and export images, all in a 5.5 lb package. No PC workstation required: just load acquisition SW directly. Send images directly from Aspen's Europa to PACS, Email, Printer, etc. using built in WI-FI and Bluetooth capability. High frequency, 100 kHz Monoblock x-ray generator integrated into system (Model: Toshiba D 081B with 0.8mm focal spot).",
      image: "/assets/images/products/AiR_Touch/EuropaWithVieworks.jpg",
    },
    {
      type: "imageText",
      title: "Vieworks Flat Panel Detector",
      body: "8-hour integrated battery (Wireless). Panel weight with one battery: 4.3 lbs. IP67 dust & water resistance. OLED screen provides an easy way to check your battery & connection status.",
      image: "/assets/images/products/vieworks/workstation.png",
      imageFirst: true,
    },
  ],
  includeContact: true,
};
