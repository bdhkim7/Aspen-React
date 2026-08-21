import type { ProductPageContent } from "@/types/product";

export const aspenviewEs: ProductPageContent = {
  slug: "aspenview-es",
  title: "AspenView™",
  description: "Software Avanzado de Adquisición y Reporte para Radiografía Digital",
  hero: {
    tagline: "Software Avanzado de Adquisición y Reporte",
    name: "AspenView™",
    image: "/assets/images/products/AspenView/chest1.jpeg",
    imageStyle: { maxWidth: "70%", marginLeft: "20%" },
  },
  intro: {
    eyebrow: "Introducción a AspenView",
    heading: "Software Avanzado de Adquisición y Reporte para Radiografía Digital",
    headingHighlight: "Radiografía Digital",
    body: "AspenView™ es un software avanzado de radiografía digital (DR) que mejora la calidad de las imágenes y optimiza el flujo de trabajo en diversos entornos clínicos. Compatible con detectores de panel plano DR, integra la adquisición de imágenes, el control del generador de rayos X y la generación de informes diagnósticos en una interfaz fácil de usar.\n\nDiseñado para hospitales, centros de imágenes, clínicas móviles y aplicaciones de modernización, AspenView™ ofrece una sólida interoperabilidad con sistemas de rayos X de múltiples proveedores y capacidades completas de gestión de dispositivos.\n\nSu interfaz gráfica intuitiva soporta métodos de entrada táctil y tradicionales, facilitando una rápida adopción y minimizando los requisitos de capacitación.",
    image: "/assets/images/products/AspenView/Dashboard.png",
  },
  highlights: {
    eyebrow: "AspenView",
    heading: "Especificaciones Funcionales y Técnicas",
    items: [
      {
        title: "Registro de Pacientes y Gestión de Exámenes",
        bullets: [
          "Integración con DICOM Modality Worklist (MWL) para recuperación automática de datos demográficos",
          "Modo de Escaneo de Emergencia permite la adquisición sin registro previo del paciente",
          "Gestión de Lista de Exámenes con capacidades de duplicación, rechazo y adiciones post-adquisición",
          "La integración de MWL utiliza protocolos de consulta DICOM C-FIND estándar",
          "La integración opcional de feeds HL7 ADT permite la sincronización de datos en tiempo real",
        ],
        image: "/assets/images/products/AspenView/chest2.jpeg",
      },
      {
        title: "Adquisición de Imágenes y Aseguramiento de Calidad",
        bullets: [
          "Detección Automática de Exposición (AED) para sincronización precisa con hardware de rayos X",
          "Vista Previa en Vivo muestra imágenes adquiridas en segundos tras la exposición",
          "Compatible con una amplia gama de detectores de panel plano DR de varios fabricantes",
          "Asistente de Procedimientos integrado guía a los operadores a través de protocolos estandarizados",
          "Soporta DICOM Modality Performed Procedure Step (MPPS) para seguimiento del flujo de trabajo",
        ],
        image: "/assets/images/products/AspenView/1.png",
        imageFirst: true,
      },
      {
        title: "Procesamiento de Imágenes y Diagnósticos Avanzados",
        bullets: [
          "Algoritmos de procesamiento específicos por órgano para mejorar el contraste y reducir el ruido",
          "Módulo de unión de imágenes de gran longitud para estudios de columna completa o extremidades",
          "Herramientas de medición lineal y angular para evaluación de fracturas y alineación",
          "Calculadora de ángulo de Cobb para evaluación de escoliosis",
          "Herramientas de medición de relación cardiotorácica (CTR) para diagnósticos cardíacos",
          "Procesamiento de imágenes acelerado por GPU asegura rendimiento en tiempo real",
        ],
        image: "/assets/images/products/AspenView/3.png",
      },
      {
        title: "Interfaz de Usuario y Eficiencia del Flujo de Trabajo",
        bullets: [
          "Interfaz de usuario optimizada para pantallas táctiles con elementos de diseño responsivo",
          "Personalización de interfaz basada en roles para tecnólogos, radiólogos y administradores",
          "Asistente de Procedimientos integrado impone protocolos estandarizados",
          "Interfaz construida sobre frameworks modernos que soportan APIs táctiles de Windows",
          "Archivos de localización cumplen con estándares Unicode para soporte completo de caracteres",
        ],
        image: "/assets/images/products/AspenView/BodyParts.png",
        imageFirst: true,
      },
      {
        title: "Interoperabilidad e Integración de Sistemas",
        bullets: [
          "Cumplimiento total con DICOM 3.0 con servicios C-STORE, C-FIND, C-MOVE y C-PRINT",
          "Interfaces HL7 opcionales para transmisión automatizada de órdenes y resultados",
          "Funciones de enrutamiento automático distribuyen imágenes según criterios predefinidos",
          "Soporte para múltiples títulos AE permite la operación de múltiples nodos lógicos",
          "Soporta transferencias DICOM seguras con cifrado TLS",
        ],
        image: "/assets/images/products/AspenView/PACS_MWL_PRINTER.png",
      },
    ],
  },
  specs: [
    {
      label: "Requisitos de Hardware (Mínimo)",
      value: "CPU Intel Core i5, 8 GB RAM, SSD de 512 GB, Windows 10 Pro (64 bits)",
    },
    {
      label: "Requisitos de Hardware (Recomendado)",
      value:
        "CPU Intel Core i7 o superior, 16+ GB RAM, SSD de 1 TB con redundancia de respaldo, Windows 11 Pro (64 bits)",
    },
    {
      label: "Aceleración por GPU",
      value:
        "Soporta aceleración por GPU dedicada (compatible con OpenGL 3+) para procesamiento de imágenes de alto rendimiento",
    },
    {
      label: "Cumplimiento DICOM",
      value: "Cumplimiento total con DICOM 3.0 (C-STORE, C-FIND, C-MOVE, C-PRINT)",
    },
    {
      label: "Integración HL7",
      value: "Soporta tipos de mensajes ADT, ORM y ORU",
    },
    {
      label: "Formatos de Exportación de Imágenes",
      value: "DICOM, JPEG, BMP, TIFF, DICOMDIR",
    },
  ],
  cta: {
    heading: "Eleva tus diagnósticos con",
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
