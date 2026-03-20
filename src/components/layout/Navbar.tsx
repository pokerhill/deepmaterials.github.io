"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/images/hero/logo.jpg"
              alt="Deep Material"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:text-dm-accent"
              >
                <span
                  className={
                    isActive(href) ? "text-dm-accent" : "text-dm-gray-light"
                  }
                >
                  {label}
                </span>
                {isActive(href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-dm-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-dm-gray-light hover:text-dm-accent transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <motion.span
                className="block h-[2px] bg-current rounded-full origin-center"
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 3.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-[2px] bg-current rounded-full"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block h-[2px] bg-current rounded-full origin-center"
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -3.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="md:hidden overflow-hidden glass-strong border-t border-dm-accent/10"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(href)
                      ? "text-dm-accent bg-dm-accent/10 border-l-2 border-dm-accent"
                      : "text-dm-gray-light hover:text-dm-accent hover:bg-dm-slate/50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
