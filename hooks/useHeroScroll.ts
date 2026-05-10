"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHeroScroll() {
  useEffect(() => {
    // Wait for loader (2.5s) + buffer before wiring scroll triggers
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Hero heading shrinks and flies toward top-left (nav area)
        gsap.to("#hero-heading", {
          scale: 0.12,
          y: -480,
          x: -580,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });

        // 2. Section label fades out first
        gsap.to("#hero-label", {
          opacity: 0,
          y: -24,
          ease: "power2.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "22% top",
            scrub: 0.5,
          },
        });

        // 3. Subtext slides left and fades
        gsap.to("#hero-subtext", {
          x: -80,
          opacity: 0,
          ease: "power2.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "38% top",
            scrub: 0.9,
          },
        });

        // 4. CTAs slide down and fade
        gsap.to("#hero-ctas", {
          y: 50,
          opacity: 0,
          ease: "power2.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "32% top",
            scrub: 0.7,
          },
        });

        // 5. Stat column — slides right and fades
        gsap.to("#hero-stats", {
          x: 80,
          opacity: 0,
          ease: "power1.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        });

        // 8. Video/background fades out and very slightly scales up
        gsap.to("#hero-video-bg", {
          opacity: 0,
          scale: 1.05,
          ease: "power1.in",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "60% top",
            scrub: 1,
          },
        });

        // 9. Identity section rises up — parallax entry
        gsap.fromTo(
          "#identity-section",
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#identity-section",
              start: "top 88%",
              end: "top 30%",
              scrub: 1.2,
            },
          }
        );
      });

      return () => ctx.revert();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
}
