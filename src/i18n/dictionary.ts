import type { Locale } from "@/i18n/config";

export type Dictionary = {
  meta: { title: string; description: string; titleTemplate: string };
  nav: {
    company: string;
    solutions: string;
    contact: string;
    detectors: string;
    iodrSeries: string;
    accessories: string;
    medicalSystems: string;
    software: string;
    veterinary: string;
    openMenu: string;
    closeMenu: string;
  };
  links: Record<string, string>;
  footer: {
    company: string;
    solutions: string;
    industries: string;
    rights: string;
  };
  home: {
    companyEyebrow: string;
    companyHeadingBefore: string;
    companyHeadingHighlight: string;
    companyHeadingAfter: string;
    companyBody: string;
    hero: Record<string, { eyebrow: string; description: string; imageAlt: string }>;
    applicationsHeadingBefore: string;
    applicationsHeadingHighlight: string;
    applicationsHeadingAfter: string;
    applicationsLabel: string;
    seeIndustry: string;
    scrollHint: string;
    connect: string;
    applications: { title: string; text: string }[];
  };
  catalog: {
    eyebrow: string;
    headingBefore: string;
    headingHighlight: string;
    showAll: string;
    handheld: string;
    xray: string;
    flat: string;
    viewDetails: string;
    category: Record<string, string>;
    summary: Record<string, string>;
  };
  facts: { prefix: string; label: string }[];
  contact: {
    questions: string;
    reach: string;
    contactUs: string;
    allInquiriesSupport: string;
    name: string;
    email: string;
    country: string;
    inquiryType: string;
    message: string;
    send: string;
    sending: string;
    sendError: string;
    captchaLabel: string;
    captchaRefresh: string;
    captchaAlt: string;
    captchaMismatch: string;
    giveUsACall: string;
    allInquiries: string;
    technicalSupport: string;
    happyToAnswer: string;
    viewMap: string;
    inquiries: Record<string, string>;
    countries: Record<string, string>;
  };
  about: {
    title: string;
    eyebrow: string;
    headingBefore: string;
    headingHighlight: string;
    headingAfter: string;
    missionLabel: string;
    intro: string;
    accreditationLead: string;
    mission: string;
    visionTitle: string;
    visionBefore: string;
    visionStrong: string;
    visionAfter: string;
    coreTitle: string;
    coreStrong: string;
    coreBefore: string;
    coreStrong2: string;
    coreAfter: string;
    togetherBefore: string;
    togetherHighlight: string;
    mapAlt: string;
    values: { title: string; text: string }[];
  };
  commitment: { title: string };
  certifications: {
    eyebrow: string;
    headingBefore: string;
    headingHighlight: string;
    items: Record<string, string>;
  };
  faqs: {
    title: string;
    heading: string;
    intro: string;
    description: string;
    sections: { title: string; items: { id: string; question: string; answer: string }[] }[];
  };
  product: {
    discover: string;
    insideBefore: string;
    insideHighlight: string;
    insideAfter: string;
    includedFor: string;
    accessoriesAlt: string;
    galleryBefore: string;
    galleryHighlight: string;
    addOnsAndSpecsBefore: string;
    addOnsAndSpecsMid: string;
    addOnsAndSpecsAfter: string;
    addOns: string;
    specifications: string;
    specification: string;
    item: string;
    viewDetails: string;
    downloadBrochure: string;
    contactUs: string;
    galleryTitles: Record<string, string>;
  };
  breadcrumb: { home: string };
  thankYou: { title: string; body: string; back: string };
  comingSoon: string;
  industries: Record<string, string>;
};

const en: Dictionary = {
  meta: {
    title: "Aspen Imaging - Next Generation Medical Device Manufacturer",
    description:
      "We manufacture and distribute next-generation medical imaging devices such as X-Ray systems, mobile X-rays, C-arm, flat panel detectors, and ultrasound systems.",
    titleTemplate: "%s | Aspen Imaging",
  },
  nav: {
    company: "Company",
    solutions: "Solutions",
    contact: "Contact",
    detectors: "Flat Panel Detectors",
    iodrSeries: "iODR Series",
    accessories: "Accessories",
    medicalSystems: "Medical Systems",
    software: "Software",
    veterinary: "Veterinary",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  links: {
    "/about-us": "About us",
    "/contact-us": "Contact us",
    "/faqs": "FAQs",
    "/products/mobile-panel-holder": "Mobile Panel Holder",
    "/products/aspen-vet": "AspenVet Table",
    "/software/aspenview": "AspenView - English",
    "/software/aspenview-es": "AspenView - Spanish",
    "/industries/dental": "Dental",
    "/industries/orthopedic": "Orthopedic",
    "/industries/clinics": "Clinics & Hospitals",
    "/industries/mobile": "Mobile X-Rays",
    "/industries/military": "Military",
    "/industries/urgent-care": "Urgent Care",
    "/industries/veterinary": "Veterinary",
  },
  footer: {
    company: "Company",
    solutions: "Solutions",
    industries: "Industries",
    rights: "All Rights Reserved.",
  },
  home: {
    companyEyebrow: "Our company",
    companyHeadingBefore: "Aspen Imaging is redefining the",
    companyHeadingHighlight: " Medical Imaging",
    companyHeadingAfter: " industry",
    companyBody:
      "Headquartered in Plano, Texas, Aspen Imaging Healthcare is a leading provider of medical imaging equipment for customers world-wide.\n\nWe specialize in partnering with highly skilled distributors across multiple regions and market segments to provide best-in-class solutions for their clinical end-users, delivering state of the art products and services such as X-Ray systems, C-arms, and portables with competitive pricing.\n\nWe invite you to explore our medical imaging solutions to see our experience and attention to detail that set us apart.",
    hero: {
      banner1: {
        eyebrow: "Shoot. View. Diagnose.",
        description: 'Portable X-ray with a 10.1" built-in screen',
        imageAlt: "Europa90 portable X-ray",
      },
      banner2: {
        eyebrow: "Shoot. View. Diagnose.",
        description: 'Patented imaging you can see instantly on a 7" display',
        imageAlt: "Europa85 portable X-ray",
      },
      banner3: {
        eyebrow: "Compact X-ray unit",
        description: "Lightweight, reliable imaging wherever you need it",
        imageAlt: "APX-24 X-ray unit",
      },
      banner4: {
        eyebrow: "Glass-free detector",
        description: "Impact-resistant. Flexible. Built for digital radiography.",
        imageAlt: "iODR glass-free flat panel detector",
      },
    },
    applicationsHeadingBefore: "",
    applicationsHeadingHighlight: "Applications",
    applicationsHeadingAfter: " We Serve",
    applicationsLabel: "Applications we serve",
    seeIndustry: "See Industry Details",
    scrollHint: "Scroll to explore",
    connect: "Connect with us today and exceed your business demands",
    applications: [
      {
        title: "Veterinary",
        text: "Portable X-ray systems for radiographic and dental imaging across veterinarian practices, zoos, equine physicians, and veterinary dental.",
      },
      {
        title: "Mobile X-Rays",
        text: "Portability for mobile imaging companies — Europa systems include an on-board PC to acquire and save images without carrying a laptop.",
      },
      {
        title: "Orthopedic Imaging",
        text: "Turn-key orthopedic solutions with products like T4 that auto-track during procedures to increase throughput and reduce repetitive positioning.",
      },
      {
        title: "Military",
        text: "Rugged portable X-ray systems paired with compatible DR detectors and accessories for mobile imaging in demanding environments.",
      },
      {
        title: "Urgent Care",
        text: "A wide range of X-ray room and portable solutions built to fit the pace and needs of urgent care centers.",
      },
      {
        title: "Medical Clinics",
        text: "Diverse devices for clinics — AspenXDR, AspenFDR, iODR detectors, and portable Europa X-ray systems.",
      },
      {
        title: "Hospitals",
        text: "Hospital-grade medical X-ray systems designed to increase patient throughput and satisfaction.",
      },
    ],
  },
  catalog: {
    eyebrow: "Built for Versatility & Efficiency",
    headingBefore: "Our",
    headingHighlight: " Product Line Up",
    showAll: "Show All",
    handheld: "Handheld X-Ray",
    xray: "X-Ray Systems",
    flat: "Flat Panel Detectors",
    viewDetails: "View Details",
    category: {
      handheld: "Portable X-Ray",
      "x-ray": "X-Ray Systems",
      flat: "Flat Panel Detector",
    },
    summary: {
      "iodr-1417-gf":
        "Flexible & Durable flat panel detector built for longevity (FDA 510(k) Cleared)",
      "europa-90": "Our most powerful and portable X-Ray Device (FDA 510(k) Cleared)",
      "europa-85": "Our most balanced handheld X-Ray Device (FDA 510(k) Cleared)",
      "europa-85l": "Our lightest yet most efficient X-Ray Device (FDA 510(k) Cleared)",
      "apx-24":
        "Delivers portable, patient-centered imaging for home health, remote services, and clinic use (FDA 510(k) Cleared)",
      "aspen-xdr":
        "Straight-arm digital X-ray system for versatile diagnostic imaging (FDA 510(k) Cleared)",
      "aspen-fdr":
        "Our most advanced digital X-ray, covering all radiography needs for clinics with space (FDA 510(k) Cleared)",
      "aspen-vet": "Digital X-Ray for Veterinary",
      "laica-85l": "Lightweight, battery-powered X-Ray for veterinary care",
      "laica-90": "Powerful, portable X-Ray for Vets",
    },
  },
  facts: [
    { prefix: "Over", label: "Returning Distributors" },
    { prefix: "Over", label: "Finished projects" },
    { prefix: "Over", label: "Skilled Experts" },
    { prefix: "Serving over", label: "Countries" },
  ],
  contact: {
    questions: "Questions?",
    reach: "Reach us via email or phone!",
    contactUs: "Contact us",
    allInquiriesSupport: "All inquiries and technical support",
    name: "Name *",
    email: "Email *",
    country: "Country *",
    inquiryType: "Inquiry Type",
    message: "Please describe your inquiry",
    send: "Send Inquiry",
    sending: "Sending...",
    sendError: "Unable to send your inquiry.",
    captchaLabel: "Enter the characters",
    captchaRefresh: "New image",
    captchaAlt: "Security check",
    captchaMismatch: "Those characters did not match. Please try again.",
    giveUsACall: "Give Us A Call",
    allInquiries: "All Inquiries",
    technicalSupport: "Technical Support",
    happyToAnswer: "We are happy to answer any questions about our solutions",
    viewMap: "View on Google map",
    inquiries: {
      "General Information Request": "General Information Request",
      "Becoming A Distributor": "Becoming A Distributor",
      "Technical Support": "Technical Support",
    },
    countries: {
      "United States": "United States",
      Canada: "Canada",
      Mexico: "Mexico",
      "United Kingdom": "United Kingdom",
      Germany: "Germany",
      France: "France",
      Spain: "Spain",
      Italy: "Italy",
      Brazil: "Brazil",
      Argentina: "Argentina",
      Colombia: "Colombia",
      Chile: "Chile",
      Australia: "Australia",
      Japan: "Japan",
      "South Korea": "South Korea",
      India: "India",
      "United Arab Emirates": "United Arab Emirates",
      "Saudi Arabia": "Saudi Arabia",
      "South Africa": "South Africa",
      Other: "Other",
    },
  },
  about: {
    title: "About us",
    eyebrow: "Our company",
    headingBefore: "Aspen Imaging Healthcare's",
    headingHighlight: " Quality",
    headingAfter: "",
    missionLabel: " Our Mission",
    intro:
      "Aspen Imaging Healthcare has always maintained the highest production standards for quality, safety and efficiency, holding an extensive list of accreditation from key global customers, platforms, and standard agencies across various market sectors and geographic regions.",
    accreditationLead: "Below is the list of our national and international accreditation",
    mission:
      "To become a globally trusted healthcare equipment provider with unmatched services and solutions.",
    visionTitle: "Our vision",
    visionBefore: "We strive to improve ",
    visionStrong: "clinical and diagnostic outcomes",
    visionAfter: " with every system that we design, deliver and install",
    coreTitle: "Our Core",
    coreStrong: "Market-leading product quality and reliability",
    coreBefore: "Factory responsiveness, and ",
    coreStrong2: "agile manufacturing ",
    coreAfter: "that can quickly adapt to changing requirements",
    togetherBefore: "Let's build a better tomorrow. ",
    togetherHighlight: "Together",
    mapAlt: "Global reach",
    values: [
      {
        title: "Products ready to support your needs",
        text: "Each of our products are ready to support your needs today, reflecting multiple years of design, development, testing and regulatory efforts",
      },
      {
        title: "We're in this for the long-haul",
        text: "It's not a quick sale—we're in this for the long-haul, investing projects and products that represent long-term, sustainable growth",
      },
      {
        title: "Sustainable growth",
        text: "We develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
      },
      {
        title: "Future-oriented Product Roadmaps",
        text: "Because of the naturally lengthy development cycles involved in the products, we provide product roadmaps that are essential to your organization's success",
      },
    ],
  },
  commitment: { title: "Our Commitment to Quality" },
  certifications: {
    eyebrow: "Our Standards",
    headingBefore: "Our ",
    headingHighlight: " Certifications and Accreditations",
    items: {
      FDA: "FDA is a federal agency of the United States Department of Health and Human Services. The systems provided for the U.S market have been registered and hold an FDA 510(K) when applicable.",
      Cofepris:
        "Cofepris is a regulatory body of the Mexican government that is responsible for regulating a variety of health related topics in Mexico, including medical devices.",
      "ISO 13485":
        "ISO 13485 is a quality management system for the design and manufacture of medical devices. We have been assessed and found in compliance with ISO 13485:2016. As a result, our facility proudly has this certificate hanging in our front lobby.",
    },
  },
  faqs: {
    title: "FAQs",
    heading: "Frequently Asked Questions",
    intro: "Company, products, distributors, and support — grouped for quick scanning.",
    description:
      "Frequently asked questions about Aspen Imaging products, distributors, certifications, and technical support.",
    sections: [],
  },
  product: {
    discover: "Discover More",
    insideBefore: "What's ",
    insideHighlight: " Inside ",
    insideAfter: " the Box",
    includedFor: "Included Accessories for",
    accessoriesAlt: "Included accessories",
    galleryBefore: "Photo ",
    galleryHighlight: " Gallery ",
    addOnsAndSpecsBefore: "Add-Ons ",
    addOnsAndSpecsMid: " & ",
    addOnsAndSpecsAfter: " Specs",
    addOns: "Add-Ons",
    specifications: "Specifications",
    specification: "Specification",
    item: "Item",
    viewDetails: "View Details",
    downloadBrochure: "Download Brochure (PDF)",
    contactUs: "Contact Us",
    galleryTitles: {
      "Product Images": "Product Images",
      "Diagnostic Images": "Diagnostic Images",
      "Product & Diagnostic Images": "Product & Diagnostic Images",
      "Product Images (for reference only)": "Product Images (for reference only)",
      "Product Highlight": "Product Highlight",
      "Product Highlights": "Product Highlights",
    },
  },
  breadcrumb: { home: "Home" },
  thankYou: {
    title: "Thank you",
    body: "Your inquiry was received. We will get back to you shortly.",
    back: "Back to home",
  },
  comingSoon: " Page Coming Soon ",
  industries: {
    veterinary: "Veterinary",
    mobile: "Mobile X-Rays",
    clinics: "Clinics & Hospitals",
    dental: "Dental",
    "urgent-care": "Urgent Care",
    orthopedic: "Orthopedic",
    military: "Military",
  },
};

const es: Dictionary = {
  meta: {
    title: "Aspen Imaging - Fabricante de dispositivos médicos de nueva generación",
    description:
      "Fabricamos y distribuimos dispositivos de imagen médica de nueva generación, como sistemas de rayos X, rayos X móviles, arcos en C, detectores de panel plano y sistemas de ultrasonido.",
    titleTemplate: "%s | Aspen Imaging",
  },
  nav: {
    company: "Empresa",
    solutions: "Soluciones",
    contact: "Contacto",
    detectors: "Detectores de panel plano",
    iodrSeries: "Serie iODR",
    accessories: "Accesorios",
    medicalSystems: "Sistemas médicos",
    software: "Software",
    veterinary: "Veterinaria",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  links: {
    "/about-us": "Nosotros",
    "/contact-us": "Contáctenos",
    "/faqs": "Preguntas frecuentes",
    "/products/mobile-panel-holder": "Soporte móvil para panel",
    "/products/aspen-vet": "Mesa AspenVet",
    "/software/aspenview": "AspenView - Inglés",
    "/software/aspenview-es": "AspenView - Español",
    "/industries/dental": "Dental",
    "/industries/orthopedic": "Ortopedia",
    "/industries/clinics": "Clínicas y hospitales",
    "/industries/mobile": "Rayos X móviles",
    "/industries/military": "Militar",
    "/industries/urgent-care": "Urgencias",
    "/industries/veterinary": "Veterinaria",
  },
  footer: {
    company: "Empresa",
    solutions: "Soluciones",
    industries: "Industrias",
    rights: "Todos los derechos reservados.",
  },
  home: {
    companyEyebrow: "Nuestra empresa",
    companyHeadingBefore: "Aspen Imaging está redefiniendo la industria de la",
    companyHeadingHighlight: " imagen médica",
    companyHeadingAfter: "",
    companyBody:
      "Con sede en Plano, Texas, Aspen Imaging Healthcare es un proveedor líder de equipos de imagen médica para clientes en todo el mundo.\n\nNos especializamos en colaborar con distribuidores altamente capacitados en múltiples regiones y segmentos para ofrecer soluciones de primer nivel a sus usuarios clínicos, con productos y servicios de vanguardia como sistemas de rayos X, arcos en C y equipos portátiles a precios competitivos.\n\nLe invitamos a explorar nuestras soluciones de imagen médica y conocer la experiencia y la atención al detalle que nos distinguen.",
    hero: {
      banner1: {
        eyebrow: "Capture. Vea. Diagnostique.",
        description: 'Rayos X portátil con pantalla integrada de 10.1"',
        imageAlt: "Rayos X portátil Europa90",
      },
      banner2: {
        eyebrow: "Capture. Vea. Diagnostique.",
        description: 'Imagen patentada al instante en una pantalla de 7"',
        imageAlt: "Rayos X portátil Europa85",
      },
      banner3: {
        eyebrow: "Unidad compacta de rayos X",
        description: "Imagen ligera y confiable donde la necesite",
        imageAlt: "Unidad de rayos X APX-24",
      },
      banner4: {
        eyebrow: "Detector sin vidrio",
        description: "Resistente a impactos. Flexible. Hecho para radiografía digital.",
        imageAlt: "Detector de panel plano iODR sin vidrio",
      },
    },
    applicationsHeadingBefore: "",
    applicationsHeadingHighlight: "Aplicaciones",
    applicationsHeadingAfter: " que atendemos",
    applicationsLabel: "Aplicaciones que atendemos",
    seeIndustry: "Ver detalles de la industria",
    scrollHint: "Deslice para explorar",
    connect: "Conéctese con nosotros hoy y supere las exigencias de su negocio",
    applications: [
      {
        title: "Veterinaria",
        text: "Sistemas portátiles de rayos X para imagen radiográfica y dental en clínicas veterinarias, zoológicos, equinos y odontología veterinaria.",
      },
      {
        title: "Rayos X móviles",
        text: "Portabilidad para empresas de imagen móvil: los sistemas Europa incluyen una computadora integrada para adquirir y guardar imágenes sin llevar una laptop.",
      },
      {
        title: "Imagen ortopédica",
        text: "Soluciones ortopédicas listas para usar, con productos como T4 que siguen el procedimiento de forma automática para aumentar el rendimiento y reducir el reposicionamiento.",
      },
      {
        title: "Militar",
        text: "Sistemas portátiles de rayos X resistentes, junto con detectores DR y accesorios compatibles para imagen móvil en entornos exigentes.",
      },
      {
        title: "Urgencias",
        text: "Una amplia gama de salas de rayos X y soluciones portátiles pensadas para el ritmo de los centros de urgencias.",
      },
      {
        title: "Clínicas médicas",
        text: "Equipos diversos para clínicas: AspenXDR, AspenFDR, detectores iODR y sistemas portátiles Europa.",
      },
      {
        title: "Hospitales",
        text: "Sistemas de rayos X de grado hospitalario diseñados para aumentar el flujo de pacientes y su satisfacción.",
      },
    ],
  },
  catalog: {
    eyebrow: "Hecho para la versatilidad y la eficiencia",
    headingBefore: "Nuestra",
    headingHighlight: " línea de productos",
    showAll: "Ver todo",
    handheld: "Rayos X portátiles",
    xray: "Sistemas de rayos X",
    flat: "Detectores de panel plano",
    viewDetails: "Ver detalles",
    category: {
      handheld: "Rayos X portátil",
      "x-ray": "Sistemas de rayos X",
      flat: "Detector de panel plano",
    },
    summary: {
      "iodr-1417-gf":
        "Detector de panel plano flexible y durable, hecho para durar (autorizado FDA 510(k))",
      "europa-90": "Nuestro equipo de rayos X más potente y portátil (autorizado FDA 510(k))",
      "europa-85": "Nuestro equipo portátil de rayos X más equilibrado (autorizado FDA 510(k))",
      "europa-85l": "Nuestro equipo de rayos X más ligero y eficiente (autorizado FDA 510(k))",
      "apx-24":
        "Imagen portátil y centrada en el paciente para atención domiciliaria, servicios remotos y clínicas (autorizado FDA 510(k))",
      "aspen-xdr":
        "Sistema digital de rayos X de brazo recto para imagen diagnóstica versátil (autorizado FDA 510(k))",
      "aspen-fdr":
        "Nuestro rayos X digital más avanzado, para todas las necesidades de clínicas con espacio (autorizado FDA 510(k))",
      "aspen-vet": "Rayos X digital para veterinaria",
      "laica-85l": "Rayos X ligero y a batería para atención veterinaria",
      "laica-90": "Rayos X potente y portátil para veterinarios",
    },
  },
  facts: [
    { prefix: "Más de", label: "Distribuidores recurrentes" },
    { prefix: "Más de", label: "Proyectos terminados" },
    { prefix: "Más de", label: "Especialistas" },
    { prefix: "Presencia en más de", label: "Países" },
  ],
  contact: {
    questions: "¿Preguntas?",
    reach: "Escríbanos o llámenos.",
    contactUs: "Contáctenos",
    allInquiriesSupport: "Consultas generales y soporte técnico",
    name: "Nombre *",
    email: "Correo electrónico *",
    country: "País *",
    inquiryType: "Tipo de consulta",
    message: "Describa su consulta",
    send: "Enviar consulta",
    sending: "Enviando...",
    sendError: "No se pudo enviar su consulta.",
    captchaLabel: "Escriba los caracteres",
    captchaRefresh: "Nueva imagen",
    captchaAlt: "Verificación de seguridad",
    captchaMismatch: "Los caracteres no coinciden. Inténtelo de nuevo.",
    giveUsACall: "Llámenos",
    allInquiries: "Todas las consultas",
    technicalSupport: "Soporte técnico",
    happyToAnswer: "Con gusto respondemos cualquier pregunta sobre nuestras soluciones",
    viewMap: "Ver en Google Maps",
    inquiries: {
      "General Information Request": "Solicitud de información general",
      "Becoming A Distributor": "Convertirse en distribuidor",
      "Technical Support": "Soporte técnico",
    },
    countries: {
      "United States": "Estados Unidos",
      Canada: "Canadá",
      Mexico: "México",
      "United Kingdom": "Reino Unido",
      Germany: "Alemania",
      France: "Francia",
      Spain: "España",
      Italy: "Italia",
      Brazil: "Brasil",
      Argentina: "Argentina",
      Colombia: "Colombia",
      Chile: "Chile",
      Australia: "Australia",
      Japan: "Japón",
      "South Korea": "Corea del Sur",
      India: "India",
      "United Arab Emirates": "Emiratos Árabes Unidos",
      "Saudi Arabia": "Arabia Saudita",
      "South Africa": "Sudáfrica",
      Other: "Otro",
    },
  },
  about: {
    title: "Nosotros",
    eyebrow: "Nuestra empresa",
    headingBefore: "La",
    headingHighlight: " calidad",
    headingAfter: " de Aspen Imaging Healthcare",
    missionLabel: " Nuestra misión",
    intro:
      "Aspen Imaging Healthcare siempre ha mantenido los más altos estándares de producción en calidad, seguridad y eficiencia, con una amplia lista de acreditaciones de clientes globales, plataformas y organismos de normalización en distintos sectores y regiones.",
    accreditationLead: "A continuación, nuestras acreditaciones nacionales e internacionales",
    mission:
      "Ser un proveedor de equipos de salud de confianza mundial, con servicios y soluciones incomparables.",
    visionTitle: "Nuestra visión",
    visionBefore: "Buscamos mejorar los ",
    visionStrong: "resultados clínicos y diagnósticos",
    visionAfter: " con cada sistema que diseñamos, entregamos e instalamos",
    coreTitle: "Nuestro núcleo",
    coreStrong: "Calidad y confiabilidad de producto líderes en el mercado",
    coreBefore: "Capacidad de respuesta de fábrica y ",
    coreStrong2: "manufactura ágil ",
    coreAfter: "que se adapta con rapidez a los requisitos cambiantes",
    togetherBefore: "Construyamos un mejor mañana. ",
    togetherHighlight: "Juntos",
    mapAlt: "Alcance global",
    values: [
      {
        title: "Productos listos para sus necesidades",
        text: "Cada producto está listo para apoyar sus necesidades hoy, tras años de diseño, desarrollo, pruebas y trabajo regulatorio.",
      },
      {
        title: "Estamos en esto a largo plazo",
        text: "No se trata de una venta rápida. Invertimos en proyectos y productos que representan un crecimiento sostenible a largo plazo.",
      },
      {
        title: "Crecimiento sostenible",
        text: "Desarrollamos y proponemos mejoras mediante pruebas periódicas y precisas, reparando y refinando cada versión.",
      },
      {
        title: "Hojas de ruta orientadas al futuro",
        text: "Debido a los largos ciclos de desarrollo, compartimos hojas de ruta de producto esenciales para el éxito de su organización.",
      },
    ],
  },
  commitment: { title: "Nuestro compromiso con la calidad" },
  certifications: {
    eyebrow: "Nuestros estándares",
    headingBefore: "Nuestras ",
    headingHighlight: " certificaciones y acreditaciones",
    items: {
      FDA: "La FDA es una agencia federal del Departamento de Salud y Servicios Humanos de Estados Unidos. Los sistemas para el mercado estadounidense están registrados y cuentan con FDA 510(k) cuando aplica.",
      Cofepris:
        "Cofepris es el organismo regulador del gobierno de México responsable de temas de salud, incluidos los dispositivos médicos.",
      "ISO 13485":
        "ISO 13485 es un sistema de gestión de calidad para el diseño y la fabricación de dispositivos médicos. Hemos sido evaluados y cumplimos con ISO 13485:2016. Por eso este certificado está en nuestra recepción.",
    },
  },
  faqs: {
    title: "Preguntas frecuentes",
    heading: "Preguntas frecuentes",
    intro: "Empresa, productos, distribuidores y soporte, agrupados para consultarlos rápido.",
    description:
      "Preguntas frecuentes sobre los productos de Aspen Imaging, distribuidores, certificaciones y soporte técnico.",
    sections: [
      {
        title: "Empresa",
        items: [
          {
            id: "company-1",
            question: "¿A qué se dedica Aspen Imaging Healthcare?",
            answer:
              "Aspen Imaging Healthcare fabrica y distribuye equipos de imagen médica de nueva generación, incluidos sistemas de rayos X portátiles y de sala, detectores de panel plano y software de adquisición. Tenemos sede en Plano, Texas, y atendemos clientes en todo el mundo a través de una red de distribuidores.",
          },
          {
            id: "company-2",
            question: "¿Qué certificaciones tiene Aspen Imaging?",
            answer:
              "Mantenemos autorización FDA 510(k) cuando aplica, certificación ISO 13485 y registro Cofepris para México. Consulte Nosotros y Compromiso con la calidad para más detalles.",
          },
          {
            id: "company-3",
            question: "¿Qué industrias atienden?",
            answer:
              "Nuestras soluciones apoyan prácticas ortopédicas, clínicas y hospitales, proveedores de imagen móvil, centros de urgencias, medicina militar y de campo, veterinaria e imagen dental.",
          },
        ],
      },
      {
        title: "Productos",
        items: [
          {
            id: "products-1",
            question: "¿Qué es la serie iODR?",
            answer:
              "La serie iODR incluye los detectores de panel plano iODR1417-GF (sin vidrio), iODR1417 e iODR1717 para radiografía digital, diseñados para durar y usarse con los sistemas de rayos X Aspen y AspenView.",
          },
          {
            id: "products-2",
            question: "¿Los sistemas portátiles Europa son compatibles con los detectores iODR?",
            answer:
              "Sí. Los sistemas Europa funcionan con detectores iODR de forma inalámbrica o con cable. La compatibilidad con paneles de terceros puede variar; contacte a ventas para confirmar su configuración.",
          },
          {
            id: "products-3",
            question: "¿Qué es el software AspenView?",
            answer:
              "AspenView reúne la adquisición DR, el control del generador y los informes en una sola interfaz. Funciona con detectores iODR y está disponible en inglés y español.",
          },
          {
            id: "products-4",
            question: "¿Dónde puedo descargar folletos de producto?",
            answer:
              "Los folletos de Europa90, AspenFDR, AspenXDR y otros productos están en sus páginas. Escríbanos si necesita literatura de un sistema en particular.",
          },
        ],
      },
      {
        title: "Ventas y distribuidores",
        items: [
          {
            id: "sales-1",
            question: "¿Cómo compro productos de Aspen Imaging?",
            answer:
              "Vendemos a través de distribuidores autorizados en todo el mundo. Escriba a sales@aspenimaging.com y le conectaremos con el socio adecuado para su región.",
          },
          {
            id: "sales-2",
            question: "¿Cómo me convierto en distribuidor de Aspen Imaging?",
            answer:
              "Seleccione \"Convertirse en distribuidor\" en el formulario de contacto, o escriba a sales@aspenimaging.com con el perfil de su empresa, territorio e intereses de producto. Nuestro equipo revisará su solicitud y dará seguimiento.",
          },
          {
            id: "sales-3",
            question: "¿Comparten hojas de ruta de producto con los distribuidores?",
            answer:
              "Como los ciclos de desarrollo son largos, compartimos hojas de ruta con los distribuidores para apoyar su planeación. Pida la versión más reciente a su representante de Aspen.",
          },
        ],
      },
      {
        title: "Soporte",
        items: [
          {
            id: "support-1",
            question: "¿Cómo contacto al soporte técnico?",
            answer:
              "Consultas generales: (+1) 214-257-0113. Soporte técnico: (+52) 1-55-1336-0895. O use el formulario de contacto y seleccione \"Soporte técnico\".",
          },
          {
            id: "support-2",
            question: "¿Qué debo incluir en una solicitud de soporte?",
            answer:
              "Incluya su nombre, organización, modelo y número de serie del producto (si lo tiene), una descripción del problema y cualquier mensaje de error o captura de pantalla. Así nuestro equipo responde más rápido con la solución adecuada.",
          },
          {
            id: "support-3",
            question: "¿Puedo hacer una pregunta que no aparece aquí?",
            answer:
              "Por supuesto. Use el formulario de contacto o escriba a sales@aspenimaging.com. Con gusto respondemos sobre productos, compatibilidad, alianzas de distribución y servicio.",
          },
        ],
      },
    ],
  },
  product: {
    discover: "Descubra más",
    insideBefore: "Qué hay ",
    insideHighlight: " dentro ",
    insideAfter: " de la caja",
    includedFor: "Accesorios incluidos para",
    accessoriesAlt: "Accesorios incluidos",
    galleryBefore: "Galería ",
    galleryHighlight: " de fotos ",
    addOnsAndSpecsBefore: "Complementos ",
    addOnsAndSpecsMid: " y ",
    addOnsAndSpecsAfter: " especificaciones",
    addOns: "Complementos",
    specifications: "Especificaciones",
    specification: "Especificación",
    item: "Concepto",
    viewDetails: "Ver detalles",
    downloadBrochure: "Descargar folleto (PDF)",
    contactUs: "Contáctenos",
    galleryTitles: {
      "Product Images": "Imágenes del producto",
      "Diagnostic Images": "Imágenes diagnósticas",
      "Product & Diagnostic Images": "Imágenes del producto y diagnósticas",
      "Product Images (for reference only)": "Imágenes del producto (solo referencia)",
      "Product Highlight": "Destacado del producto",
      "Product Highlights": "Destacados del producto",
    },
  },
  breadcrumb: { home: "Inicio" },
  thankYou: {
    title: "Gracias",
    body: "Recibimos su consulta. Le responderemos pronto.",
    back: "Volver al inicio",
  },
  comingSoon: " Página próximamente ",
  industries: {
    veterinary: "Veterinaria",
    mobile: "Rayos X móviles",
    clinics: "Clínicas y hospitales",
    dental: "Dental",
    "urgent-care": "Urgencias",
    orthopedic: "Ortopedia",
    military: "Militar",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function linkLabel(dictionary: Dictionary, href: string, fallback: string): string {
  return dictionary.links[href] ?? fallback;
}
