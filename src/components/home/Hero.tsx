"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const floatingShapes = [
  { size: 120, x: "10%", y: "20%", delay: 0, duration: 8 },
  { size: 80, x: "75%", y: "15%", delay: 1.5, duration: 10 },
  { size: 60, x: "85%", y: "60%", delay: 0.8, duration: 7 },
  { size: 100, x: "20%", y: "70%", delay: 2, duration: 9 },
  { size: 40, x: "50%", y: "80%", delay: 1, duration: 6 },
  { size: 70, x: "60%", y: "30%", delay: 0.5, duration: 11 },
];

function FloatingShape({
  size,
  x,
  y,
  delay,
  duration,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full opacity-[0.07] border border-dm-accent"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }}
    />
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dm-midnight">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/gap-pad-line-cropped.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dm-midnight/75" />
      </div>
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0, 180, 216, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(72, 202, 228, 0.06) 0%, transparent 50%)",
        }}
      />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          variants={itemVariants}
        >
          <span className="text-dm-white">Thermal Materials</span>
          <br />
          <span className="text-gradient">Engineered for Performance</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-dm-gray-light max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Your trusted thermal solution partner - managing heat dissipation in
          modern electronics since 2019
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="/products"
            className="px-8 py-3.5 rounded-lg bg-dm-accent text-dm-midnight font-semibold text-lg hover:bg-dm-accent-light transition-colors duration-300 shadow-lg shadow-dm-accent/20"
          >
            Explore 100+ Products
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-lg border border-dm-accent text-dm-accent font-semibold text-lg hover:bg-dm-accent/10 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center"
          variants={itemVariants}
        >
          <Link
            href="/products/fleximetal-and-elm/"
            className="px-8 py-3.5 rounded-lg border border-dm-accent bg-dm-midnight/35 text-dm-accent font-semibold text-lg hover:bg-dm-accent/10 transition-colors duration-300"
          >
            Explore Flagship FlexiMetal 35 W/mK
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
