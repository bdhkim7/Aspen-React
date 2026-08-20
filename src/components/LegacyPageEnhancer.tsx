"use client";

import { useEffect } from "react";

/** Loads jQuery + Bootstrap so legacy tabs, modals, and carousels from extracted HTML work. */
export function LegacyPageEnhancer() {
  useEffect(() => {
    let cancelled = false;

    async function loadScript(src: string, id: string) {
      if (document.getElementById(id)) return;
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    }

    (async () => {
      try {
        await loadScript("/assets/js/vendor/jquery-3.3.1.min.js", "legacy-jquery");
        await loadScript("/assets/js/vendor/bootstrap.min.js", "legacy-bootstrap");
        if (cancelled) return;
        const jq = (window as unknown as { jQuery?: (selector: string) => { tooltip: () => void } }).jQuery;
        jq?.('[data-toggle="tooltip"]').tooltip();
      } catch (error) {
        console.warn("Legacy page scripts failed to load", error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
