"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterWord {
  text: string;
  className?: string;
}

interface TypewriterEffectProps {
  words: TypewriterWord[];
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.text.length) {
      setDisplayText(current.text.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (deleting && charIndex >= 0) {
      setDisplayText(current.text.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (!deleting && charIndex > current.text.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span className={cn("inline-flex items-baseline gap-1", className)}>
      <span>{displayText}</span>
      <span
        className={cn(
          "inline-block w-[2px] h-[1em] bg-[#00D4FF] align-middle animate-pulse",
          cursorClassName
        )}
      />
    </span>
  );
}
