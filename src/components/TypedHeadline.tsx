"use client";

import { useEffect, useRef, useState } from "react";

const TYPE_MS = 110;
const HOLD_MS = 2200;
const SELECT_MS = 500;
const GAP_MS = 650;

/** Types the ending, pauses, then replaces it with the next phrase. */
export function TypedHeadline({ lead, words }: { lead: string; words: string[] }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [count, setCount] = useState(words[0]?.length ?? 0);
  const [phase, setPhase] = useState<"hold" | "select" | "type">("hold");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const sequence = words.filter(Boolean);
    if (!el || sequence.length < 2) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
      return;
    }

    let timer = 0;
    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms);
      });

    const run = async () => {
      await new Promise<void>((resolve) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry?.isIntersecting) return;
            observer.disconnect();
            resolve();
          },
          { threshold: 0.4 },
        );
        observer.observe(el);
      });
      if (cancelled) return;

      let index = 0;
      while (!cancelled) {
        setWordIndex(index);
        setPhase("hold");
        setCount(sequence[index].length);
        await wait(HOLD_MS);
        if (cancelled) return;

        setPhase("select");
        await wait(SELECT_MS);
        if (cancelled) return;

        const next = (index + 1) % sequence.length;
        setPhase("type");
        setWordIndex(next);
        setCount(0);
        await wait(GAP_MS);
        if (cancelled) return;

        for (let n = 1; n <= sequence[next].length; n += 1) {
          if (cancelled) return;
          setCount(n);
          await wait(TYPE_MS);
        }
        index = next;
      }
    };

    void run();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [words]);

  const longest = words.reduce(
    (best, word) => (word.length > best.length ? word : best),
    words[0] ?? "",
  );
  const current = words[wordIndex] ?? "";
  const shown = reduceMotion ? current : current.slice(0, count);

  return (
    <h4
      ref={ref}
      className="cd-headline letters type typed-headline"
      aria-label={`${lead} ${words[0] ?? ""}`.trim()}
    >
      <span className="typed-headline__sizer" aria-hidden="true">
        {lead} {longest}
      </span>
      <span className="typed-headline__live" aria-hidden="true">
        {lead}{" "}
        <span className="typed-headline__word text-color-primary">
          {shown}
          {!reduceMotion && phase !== "select" ? <span className="typed-headline__caret" /> : null}
        </span>
      </span>
    </h4>
  );
}
