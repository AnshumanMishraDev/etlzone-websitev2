"use client";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1600;
            const startTime = performance.now();
            function update(now: number) {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * value);
              el!.textContent = current.toLocaleString();
              if (progress < 1) requestAnimationFrame(update);
              else el!.textContent = value.toLocaleString() + suffix;
            }
            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);
  return <span ref={ref} className="stat-number">0</span>;
}
