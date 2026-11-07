"use client";

import { useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";
import { useLocale } from "@/components/LocaleProvider";

const SWITCH_DELAY_MS = 450;

export function LanguageSwitch() {
  const pathname = usePathname();
  const locale = useLocale();
  const [pending, setPending] = useState<Locale | null>(null);
  const active = pending ?? locale;

  const hrefFor = (target: Locale) => switchLocalePath(pathname, target);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, target: Locale) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    if (locale === target || pending) return;

    const next = switchLocalePath(
      `${window.location.pathname}${window.location.search}${window.location.hash}`,
      target,
    );
    setPending(target);
    window.setTimeout(() => {
      window.location.assign(next);
    }, SWITCH_DELAY_MS);
  };

  return (
    <div
      className={`lang-switch${pending ? " is-pending" : ""}`}
      role="navigation"
      aria-label="Language"
      aria-busy={pending ? true : undefined}
    >
      <a
        href={hrefFor("en")}
        hrefLang="en"
        aria-current={active === "en" ? "true" : undefined}
        onClick={(event) => navigate(event, "en")}
      >
        EN
      </a>
      <span aria-hidden="true">/</span>
      <a
        href={hrefFor("es")}
        hrefLang="es"
        aria-current={active === "es" ? "true" : undefined}
        onClick={(event) => navigate(event, "es")}
      >
        ES
      </a>
    </div>
  );
}
