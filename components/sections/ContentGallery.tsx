"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface MediaItem {
  id: number;
  title: string;
  desc: string;
  url: string;
  span: string;
  tag: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Agent Build #1",
    desc: "Automated lead qualification pipeline — 0 to ship in 48 hours",
    url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    span: "md:col-span-2 md:row-span-2",
    tag: "Agent Build",
  },
  {
    id: 2,
    title: "Training Diary",
    desc: "Morning swim session, 5:30am. The grind never stops.",
    url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    span: "md:col-span-1 md:row-span-1",
    tag: "Triathlon",
  },
  {
    id: 3,
    title: "AI Breakdown",
    desc: "How I built a RAG pipeline for under $10/month",
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    span: "md:col-span-1 md:row-span-1",
    tag: "Content",
  },
  {
    id: 4,
    title: "College + Code",
    desc: "First year, first clients. Here's the playbook.",
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    span: "md:col-span-1 md:row-span-1",
    tag: "Story",
  },
  {
    id: 5,
    title: "n8n Workflow",
    desc: "Full automation breakdown — social media on autopilot",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    span: "md:col-span-2 md:row-span-1",
    tag: "Tutorial",
  },
];

export function ContentGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0E0E0D]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Content & Work" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-[var(--font-bebas)] text-[#F1EFE8] leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            The proof of work.
          </motion.h2>
        </motion.div>

        {/* Bento gallery grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]"
        >
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden bg-[#1A1A18] border border-[#2C2C2A] cursor-pointer group ${item.span}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  opacity: hovered === item.id ? 0.6 : 0.4,
                  transition: "opacity 0.4s ease, transform 0.5s ease",
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,14,13,0.9) 0%, transparent 60%)",
                }}
              >
                <div
                  className="transform transition-transform duration-300"
                  style={{
                    transform:
                      hovered === item.id
                        ? "translateY(0)"
                        : "translateY(4px)",
                  }}
                >
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#00D4FF] mb-1 block">
                    {item.tag}
                  </span>
                  <h3 className="text-[#F1EFE8] font-medium text-sm mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="text-[#888780] text-xs leading-relaxed"
                    style={{
                      opacity: hovered === item.id ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
