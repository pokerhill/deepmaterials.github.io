"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  validateEmail,
  validateName,
  validateEmailDomain,
} from "@/lib/email-validation";
import {
  checkRateLimit,
  recordDownloadAttempt,
  formatResetTime,
} from "@/lib/rate-limit";
import { sendDownloadNotification } from "@/lib/download-log";

interface DownloadModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly productName: string;
  readonly pdfPath: string;
}

interface FormErrors {
  readonly name?: string;
  readonly email?: string;
  readonly general?: string;
}

export default function DownloadModal({
  isOpen,
  onClose,
  productName,
  pdfPath,
}: DownloadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus the name input when modal opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to let the animation start before focusing
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const triggerDownload = useCallback(
    (downloadPath: string) => {
      const anchor = document.createElement("a");
      anchor.href = downloadPath;
      anchor.download = `${productName}-datasheet.pdf`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    },
    [productName]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate inputs
      const nameResult = validateName(name);
      const emailResult = validateEmail(email);

      if (!nameResult.valid || !emailResult.valid) {
        setErrors({
          name: nameResult.error,
          email: emailResult.error,
        });
        return;
      }

      // Check rate limit
      const rateLimit = checkRateLimit();
      if (!rateLimit.allowed) {
        setErrors({
          general: `Too many download attempts. Please try again in ${formatResetTime(rateLimit.resetInMs)}.`,
        });
        return;
      }

      setErrors({});
      setIsSubmitting(true);

      // Confirm the email's domain can actually receive mail (catches fake and
      // typo'd domains). Fails open on network errors so a DNS hiccup never
      // blocks a legitimate download.
      const domainResult = await validateEmailDomain(email);
      if (!domainResult.valid) {
        setErrors({ email: domainResult.error });
        setIsSubmitting(false);
        return;
      }

      try {
        // Best-effort notification — download proceeds regardless
        sendDownloadNotification({
          name: name.trim(),
          email: email.trim(),
          product: productName,
          timestamp: new Date().toISOString(),
        }).catch(() => {
          // Silently ignore — email notification is best-effort
        });

        recordDownloadAttempt();
        triggerDownload(pdfPath);
        onClose();
      } catch {
        // Even if something unexpected happens, still try the download
        recordDownloadAttempt();
        triggerDownload(pdfPath);
        onClose();
      } finally {
        setIsSubmitting(false);
      }
    },
    [name, email, productName, pdfPath, onClose, triggerDownload]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dm-midnight/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-dm-navy/95 backdrop-blur-xl border border-dm-accent/20 p-8 shadow-2xl shadow-dm-accent/5"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-dm-steel hover:text-dm-white transition-colors"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2
                id="download-modal-title"
                className="text-xl font-semibold text-dm-white"
              >
                Download Datasheet
              </h2>
              <p className="mt-1 text-sm text-dm-steel">
                Enter your details to download the{" "}
                <span className="text-dm-accent">{productName}</span> datasheet.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name field */}
              <div>
                <label
                  htmlFor="download-name"
                  className="block text-sm font-medium text-dm-gray mb-1.5"
                >
                  Full Name
                </label>
                <input
                  ref={nameInputRef}
                  id="download-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-dm-slate/50 bg-dm-midnight/60 px-4 py-2.5 text-sm text-dm-white placeholder-dm-steel/50 outline-none transition-colors focus:border-dm-accent/60 focus:ring-1 focus:ring-dm-accent/30 disabled:opacity-50"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="download-email"
                  className="block text-sm font-medium text-dm-gray mb-1.5"
                >
                  Email
                </label>
                <input
                  id="download-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-dm-slate/50 bg-dm-midnight/60 px-4 py-2.5 text-sm text-dm-white placeholder-dm-steel/50 outline-none transition-colors focus:border-dm-accent/60 focus:ring-1 focus:ring-dm-accent/30 disabled:opacity-50"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* General error */}
              {errors.general && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <p className="text-sm text-red-400">{errors.general}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-dm-accent px-4 py-2.5 text-sm font-semibold text-dm-midnight transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-dm-accent/50 focus:ring-offset-2 focus:ring-offset-dm-navy disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Download PDF"
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="mt-4 text-center text-xs text-dm-steel/60">
              Your information is used solely for download tracking.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
