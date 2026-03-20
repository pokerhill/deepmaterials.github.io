"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  readonly value: string;
  readonly suffix: string;
  readonly numericValue: number;
  readonly label: string;
}

const stats: ReadonlyArray<StatItem> = [
  { value: "2019", suffix: "", numericValue: 2019, label: "Founded" },
  { value: "11", suffix: "+", numericValue: 11, label: "Product Lines" },
  { value: "4", suffix: "", numericValue: 4, label: "Global Offices" },
  { value: "6", suffix: "+", numericValue: 6, label: "Industries Served" },
];

function useCountUp(target: number, isInView: boolean, isYear: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = isYear ? 2010 : 0;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, target, isYear]);

  return count;
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isYear = stat.label === "Founded";
  const count = useCountUp(stat.numericValue, isInView, isYear);

  return (
    <motion.div
      ref={ref}
      className="glass rounded-xl p-8 text-center hover-glow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-gradient">
        {isYear ? (isInView ? count : "2010") : isInView ? count : "0"}
        {stat.suffix}
      </div>
      <div className="mt-3 text-dm-gray-light text-sm uppercase tracking-widest font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-dm-midnight">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
