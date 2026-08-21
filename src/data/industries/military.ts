import type { ContentPageData } from "@/types/content";

export const military: ContentPageData = {
  slug: "military",
  title: "Military Industry",
  description: "X-ray solutions for military hospitals and field operations",
  breadcrumb: "Military Industry",
  blocks: [
    {
      type: "heading",
      text: "Serving The Military Industry",
      highlight: "Military",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Aspen Imaging Healthcare proudly supports our military partners with best-in class products and support. From highly durable portable x-ray systems with long battery life that can be used in the field, to our trusted stationary digital x-ray rooms to serve military hospitals, we are offering a range of products to suit the toughest needs.",
    },
    {
      type: "paragraph",
      text: "Aspen Imaging is registered on SAM (System for Award Management)",
    },
    {
      type: "imageText",
      title: "Europa with Vieworks Detectors",
      body: "Equipped with rugged Case, Europa provides a military-grade device with the most portable x-ray system, with an on-board PC to acquire, save and export images, all in a 5.5 lb package. Laptop or tablet (surface) is required; embedded pc on Europa is auxiliary. Send images directly from Aspen's Europa to PACS, Email, Printer, etc. using built in WI-FI and Bluetooth capability. High frequency, 100 kHz Monoblock x-ray generator integrated into system (Model: Toshiba D 081B with 0.8mm focal spot).",
      image: "/assets/images/products/AiR_Touch/EuropaWithVieworks.jpg",
    },
    {
      type: "imageText",
      title: "Rugged Case",
      body: "Incredible portability with our Rugged Case that comes standard with every Europa product. Hard shell case with custom foam inserts to protect your x-ray system. Custom numeric passcode to lock the hard shell case.",
      image: "/assets/images/products/AiR_Touch/12.jpg",
      imageFirst: true,
    },
    {
      type: "imageText",
      title: "Aspen FDR",
      body: "6-way elevating table floor mount x-ray room with 550 lb patient capacity. Table is pillar-styled for wheelchair accessibility. Integrated with the same table technology as our AspenOTC, AspenFDR uses actuators (not motors) for a highly reliable and silent operating experience. Movable wired foot switch for enhanced operator comfort (wireless foot switch also available). Tube handle with built-in inclinometer to see the degree of articulation. Front display shows angle of articulation: Manual Movement, Vertical/longitudinal traveled controlled by electrical magnetic brake. Tube rotation: ±135° and Column rotation: ±90°.",
      image: "/assets/images/products/FDR/installed.jpg",
    },
  ],
  includeContact: true,
};
