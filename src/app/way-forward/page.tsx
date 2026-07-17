"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";
import GlassPanel from "@/components/ui/glass-panel";

interface FullDivision {
  title: string;
  tag: string;
  longDesc: string;
  milestones: string[];
}

const fullDivisionsData: FullDivision[] = [
  {
    title: "Casting & Skill Development House",
    tag: "Acre Talent",
    longDesc: "Bridging the gap between raw aspiring actors and professional screen setups. We provide intensive script workshops, acting coaches, camera presence runs, and host casting sessions.",
    milestones: ["Daily Monologue & Character Audits", "Physical Casting Audition Rooms", "Voice & Accent Coaching Schemes", "Prominent Talent Showcase Festivals"],
  },
  {
    title: "Film Distribution Network",
    tag: "Distribution Wing",
    longDesc: "Creating a reliable channel for independent regional creators to put their cinema directly in front of audiences, bypassing complex gatekeepers via digital streams and screens.",
    milestones: ["Theatrical Syndications", "Direct-to-Streaming Partnerships", "International Film Market Placements", "Regional Language Sub-titling Hubs"],
  },
  {
    title: "Talent Management Division",
    tag: "LF Management",
    longDesc: "A complete agency ecosystem protecting and representing directors, screenwriters, composers, and actors. We handle brand endorsements, legal contracts, and content rights.",
    milestones: ["Creator Representation", "Brand Deal Matchmaking", "Contract & Legal Protection", "Content Licensing Negotiations"],
  },
  {
    title: "Film Promotions & Marketing",
    tag: "Viral Marketing",
    longDesc: "Connecting cinematic projects with their exact core audience. We craft digital memes, coordinate influencer tours, manage trailer releases, and run targeted high-impact campaigns.",
    milestones: ["Viral Meme Strategy Runs", "Influencer Film Promotion Tours", "Trailer Launch Coordination", "Outdoor & Digital Media Buying"],
  },
  {
    title: "Celebrity Coverage Unit (Paparazzi Division)",
    tag: "Media & PR",
    longDesc: "Curating active coverage, public relations campaigns, and paparazzi networks to keep our artists and films constantly trending across top digital media portals.",
    milestones: ["Red Carpet Event Coordination", "Celebrity Image PR Campaigns", "High-Reach Media Placements", "Paparazzi Press Alignments"],
  },
  {
    title: "Short Film Competitions & Festivals",
    tag: "Indie Spotlights",
    longDesc: "A dedicated festival platform organized by Leela Films. We award capital, screen indie stories, and hire winning directors to lead our larger commercial projects.",
    milestones: ["Annual Short Film Submissions", "Cash Grants for Top Short Films", "Jury Screening Events", "Showcase Catalog for Distributors"],
  },
  {
    title: "Music Distribution",
    tag: "Soundtracks & Audios",
    longDesc: "Ensuring original music scores, soundtracks, and single tracks are distributed, marketed, and licensed globally across all major digital audio stores.",
    milestones: ["Global Audio DSP Placements", "Soundtrack Copyright Syncs", "Artist Royalties Auditing", "Live Music Launch Concerts"],
  },
  {
    title: "Stand-Up Comedy & Performance Space",
    tag: "Live Culture",
    longDesc: "Building intimate physical performance stages. We curate weekly comedy open-mics, acoustic music gigs, and script reading nights for the creator community.",
    milestones: ["Live Stand-Up Shows", "Script Reading Circles", "Acoustic Singer Gigs", "Creator Lounge Events"],
  },
  {
    title: "Creator Community Ecosystem",
    tag: "LF Workspace",
    longDesc: "Our workspace solution. We provide editors, animators, and digital artists with premium computers, sound booths, green screens, and a shared learning zone.",
    milestones: ["Equipped Editing Desks", "Green Screen Rooms", "Sound Recording Booths", "Weekly Creator Networking Workshops"],
  },
];

export default function WayForwardPage() {
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
                — FUTURE EXPANSION
              </motion.span>
              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white leading-none"
              >
                Way Forward
              </motion.h1>
            </div>

            {/* Cards Stack */}
            <div className="flex flex-col gap-y-8">
              {fullDivisionsData.map((division, index) => (
                <motion.div
                  key={division.title}
                  id={`division-${index}`}
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
                        // {division.tag}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white">
                        {division.title}
                      </h2>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed font-normal font-body">
                        {division.longDesc}
                      </p>
                    </div>

                    {/* Milestones Column */}
                    <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col gap-y-4">
                      <span className="text-xs font-heading font-extrabold tracking-widest text-white/40 uppercase">
                        Key Objectives
                      </span>
                      <ul className="flex flex-col gap-y-2 text-xs md:text-sm text-white/85 font-body font-normal">
                        {division.milestones.map((item, idx) => (
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
