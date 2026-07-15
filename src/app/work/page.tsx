"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";
import GlassPanel from "@/components/ui/glass-panel";

interface WorkProject {
  title: string;
  type: string;
  status: "In Development" | "In Production" | "Post-Production" | "Released";
  desc: string;
  year: string;
}

const mockProjects: WorkProject[] = [
  {
    title: "Mamba Mentality",
    type: "Feature Documentary",
    status: "Post-Production",
    desc: "An inside look at the philosophy of speed, quality, and extreme sacrifice driving modern Indian creators to the peak of international cinema.",
    year: "2026",
  },
  {
    title: "Regional Roots",
    type: "Original Drama Series",
    status: "In Production",
    desc: "A sprawling multi-generational drama tracking small-town Indian artists migrating to international metropolises.",
    year: "2026",
  },
  {
    title: "From Home to Worldwide",
    type: "Feature Film",
    status: "In Development",
    desc: "An emotional storytelling feature set against Ahmedabad and London, focusing on giving fresh talent a global stage.",
    year: "2027",
  },
  {
    title: "Pure Leela Sessions",
    type: "Episodic Podcast & Music",
    status: "Released",
    desc: "A raw acoustic soundtrack and conversations series capturing original voices and fresh creative talent.",
    year: "2025",
  },
];

export default function WorkPage() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const getStatusColor = (status: WorkProject["status"]) => {
    switch (status) {
      case "Released":
        return "text-green-400 bg-green-500/10 border-green-500/20";
      case "Post-Production":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "In Production":
        return "text-brand-red bg-brand-red/10 border-brand-red/20";
      default:
        return "text-white/60 bg-white/5 border-white/10";
    }
  };

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
                className="text-sm font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
              >
                — FILMOGRAPHY
              </motion.span>
              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white leading-none"
              >
                Our Work
              </motion.h1>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: reducedMotion ? 0 : index * 0.1 }}
                >
                  <GlassPanel hoverScale className="h-full p-8 flex flex-col justify-between gap-y-8 rounded-2xl border border-white/5 relative">
                    
                    {/* Title & Status */}
                    <div className="flex flex-col gap-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-xs font-heading font-bold tracking-widest text-white/40 uppercase">
                          {project.type}
                        </span>
                        <span className={`text-xs font-heading font-bold tracking-widest px-2.5 py-1 rounded-full uppercase border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="flex flex-col gap-y-1">
                        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
                          {project.title}
                        </h2>
                        <span className="text-sm text-brand-red font-heading font-semibold">
                          Slate Year: {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Body description */}
                    <div>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed font-normal font-body">
                        {project.desc}
                      </p>
                    </div>

                    {/* Aesthetic frame markers */}
                    <div className="flex items-center justify-between text-white/10 font-heading text-xs tracking-widest uppercase border-t border-white/5 pt-4">
                      <span>Aspect Ratio: 2.39:1</span>
                      <span>leela production</span>
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
