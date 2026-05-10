"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Work", "About", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(14,14,13,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(44,44,42,0.5)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[var(--font-bebas)] text-2xl text-[#F1EFE8] tracking-widest hover:text-[#00D4FF] transition-colors duration-300"
        >
          GN
        </a>

        {/* Center links — desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] tracking-[0.12em] uppercase text-[#888780] hover:text-[#F1EFE8] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-block text-[11px] tracking-[0.12em] uppercase border border-[#2C2C2A] px-5 py-2.5 text-[#F1EFE8] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-[#F1EFE8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#F1EFE8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-[#F1EFE8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#0E0E0D]/95 border-t border-[#2C2C2A] px-6 py-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.12em] uppercase text-[#888780] hover:text-[#F1EFE8] transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-[11px] tracking-[0.12em] uppercase border border-[#2C2C2A] px-5 py-2.5 text-[#F1EFE8] text-center hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 mt-2"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </nav>
  );
}
