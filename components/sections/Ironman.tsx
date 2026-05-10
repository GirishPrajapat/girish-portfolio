"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp, staggerContainer } from "@/lib/animations";

const disciplines = [
  { distance: "1.2mi", label: "Swim" },
  { distance: "56mi", label: "Bike" },
  { distance: "13.1mi", label: "Run" },
];

export function Ironman() {
  return (
    <section className="py-24 bg-[#111110] border-y border-[#2C2C2A]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">
          {/* Text side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel label="Beyond code" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-[var(--font-display)] text-[#F1EFE8] leading-none mb-6"
              style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
            >
              Ironman
              <br />
              <span className="text-[#00D4FF]">70.3</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#F1EFE8] leading-relaxed max-w-lg mb-8"
            >
              1.2 mile swim. 56 mile bike. 13.1 mile run. I&apos;m training for
              my first Ironman 70.3 — not for clout, but because I believe the
              same obsession that makes a great athlete makes a great builder.
              Early mornings, delayed gratification, no shortcuts.
            </motion.p>

            {/* Discipline stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {disciplines.map(({ distance, label }) => (
                <div key={label}>
                  <p
                    className="font-[var(--font-display)] text-[#F1EFE8]"
                    style={{ fontSize: 32 }}
                  >
                    {distance}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-[#F1EFE8] mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Training image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="aspect-[3/4] bg-[#1A1A18] rounded-sm overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80"
              alt="Triathlon training"
              className="w-full h-full object-cover opacity-75"
            />
            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#0E0E0D]/80 backdrop-blur-sm border border-[#2C2C2A] px-4 py-3">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#F1EFE8]">
                  Current status
                </p>
                <p className="text-[#F1EFE8] text-sm mt-1 font-medium">
                  In training — race day TBD
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
