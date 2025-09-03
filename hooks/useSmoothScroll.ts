/* eslint-disable import/prefer-default-export */
import { useCallback, useRef, useEffect } from "react";
import { animate, AnimationPlaybackControls } from "framer-motion";

type EasingFn = (t: number) => number;

interface SmoothScrollOptions {
  /** Extra pixels to subtract (e.g., sticky header height). */
  offset?: number;
  /** Override duration; if omitted, duration scales with distance. */
  duration?: number;
  /** Custom easing function (defaults to expoOut, GSAP-like). */
  ease?: EasingFn;
  /** Scroll container; defaults to the page scroller. */
  container?: HTMLElement | Window | null;
  /** Called when animation starts. */
  onStart?: () => void;
  /** Called when animation completes (not if interrupted). */
  onComplete?: () => void;
}

const expoOut: EasingFn = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

function getScroller(container?: HTMLElement | Window | null) {
  const isWindow = !container || container === window;
  const el = isWindow
    ? document.scrollingElement || document.documentElement
    : (container as HTMLElement);
  return {
    getY: () => (isWindow ? window.scrollY : (el as HTMLElement).scrollTop),
    setY: (y: number) => {
      if (isWindow) window.scrollTo({ top: y, left: 0, behavior: "auto" });
      else (el as HTMLElement).scrollTop = y;
    },
    maxY: () => {
      if (isWindow) {
        const doc = document.documentElement;
        return Math.max(0, doc.scrollHeight - window.innerHeight);
      }
      const he = el as HTMLElement;
      return Math.max(0, he.scrollHeight - he.clientHeight);
    },
    rectTopRelativeToScroller: (target: HTMLElement) => {
      const rect = target.getBoundingClientRect();
      return (
        rect.top + (isWindow ? window.scrollY : (el as HTMLElement).scrollTop)
      );
    },
  };
}

export const useSmoothScroll = () => {
  const animRef = useRef<AnimationPlaybackControls | null>(null);
  const cancelInterruptersRef = useRef<(() => void) | null>(null);

  // Stop any running scroll on unmount
  useEffect(
    () => () => {
      animRef.current?.stop();
      cancelInterruptersRef.current?.();
    },
    [],
  );

  const scrollToSection = useCallback(
    (targetId: string, opts: SmoothScrollOptions = {}) => {
      const {
        offset = 0,
        duration,
        ease = expoOut,
        container = window,
        onStart,
        onComplete,
      } = opts;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) {
        // eslint-disable-next-line no-console
        console.warn(`SmoothScroll: element #${targetId} not found`);
        return;
      }

      const { getY, setY, maxY, rectTopRelativeToScroller } = getScroller(
        container as any,
      );

      const absoluteTop = rectTopRelativeToScroller(targetEl);
      const rawTarget = absoluteTop - offset;
      const targetY = clamp(rawTarget, 0, maxY());

      const startY = getY();
      const delta = targetY - startY;

      if (Math.abs(delta) < 1) {
        setY(targetY);
        return;
      }

      const dist = Math.abs(delta);
      const autoDuration = clamp(0.8 + dist / 1000, 1.2, 2.5);
      const d = prefersReduced ? 0 : (duration ?? autoDuration);

      // Cancel previous animation & interrupters
      animRef.current?.stop();
      cancelInterruptersRef.current?.();

      // Interruption: stop animation on wheel, touchmove, key nav
      const stopOnUserInput = () => animRef.current?.stop();
      const add = (t: keyof WindowEventMap, el: any = window) =>
        el.addEventListener(t, stopOnUserInput, { passive: true });
      const remove = (t: keyof WindowEventMap, el: any = window) =>
        el.removeEventListener(t, stopOnUserInput);
      add("wheel", container as any);
      add("touchmove", container as any);
      add("keydown", window); // arrows, space, pgup/pgdn

      cancelInterruptersRef.current = () => {
        remove("wheel", container as any);
        remove("touchmove", container as any);
        remove("keydown", window);
      };

      onStart?.();

      animRef.current = animate(0, 1, {
        duration: d,
        ease,
        onUpdate: (t) => setY(startY + delta * t),
        onComplete: () => {
          cancelInterruptersRef.current?.();
          onComplete?.();
        },
        // Stop also clears interrupter listeners
        onStop: () => cancelInterruptersRef.current?.(),
      });
    },
    [],
  );

  return { scrollToSection };
};
