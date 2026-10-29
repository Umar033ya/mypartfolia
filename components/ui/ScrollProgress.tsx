"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * A hairline bar across the very top of the viewport showing how far through
 * the page the reader is. It reports position rather than decorating, so it
 * stays on when motion is reduced — only the easing is dropped.
 */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothed }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent-gradient"
    />
  );
}
