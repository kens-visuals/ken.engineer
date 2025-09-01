// import { motion, Variants } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const CHARS =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

// const rand = () => CHARS[Math.floor(Math.random() * CHARS.length)];

// interface TextScrambleProps {
//   text: string;
//   speed?: number;
//   style?: React.CSSProperties;
//   triggerOnHover?: boolean;
//   triggerInitiallyAndOnHover?: boolean;
// }

// const child: Variants = {
//   hidden: { opacity: 0, x: -6 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.18, ease: "easeOut" },
//   },
// };

// export default function TextScramble({
//   text,
//   style,
//   speed = 18,
//   triggerOnHover = false,
//   triggerInitiallyAndOnHover = false,
// }: TextScrambleProps) {
//   const runningRef = useRef(false);
//   const timerRef = useRef<number | null>(null);

//   const [display, setDisplay] = useState(text);

//   const cancel = () => {
//     if (timerRef.current != null) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }
//     runningRef.current = false;
//   };

//   const scrambleOnce = () => {
//     if (runningRef.current) return;
//     runningRef.current = true;

//     const n = text.length;
//     const delay = 1000 / speed;
//     let i = 0;

//     const tick = () => {
//       if (!runningRef.current) return; // canceled/unmounted
//       if (i >= n) {
//         setDisplay(text);
//         runningRef.current = false;
//         return;
//       }
//       const revealed =
//         text.slice(0, i) +
//         Array(n - i)
//           .fill(0)
//           .map(rand)
//           .join("");

//       setDisplay(revealed);
//       i += 1;
//       timerRef.current = window.setTimeout(tick, delay);
//     };

//     tick();
//   };

//   // Trigger initial pass after the entrance animation completes
//   const onAnimationComplete = (def: string) => {
//     if (def !== "visible") return;

//     // Initial run if:
//     // - not hover-only, OR
//     // - explicitly requested initial + hover behavior
//     if (!triggerOnHover || triggerInitiallyAndOnHover) {
//       scrambleOnce();
//     }
//   };

//   // Clean up timers on prop changes/unmount
//   useEffect(() => {
//     setDisplay(text); // keep the rendered text in sync
//     return () => cancel();
//   }, [text, speed]);

//   // Attach hover/focus handlers if hover is requested
//   const wantsHover = triggerOnHover || triggerInitiallyAndOnHover;

//   const handlers = wantsHover
//     ? {
//         onMouseEnter: scrambleOnce,
//         onFocus: scrambleOnce,
//       }
//     : {};

//   return (
//     <motion.span
//       style={style}
//       variants={child}
//       className="inline-block text-inherit"
//       onAnimationComplete={onAnimationComplete}
//       {...handlers}
//     >
//       {display}
//     </motion.span>
//   );
// }

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const rand = () => CHARS[Math.floor(Math.random() * CHARS.length)];

interface TextScrambleProps {
  text: string;
  speed?: number; // chars/sec
  style?: React.CSSProperties;
  triggerOnHover?: boolean;
  triggerInitiallyAndOnHover?: boolean;
}

const child: Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

enum Mode {
  IDLE = "idle", // nothing queued
  LOOP = "loop", // keep re-running while hovered
  FINAL = "final", // do exactly one more pass, then settle
}

export default function TextScramble({
  text,
  style,
  speed = 18,
  triggerOnHover = false,
  triggerInitiallyAndOnHover = false,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);

  const modeRef = useRef<Mode>(Mode.IDLE);
  const runningRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const cancel = () => {
    clearTimer();
    runningRef.current = false;
    modeRef.current = Mode.IDLE;
  };

  // One progressive pass
  const scrambleOnce = (onDone?: () => void) => {
    if (runningRef.current) return;
    runningRef.current = true;

    const n = text.length;
    const delay = 1000 / speed;
    let i = 0;

    const tick = () => {
      if (!runningRef.current) return; // canceled/unmounted
      if (i >= n) {
        setDisplay(text);
        runningRef.current = false;
        onDone?.();
        return;
      }

      const revealed =
        text.slice(0, i) +
        Array(n - i)
          .fill(0)
          .map(rand)
          .join("");

      setDisplay(revealed);
      i += 1;
      timerRef.current = window.setTimeout(tick, delay);
    };

    tick();
  };

  // Loop while hovered; do a FINAL pass when requested
  const startLoop = () => {
    if (modeRef.current === Mode.LOOP) return;
    modeRef.current = Mode.LOOP;

    const loop = () => {
      // If a final pass is requested, do one more then settle
      if (modeRef.current === Mode.FINAL) {
        scrambleOnce(() => {
          modeRef.current = Mode.IDLE;
          setDisplay(text);
        });
        return;
      }

      // Normal loop
      scrambleOnce(() => {
        if (modeRef.current === Mode.LOOP) {
          // immediately queue next pass
          timerRef.current = window.setTimeout(loop, 0);
        }
      });
    };

    if (!runningRef.current) loop();
  };

  const stopAfterOne = () => {
    // If idle (nothing running), run a single pass then settle
    if (modeRef.current === Mode.IDLE) {
      modeRef.current = Mode.FINAL;
      startLoop();
      return;
    }
    // If currently looping, mark as FINAL; the loop will do one last pass
    modeRef.current = Mode.FINAL;
  };

  // Initial pass after entrance animation completes (if configured)
  const onAnimationComplete = (def: string) => {
    if (def !== "visible") return;
    if (!triggerOnHover || triggerInitiallyAndOnHover) {
      // Single initial pass (no loop), independent of hover
      scrambleOnce();
    }
  };

  // Keep rendered text in sync; cleanup on changes/unmount
  useEffect(() => {
    // Reset to clean state for Strict Mode re-mounts or prop changes
    cancel();
    setDisplay(text);
    return () => cancel();
  }, [text, speed]);

  // Hover/focus handlers only when hover behavior is desired
  const wantsHover = triggerOnHover || triggerInitiallyAndOnHover;
  const handlers = wantsHover
    ? {
        onMouseEnter: startLoop, // keep running while hovered
        onMouseLeave: stopAfterOne, // one last pass, then settle
        onFocus: startLoop,
        onBlur: stopAfterOne,
      }
    : {};

  return (
    <motion.span
      style={style}
      variants={child}
      className="inline-block cursor-pointer select-none text-inherit"
      onAnimationComplete={onAnimationComplete}
      {...handlers}
    >
      {display}
    </motion.span>
  );
}
