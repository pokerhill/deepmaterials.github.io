"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductCategory } from "@/lib/products";
import { VISIBLE_PRODUCT_CATEGORIES } from "@/lib/products";

const PRODUCT_ORDER = [
  "fleximetal",
  "pcm",
  "thermal-grease",
  "single-part-liquid-gap-filler",
  "two-part-liquid-gap-filler",
  "gap-pads",
  "gftp-lo-series",
  "tcg-lo-series",
  "special-gap-pad",
  "insulating-pads",
  "potting-materials",
] as const;

const orderedProducts = PRODUCT_ORDER.map((orderedSlug) =>
  VISIBLE_PRODUCT_CATEGORIES.find(({ slug }) => slug === orderedSlug),
).filter((product): product is ProductCategory => Boolean(product));

const LOW_BLT_PRODUCT_COUNT = 3;
const GAP_FILLER_PRODUCT_COUNT = 2;
const lowBltProducts = orderedProducts.slice(0, LOW_BLT_PRODUCT_COUNT);
const gapFillerProducts = orderedProducts.slice(
  LOW_BLT_PRODUCT_COUNT,
  LOW_BLT_PRODUCT_COUNT + GAP_FILLER_PRODUCT_COUNT,
);
const gapPadProducts = orderedProducts.slice(
  LOW_BLT_PRODUCT_COUNT + GAP_FILLER_PRODUCT_COUNT,
);

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

const FLEXIMETAL_RED = "text-[#FF4D4D]";
const FLEXIMETAL_MARK = `${FLEXIMETAL_RED} ml-[1px] align-super text-[0.32em] font-semibold leading-none`;
const FLEXIMETAL_SLUG = "fleximetal";

function ProductName({ product }: { readonly product: ProductCategory }) {
  if (product.slug !== FLEXIMETAL_SLUG) {
    return <>{product.name}</>;
  }

  return (
    <>
      <span className={FLEXIMETAL_RED}>FlexiMetal</span>
      <sup className={FLEXIMETAL_MARK}>&reg;</sup>
    </>
  );
}

function ProductDescription({ product }: { readonly product: ProductCategory }) {
  if (product.slug !== FLEXIMETAL_SLUG) {
    return <>{product.description}</>;
  }

  return (
    <>
      Up to <span className={FLEXIMETAL_RED}>35 W/mK</span> materials with
      minimal bond line thickness for the most demanding thermal interface
      applications. FlexiMetal is available in foils for hand placement or in
      bulk for screen printing. FlexiMetal has all the advantages of liquid
      metal but without any of its drawbacks. Extensive performance and
      reliability data is available upon request.
    </>
  );
}

function ProductCard({ product }: { readonly product: ProductCategory }) {
  return (
    <motion.div key={product.slug} variants={cardVariants}>
      <Link
        href={`/products/${product.slug}`}
        className="block h-full rounded-2xl glass hover-glow overflow-hidden transition-all duration-300 hover:border-dm-accent/30 group"
      >
        <div className="h-48 overflow-hidden">
          {product.video ? (
            <video
              src={product.video}
              poster={product.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-dm-white mb-3 group-hover:text-dm-accent transition-colors">
            <ProductName product={product} />
          </h2>
          <p className="text-sm text-dm-gray leading-relaxed line-clamp-2 mb-4">
            <ProductDescription product={product} />
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
  );
}

function ProductGroupHeader({ label }: { readonly label: string }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <p className="shrink-0 text-sm font-semibold uppercase tracking-widest text-dm-accent">
        {label}
      </p>
      <div className="h-px flex-1 bg-dm-accent/35" />
    </div>
  );
}

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
            Explore our 100+ thermal interface materials engineered for reliable
            heat transfer in high-performance electronic systems.
          </p>
        </motion.div>

        {/* Low BLT product group */}
        <div className="mb-10">
          <ProductGroupHeader label="Low Bondline Thickness" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {lowBltProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </motion.div>
        </div>

        {/* Gap Fillers */}
        <div className="mb-10">
          <ProductGroupHeader label="Gap Fillers" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {gapFillerProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </motion.div>

          <div className="mt-8 h-px bg-dm-accent/35" />
        </div>

        {/* Gap Pads */}
        <ProductGroupHeader label="Gap Pads" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {gapPadProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
