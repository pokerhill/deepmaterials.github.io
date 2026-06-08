"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  APPS_SCRIPT_ENDPOINT,
  isAppsScriptConfigured,
} from "@/lib/apps-script";

/* ------------------------------------------------------------------ */
/*  Office data                                                        */
/* ------------------------------------------------------------------ */

const offices = [
  {
    location: "USA HQ",
    address: "Silicon Valley, California",
    phone: "+1 (408) 464-8007",
    extraContacts: [
      {
        city: "Houston, Texas",
        phone: "+1 (408) 836-6751",
      },
    ],
    flag: "🇺🇸",
  },
  {
    location: "China",
    address: "Suzhou, China",
    phone: "+86 (199) 6284-6991",
    flag: "🇨🇳",
  },
  {
    location: "Taiwan",
    address: "Taipei, Taiwan",
    phone: "+886 921 786 240",
    flag: "🇹🇼",
  },
  {
    location: "India",
    address: "Jaipur, India",
    phone: "+91 77039 11180",
    flag: "🇮🇳",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Form state type                                                    */
/* ------------------------------------------------------------------ */

interface FormFields {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly subject: string;
  readonly message: string;
}

const INITIAL_FORM: FormFields = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/*  Animation helper                                                   */
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
/*  Shared input class                                                 */
/* ------------------------------------------------------------------ */

const inputClass =
  "w-full rounded-lg bg-dm-slate/60 border border-dm-steel/50 px-4 py-3 text-dm-white placeholder:text-dm-gray focus:outline-none focus:border-dm-accent focus:ring-1 focus:ring-dm-accent/40 transition-colors";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>(INITIAL_FORM);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!isAppsScriptConfigured()) {
      setStatus("error");
      setErrorMsg(
        "The form isn’t configured yet. Please email us at sales@deep-materials.com."
      );
      return;
    }

    try {
      // The contact form is delivered to sales@deep-materials.com by the same
      // Apps Script that logs downloads (scripts/download-log.gs), keyed by the
      // "type" field. Apps Script doesn't send CORS headers, so we POST with
      // `no-cors` and a text/plain body (a "simple" request — no preflight).
      // The response is opaque, so a completed request is treated as success.
      await fetch(APPS_SCRIPT_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          type: "contact",
          name: form.name,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us directly.");
    }
  }

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-dm-midnight">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(0,180,216,0.09) 0%, transparent 60%)",
          }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-gradient">Get in Touch</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-dm-gray-light max-w-2xl mx-auto leading-relaxed">
            Have a question about our thermal solutions? Reach out and our
            engineering team will get back to you promptly.
          </p>
        </motion.div>
      </section>

      {/* ---- Contact form + office info ---- */}
      <section className="py-20 bg-dm-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left column - form (3/5) */}
            <FadeInSection className="lg:col-span-3">
              <div className="glass glow-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-dm-white mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dm-gray-light mb-1.5"
                    >
                      Name <span className="text-dm-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dm-gray-light mb-1.5"
                    >
                      Email <span className="text-dm-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-dm-gray-light mb-1.5"
                    >
                      Company{" "}
                      <span className="text-dm-gray text-xs">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-dm-gray-light mb-1.5"
                    >
                      Subject <span className="text-dm-accent">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dm-gray-light mb-1.5"
                    >
                      Message <span className="text-dm-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements..."
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-lg bg-dm-accent text-dm-midnight font-semibold text-lg hover:bg-dm-accent-light transition-colors duration-300 shadow-lg shadow-dm-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>

                  {/* Status messages */}
                  {status === "success" && (
                    <p className="text-dm-success text-sm text-center">
                      Thank you! We&rsquo;ll get back to you shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-dm-danger text-sm text-center">
                      {errorMsg}
                    </p>
                  )}
                </form>
              </div>
            </FadeInSection>

            {/* Right column - office info (2/5) */}
            <FadeInSection className="lg:col-span-2" delay={0.15}>
              <div className="space-y-8">
                {/* Email highlight */}
                <div className="glass glow-border rounded-2xl p-6 text-center">
                  <p className="text-sm text-dm-gray mb-2 uppercase tracking-wider font-medium">
                    Email Us Directly
                  </p>
                  <a
                    href="mailto:sales@deep-materials.com"
                    className="text-xl sm:text-2xl font-semibold text-gradient hover:opacity-80 transition-opacity"
                  >
                    sales@deep-materials.com
                  </a>
                </div>

                {/* Office cards */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-dm-white">
                    Our Offices
                  </h3>

                  {offices.map((office, idx) => (
                    <FadeInSection
                      key={office.location}
                      delay={0.2 + idx * 0.08}
                    >
                      <div className="glass hover-glow rounded-xl p-5">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl mt-0.5">
                            {office.flag}
                          </span>
                          <div>
                            <h4 className="text-dm-white font-medium">
                              {office.location}
                            </h4>
                            <p className="text-dm-gray text-sm mt-1 leading-relaxed">
                              {office.address}
                            </p>
                            <a
                              href={`tel:${office.phone.replace(/\s/g, "")}`}
                              className="text-dm-accent text-sm mt-1.5 inline-block hover:text-dm-accent-light transition-colors"
                            >
                              {office.phone}
                            </a>
                            {"extraContacts" in office && (
                              <div className="mt-3 space-y-1">
                                {office.extraContacts.map((contact) => (
                                  <div key={contact.city}>
                                    <p className="text-dm-gray text-sm leading-relaxed">
                                      {contact.city}
                                    </p>
                                    <a
                                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                      className="text-dm-accent text-sm mt-1.5 inline-block hover:text-dm-accent-light transition-colors"
                                    >
                                      {contact.phone}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
