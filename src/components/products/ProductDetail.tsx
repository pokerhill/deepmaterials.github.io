"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductCategory } from "@/lib/products";
import DownloadModal from "@/components/products/DownloadModal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

interface ProductDetailProps {
  readonly product: ProductCategory;
}

const FLEXIMETAL_RED = "text-[#FF4D4D]";
const FLEXIMETAL_MARK = `${FLEXIMETAL_RED} ml-[1px] align-super text-[0.32em] font-semibold leading-none`;
const FLEXIMETAL_SLUG = "fleximetal";

function ProductTitle({ product }: { readonly product: ProductCategory }) {
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

const SPECIALTY_GAP_PAD_SLUG = "special-gap-pad";

export default function ProductDetail({ product }: ProductDetailProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const isSpecialtyGapPad = product.slug === SPECIALTY_GAP_PAD_SLUG;

  // Collect all unique spec names across variants for table headers
  const specNames = product.variants.reduce<readonly string[]>(
    (acc, variant) => {
      const newNames = variant.specs
        .map((s) => s.name)
        .filter((name) => !acc.includes(name));
      return [...acc, ...newNames];
    },
    []
  );

  const hasColor = product.variants.some((v) => v.color);

  return (
    <section className="min-h-screen bg-dm-midnight py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-dm-gray hover:text-dm-accent transition-colors mb-8"
          >
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Products
          </Link>
        </motion.div>

        {/* Product Hero */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mb-12"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
                product.slug === FLEXIMETAL_SLUG ? "text-dm-white" : "text-gradient"
              }`}
            >
              <ProductTitle product={product} />
            </h1>
            <p className="text-lg text-dm-gray leading-relaxed">
              <ProductDescription product={product} />
            </p>
          </div>
          {product.video ? (
            <div className="w-full max-w-[476px] justify-self-center rounded-2xl overflow-hidden shadow-lg shadow-dm-accent/10 bg-dm-midnight">
              <video
                src={product.video}
                poster={product.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[476/560] object-contain"
              />
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-dm-accent/10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
            </div>
          )}
        </motion.div>

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <motion.div
            className="mb-10"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl font-semibold text-dm-white mb-4">
              Applications
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full bg-dm-accent/10 border border-dm-accent/20 px-4 py-1.5 text-sm text-dm-accent-light"
                >
                  {app}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Common Specs */}
        {product.commonSpecs && product.commonSpecs.length > 0 && (
          <motion.div
            className="mb-10 rounded-xl glass glow-border p-6"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-lg font-semibold text-dm-accent mb-4">
              Common Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.commonSpecs.map((spec) => (
                <div key={spec.name}>
                  <p className="text-xs font-medium text-dm-gray uppercase tracking-wider mb-1">
                    {spec.name}
                  </p>
                  <p className="text-sm font-medium text-dm-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Variants Table */}
        <motion.div
          className="mb-10"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-semibold text-dm-white mb-4">
            Product Variants
          </h2>
          <div className="overflow-x-auto rounded-xl glass">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-dm-accent/10 border-b border-dm-accent/20">
                  {isSpecialtyGapPad ? (
                    <>
                      <th className="px-4 py-3 font-semibold text-dm-gray whitespace-nowrap">
                        Product Name
                      </th>
                      <th className="px-4 py-3 font-semibold text-dm-gray whitespace-nowrap">
                        Specialty Attribute
                      </th>
                    </>
                  ) : (
                    <th className="px-4 py-3 font-semibold text-dm-gray whitespace-nowrap">
                      Model
                    </th>
                  )}
                  {hasColor && (
                    <th className="px-4 py-3 font-semibold text-dm-gray whitespace-nowrap">
                      Color
                    </th>
                  )}
                  {specNames.map((name) => (
                    <th
                      key={name}
                      className="px-4 py-3 font-semibold text-dm-gray whitespace-nowrap"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.variants.map((variant, idx) => {
                  const isNamedGapPadProduct =
                    isSpecialtyGapPad && variant.model.startsWith("GFTP-");
                  const specialtyAttribute = variant.model.includes(" LD")
                    ? "Low Density"
                      : variant.model.includes(" LP")
                        ? "Low Permittivity"
                        : variant.model.includes(" LO")
                          ? "Low Oil Bleed"
                          : variant.model === "GFTP-510"
                            ? "Fiberglass-Reinforced"
                            : variant.model.endsWith("US")
                              ? "Ultra Soft"
                              : variant.model.endsWith("HR")
                                ? "High Rebound"
                                : variant.model.endsWith("HT")
                                  ? "High Temperature"
                                  : "-";

                  return (
                    <tr
                      key={variant.model}
                      className={`border-b border-dm-slate/40 transition-colors hover:bg-dm-navy/60 ${
                        idx % 2 === 0 ? "bg-dm-navy/30" : "bg-dm-navy/50"
                      }`}
                    >
                      {isSpecialtyGapPad ? (
                        <>
                          <td className="px-4 py-3 font-medium text-dm-white whitespace-nowrap">
                            {isNamedGapPadProduct ? variant.model : "-"}
                          </td>
                          <td className="px-4 py-3 text-dm-gray-light whitespace-nowrap">
                            {isNamedGapPadProduct
                              ? specialtyAttribute
                              : variant.model}
                          </td>
                        </>
                      ) : (
                        <td className="px-4 py-3 font-medium text-dm-white whitespace-nowrap">
                          {variant.model}
                        </td>
                      )}
                      {hasColor && (
                        <td className="px-4 py-3 text-dm-gray-light whitespace-nowrap">
                          {variant.color ?? "-"}
                        </td>
                      )}
                      {specNames.map((name) => {
                        const spec = variant.specs.find((s) => s.name === name);
                        return (
                          <td
                            key={name}
                            className="px-4 py-3 text-dm-gray-light whitespace-nowrap"
                          >
                            {spec?.value ?? "-"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {isSpecialtyGapPad && (
            <div className="mt-3 space-y-1 text-xs leading-relaxed text-dm-gray">
              <p>
                Thermal conductivity and hardness increase together, while
                other specialty attributes depend on the specific formulation.
              </p>
              <p>
                Lower-conductivity options may be available within each product
                category. The table shows the highest-conductivity product
                currently listed.
              </p>
              <p>
                Contact Deep Materials for help matching the right gap pad to
                your application&apos;s thermal, mechanical, and electrical
                requirements.
              </p>
            </div>
          )}
        </motion.div>

        {/* Download Button */}
        {product.pdfFile && (
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-dm-accent px-6 py-3 text-sm font-semibold text-dm-midnight transition-all hover:brightness-110 hover:shadow-lg hover:shadow-dm-accent/20"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Datasheet
            </button>
          </motion.div>
        )}
      </div>

      {/* Download Modal */}
      {product.pdfFile && (
        <DownloadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={product.name}
          pdfPath={product.pdfFile}
        />
      )}
    </section>
  );
}
