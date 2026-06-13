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
          Get in Touch
        </h2>
        <p className="mt-5 text-dm-gray-light text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Have a question about thermal performance, materials, or integration? Our applications engineering team can help you choose the right solution.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-lg bg-dm-accent text-dm-midnight font-semibold text-lg hover:bg-dm-accent-light transition-colors duration-300 shadow-lg shadow-dm-accent/20"
          >
            Contact Applications Engineering
          </Link>
          <Link
            href="/products"
            className="px-8 py-3.5 rounded-lg border border-dm-accent text-dm-accent font-semibold text-lg hover:bg-dm-accent/10 transition-colors duration-300"
          >
            View Product Families
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
