"use client";
import React, { useEffect, useRef, useState } from "react";

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

interface VideoPinSectionProps {
  expandPx?: number;
  textRevealPx?: number;
  releasePx?: number;
}

export default function VideoPinSection({
  expandPx = 1200,
  textRevealPx = 600,
  releasePx = 400,
}: VideoPinSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const totalPx = expandPx + textRevealPx + releasePx;

  // Measure section top
  useEffect(() => {
    function measure() {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const docTop = window.scrollY || window.pageYOffset;
      setSectionTop(rect.top + docTop);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll listener
  useEffect(() => {
    function onScroll() {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const scrollY = window.scrollY || window.pageYOffset;
        const local = clamp(scrollY - sectionTop, 0, totalPx);
        setScrollProgress(local);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [sectionTop, totalPx]);

  // Compute box & text styles
  let boxWidth = 60;
  let textOpacity = 0;
  let textY = 40;
  let bgOpacity = 0;

  if (scrollProgress <= expandPx) {
    const progress = scrollProgress / expandPx;

    let eased: number;
    if (progress < 0.6) {
      // đầu tăng nhanh
      eased = progress;
    } else {
      // cuối tăng chậm
      const t = (progress - 0.6) / 0.4; // normalize 0 → 1
      eased = 0.6 + t * t * 0.4; // ease-out
    }

    boxWidth = 60 + 40 * eased; // 60 → 100
  } else if (scrollProgress <= expandPx + textRevealPx) {
    boxWidth = 100;
    bgOpacity = 1;
    const textProgress = (scrollProgress - expandPx) / textRevealPx;
    const eased = textProgress * textProgress * (3 - 2 * textProgress);
    textOpacity = eased;
    textY = 40 * (1 - eased);
  } else {
    boxWidth = 100;
    bgOpacity = 1;
    textOpacity = 1;
    textY = 0;
  }

  return (
    <section ref={sectionRef} className="relative">
      {/* Spacer to allow scroll */}
      <div style={{ height: `${totalPx}px` }} />

      <div className="fixed inset-0 z-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500"
          style={{ opacity: bgOpacity, transition: "opacity 0.15s ease-out" }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
            style={{
              width: `${boxWidth}vw`,
              height: `${boxWidth}vh`,
              transition: "width 0.1s ease-out, height 0.1s ease-out",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
              <video
                src="https://cdn.prod.website-files.com/66ffd69a5ef08e926c0ec630%2F67169133862a56e1a5756cda_8679946-uhd_4096_2160_25fps-poster-00001.jpg"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  animation: "pulse 4s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-6 max-w-4xl leading-tight"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textY}px)`,
              transition: "opacity 0.15s ease-out, transform 0.15s ease-out",
            }}
          >
            build <br />
            something amazing together
          </h1>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
