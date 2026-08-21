import type { ProductPageContent } from "@/types/product";

export const aspenview: ProductPageContent = {
  slug: "aspenview",
  title: "AspenView™",
  description:
    "Advanced Acquisition and Reporting Software for Digital Radiography",
  hero: {
    tagline: "Advanced Acquisition and Reporting SW",
    name: "AspenView™",
    image: "/assets/images/products/AspenView/chest1.jpeg",
    imageStyle: { maxWidth: "70%", marginLeft: "20%" },
  },
  intro: {
    eyebrow: "Introducing AspenView",
    heading: "Advanced Acquisition and Reporting Software for Digital Radiography",
    headingHighlight: "Digital Radiography",
    body: "AspenView™ is advanced digital radiography (DR) software that enhances image quality and streamlines workflow in various clinical settings. Compatible with DR flat panel detectors, it integrates image acquisition, X-ray generator control, and diagnostic reporting into a user-friendly interface.\n\nDesigned to serve hospitals, imaging centers, mobile clinics, and retrofit applications, AspenView™ supports robust interoperability with multi-vendor X-ray systems and comprehensive device management capabilities.\n\nIts intuitive graphical user interface supports both touchscreen and traditional input methods, facilitating rapid adoption and minimizing training requirements.",
    image: "/assets/images/products/AspenView/Dashboard.png",
  },
  highlights: {
    eyebrow: "AspenView",
    heading: "Functional and Technical Specs",
    items: [
      {
        title: "Patient Registration & Exam Management",
        bullets: [
          "DICOM Modality Worklist (MWL) integration for automatic retrieval of patient demographics",
          "Emergency Scan Mode allows acquisition without prior patient registration",
          "Exam List Management with capabilities for exam duplication, rejection, and post-acquisition additions",
          "MWL integration utilizes standard DICOM C-FIND query protocols",
          "Optional HL7 ADT feed integration enables real-time patient data synchronization",
        ],
        image: "/assets/images/products/AspenView/chest2.jpeg",
      },
      {
        title: "Image Acquisition & Quality Assurance",
        bullets: [
          "Automatic Exposure Detection (AED) for precise synchronization with X-ray hardware",
          "Live Preview feature displays acquired images within seconds post-exposure",
          "Compatible with a wide range of flat panel DR detectors from various manufacturers",
          "Built-in Procedure Wizard guides operators through standardized acquisition protocols",
          "Supports DICOM Modality Performed Procedure Step (MPPS) for workflow tracking",
        ],
        image: "/assets/images/products/AspenView/1.png",
        imageFirst: true,
      },
      {
        title: "Advanced Image Processing & Diagnostics",
        bullets: [
          "Organ-specific image processing algorithms for enhanced contrast and noise reduction",
          "Long-length stitching module for full-spine or lower extremity studies",
          "Linear and angular measurement tools for fracture and alignment evaluation",
          "Cobb angle calculator for scoliosis assessment",
          "Cardiothoracic ratio (CTR) measurement tools for cardiac diagnostics",
          "GPU-accelerated image processing ensures real-time performance",
        ],
        image: "/assets/images/products/AspenView/3.png",
      },
      {
        title: "User Interface & Workflow Efficiency",
        bullets: [
          "Touchscreen-optimized user interface with responsive design elements",
          "Role-based UI customization for technologists, radiologists, and administrators",
          "Integrated Procedure Wizard enforces standardized protocols",
          "UI built on modern frameworks supporting Windows touch APIs",
          "Localization files comply with Unicode standards for full international character support",
        ],
        image: "/assets/images/products/AspenView/BodyParts.png",
        imageFirst: true,
      },
      {
        title: "Interoperability & System Integration",
        bullets: [
          "Full DICOM 3.0 compliance with C-STORE, C-FIND, C-MOVE, and C-PRINT services",
          "Optional HL7 interfaces for automated order and result transmissions",
          "Auto-routing features distribute images based on predefined criteria",
          "Multi-AE Title support enables operation of multiple logical nodes",
          "Supports secure DICOM transfers with TLS encryption",
        ],
        image: "/assets/images/products/AspenView/PACS_MWL_PRINTER.png",
      },
    ],
  },
  specs: [
    {
      label: "Hardware Requirements (Minimum)",
      value: "Intel Core i5 CPU, 8 GB RAM, 512 GB SSD, Windows 10 Pro (64-bit)",
    },
    {
      label: "Hardware Requirements (Recommended)",
      value:
        "Intel Core i7 or higher, 16+ GB RAM, 1 TB SSD with backup redundancy, Windows 11 Pro (64-bit)",
    },
    {
      label: "GPU Acceleration",
      value:
        "Supports dedicated GPU acceleration (OpenGL 3+ compatible) for high-performance image processing",
    },
    {
      label: "DICOM Compliance",
      value: "Full DICOM 3.0 compliance (C-STORE, C-FIND, C-MOVE, C-PRINT)",
    },
    {
      label: "HL7 Integration",
      value: "Supports ADT, ORM, and ORU message types",
    },
    {
      label: "Image Export Formats",
      value: "DICOM, JPEG, BMP, TIFF, DICOMDIR",
    },
  ],
  cta: {
    heading: "Elevate your diagnostics with",
    highlight: "AspenView",
    brochureHref: "/assets/brochure/AspenView_brochure_b.pdf",
    brochureFilename: "AspenView-Brochure.pdf",
  },
  gallery: [
    {
      title: "Product Images",
      images: [
        "/assets/images/products/AspenView/Dashboard.png",
        "/assets/images/products/AspenView/1.png",
        "/assets/images/products/AspenView/2.png",
        "/assets/images/products/AspenView/3.png",
        "/assets/images/products/AspenView/list.png",
        "/assets/images/products/AspenView/Login.png",
        "/assets/images/products/AspenView/chest2.jpeg",
        "/assets/images/products/AspenView/PACS_MWL_PRINTER.png",
      ],
    },
  ],
};
