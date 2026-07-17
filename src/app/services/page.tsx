"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";
import GlassPanel from "@/components/ui/glass-panel";

interface FullService {
  title: string;
  tag: string;
  longDesc: string;
  deliverables: string[];
}

const fullServicesData: FullService[] = [
  {
    title: "Creative Concept & Storytelling",
    tag: "Concept & Development",
    longDesc: "Every iconic film begins with a powerful idea. We shape unstructured thoughts into structured narratives, building screenplays, visual boards, and scripts that capture audiences globally.",
    deliverables: ["Scriptwriting & Screenplays", "Storyboard & Visual Pre-Vis", "Character Development", "Concept Pitch Decks"],
  },
  {
    title: "End-to-End Production Solutions",
    tag: "Physical Production",
    longDesc: "We take the complexity out of physical filmmaking. From scouting locations and managing schedules to setting up rigs and capturing high-end cinema frames, we handle every physical aspect on set.",
    deliverables: ["Line Production & Permits", "Location Scouting", "Equipment Rental & Rigs", "On-Set Crew Coordination"],
  },
  {
    title: "Long Format Content Creation",
    tag: "Long-Form Content",
    longDesc: "For streaming services and major theatrical releases. We specialize in deep, multi-layered visual stories that keep viewers hooked over hours of episodic or movie content.",
    deliverables: ["Theatrical Features", "Direct-to-Streaming Movies", "Feature Documentaries", "Anthology Series"],
  },
  {
    title: "Short-Format Show Development",
    tag: "Digital & Social",
    longDesc: "Capturing short attention spans without compromising narrative depth. We construct highly engaging episodic digital talk shows, capsules, and creative social formats.",
    deliverables: ["Digital Talk Shows", "Bite-Sized Series", "Social Reels & Promos", "Creative Interviews"],
  },
  {
    title: "Web Series Development",
    tag: "OTT Series",
    longDesc: "Designing binge-worthy narrative seasons. We handle the scripting, casting, shooting, and editing of multi-episode stories built specifically for digital web platforms.",
    deliverables: ["Writers Room Setup", "Episodic Direction", "Showrunner Supervision", "Season Arc Planning"],
  },
  {
    title: "Film Production",
    tag: "Cinematic Cinema",
    longDesc: "Our flagship medium. We produce commercial and art-house cinema of international standards, bringing together the finest directors, actors, and composers under one banner.",
    deliverables: ["Co-Production Ventures", "Mainstream Theatricals", "Festival Submissions", "International Sales"],
  },
  {
    title: "TV Commercial (TVC) Production",
    tag: "Brand Commercials",
    longDesc: "We build ads that build brands. Our commercial directors blend brand message with stunning cinematography to produce commercials that leave lasting cultural impressions.",
    deliverables: ["Brand Campaigns", "TVC Concept Drafts", "High-Fidelity Ad Shoots", "Multi-Language Ad Adapts"],
  },
  {
    title: "Corporate Film Production",
    tag: "Corporate Media",
    longDesc: "Corporate narratives do not have to be boring. We build story-driven corporate videos, culture clips, and internal statements that engage stakeholders and employees alike.",
    deliverables: ["Company Origin Profiles", "Culture & Recruitment Spots", "Stakeholder Video Updates", "Product Launch Media"],
  },
  {
    title: "Advertisement Production",
    tag: "Promo Production",
    longDesc: "Digital-first advertising requires speed, quality, and adaptability. We build high-impact product spots, social media loops, and visual assets ready for immediate ad spends.",
    deliverables: ["Digital Spot Campaigns", "App Install Promos", "Visual Asset Libraries", "Social Optimization Cutting"],
  },
];

export default function ServicesPage() {
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
                — CAPABILITIES
              </motion.span>
              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white leading-none"
              >
                Our Services
              </motion.h1>
            </div>

            {/* Cards Stack */}
            <div className="flex flex-col gap-y-8">
              {fullServicesData.map((service, index) => (
                <motion.div
                  key={service.title}
                  id={`service-${index}`}
                  initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="scroll-mt-32"
                >
                  <GlassPanel className="p-8 border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Info Column */}
                    <div className="lg:col-span-7 flex flex-col gap-y-4">
                      <span className="text-[10px] font-heading font-bold tracking-widest text-brand-red uppercase">
                        // {service.tag}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
                        {service.title}
                      </h2>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed font-normal font-body">
                        {service.longDesc}
                      </p>
                    </div>

                    {/* Deliverables Column */}
                    <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col gap-y-4">
                      <span className="text-xs font-heading font-extrabold tracking-widest text-white/40 uppercase">
                        Key Deliverables
                      </span>
                      <ul className="flex flex-col gap-y-2 text-xs md:text-sm text-white/85 font-body font-normal">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-brand-red rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
