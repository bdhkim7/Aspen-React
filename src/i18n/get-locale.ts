import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  const value = headerStore.get("x-locale") ?? defaultLocale;
  return isLocale(value) ? value : defaultLocale;
}
