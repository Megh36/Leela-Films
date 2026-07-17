"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "../ui/apple-tahoe-liquid-glass-button";
import { CORE_PULL_QUOTE } from "@/lib/config";

export const About: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-36 overflow-hidden px-6 md:px-16 lg:px-20">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Eyebrow and Giant Headline */}
        <div className="lg:col-span-7 flex flex-col gap-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs md:text-sm font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
          >
            — THE STORY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.02]"
          >
            A new-age <br />
            <span className="text-brand-red">entertainment</span> <br />
            & media <br />
            company.
          </motion.h2>
        </div>

        {/* Right Column: Description, Quote, and Button */}
        <div className="lg:col-span-5 flex flex-col gap-y-8 lg:pt-24">
          
          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-white/85 leading-relaxed font-normal font-body"
          >
            Leela Films is a new-age entertainment and media company creating impactful stories across films, digital content, podcasts, and branded entertainment. Built on creativity, culture, and innovation, we focus on giving fresh talent a platform and building meaningful content that connects with people.
          </motion.p>

          {/* Pull-quote (Mamba Mentality) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl font-accent italic text-white/80 leading-relaxed font-normal font-serif"
          >
            {CORE_PULL_QUOTE}
          </motion.p>

          {/* Read Full Story Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="pt-2"
          >
            <Link href="/about" className="inline-block">
              <GlassButton variant="accent" size="default" className="group">
                READ FULL STORY
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" />
              </GlassButton>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
export default About;
