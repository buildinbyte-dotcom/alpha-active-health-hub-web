"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large" | "xlarge">("normal");

  useEffect(() => {
    const savedSize = localStorage.getItem("textSize") as "normal" | "large" | "xlarge";
    if (savedSize) {
      setTextSize(savedSize);
      applyTextSize(savedSize);
    }
  }, []);

  const applyTextSize = (size: "normal" | "large" | "xlarge") => {
    const html = document.documentElement;
    html.classList.remove("text-size-large", "text-size-xlarge");
    if (size === "large") html.classList.add("text-size-large");
    if (size === "xlarge") html.classList.add("text-size-xlarge");
  };

  const cycleTextSize = () => {
    let newSize: "normal" | "large" | "xlarge" = "normal";
    if (textSize === "normal") newSize = "large";
    else if (textSize === "large") newSize = "xlarge";
    else newSize = "normal";

    setTextSize(newSize);
    localStorage.setItem("textSize", newSize);
    applyTextSize(newSize);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/new-patients", label: "New Patients" },
    { href: "/team", label: "Our Team" },
    { href: "/services", label: "Services" },
    { href: "/resources", label: "Resources" },
    { href: "/store", label: "Store" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Alpha Active Health Hub"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="h-8 md:h-10 w-auto"
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Text Size Toggle */}
          <button
            onClick={cycleTextSize}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[var(--color-action)]"
            aria-label="Toggle text size"
            title="Toggle text size"
          >
            <span className="font-bold text-lg" aria-hidden="true">
              A{textSize === "large" ? "+" : textSize === "xlarge" ? "++" : ""}
            </span>
          </button>

          {/* Book Now Button (Desktop) */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-[var(--color-action)] hover:bg-[var(--color-action-hover)] text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-action)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[var(--color-foreground)] py-2 border-b border-gray-50 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-center bg-[var(--color-action)] text-white font-bold py-3 px-6 rounded-full w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
