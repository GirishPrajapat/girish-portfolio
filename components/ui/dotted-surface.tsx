"use client";

import { cn } from "@/lib/utils";

interface DottedSurfaceProps {
  className?: string;
}

export function DottedSurface({ className }: DottedSurfaceProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage:
          "radial-gradient(circle, #888780 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}
