"use client";

import { useEffect, useRef } from "react";

/**
 * Signature background: a fine dot grid with a soft glow that follows the
 * cursor, evoking a precision instrument panel — a nod to the exacting,
 * numbers-first work behind the Mental Arithmetic Trainer, carried through
 * as the site's ambient texture rather than a literal illustration.
 */
export function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function handlePointerMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function animate() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 320}px, ${currentY - 320}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handlePointerMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />
      <div
        ref={glowRef}
        className="absolute h-[640px] w-[640px] rounded-full opacity-[0.12] blur-[100px] will-change-transform hidden sm:block"
        style={{
          background:
            "radial-gradient(circle, #4F8CFF 0%, #2DD4BF 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
