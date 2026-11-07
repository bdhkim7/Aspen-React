"use client";

import { useEffect, useRef, useState } from "react";

const TYPE_MS = 38;

/** Types the headline once it scrolls into view, keeping the full line height reserved. */
export function TypedHeadline({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      setCount(text.length);
      return;
    }

    let timer = 0;
    let index = 0;
    let started = false;

    const tick = () => {
      index += 1;
      setCount(index);
      if (index < text.length) {
        timer = window.setTimeout(tick, TYPE_MS);
      }
    };

    const start = () => {
      if (started) return;
      started = true;
      index = 0;
      setStarted(true);
      setCount(0);
      timer = window.setTimeout(tick, 280);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        start();
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [text]);

  const shown = reduceMotion ? text : text.slice(0, count);
  const typing = started && !reduceMotion && count < text.length;

  return (
    <h4 ref={ref} className="cd-headline letters type typed-headline" aria-label={text}>
      <span className="typed-headline__sizer" aria-hidden="true">
        {text}
      </span>
      <span className="typed-headline__live" aria-hidden="true">
        {shown}
        {typing ? <span className="typed-headline__caret" /> : null}
      </span>
    </h4>
  );
}
