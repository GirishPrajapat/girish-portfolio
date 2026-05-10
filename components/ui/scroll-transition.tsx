"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHeroScrollAnimation() {
  useEffect(() => {
    // Small delay to ensure DOM is painted after loader fades
    const setupTimer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Hero heading shrinks + flies toward nav
        gsap.to("#hero-heading", {
          scale: 0.15,
          y: -420,
          x: -600,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // 2. Subtext slides left and fades
        gsap.to("#hero-subtext", {
          x: -60,
          opacity: 0,
          ease: "power2.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "40% top",
            scrub: 0.8,
          },
        });

        // 3. Chip 1 — scatters up-right
        gsap.to("#chip-1", {
          x: 120,
          y: -80,
          opacity: 0,
          rotation: 12,
          ease: "power1.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });

        // 4. Chip 2 — scatters down-right
        gsap.to("#chip-2", {
          x: 60,
          y: 100,
          opacity: 0,
          rotation: -8,
          ease: "power1.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });

        // 5. Chip 3 — scatters far right
        gsap.to("#chip-3", {
          x: 140,
          y: 40,
          opacity: 0,
          rotation: 5,
          ease: "power1.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });

        // 6. CTAs slide down and fade
        gsap.to("#hero-ctas", {
          y: 40,
          opacity: 0,
          ease: "power2.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "35% top",
            scrub: 0.6,
          },
        });

        // 7. Section label fades first
        gsap.to("#hero-label", {
          opacity: 0,
          y: -20,
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "25% top",
            scrub: 0.5,
          },
        });

        // 8. Identity section rises up on entry
        gsap.fromTo(
          "#identity-section",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#identity-section",
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      });

      return () => ctx.revert();
    }, 2800); // wait for loader to finish before setting up triggers

    return () => clearTimeout(setupTimer);
  }, []);
}
