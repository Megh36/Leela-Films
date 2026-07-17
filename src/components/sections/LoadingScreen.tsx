"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Logo from "../brand/Logo";
import { BRAND_PHILOSOPHY } from "@/lib/config";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Simulate loading progress
    const duration = prefersReducedMotion ? 500 : 2000; // speed up if reduced motion is requested
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setIsFinished(true);
        // Short beat for visual completeness before dissolve
        setTimeout(() => {
          onComplete();
        }, prefersReducedMotion ? 100 : 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinished ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none"
    >
      <div className="flex flex-col items-center gap-y-6">
        {/* Logo starts as outline and fills from left to right */}
        <Logo size="xl" progress={progress} />

        {/* Live percentage caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-[11px] md:text-xs font-heading font-semibold tracking-[0.25em] text-white/70"
        >
          {BRAND_PHILOSOPHY} · {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};
export default LoadingScreen;
