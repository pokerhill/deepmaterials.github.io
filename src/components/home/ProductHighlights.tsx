"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const featuredProducts = PRODUCT_CATEGORIES.slice(0, 6);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ProductHighlights() {
  return (
    <section className="relative py-24 bg-dm-navy">
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
            Our Product Portfolio
          </h2>
          <p className="mt-4 text-dm-gray-light text-lg max-w-2xl mx-auto">
            Comprehensive thermal management solutions for every application
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.slug} variants={cardVariants}>
              <Link
                href={`/products/${product.slug}`}
                className="block h-full glass rounded-xl overflow-hidden hover-glow transition-transform duration-300 hover:scale-[1.03] group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                <h3 className="text-xl font-semibold text-dm-white group-hover:text-dm-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="mt-3 text-dm-gray text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <span className="mt-4 inline-flex items-center text-dm-accent text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
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
