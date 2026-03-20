"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-dm-midnight py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Our Products
          </h1>
          <p className="text-lg text-dm-gray max-w-2xl mx-auto">
            Comprehensive thermal management solutions
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PRODUCT_CATEGORIES.map((product) => (
            <motion.div key={product.slug} variants={cardVariants}>
              <Link
                href={`/products/${product.slug}`}
                className="block h-full rounded-2xl glass hover-glow overflow-hidden transition-all duration-300 hover:border-dm-accent/30 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                <h2 className="text-xl font-semibold text-dm-white mb-3 group-hover:text-dm-accent transition-colors">
                  {product.name}
                </h2>
                <p className="text-sm text-dm-gray leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-dm-accent group-hover:text-dm-accent-light transition-colors">
                  View Details
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
