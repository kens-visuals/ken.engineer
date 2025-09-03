import { useEffect, useMemo, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { nanoid } from "nanoid";

import TextScramble from "./TextScramble";

import HEADINGS from "../constants/headings";

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.18 },
  },
};

const primaryStyle = { color: "var(--color-js-yellow)" };

/** Parse [[...]] markers into tokens: { text, yellow } */
function parseWordsWithMarkers(
  line: string,
): Array<{ text: string; yellow: boolean }> {
  const out: Array<{ text: string; yellow: boolean }> = [];
  if (!line) return out;

  let buf = "";
  let inYellow = false;

  const flush = () => {
    if (!buf.trim()) {
      buf = "";
      return;
    }
    buf
      .trim()
      .split(/\s+/)
      .forEach((w) => {
        if (w) out.push({ text: w, yellow: inYellow });
      });
    buf = "";
  };

  Array.from(line).forEach((char, idx, arr) => {
    const next = arr[idx + 1];

    // Open marker [[
    if (!inYellow && char === "[" && next === "[") {
      flush();
      inYellow = true;
      return; // skip adding this char
    }

    // Close marker ]]
    if (inYellow && char === "]" && next === "]") {
      flush();
      inYellow = false;
      return; // skip adding this char
    }

    // Skip the second [ or ] in [[ or ]]
    const prev = arr[idx - 1];
    if ((char === "[" && prev === "[") || (char === "]" && prev === "]")) {
      return;
    }

    buf += char;
  });

  flush();
  return out;
}

function ScrambledWithCustomYellow({
  tokens,
}: {
  tokens: Array<{ text: string; yellow: boolean }>;
}) {
  return (
    <>
      {tokens.map((t) => (
        <span key={`tok-${nanoid()}`} className="inline">
          <TextScramble
            text={t.text}
            triggerInitiallyAndOnHover={t.yellow}
            style={t.yellow ? primaryStyle : undefined}
          />{" "}
        </span>
      ))}
    </>
  );
}

export default function Header() {
  const [index, setIndex] = useState<number | null>(null);
  const [saying, setSaying] = useState<string | undefined>();
  const didPickRef = useRef(false);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setSaying(sp.get("saying") || undefined);
  }, []);

  // Non-repeating heading pick (ignores {company} variants if present)
  useEffect(() => {
    if (didPickRef.current) return;
    didPickRef.current = true;

    const storageKey = "headingIndex-default";
    const lastStr = localStorage.getItem(storageKey);
    const last = lastStr ? parseInt(lastStr, 10) : null;

    const available = HEADINGS.filter((h) => !h.includes("{company}"));
    const length = available.length || 1;

    let chosenIdx = 0;
    if (length <= 1 || last == null || last < 0 || last >= HEADINGS.length) {
      chosenIdx = Math.floor(Math.random() * length);
    } else {
      const pool = Array.from({ length }, (_, i) => i).filter(
        (i) => HEADINGS.findIndex((h) => h === available[i]) !== last,
      );
      chosenIdx = pool.length
        ? pool[Math.floor(Math.random() * pool.length)]
        : 0;
    }

    const originalIndex =
      available.length > 0
        ? HEADINGS.findIndex((h) => h === available[chosenIdx])
        : 0;

    setIndex(originalIndex);
    if (originalIndex !== last) {
      localStorage.setItem(storageKey, String(originalIndex));
    }
  }, []);

  const changeHeading = () => {
    const available = HEADINGS.filter((h) => !h.includes("{company}"));
    const length = available.length || 1;

    // Get a random index different from current
    let newIdx;
    do {
      newIdx = Math.floor(Math.random() * length);
    } while (newIdx === index && length > 1);

    const originalIndex =
      available.length > 0
        ? HEADINGS.findIndex((h) => h === available[newIdx])
        : 0;

    setIndex(originalIndex);
    localStorage.setItem("headingIndex-default", String(originalIndex));
  };

  const headingText = useMemo(
    () => (index == null ? "" : HEADINGS[index]),
    [index],
  );

  // Parse custom markers
  const tokens = useMemo(
    () => parseWordsWithMarkers(headingText),
    [headingText],
  );

  // If the author provided any [[...]] markers, we honor ONLY those.
  const hasCustomYellow = tokens.some((t) => t.yellow);

  // Keep your original FE-only special case for unmarked lines
  const plainWords = useMemo(
    () => headingText.trim().split(/\s+/),
    [headingText],
  );

  return (
    <header
      id="header"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      {index !== null ? (
        <motion.h1
          key={`${index}`}
          initial="hidden"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="break-words text-5xl leading-tight text-primary-light md:text-7xl lg:text-9xl"
        >
          {hasCustomYellow ? (
            <ScrambledWithCustomYellow tokens={tokens} />
          ) : (
            <ScrambledWithCustomYellow
              tokens={plainWords.map((w) => ({ text: w, yellow: false }))}
            />
          )}

          {saying && (
            <div className="mt-4 px-4 text-lg text-primary-light/80 sm:text-xl md:text-2xl">
              <TextScramble text={saying} />
            </div>
          )}
        </motion.h1>
      ) : (
        <div className="text-primary-light">Loading...</div>
      )}

      <motion.button
        type="button"
        title="Change heading"
        onClick={changeHeading}
        initial={{ rotate: 18 }}
        aria-label="Change heading"
        whileTap={{ scale: 0.95, rotate: -1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="group absolute bottom-32 right-4 z-50 flex items-center gap-2 rounded-2xl border-2 border-js-yellow/30 bg-gradient-to-r from-js-yellow/10 to-primary-light/10 px-3 py-2 font-mono text-sm font-bold uppercase text-js-yellow backdrop-blur-sm transition-all duration-500 hover:border-js-yellow/60 hover:from-js-yellow/20 hover:to-primary-light/20 hover:shadow-[0_0_20px_rgba(247,223,30,0.3)] md:bottom-28 md:right-0 md:text-lg"
      >
        <div className="relative">
          <svg
            fill="none"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            className="absolute -inset-1 rounded-full bg-js-yellow/20"
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-departure tracking-wider">New Heading</span>
      </motion.button>
    </header>
  );
}
