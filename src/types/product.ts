import type { CSSProperties } from "react";

export type ProductFeatureCard = {
  icon?: string;
  title: string;
  bullets?: string[];
  disclaimer?: string;
};

export type ProductHighlight = {
  title: string;
  /** Prefer bullets when available; body is used for paragraph-style highlights. */
  bullets?: string[];
  body?: string;
  image: string;
  /** When set, these photos fill the highlight column (one full-bleed, or several side by side). */
  images?: string[];
  imageFirst?: boolean;
  imageStyle?: CSSProperties;
  imageWrapperStyle?: CSSProperties;
  imageFit?: "contain" | "cover";
};

export type ProductAddOn = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageStyle?: CSSProperties;
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

export type ProductKeyFeature = {
  icon: string;
  title: string;
};

export type ProductPageContent = {
  slug: string;
  title: string;
  description: string;
  hero: {
    tagline: string;
    name: string;
    image: string;
    /** @deprecated Ignored — hero uses a shared fixed-size container. */
    imageStyle?: CSSProperties;
    /** @deprecated Ignored — hero uses a shared fixed-size container. */
    imageFit?: "contain" | "cover";
  };
  intro: {
    eyebrow: string;
    /** Full heading text. Optional highlight substring is wrapped in primary color. */
    heading: string;
    headingHighlight?: string;
    body: string;
    bodyHighlight?: string;
    image?: string;
    imageStyle?: CSSProperties;
    imageFit?: "contain" | "cover";
    featureCards?: ProductFeatureCard[];
  };
  highlights?: {
    eyebrow: string;
    heading: string;
    items: ProductHighlight[];
    /** Stack each feature row directly against the next one. */
    flush?: boolean;
  };
  /** Compact icon title row (e.g. Europa85 key features). */
  keyFeatures?: {
    eyebrow: string;
    heading: string;
    image?: string;
    items: ProductKeyFeature[];
  };
  video?: {
    title?: string;
    youtubeId: string;
    startSeconds?: number;
  };
  inTheBox?: {
    image: string;
    accessories: string[];
  };
  addOns?: ProductAddOn[];
  specs?: ProductSpecRow[];
  cta?: {
    heading: string;
    highlight: string;
    brochureHref: string;
    brochureFilename: string;
    /** Defaults to brochure download; use "contact" for inquiry CTAs. */
    action?: "brochure" | "contact";
  };
  gallery?: ProductGalleryGroup[];
};
