"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-dm-navy">
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0, 180, 216, 0.12) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dm-white leading-tight lg:whitespace-nowrap">
          Ready to Optimize Your Thermal Management?
        </h2>
        <p className="mt-4 text-dm-gray-light text-lg lg:text-xl max-w-none mx-auto lg:whitespace-nowrap">
          Contact our engineering team to find the right solution for your
          application
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="px-8 py-3.5 rounded-lg bg-dm-accent text-dm-midnight font-semibold text-lg hover:bg-dm-accent-light transition-colors duration-300 shadow-lg shadow-dm-accent/20"
          >
            View Product Families
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-lg border border-dm-accent text-dm-accent font-semibold text-lg hover:bg-dm-accent/10 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
