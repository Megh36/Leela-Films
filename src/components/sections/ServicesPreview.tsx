"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassPanel } from "../ui/glass-panel";

interface ServiceItem {
  title: string;
  desc: string;
  tag: string;
  category: string;
  bgGradient: string;
  borderGlow: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Creative Concept",
    desc: "Breathing life into raw ideas with scripts, narrative arcs, and screenplays.",
    tag: "Concept",
    category: "09",
    bgGradient: "from-black via-amber-950/25 to-amber-900/35",
    borderGlow: "group-hover:border-amber-500/20"
  },
  {
    title: "End-to-End Production",
    desc: "Seamless logistics, world-class film shoots, and full post-production suites.",
    tag: "Production",
    category: "08",
    bgGradient: "from-black via-blue-950/25 to-slate-900/35",
    borderGlow: "group-hover:border-blue-500/20"
  },
  {
    title: "Long Format Content",
    desc: "Developing and shooting feature-length, immersive theatrical productions.",
    tag: "Long-Form",
    category: "07",
    bgGradient: "from-black via-emerald-950/25 to-emerald-900/35",
    borderGlow: "group-hover:border-emerald-500/20"
  },
  {
    title: "Short-Format Show",
    desc: "Engaging digital web capsules, talk shows, and bite-sized social creations.",
    tag: "Short-Form",
    category: "06",
    bgGradient: "from-black via-indigo-950/25 to-indigo-900/35",
    borderGlow: "group-hover:border-indigo-500/20"
  },
  {
    title: "Web Series Development",
    desc: "Crafting binge-worthy, multi-season series tailored for major streaming giants.",
    tag: "Episodic",
    category: "05",
    bgGradient: "from-black via-rose-950/25 to-rose-900/35",
    borderGlow: "group-hover:border-rose-500/20"
  },
  {
    title: "Theatrical Film Production",
    desc: "High-production-value theatrical and direct-to-OTT feature film creations.",
    tag: "Cinema",
    category: "04",
    bgGradient: "from-black via-cyan-950/25 to-cyan-900/35",
    borderGlow: "group-hover:border-cyan-500/20"
  },
  {
    title: "TV Commercial (TVC)",
    desc: "Memorable brand campaigns that define cultures and influence consumers.",
    tag: "TVC",
    category: "03",
    bgGradient: "from-black via-orange-950/25 to-amber-900/35",
    borderGlow: "group-hover:border-orange-500/20"
  },
  {
    title: "Corporate Documentaries",
    desc: "Story-driven corporate documentaries and internal communication videos.",
    tag: "Corporate",
    category: "02",
    bgGradient: "from-black via-teal-950/25 to-teal-900/35",
    borderGlow: "group-hover:border-teal-500/20"
  },
  {
    title: "Advertisement Campaign",
    desc: "High-impact digital spots, social promos, and viral video campaigns.",
    tag: "Ad Film",
    category: "01",
    bgGradient: "from-black via-purple-950/25 to-violet-900/35",
    borderGlow: "group-hover:border-purple-500/20"
  }
];

export const ServicesPreview: React.FC = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative w-full bg-black py-24 md:py-36 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .btn-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marquee-left-to-right 32s linear infinite;
        }
        .btn-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-left-to-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
      `}} />

      <div className="w-full px-6 md:px-16 lg:px-20 mx-auto flex flex-col gap-y-12 relative z-10">
        
        {/* Header with Nav Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-y-3">
            <motion.span
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs md:text-sm font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
            >
              — WHAT WE DO
            </motion.span>
            <motion.h2
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-4xl md:text-6xl lg:text-[4rem] font-heading font-extrabold text-white tracking-tight leading-none"
            >
              Services Preview
            </motion.h2>
          </div>

          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group text-sm font-heading font-extrabold tracking-wider text-white hover:text-brand-red flex items-center gap-1.5 uppercase transition-colors duration-300"
            >
              Explore All Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full py-10 mt-6 select-none">
        {/* Left and Right vignettes to fade out cards */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/85 to-transparent z-20 pointer-events-none" />

        {/* Fixed Rotating Film Reel overlay on the left */}
        <div className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-44 md:h-44 animate-[spin_15s_linear_infinite] text-brand-red select-none drop-shadow-[0_0_25px_rgba(229,27,36,0.45)]">
            <circle cx="50" cy="50" r="48" fill="rgba(20, 20, 20, 0.95)" stroke="rgba(229, 27, 36, 0.6)" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="40" fill="rgba(229, 27, 36, 0.75)" />
            {/* Center Hub */}
            <circle cx="50" cy="50" r="10" fill="black" />
            <circle cx="50" cy="50" r="7" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(229, 27, 36, 0.8)" strokeWidth="1.5" />
            {/* 6 outer holes */}
            <circle cx="50" cy="22" r="10" fill="black" />
            <circle cx="74.25" cy="36" r="10" fill="black" />
            <circle cx="74.25" cy="64" r="10" fill="black" />
            <circle cx="50" cy="78" r="10" fill="black" />
            <circle cx="25.75" cy="64" r="10" fill="black" />
            <circle cx="25.75" cy="36" r="10" fill="black" />
            {/* Inner detail */}
            <circle cx="50" cy="50" r="2" fill="rgba(229, 27, 36, 0.9)" />
          </svg>
        </div>

        {/* Marquee Inner scrolling row */}
        <div className="btn-marquee-track">
          {/* Set 1 */}
          {servicesData.map((service, index) => (
            <Link key={`set1-${index}`} href={`/services#service-${index}`} className="w-[280px] md:w-[360px] shrink-0 block group">
              <GlassPanel
                hoverScale
                className={`p-8 aspect-[16/10] flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-tr ${service.bgGradient} ${service.borderGlow} transition-all duration-300`}
              >
                <span className="text-[10px] md:text-xs font-heading font-extrabold text-brand-red uppercase tracking-widest">
                  Category {service.category}
                </span>
                
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white group-hover:text-brand-red transition-colors duration-300 mt-auto leading-tight">
                  {service.title}
                </h3>
              </GlassPanel>
            </Link>
          ))}
          
          {/* Set 2 (Duplicated for seamless loop) */}
          {servicesData.map((service, index) => (
            <Link key={`set2-${index}`} href={`/services#service-${index}`} className="w-[280px] md:w-[360px] shrink-0 block group">
              <GlassPanel
                hoverScale
                className={`p-8 aspect-[16/10] flex flex-col justify-between rounded-2xl border border-white/5 bg-gradient-to-tr ${service.bgGradient} ${service.borderGlow} transition-all duration-300`}
              >
                <span className="text-[10px] md:text-xs font-heading font-extrabold text-brand-red uppercase tracking-widest">
                  Category {service.category}
                </span>
                
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-white group-hover:text-brand-red transition-colors duration-300 mt-auto leading-tight">
                  {service.title}
                </h3>
              </GlassPanel>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
