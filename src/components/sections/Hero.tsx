"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../brand/Logo";
import { HERO_IMAGES, BRAND_TAGLINE } from "@/lib/config";

interface HeroProps {
  isDocked: boolean;
  setIsDocked: (docked: boolean) => void;
  isLoading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDocked, setIsDocked, isLoading }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Loop background images
  React.useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Rotate every 6s

    return () => clearInterval(interval);
  }, [isLoading]);

  // Intercept first scroll, swipe, or down-key to dock logo
  React.useEffect(() => {
    if (isLoading || isDocked) return;

    const handleInteraction = (e: Event) => {
      if (e.type === "keydown") {
        const keyEvent = e as KeyboardEvent;
        const keys = ["ArrowDown", "PageDown", " ", "End"];
        if (!keys.includes(keyEvent.key)) return;
      }
      
      e.preventDefault();
      setIsDocked(true);
    };

    const options = { passive: false };
    window.addEventListener("wheel", handleInteraction, options);
    window.addEventListener("touchmove", handleInteraction, options);
    window.addEventListener("keydown", handleInteraction, options);

    return () => {
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchmove", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [isLoading, isDocked, setIsDocked]);

  return (
    <section 
      onClick={() => !isDocked && setIsDocked(true)}
      className="relative w-screen h-screen overflow-hidden bg-black select-none cursor-pointer flex items-center justify-center"
    >
      {/* Loop of cinematic backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: reducedMotion ? 1 : 1.15 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reducedMotion ? 0.2 : 2.5, ease: "easeInOut" },
              scale: { duration: reducedMotion ? 0 : 6, ease: "linear" }
            }}
            style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})` }}
            className="absolute inset-0 bg-cover bg-center"
          />
        </AnimatePresence>
        
        {/* Gradients and vignettes */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="cinematic-vignette" />
      </div>

      {/* Hero Center Lockup: Hidden when logo docks */}
      <AnimatePresence>
        {!isDocked && (
          <div className="relative z-30 flex flex-col items-center justify-center max-w-4xl text-center px-6">
            <motion.div
              layoutId="logo-lockup"
              transition={reducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <Logo size="xl" isFilled />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.9, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="text-lg md:text-2xl font-accent italic text-white/95 leading-relaxed font-normal"
            >
              {BRAND_TAGLINE}
            </motion.p>

            {/* Subtle floating hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3, y: [0, 5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { delay: 1, duration: 1 },
                y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              className="absolute bottom-[-100px] text-xs font-heading font-semibold tracking-[0.2em] text-white/70 uppercase"
            >
              Scroll or Tap to Enter
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Hero;
