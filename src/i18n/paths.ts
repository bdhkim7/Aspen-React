import { defaultLocale, type Locale } from "@/i18n/config";

/** Prefix an internal path for the active locale. English stays unprefixed. */
export function localizePath(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const bare = stripLocale(path);

  if (locale === defaultLocale) return `${bare}${hash}`;
  if (bare === "/") return `/es${hash}`;
  return `/es${bare}${hash}`;
}

export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  return localizePath(stripLocale(pathname), locale);
}
