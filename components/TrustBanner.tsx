"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { val: 5000, suffix: "+", label: "interventions réalisées" },
  { val: 30, suffix: " ans", label: "d'expérience" },
  { val: 2, suffix: "h", label: "délai d'arrivée urgences", prefix: "<" },
  { val: 80, suffix: " km", label: "de rayon d'intervention" },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCountUp(stat.val, 1500, started);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-[#f5b800]">
        {stat.prefix && <span className="text-gray-400">{stat.prefix}</span>}
        {count.toLocaleString("fr-FR")}
        <span className="text-[#f5b800]">{stat.suffix}</span>
      </div>
      <div className="text-blue-300 text-sm mt-1">{stat.label}</div>
    </div>
  );
}

export default function TrustBanner() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 bg-[#0f2942] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
