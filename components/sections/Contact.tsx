"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp, staggerContainer } from "@/lib/animations";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/girissshhh159/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/girish-prajapat-ab8797374/" },
  { name: "GitHub", href: "https://github.com/GirishPrajapat" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="relative z-50 w-full max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <SectionLabel label="Contact" center />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[#F1EFE8] leading-none mb-6"
            style={{ fontSize: "clamp(44px, 12vw, 160px)", fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #F1EFE8" }}
            >
              something.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#F1EFE8] font-body text-base mt-8 mb-12 max-w-md mx-auto"
          >
            Got a problem that needs an AI agent? Want to talk shop? I respond
            fast.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="https://wa.me/919082179832"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-4 border border-[#2C2C2A] text-[#F1EFE8] text-[13px] tracking-widest uppercase font-body hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-300 rounded-full"
            >
              Get in touch →
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-8 mt-12 md:mt-24"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-widest uppercase font-body text-[#F1EFE8] hover:text-[#00D4FF] transition-colors duration-300"
              >
                {s.name}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
