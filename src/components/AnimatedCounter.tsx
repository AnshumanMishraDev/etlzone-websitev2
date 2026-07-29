/* AnimatedCounter - counts up from 0 to target value when scrolled into view */
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
              el!.textContent = Math.floor(eased * value).toLocaleString();
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
