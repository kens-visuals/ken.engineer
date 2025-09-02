import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

type SweepCfg = {
  pos: number;
  delay: number;
  duration: number;
  opacity: number;
};

export default function GridSweepSegmentFM({
  cell = 20,
  segmentRatio = 0.2, // 20% of track by default
  minSegmentPx = 60, // fallback length
  lineThickness = 2, // make it visible first, then reduce to 1
  color = "255,211,105", // JS yellow as "r,g,b"
  baseOpacity = 0.5, // start brighter so you can SEE it, then lower
  minDuration = 4.0,
  maxDuration = 6.0,
  minDelay = 0.6,
  maxDelay = 1.6,
  skipEvery = 1,
  zIndexClass = "z-[1]", // above static grid (z-0), below content (z-10)
  debug = false, // set true to force high visibility
}: {
  cell?: number;
  segmentRatio?: number;
  minSegmentPx?: number;
  lineThickness?: number;
  color?: string; // "r,g,b"
  baseOpacity?: number; // 0..1
  minDuration?: number;
  maxDuration?: number;
  minDelay?: number;
  maxDelay?: number;
  skipEvery?: number;
  zIndexClass?: string;
  debug?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Measure THIS element so width/height never come back as 0
  useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({
        w: Math.max(1, Math.floor(width)),
        h: Math.max(1, Math.floor(height)),
      });
    });
    ro.observe(el);
    // eslint-disable-next-line consistent-return
    return () => ro.disconnect();
  }, []);

  const { hCfg, vCfg, segW, segH, startX, endX, startY, endY } = useMemo((): {
    hCfg: SweepCfg[];
    vCfg: SweepCfg[];
    segW: number;
    segH: number;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
  } => {
    const segmentWidth = Math.max(
      minSegmentPx,
      Math.floor(size.w * segmentRatio),
    );
    const segmentHeight = Math.max(
      minSegmentPx,
      Math.floor(size.h * segmentRatio),
    );
    const startX1 = -segmentWidth;
    const endX1 = size.w;
    const startY1 = -segmentHeight;
    const endY1 = size.h;
    const h1: SweepCfg[] = [];
    const v1: SweepCfg[] = [];

    // Start fully off screen and sweep fully across

    const rows = Math.max(1, Math.floor(size.h / cell));
    const cols = Math.max(1, Math.floor(size.w / cell));

    const rand = (min: number, max: number) =>
      +(min + Math.random() * (max - min)).toFixed(2);

    for (let r = 0; r < rows; r += Math.max(1, skipEvery)) {
      h1.push({
        pos: r * cell,
        delay: rand(minDelay, maxDelay),
        duration: rand(minDuration, maxDuration),
        opacity: baseOpacity,
      });
    }
    for (let c = 0; c < cols; c += Math.max(1, skipEvery)) {
      v1.push({
        pos: c * cell,
        delay: rand(minDelay, maxDelay),
        duration: rand(minDuration, maxDuration),
        opacity: baseOpacity,
      });
    }

    return {
      hCfg: h1,
      vCfg: v1,
      segW: segmentWidth,
      segH: segmentHeight,
      startX: startX1,
      endX: endX1,
      startY: startY1,
      endY: endY1,
    };
  }, [
    size.w,
    size.h,
    cell,
    segmentRatio,
    minSegmentPx,
    minDuration,
    maxDuration,
    minDelay,
    maxDelay,
    skipEvery,
    baseOpacity,
  ]);

  if (!size.w || !size.h) {
    // Let ResizeObserver attach
    return (
      <div
        ref={hostRef}
        className={`pointer-events-none absolute inset-0 ${zIndexClass}`}
        aria-hidden
      />
    );
  }

  // High-contrast debug style (turn on/off with prop)
  const horizStyle = debug
    ? `linear-gradient(90deg, rgba(${color},0) 0%, rgba(${color},1) 50%, rgba(${color},0) 100%)`
    : `linear-gradient(90deg, rgba(${color},0) 0%, rgba(${color},0.6) 20%, rgba(${color},0.6) 80%, rgba(${color},0) 100%)`;

  const vertStyle = debug
    ? `linear-gradient(180deg, rgba(${color},0) 0%, rgba(${color},1) 50%, rgba(${color},0) 100%)`
    : `linear-gradient(180deg, rgba(${color},0) 0%, rgba(${color},0.6) 20%, rgba(${color},0.6) 80%, rgba(${color},0) 100%)`;

  return (
    <div
      aria-hidden
      ref={hostRef}
      className={`pointer-events-none absolute inset-0 ${zIndexClass}`}
    >
      {/* Horizontal line segments */}
      {hCfg.map((s: SweepCfg) => (
        <div
          key={nanoid()}
          className="absolute left-0 right-0 overflow-hidden"
          style={{ top: s.pos, height: lineThickness }}
        >
          <motion.div
            className="absolute top-0"
            style={{
              width: segW,
              height: lineThickness,
              background: horizStyle,
              opacity: s.opacity,
              // Important: NO blur/mix-blend until you verify visibility
              willChange: "transform, opacity",
            }}
            initial={{ x: startX }}
            animate={{ x: endX }}
            transition={{
              duration: s.duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: s.delay,
            }}
          />
        </div>
      ))}

      {/* Vertical line segments */}
      {vCfg.map((s: SweepCfg) => (
        <div
          key={nanoid()}
          className="absolute top-0 bottom-0 overflow-hidden"
          style={{ left: s.pos, width: lineThickness }}
        >
          <motion.div
            className="absolute left-0"
            style={{
              width: lineThickness,
              height: segH,
              background: vertStyle,
              opacity: s.opacity,
              willChange: "transform, opacity",
            }}
            initial={{ y: startY }}
            animate={{ y: endY }}
            transition={{
              duration: s.duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: s.delay,
            }}
          />
        </div>
      ))}
    </div>
  );
}
