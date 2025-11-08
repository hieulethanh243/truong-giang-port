"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const smallCircle = useRef<HTMLDivElement>(null);
  const bigCircle = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const smallPos = useRef({ x: 0, y: 0 });
  const bigPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const move = () => {
      smallPos.current.x = lerp(smallPos.current.x, mouse.current.x, 0.3);
      smallPos.current.y = lerp(smallPos.current.y, mouse.current.y, 0.3);
      bigPos.current.x = lerp(bigPos.current.x, mouse.current.x, 0.1);
      bigPos.current.y = lerp(bigPos.current.y, mouse.current.y, 0.1);

      gsap.set(smallCircle.current, {
        x: smallPos.current.x - 4,
        y: smallPos.current.y - 4,
      });
      gsap.set(bigCircle.current, {
        x: bigPos.current.x - 15,
        y: bigPos.current.y - 15,
      });

      requestAnimationFrame(move);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hover effect (for clickable elements)
  useEffect(() => {
    const hoverables = document.querySelectorAll(
      ".hoverable, a, button, [role='button']"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.body.style.cursor = "pointer";
        gsap.to(bigCircle.current, {
          scale: 2.2,
          backgroundColor: "rgba(0, 122, 255, 0.12)", // xanh nhạt mờ
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(smallCircle.current, {
          scale: 0.6,
          backgroundColor: "#007aff",
          duration: 0.3,
        });
      });

      el.addEventListener("mouseleave", () => {
        document.body.style.cursor = "default";
        gsap.to(bigCircle.current, {
          scale: 1,
          backgroundColor: "rgba(0, 122, 255, 0.08)",
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(smallCircle.current, {
          scale: 1,
          backgroundColor: "#007aff",
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <>
      <div
        ref={bigCircle}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full  bg-[#007aff14] shadow-[0_0_25px_rgba(0,122,255,0.25)]"
      />
      <div
        ref={smallCircle}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-[#007aff]"
      />
    </>
  );
}
