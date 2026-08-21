"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Phase = "idle" | "loading" | "finishing";

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams?.toString() ?? ""}`;

  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const timers = useRef<number[]>([]);
  const pending = useRef(false);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const finish = () => {
    clearTimers();
    pending.current = false;
    setPhase("finishing");
    setProgress(100);
    const hide = window.setTimeout(() => {
      setPhase("idle");
      setProgress(0);
    }, 320);
    timers.current.push(hide);
  };

  const start = () => {
    clearTimers();
    pending.current = true;
    setPhase("loading");
    setProgress(8);

    const steps = [
      [160, 28],
      [380, 48],
      [700, 68],
      [1100, 82],
      [1700, 90],
    ] as const;

    for (const [delay, value] of steps) {
      const id = window.setTimeout(() => {
        setProgress((current) => Math.max(current, value));
      }, delay);
      timers.current.push(id);
    }
  };

  useEffect(() => {
    if (!pending.current) return;
    finish();
    // Intentionally only react to route changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          return;
        }
        start();
      } catch {
        return;
      }
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimers();
    };
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      className={`nav-progress${phase === "finishing" ? " nav-progress--done" : ""}`}
      aria-hidden="true"
    >
      <div className="nav-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
