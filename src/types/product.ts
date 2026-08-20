export type ProductFeatureCard = {
  icon: string;
  title: string;
  bullets: string[];
  disclaimer?: string;
};

export type ProductHighlight = {
  title: string;
  bullets: string[];
  image: string;
  imageFirst?: boolean;
  imageStyle?: import("react").CSSProperties;
  imageWrapperStyle?: import("react").CSSProperties;
};

export type ProductAddOn = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageStyle?: import("react").CSSProperties;
  details: string[];
};

export type ProductSpecRow = {
  label: string;
  value: string;
};

export type ProductGalleryGroup = {
  title: string;
  images: string[];
};

export type ProductPageContent = {
  slug: string;
  title: string;
  description: string;
  hero: {
    tagline: string;
    name: string;
    image: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    featureCards: ProductFeatureCard[];
  };
  highlights: {
    eyebrow: string;
    heading: string;
    items: ProductHighlight[];
  };
  inTheBox: {
    image: string;
    accessories: string[];
  };
  addOns: ProductAddOn[];
  specs: ProductSpecRow[];
  cta: {
    heading: string;
    highlight: string;
    brochureHref: string;
    brochureFilename: string;
  };
  gallery: ProductGalleryGroup[];
};
