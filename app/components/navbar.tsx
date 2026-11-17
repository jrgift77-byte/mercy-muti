"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F6FA]/90 backdrop-blur-md border-b border-[#1C3F8C]/15 py-3.5 shadow-xs"
          : "bg-[#F4F6FA] py-5 border-b border-[#1C3F8C]/10"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-black tracking-tight text-[#1C3F8C]"
        >
          MB<span className="text-[#111111]">.</span>
        </Link>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-10 text-sm font-semibold text-[#1A1A1A]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 hover:text-[#1C3F8C] transition-colors"
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 bg-[#1C3F8C] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C3F8C] text-white text-xs sm:text-sm font-semibold hover:bg-[#15306B] transition-colors"
          >
            <span>Hire Me</span>
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#1C3F8C]/20 bg-white text-[#1C3F8C] font-bold cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden mx-5 mt-3 p-4 rounded-2xl border border-[#1C3F8C]/15 bg-white shadow-lg space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-[#1A1A1A] hover:bg-[#F4F6FA] hover:text-[#1C3F8C] transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-xs text-[#1C3F8C]">↗</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
