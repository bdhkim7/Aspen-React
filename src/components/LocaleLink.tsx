"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { localizePath } from "@/i18n/paths";
import { useLocale } from "@/components/LocaleProvider";

type LocaleLinkProps = ComponentProps<typeof Link>;

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  const localized =
    typeof href === "string" ? localizePath(href, locale) : href;

  return <Link href={localized} {...props} />;
}
