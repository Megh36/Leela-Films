"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";
import GlassPanel from "@/components/ui/glass-panel";

export default function AboutPage() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
        <FooterReveal>
          {/* Navbar docked out of the box */}
          <Navbar isDocked={true} />

          <main className="flex-1 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-y-16">
            {/* Header */}
            <div className="flex flex-col gap-y-4 border-b border-white/10 pb-8">
              <motion.span
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
              >
                — ABOUT US
              </motion.span>
              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white leading-none"
              >
                Our Story
              </motion.h1>
            </div>

            {/* Narrative Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Long narrative */}
              <motion.div
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="lg:col-span-7 flex flex-col gap-y-6 text-base md:text-lg text-white/85 leading-relaxed font-normal font-body"
              >
                <p>
                  Leela Film Pvt Ltd is a new-age entertainment and media ecosystem built with the vision of shaping culture, empowering talent, and taking Indian stories to global audiences. Rooted in creativity & driven by innovation, we aim to create premium entertainment experiences that connect emotionally, culturally, and commercially across platforms.
                </p>
                <p>
                  At Leela Films, we believe storytelling has the power to influence perspectives, inspire communities, and create lasting cultural impact. Our focus is to produce world-class content across films, digital media, branded entertainment, podcasts, and emerging formats while nurturing original voices and fresh creative talent.
                </p>
                <p>
                  Driven by the philosophy of &ldquo;speed with quality,&rdquo; Leela Films combines modern production systems, innovative storytelling approaches, and strong cultural authenticity to create content that resonates locally and shines globally.
                </p>
              </motion.div>

              {/* Standout Pull-Quote inside Glass */}
              <motion.div
                initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                className="lg:col-span-5"
              >
                <GlassPanel className="p-8 border border-white/5 flex flex-col gap-y-6">
                  <span className="text-[10px] font-heading font-bold tracking-widest text-brand-red uppercase">
                    // Mission Statement
                  </span>
                  <blockquote className="text-xl md:text-2xl font-accent italic text-white/90 leading-relaxed font-normal">
                    &ldquo;From Regional Roots to International Screens, Leela Films aspires to become a globally recognized entertainment brand representing the evolving voice of modern India.&rdquo;
                  </blockquote>
                </GlassPanel>
              </motion.div>

            </div>
          </main>
        </FooterReveal>
      </div>
    </SmoothScroll>
  );
}
