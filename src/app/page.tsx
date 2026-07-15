"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/sections/LoadingScreen";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/brand/Navbar";
import About from "@/components/sections/About";
import Pillars from "@/components/sections/Pillars";
import VisionMissionValues from "@/components/sections/VisionMissionValues";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WayForwardTeaser from "@/components/sections/WayForwardTeaser";
import FooterReveal from "@/components/brand/FooterReveal";
import ScrollInquiry from "@/components/sections/ScrollInquiry";
import SmoothScroll from "@/components/brand/SmoothScroll";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDocked, setIsDocked] = React.useState(false);
  const [isScrollUnlocked, setIsScrollUnlocked] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Lock scroll until logo docking completes
  React.useEffect(() => {
    if (isDocked) {
      const duration = reducedMotion ? 50 : 800; // instant unlock on reduced motion
      const timer = setTimeout(() => {
        setIsScrollUnlocked(true);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isDocked, reducedMotion]);

  React.useEffect(() => {
    if (!isScrollUnlocked) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isScrollUnlocked]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white w-full overflow-x-hidden">
        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Home Flow Content */}
        {!isLoading && (
          <FooterReveal>
            {/* Docked Navigation Header */}
            <Navbar isDocked={isDocked} />

            {/* Cinematic Hero Header Slider */}
            <Hero
              isDocked={isDocked}
              setIsDocked={setIsDocked}
              isLoading={isLoading}
            />

            {/* Homepage Body Chapters */}
            <AnimatePresence>
              {isDocked && (
                <motion.div
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative z-10 w-full"
                >
                  <About />
                  <Pillars />
                  <VisionMissionValues />
                  <ServicesPreview />
                  <WayForwardTeaser />
                  <ScrollInquiry />
                </motion.div>
              )}
            </AnimatePresence>
          </FooterReveal>
        )}
      </div>
    </SmoothScroll>
  );
}
