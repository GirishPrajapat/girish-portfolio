"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardItem {
  name: string;
  description: string;
  stack: string;
  image: string;
}

interface MorphingCardStackProps {
  cards: CardItem[];
}

export function MorphingCardStack({ cards }: MorphingCardStackProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-[#1A1A18] border border-[#2C2C2A] overflow-hidden"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={cards[active].image}
              alt={cards[active].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-[11px] tracking-[0.1em] uppercase text-[#F1EFE8] mb-2">
              {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="text-[#F1EFE8] font-medium text-lg mb-3">
              {cards[active].name}
            </h3>
            <p className="text-[#F1EFE8] text-sm leading-relaxed mb-4">
              {cards[active].description}
            </p>
            <div className="flex items-center justify-between border-t border-[#2C2C2A] pt-4">
              <span className="text-[11px] uppercase text-[#F1EFE8] tracking-wider">
                Stack
              </span>
              <span className="text-[#F1EFE8] text-sm">{cards[active].stack}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="flex gap-2 mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 bg-[#00D4FF]"
                : "w-4 bg-[#2C2C2A] hover:bg-[#444441]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
