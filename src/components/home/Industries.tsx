"use client";

import { motion } from "framer-motion";

interface Industry {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

const industries: ReadonlyArray<Industry> = [
  {
    title: "Consumer Electronics",
    description:
      "Thermal interface materials for smartphones, laptops, gaming consoles, and wearable devices.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Automotive & EV",
    description:
      "Battery thermal management, power electronics cooling, and ADAS system heat dissipation for electric vehicles.",
    icon: "M8 17h8M8 17a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4M8 17v4m8-4v4M6 21h12",
  },
  {
    title: "Data Centers",
    description:
      "High-performance cooling solutions for server racks, GPUs, and networking equipment in hyperscale facilities.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
  {
    title: "Aerospace & Defense",
    description:
      "Reliable thermal management for avionics, radar systems, and mission-critical defense electronics.",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
  },
  {
    title: "Telecommunications",
    description:
      "Thermal solutions for 5G base stations, network switches, and fiber optic transceivers.",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  },
  {
    title: "AI Infrastructure",
    description:
      "Thermal solutions for AI factories, accelerated computing, liquid cooling, and high-density compute platforms.",
    icon: "M4 7h16M4 12h16M4 17h16M7 7v10m10-10v10M9 9h.01M9 14h.01M15 9h.01M15 14h.01",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Industries() {
  return (
    <section className="relative py-24 bg-dm-midnight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dm-white">
            Industries We Serve
          </h2>
        </motion.div>

        {/* Industry cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              className="glass rounded-xl p-6 hover-glow"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-12 h-12 rounded-lg bg-dm-accent/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-dm-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={industry.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dm-white">
                {industry.title}
              </h3>
              <p className="mt-2 text-dm-gray text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
