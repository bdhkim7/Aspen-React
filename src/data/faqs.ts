export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  title: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    title: "Company",
    items: [
      {
        id: "company-1",
        question: "What does Aspen Imaging Healthcare do?",
        answer:
          "Aspen Imaging Healthcare manufactures and distributes next-generation medical imaging equipment, including portable and room-based X-ray systems, flat panel detectors, and acquisition software. We are headquartered in Plano, Texas and serve customers worldwide through a network of distributors.",
      },
      {
        id: "company-2",
        question: "What certifications does Aspen Imaging hold?",
        answer:
          "We maintain FDA 510(k) clearance where applicable, ISO 13485 certification, and Cofepris registration for Mexico. See About Us and Commitment to Quality for details.",
      },
      {
        id: "company-3",
        question: "Which industries do you serve?",
        answer:
          "Our solutions support orthopedic practices, clinics and hospitals, mobile imaging providers, urgent care centers, military and field medicine, veterinary care, and dental imaging applications.",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        id: "products-1",
        question: "What is the iODR series?",
        answer:
          "The iODR series includes the iODR1417-GF (glass-free), iODR1417, and iODR1717 flat panel detectors for digital radiography, designed for durability and use with Aspen X-ray systems and AspenView.",
      },
      {
        id: "products-2",
        question: "Are Europa portable X-ray systems compatible with iODR detectors?",
        answer:
          "Yes. Europa systems work with iODR detectors wirelessly or tethered. Third-party panel compatibility may vary—contact sales to confirm your setup.",
      },
      {
        id: "products-3",
        question: "What is AspenView software?",
        answer:
          "AspenView handles DR acquisition, generator control, and reporting in one interface. It works with iODR detectors and is available in English and Spanish.",
      },
      {
        id: "products-4",
        question: "Where can I download product brochures?",
        answer:
          "Brochures for Europa90, AspenFDR, AspenXDR, and other products are on their product pages. Email us if you need literature for a specific system.",
      },
    ],
  },
  {
    title: "Sales & Distributors",
    items: [
      {
        id: "sales-1",
        question: "How do I purchase Aspen Imaging products?",
        answer:
          "We sell through authorized distributors worldwide. Contact sales@aspenimaging.com and we will connect you with the right partner for your region.",
      },
      {
        id: "sales-2",
        question: "How do I become an Aspen Imaging distributor?",
        answer:
          "Select \"Becoming A Distributor\" when submitting the contact form, or email sales@aspenimaging.com with your company profile, territory, and product interests. Our team will review your inquiry and follow up with next steps.",
      },
      {
        id: "sales-3",
        question: "Do you provide product roadmaps for distributors?",
        answer:
          "Because development cycles are long, we share product roadmaps with distributors to support planning. Ask your Aspen representative for the latest roadmap.",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        id: "support-1",
        question: "How do I reach technical support?",
        answer:
          "General inquiries: (+1) 214-257-0113. Technical support: (+52) 1-55-1336-0895. Or use the contact form and select \"Technical Support.\"",
      },
      {
        id: "support-2",
        question: "What should I include in a support request?",
        answer:
          "Please include your name, organization, product model and serial number (if available), a description of the issue, and any error messages or screenshots. This helps our team respond faster with the right solution.",
      },
      {
        id: "support-3",
        question: "Can I still ask a question that is not listed here?",
        answer:
          "Absolutely. Use the contact form below or email sales@aspenimaging.com. We are happy to answer questions about products, compatibility, distributor partnerships, and service.",
      },
    ],
  },
];
