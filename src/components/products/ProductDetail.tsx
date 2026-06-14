"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductCategory, ProductVariant } from "@/lib/products";
import DownloadModal, {
  type DownloadFile,
} from "@/components/products/DownloadModal";

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
const SINGLE_PART_GAP_FILLER_SLUG = "single-part-liquid-gap-filler";
const TCG_LO_SERIES_SLUG = "tcg-lo-series";
const TWO_PART_GAP_FILLER_SLUG = "two-part-liquid-gap-filler";

function getSpecialtyAttribute(productSlug: string, variantModel: string) {
  if (productSlug === SPECIALTY_GAP_PAD_SLUG) {
    if (variantModel.endsWith("LD")) return "Low Density";
    if (variantModel.endsWith("LP")) return "Low Permittivity";
    if (variantModel.endsWith("LO")) return "Low Oil Bleed";
    if (variantModel.endsWith("AB")) return "EMI Absorbant";
    if (variantModel === "GFTP-X00ZERO") return "~Zero Hardness";
    if (variantModel === "GFTP-510") return "Fiberglass-Reinforced";
    if (variantModel.endsWith("US")) return "Ultra Soft";
    if (variantModel.endsWith("HR")) return "High Rebound";
    if (variantModel.endsWith("HT")) return "High Temperature";
    return "-";
  }

  if (productSlug === TCG_LO_SERIES_SLUG) {
    return variantModel.endsWith("LOHF")
      ? "High Flow"
      : variantModel.endsWith("LOVE")
        ? "Low Volatility"
        : "-";
  }

  if (productSlug === SINGLE_PART_GAP_FILLER_SLUG) {
    return variantModel.endsWith("AB")
      ? "EMI Absorbant"
      : variantModel.endsWith("LP")
        ? "Low Permittivity"
        : variantModel.endsWith("RW")
          ? "Reworkable"
          : variantModel.endsWith("HF")
            ? "High Flow"
            : "-";
  }

  if (productSlug === TWO_PART_GAP_FILLER_SLUG) {
    return variantModel.endsWith("LV")
      ? "Low Volatility"
      : variantModel.endsWith("AB")
        ? "EMI Absorbant"
        : variantModel.endsWith("LD")
          ? "Low Density"
          : variantModel.endsWith("G")
            ? "Glass Bead Controlled"
            : variantModel.endsWith("S")
              ? "Thin BLT"
              : "-";
  }

  return "-";
}

function getThermalConductivity(variant: ProductVariant) {
  const conductivitySpec = variant.specs.find(
    (spec) => spec.name === "Thermal Conductivity",
  );
  const conductivity = conductivitySpec?.value.match(/[\d.]+/)?.[0];
  return conductivity ? Number(conductivity) : Number.NEGATIVE_INFINITY;
}

function getSpecialtySortValue(attribute: string) {
  return attribute === "-" ? "" : attribute;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVariantModels, setSelectedVariantModels] = useState<
    ReadonlySet<string>
  >(new Set());
  const isSpecialtyGapPad = product.slug === SPECIALTY_GAP_PAD_SLUG;
  const isSinglePartGapFiller = product.slug === SINGLE_PART_GAP_FILLER_SLUG;
  const isTcgLoSeries = product.slug === TCG_LO_SERIES_SLUG;
  const isTwoPartGapFiller = product.slug === TWO_PART_GAP_FILLER_SLUG;
  const hasSpecialtyAttributeColumn =
    isSpecialtyGapPad ||
    isSinglePartGapFiller ||
    isTcgLoSeries ||
    isTwoPartGapFiller;
  const sortedVariants = product.variants
    .map((variant, index) => ({ variant, index }))
    .sort((a, b) => {
      const conductivityDifference =
        getThermalConductivity(b.variant) - getThermalConductivity(a.variant);

      if (conductivityDifference !== 0) {
        return conductivityDifference;
      }

      const aSpecialty = getSpecialtySortValue(
        getSpecialtyAttribute(product.slug, a.variant.model),
      );
      const bSpecialty = getSpecialtySortValue(
        getSpecialtyAttribute(product.slug, b.variant.model),
      );
      const specialtyDifference = aSpecialty.localeCompare(bSpecialty);

      return specialtyDifference === 0
        ? a.index - b.index
        : specialtyDifference;
    })
    .map(({ variant }) => variant);

  // Collect all unique spec names across variants for table headers
  const specNames = sortedVariants.reduce<readonly string[]>(
    (acc, variant) => {
      const newNames = variant.specs
        .map((s) => s.name)
        .filter((name) => !acc.includes(name));
      return [...acc, ...newNames];
    },
    []
  );

  const hasColor = sortedVariants.some((v) => v.color);
  const downloadableSpecialtyVariants = isSpecialtyGapPad
    ? sortedVariants.filter((variant) => variant.pdfFile)
    : [];
  const selectedSpecialtyFiles: ReadonlyArray<DownloadFile> =
    isSpecialtyGapPad
      ? sortedVariants
          .filter(
            (variant) =>
              variant.pdfFile && selectedVariantModels.has(variant.model),
          )
          .map((variant) => ({
            name: variant.model,
            path: variant.pdfFile as string,
          }))
      : [];
  const hasSelectedSpecialtyFiles = selectedSpecialtyFiles.length > 0;
  const hasSelectedAllSpecialtyFiles =
    downloadableSpecialtyVariants.length > 0 &&
    downloadableSpecialtyVariants.every((variant) =>
      selectedVariantModels.has(variant.model),
    );
  const canDownload = !isSpecialtyGapPad || hasSelectedSpecialtyFiles;

  const toggleSpecialtyVariant = (variant: ProductVariant) => {
    if (!variant.pdfFile) return;

    setSelectedVariantModels((current) => {
      const next = new Set(current);
      if (next.has(variant.model)) {
        next.delete(variant.model);
      } else {
        next.add(variant.model);
      }
      return next;
    });
  };

  const toggleAllSpecialtyVariants = () => {
    setSelectedVariantModels((current) => {
      const next = new Set(current);
      if (hasSelectedAllSpecialtyFiles) {
        downloadableSpecialtyVariants.forEach((variant) =>
          next.delete(variant.model),
        );
      } else {
        downloadableSpecialtyVariants.forEach((variant) =>
          next.add(variant.model),
        );
      }
      return next;
    });
  };

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
            <p className="mt-5 text-lg font-semibold text-[#FF4D4D]">
              Contact us for custom formulations.
            </p>
            <Link
              href="/contact#contact-form"
              className="mt-4 inline-flex items-center rounded-lg bg-dm-accent px-5 py-2.5 text-sm font-semibold text-dm-midnight transition-all hover:brightness-110 hover:shadow-lg hover:shadow-dm-accent/20"
            >
              Contact Us
            </Link>
          </div>
          {product.video ? (
            <div className="w-full max-w-[476px] justify-self-center rounded-2xl overflow-hidden shadow-lg shadow-dm-accent/10 bg-dm-midnight">
              <video
                src={product.video}
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
                  {isSpecialtyGapPad && (
                    <th className="px-4 py-3">
                      <input
                        type="checkbox"
                        aria-label="Select all specialty datasheets"
                        checked={hasSelectedAllSpecialtyFiles}
                        onChange={toggleAllSpecialtyVariants}
                        className="h-4 w-4 rounded border-dm-slate bg-dm-midnight text-dm-accent focus:ring-dm-accent/40"
                      />
                    </th>
                  )}
                  {hasSpecialtyAttributeColumn ? (
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
                {sortedVariants.map((variant, idx) => {
                  const isNamedGapPadProduct =
                    isSpecialtyGapPad && variant.model.startsWith("GFTP-");
                  const specialtyAttribute = getSpecialtyAttribute(
                    product.slug,
                    variant.model,
                  );

                  return (
                    <tr
                      key={variant.model}
                      className={`border-b border-dm-slate/40 transition-colors hover:bg-dm-navy/60 ${
                        idx % 2 === 0 ? "bg-dm-navy/30" : "bg-dm-navy/50"
                      }`}
                    >
                      {isSpecialtyGapPad && (
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            aria-label={`Select ${variant.model} datasheet`}
                            checked={selectedVariantModels.has(variant.model)}
                            disabled={!variant.pdfFile}
                            onChange={() => toggleSpecialtyVariant(variant)}
                            className="h-4 w-4 rounded border-dm-slate bg-dm-midnight text-dm-accent focus:ring-dm-accent/40 disabled:opacity-30"
                          />
                        </td>
                      )}
                      {hasSpecialtyAttributeColumn ? (
                        <>
                          <td className="px-4 py-3 font-medium text-dm-white whitespace-nowrap">
                            {isSpecialtyGapPad && !isNamedGapPadProduct
                              ? "-"
                              : variant.model}
                          </td>
                          <td className="px-4 py-3 text-dm-gray-light whitespace-nowrap">
                            {isSpecialtyGapPad && !isNamedGapPadProduct
                              ? variant.model
                              : specialtyAttribute}
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
          {isSinglePartGapFiller && (
            <div className="mt-3 text-xs leading-relaxed text-dm-gray">
              <p>
                Because TCG-Gels are dispensable single-part thermal gels rather
                than a preformed elastomeric pad, Shore hardness is not a
                primary mechanical control parameter. Flow rate, minimum BLT,
                and thermal cycling stability are more relevant to application
                performance.
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
              onClick={() => {
                if (canDownload) setModalOpen(true);
              }}
              disabled={!canDownload}
              className="inline-flex items-center gap-2 rounded-lg bg-dm-accent px-6 py-3 text-sm font-semibold text-dm-midnight transition-all hover:brightness-110 hover:shadow-lg hover:shadow-dm-accent/20 disabled:cursor-not-allowed disabled:opacity-50"
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
              {isSpecialtyGapPad
                ? hasSelectedSpecialtyFiles
                  ? `Download Selected Datasheets (${selectedSpecialtyFiles.length})`
                  : "Download Selected Datasheets"
                : "Download Datasheet"}
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
          pdfFiles={isSpecialtyGapPad ? selectedSpecialtyFiles : undefined}
        />
      )}
    </section>
  );
}
