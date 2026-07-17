"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";
import GlassPanel from "@/components/ui/glass-panel";

interface GroupCompany {
  name: string;
  sub: string;
  desc: string;
  region: string;
}

const companiesData: GroupCompany[] = [
  {
    name: "Leela Partner Limited",
    sub: "Strategic Investments & Global Alliances",
    desc: "Spearheading equity placements, co-productions, and international partnership investments for media ventures.",
    region: "Global",
  },
  {
    name: "Leela by Gauri Vala",
    sub: "Leela Motivala Pvt. Ltd.",
    desc: "A boutique division creating custom designer products, editorial styling, and high-fashion visual narratives.",
    region: "India / UK",
  },
  {
    name: "Pure Leela Limited",
    sub: "Audio, Publishing & Podcasts",
    desc: "Producing acoustic storytelling, original soundtracks, podcasts, and digital literature catalogs.",
    region: "Asia Pacific",
  },
  {
    name: "Tobias Amines Limited",
    sub: "Industrial & Chemical Logistics",
    desc: "Our diversified industrial partnership managing chemicals and processing lines in Western India.",
    region: "Industrial Sector",
  },
  {
    name: "Leela USA LLC",
    sub: "North American Cinematic Distribution",
    desc: "Connecting Indian blockbusters and indie features with screen syndicators across the US and Canada.",
    region: "United States",
  },
  {
    name: "Leela Gulf FZC",
    sub: "Middle East Production & Talent Hub",
    desc: "Managing shooting schedules, production permits, and media services throughout the GCC region.",
    region: "UAE / Middle East",
  },
];

export default function GroupPage() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
        <FooterReveal>
          <Navbar isDocked={true} />

          <main className="flex-1 pt-32 pb-24 px-6 max-w-7xl mx-auto w-full flex flex-col gap-y-16">
            {/* Header */}
            <div className="flex flex-col gap-y-4 border-b border-white/10 pb-8">
              <motion.span
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
              >
                — SYNERGY
              </motion.span>
              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white leading-none"
              >
                Group of Companies
              </motion.h1>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companiesData.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: reducedMotion ? 0 : index * 0.08 }}
                >
                  <GlassPanel hoverScale className="h-full p-6 flex flex-col justify-between gap-y-6 rounded-2xl border border-white/5">
                    <div className="flex flex-col gap-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-[9px] font-heading font-bold tracking-widest text-brand-red bg-brand-red/5 px-2.5 py-1 rounded-full uppercase border border-brand-red/20">
                          {company.region}
                        </span>
                      </div>

                      <div className="flex flex-col gap-y-1">
                        <h2 className="text-lg md:text-xl font-heading font-extrabold text-white">
                          {company.name}
                        </h2>
                        <span className="text-xs text-white/50 font-body">
                          {company.sub}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-4">
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed font-normal font-body">
                        {company.desc}
                      </p>

                      {/* Logo/Icon shape accent */}
                      <div className="flex items-center gap-2 text-white/10 font-heading text-[10px] tracking-widest uppercase border-t border-white/5 pt-4">
                        <span className="h-1.5 w-1.5 bg-brand-red rounded-full animate-pulse-slow" />
                        leela affiliate
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </main>
        </FooterReveal>
      </div>
    </SmoothScroll>
  );
}
