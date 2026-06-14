"use client";

import Link from "next/link";

const PRODUCT_LINKS = [
  { href: "/products", label: "Thermal Interface Materials" },
  { href: "/products", label: "Thermal Pads" },
  { href: "/products", label: "Thermal Adhesives" },
  { href: "/products", label: "Potting Compounds" },
] as const;

const INDUSTRY_LINKS = [
  { href: "/applications", label: "AI & Data Center Hardware" },
  { href: "/applications", label: "Automotive & EV Electronics" },
  { href: "/applications", label: "Consumer Electronics" },
  { href: "/applications", label: "Telecom & Networking" },
  { href: "/applications", label: "Power Electronics & Energy Systems" },
  { href: "/applications", label: "Industrial & Medical Devices" },
] as const;

const OFFICES = [
  "Silicon Valley, California\nHouston, Texas",
  "Changshu, Suzhou, Jiangsu",
  "Da'an District, Taipei City",
  "Malviya Nagar, Jaipur\nRajasthan",
  "Deep Materials - Resil JV\nBengaluru, Karnataka",
] as const;

export default function Footer() {
  return (
    <footer className="bg-dm-midnight border-t border-dm-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Deep Materials</h3>
            <p className="text-sm font-medium text-dm-accent-light">
              Your trusted thermal solution partner
            </p>
            <p className="text-sm text-dm-gray leading-relaxed">
              Delivering advanced thermal management solutions for electronics,
              automotive, and industrial applications worldwide.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dm-white">
              Products
            </h4>
            <ul className="space-y-2">
              {PRODUCT_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-dm-gray hover:text-dm-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dm-white">
              Industries
            </h4>
            <ul className="space-y-2">
              {INDUSTRY_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-dm-gray hover:text-dm-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dm-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-dm-gray">
              <li>
                <a
                  href="mailto:sales@deep-materials.com?subject=DM%20Technical%20Sales%20Inquiry"
                  className="hover:text-dm-accent transition-colors duration-200"
                >
                  Sales@Deep-Materials.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14088366751"
                  className="hover:text-dm-accent transition-colors duration-200"
                >
                  USA Technical Sales: +1 (408) 836-6751
                </a>
              </li>
              <li>
                <a
                  href="tel:+14084648007"
                  className="hover:text-dm-accent transition-colors duration-200"
                >
                  USA Headquarters: +1 (408) 464-8007
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-dm-white mb-2">
                Global Offices
              </h5>
              <ul className="space-y-1">
                {OFFICES.map((office) => (
                  <li key={office} className="text-xs text-dm-gray whitespace-pre-line">
                    {office}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dm-slate/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dm-gray">
            &copy; 2026 Deep Materials Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-dm-gray">
            <Link
              href="/privacy"
              className="hover:text-dm-accent transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-dm-accent transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
