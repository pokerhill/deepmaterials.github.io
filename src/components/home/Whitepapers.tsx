"use client";

import { motion } from "framer-motion";

const whitepapers = [
  {
    title: "FlexiMetal Performance and Reliability Testing",
    summary:
      "Testing across thermal test vehicles, notebooks and a 1,000 W liquid-cooling platform showed FlexiMetal combining low thermal resistance with strong long-term stability. Versus CryoFuze 7 grease, it reduced maximum surface temperature by up to 6.5% and average thermal resistance by up to 11%, with negligible degradation after nearly 10,000 power cycles. It also remained stable through 1,000 hours at 85°C/85% RH and more than 1,600 hours at 150°C—supporting demanding CPU, GPU and AI-accelerator applications.",
    href: "/pdfs/whitepapers/fleximetal-vs-cryofreeze-7.pdf",
  },
  {
    title: "FlexiMetal for 1 kW Direct-to-Chip Cooling",
    summary:
      "In peer-reviewed 1,000 W cold-plate testing, Deep Materials’ FlexiMetal reduced critical heater temperatures by up to 6.5% and thermal resistance by up to 11% versus the thermal grease tested, while improving the apparent heat-transfer coefficient by up to 15%. The results demonstrate the potential of metallic TIMs for next-generation AI, GPU and data-center cooling.",
    href: "https://doi.org/10.1016/j.applthermaleng.2026.130683",
    label: "Peer-reviewed study",
    cta: "Read the study",
  },
  {
    title: "Low-Oil-Seepage Thermal Gels for EDSFF Enterprise SSDs",
    summary:
      "AI-driven enterprise SSD demand is making thermal-material application a manufacturing bottleneck. Deep Materials’ patented, single-part thermal gels eliminate cure stations, restrictive assembly windows and difficult rework while offering thermal conductivity up to 6 W/m·K. With ten times less oil migration than conventional single-part gels, they can be automatically dispensed or screen-printed across more than 30 locations in one shot—creating a scalable path to faster, cleaner and more reliable EDSFF SSD assembly.",
    href: "/pdfs/whitepapers/low-oil-seepage-thermal-gels-edsff-enterprise-ssds.pdf",
  },
] as const;

function WhitepaperTitle({ title }: { readonly title: string }) {
  const [beforeFlexiMetal, afterFlexiMetal] = title.split("FlexiMetal");

  if (afterFlexiMetal === undefined) {
    return title;
  }

  return (
    <>
      {beforeFlexiMetal}
      <span className="text-dm-red">FlexiMetal</span>
      {afterFlexiMetal}
    </>
  );
}

export default function Whitepapers() {
  return (
    <section className="relative bg-dm-slate py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-dm-white text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          Whitepapers
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-3">
          {whitepapers.map((whitepaper, index) => (
            <motion.a
              key={whitepaper.title}
              href={whitepaper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex min-h-36 items-start gap-4 rounded-xl p-6 hover-glow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              aria-label={`${whitepaper.title} (opens in a new tab)`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-dm-accent/10 text-dm-accent">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                  <path d="M14 2v6h6M8 13h8M8 17h6" />
                </svg>
              </span>

              <span className="flex h-full flex-1 flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-dm-accent">
                  {"label" in whitepaper ? whitepaper.label : "PDF Whitepaper"}
                </span>
                <span className="mt-2 font-semibold leading-snug text-dm-white transition-colors group-hover:text-dm-accent-light">
                  <WhitepaperTitle title={whitepaper.title} />
                </span>
                {"summary" in whitepaper && (
                  <span className="mt-3 text-sm leading-relaxed text-dm-gray-light">
                    {whitepaper.summary}
                  </span>
                )}
                <span className="mt-auto pt-4 text-sm font-medium text-dm-gray-light">
                  {"cta" in whitepaper ? whitepaper.cta : "Read whitepaper"}
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
