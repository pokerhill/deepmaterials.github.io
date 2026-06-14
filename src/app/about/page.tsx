"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared office data                                                 */
/* ------------------------------------------------------------------ */

const offices = [
  {
    location: "USA Headquarters",
    address: "Silicon Valley, California",
    phone: "+1 (408) 464-8007",
    flag: "🇺🇸",
  },
  {
    location: "China",
    address: "Suzhou, Jiangsu",
    phone: "+86 (199) 6284-6991",
    flag: "🇨🇳",
  },
  {
    location: "Taiwan",
    address: "Taipei City",
    phone: "+886 921 786 240",
    flag: "🇹🇼",
  },
  {
    location: "Houston Office",
    address: "Houston, Texas",
    phone: "+1 (408) 836-6751",
    flag: "🇺🇸",
  },
  {
    location: "India",
    address: "Jaipur, Rajasthan",
    phone: "+91 77039 11180",
    flag: "🇮🇳",
  },
  {
    location: "India",
    address: "Bengaluru, Karnataka (Resil JV)",
    phone: "+91 77039 11180",
    flag: "🇮🇳",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-dm-midnight">
        <div className="absolute inset-0">
          <img
            src="/images/hero/testing-lab.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-dm-midnight/70" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 40% 40%, rgba(0,180,216,0.09) 0%, transparent 60%)",
          }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-gradient">About Deep Materials</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-dm-gray-light max-w-2xl mx-auto leading-relaxed">
            Pioneering advanced thermal management solutions for the
            world&rsquo;s most demanding industries since 2019.
          </p>
        </motion.div>
      </section>

      {/* ---- Company Story ---- */}
      <section className="py-20 bg-dm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-dm-white mb-6">
                Our Story
              </h2>
              <p className="text-dm-gray-light text-lg leading-relaxed">
                Deep Materials has been at the forefront of thermal management
                solutions since 2019. Our products are tailored to manage heat
                dissipation in modern electronic devices, ensuring optimal
                performance and longevity. We provide a comprehensive range of
                thermal management materials designed for various industrial
                applications, ranging from consumer electronics to automotive,
                aerospace, and telecommunications.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <img
                src="/images/hero/about.jpeg"
                alt="Deep Materials facility"
                className="rounded-2xl w-full h-80 object-cover shadow-lg shadow-dm-accent/10"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ---- Global Presence ---- */}
      <section className="py-20 bg-dm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dm-white">
              Global Presence
            </h2>
            <p className="mt-4 text-dm-gray-light text-lg max-w-2xl mx-auto">
              Serving customers across the globe from six strategic locations.
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {offices.map((office, idx) => (
              <FadeInSection
                key={`${office.location}-${office.address}`}
                delay={idx * 0.1}
                className="lg:col-span-2"
              >
                <div className="glass glow-border hover-glow rounded-2xl p-6 h-full flex flex-col">
                  <span className="text-3xl mb-3">{office.flag}</span>
                  <h3 className="text-lg font-semibold text-dm-white mb-2">
                    {office.location}
                  </h3>
                  <p className="text-dm-gray text-sm leading-relaxed flex-1 whitespace-pre-line">
                    {office.address}
                  </p>
                  {office.phone.startsWith("+") ? (
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="mt-4 text-dm-accent text-sm hover:text-dm-accent-light transition-colors"
                    >
                      {office.phone}
                    </a>
                  ) : (
                    <p className="mt-4 text-dm-gray text-sm">
                      {office.phone}
                    </p>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Mission & Vision ---- */}
      <section className="py-20 bg-dm-midnight">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dm-white">
              Mission &amp; Vision
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="glass glow-border hover-glow rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-dm-accent/10 text-dm-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-dm-white">
                    Our Mission
                  </h3>
                </div>
                <div className="space-y-4 text-dm-gray-light leading-relaxed">
                  <p>
                    To help engineers solve critical heat-transfer challenges
                    with thermal interface materials that are reliable,
                    manufacturable, and ready for high-volume production.
                  </p>
                  <p>
                    Deep Materials supports customers from material selection
                    through testing, qualification, and scale-up, with solutions
                    designed for compact, high-power electronic systems.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.25}>
              <div className="glass glow-border hover-glow rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-dm-accent/10 text-dm-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-dm-white">
                    Our Vision
                  </h3>
                </div>
                <div className="space-y-4 text-dm-gray-light leading-relaxed">
                  <p>
                    To become a trusted global partner for advanced thermal
                    materials used in next-generation electronics, mobility,
                    computing, and energy systems.
                  </p>
                  <p>
                    We aim to combine strong materials science, application
                    engineering, and disciplined manufacturing to help customers
                    improve performance, reliability, and product design
                    freedom.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ---- Quality & Sustainability ---- */}
      <section className="py-20 bg-dm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "RoHS Compliant",
                    sub: "Restriction of hazardous substances",
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                      </svg>
                    ),
                    label: "REACH Compliant",
                    sub: "Chemical safety & registration",
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>
                    ),
                    label: "Low Outgassing",
                    sub: "Safe for sensitive assemblies",
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.698-1.382 2.698H4.182c-1.412 0-2.382-1.698-1.382-2.698L4.8 15.3" />
                      </svg>
                    ),
                    label: "Reduced Oil Bleed",
                    sub: "Consistent lot-to-lot quality",
                  },
                ].map(({ icon, label, sub }) => (
                  <div
                    key={label}
                    className="glass glow-border rounded-2xl p-5 flex flex-col gap-3"
                  >
                    <span className="text-dm-accent">{icon}</span>
                    <div>
                      <p className="text-dm-white font-semibold text-sm">{label}</p>
                      <p className="text-dm-gray text-xs mt-0.5 leading-relaxed">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-dm-white mb-6">
                <span className="text-gradient">Quality &amp; Sustainability</span>
              </h2>
              <div className="space-y-4 text-dm-gray-light text-lg leading-relaxed">
                <p>
                  Thermal materials designed for reliable qualification and
                  responsible manufacturing.
                </p>
                <p>
                  Deep Materials supports customers with controlled
                  formulations, lot-to-lot consistency, reliability testing,
                  application guidance, and the documentation required for
                  product qualification. Our development priorities include
                  low-outgassing materials, reduced oil bleed, efficient
                  production methods, and formulations aligned with RoHS, REACH,
                  and global environmental requirements.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

    </>
  );
}
