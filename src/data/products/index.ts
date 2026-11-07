import type { ProductPageContent } from "@/types/product";
import { aGuard } from "./a-guard";
import { airTouch } from "./air-touch";
import { apx24 } from "./apx-24";
import { aspenFdr } from "./aspen-fdr";
import { aspenVet } from "./aspen-vet";
import { aspenview } from "./aspenview";
import { aspenviewEs } from "./aspenview-es";
import { aspenXdr } from "./aspen-xdr";
import { europa85 } from "./europa-85";
import { europa85l } from "./europa-85l";
import { europa90 } from "./europa-90";
import { exprimer } from "./exprimer";
import { fdrHd } from "./fdr-hd";
import { heraW10 } from "./hera-w10";
import { hs70a } from "./hs70a";
import { iodr1417 } from "./iodr-1417";
import { iodr1417gf } from "./iodr-1417-gf";
import { iodr1717 } from "./iodr-1717";
import { laica85l } from "./laica-85l";
import { laica90 } from "./laica-90";
import { mobilePanelHolder } from "./mobile-panel-holder";
import { rosem } from "./rosem";
import { rs80a } from "./rs80a";
import { rs85 } from "./rs85";
import { titan24 } from "./titan-24";
import { vieworksPanel } from "./vieworks-panel";
import { ws80a } from "./ws80a";

/** All catalog products converted to ProductPageView data modules. */
export const productContentBySlug: Record<string, ProductPageContent> = {
  "europa-85": europa85,
  "europa-85l": europa85l,
  "europa-90": europa90,
  "apx-24": apx24,
  "aspen-xdr": aspenXdr,
  "aspen-fdr": aspenFdr,
  "a-guard": aGuard,
  "mobile-panel-holder": mobilePanelHolder,
  "titan-24": titan24,
  "iodr-1417-gf": iodr1417gf,
  "iodr-1417": iodr1417,
  "iodr-1717": iodr1717,
  "laica-85l": laica85l,
  "laica-90": laica90,
  "aspen-vet": aspenVet,
  "fdr-hd": fdrHd,
  exprimer,
  "vieworks-panel": vieworksPanel,
  ws80a,
  rs85,
  rs80a,
  rosem,
  hs70a,
  "hera-w10": heraW10,
  "air-touch": airTouch,
  aspenview,
  "aspenview-es": aspenviewEs,
};

export const softwareSlugs = ["aspenview", "aspenview-es"] as const;

export function isSoftwareSlug(slug: string): boolean {
  return (softwareSlugs as readonly string[]).includes(slug);
}

export function getProductContent(slug: string): ProductPageContent | undefined {
  return productContentBySlug[slug];
}

export function getProductStaticParams() {
  return Object.keys(productContentBySlug)
    .filter((slug) => !isSoftwareSlug(slug))
    .map((slug) => ({ slug }));
}

export function getSoftwareStaticParams() {
  return softwareSlugs
    .filter((slug) => slug in productContentBySlug)
    .map((slug) => ({ slug }));
}
