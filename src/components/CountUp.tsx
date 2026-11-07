"use client";

import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `value` once the figure scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const target = Number(value);
    if (!el || !Number.isFinite(target)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer = 0;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      const delay = 10;
      const steps = 100;
      let step = 0;
      setText("0");
      timer = window.setInterval(() => {
        step += 1;
        setText(String(step >= steps ? target : Math.round((target * step) / steps)));
        if (step >= steps) window.clearInterval(timer);
      }, delay);
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
      window.clearInterval(timer);
    };
  }, [value]);

  return (
    <div ref={ref} className="fun-fact__count counter">
      {text}
    </div>
  );
}
