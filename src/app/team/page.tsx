"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  placeholderBg: string;
  image?: string;
}

const teamData: TeamMember[] = [
  {
    name: "Kumpal Patel",
    role: "Founder & Managing Director",
    desc: "A visionary entrepreneur and producer leading Leela Films' global strategy, commercial deals, and commitment to presenting Indian culture on worldwide screens.",
    placeholderBg: "linear-gradient(135deg, #150000 0%, #050505 100%)",
    image: "/team/kumpal_patel.jpg",
  },
  {
    name: "Ujas Patel",
    role: "Founder",
    desc: "An innovative strategist managing production logistics, infrastructure growth, and establishing a home away from home workspace for creators.",
    placeholderBg: "linear-gradient(135deg, #050505 0%, #150000 100%)",
    image: "/team/ujas_patel.jpg",
  },
  {
    name: "Kanishq Chaudhari",
    role: "CEO / Creative Director",
    desc: "An acclaimed writer-director orchestrating Leela Films' content slate, narrative quality, and collaborative creator communities.",
    placeholderBg: "linear-gradient(135deg, #151515 0%, #000000 100%)",
    image: "/team/kanishq_chaudhari.jpg",
  },
];

export default function TeamPage() {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [isChanging, setIsChanging] = React.useState(false);
  const [beamDimmed, setBeamDimmed] = React.useState(false);
  const [isFilmFlicker, setIsFilmFlicker] = React.useState(false);
  const [isScreenFlickering, setIsScreenFlickering] = React.useState(false);

  const handleDirectorChange = React.useCallback((newIdx: number) => {
    if (newIdx === activeIdx || isChanging) return;
    setIsChanging(true);
    setBeamDimmed(true);

    // Step 1: Dim the beam and transition the photo
    setTimeout(() => {
      // Step 2: Swap content and trigger a quick film flash flicker
      setActiveIdx(newIdx);
      setIsFilmFlicker(true);

      setTimeout(() => {
        setIsFilmFlicker(false);

        setTimeout(() => {
          // Step 3: Fade beam back to full brightness
          setBeamDimmed(false);
          setIsChanging(false);
        }, 200);
      }, 80);
    }, 200);
  }, [activeIdx, isChanging]);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    // Periodic cinema projector flicker (every 12 seconds, lasts 150ms)
    const flickerInterval = setInterval(() => {
      setIsScreenFlickering(true);
      setTimeout(() => {
        setIsScreenFlickering(false);
      }, 150);
    }, 12000);

    return () => clearInterval(flickerInterval);
  }, []);

  React.useEffect(() => {
    if (isChanging) return;

    // Autoplay change every 5 seconds
    const autoplayTimer = setTimeout(() => {
      const nextIdx = (activeIdx + 1) % teamData.length;
      handleDirectorChange(nextIdx);
    }, 5000);

    return () => clearTimeout(autoplayTimer);
  }, [activeIdx, isChanging, handleDirectorChange]);

  const activeMember = teamData[activeIdx];

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#070707] text-white flex flex-col overflow-x-hidden">
        <FooterReveal>
          {styleInject}
          
          {/* Subtle noise/film grain texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay z-50 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
          
          <Navbar isDocked={true} />

          <main className="flex-1 max-w-[1440px] w-full mx-auto px-12 pt-40 pb-28 relative flex items-center justify-center lg:justify-between min-h-[840px] select-none">
            
            {/* LEFT ZONE — VINTAGE PROJECTOR (35% Width area on desktop) */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden md:flex absolute left-[3%] lg:left-[5%] bottom-[8%] lg:bottom-[10%] w-[195px] lg:w-[260px] flex-col justify-end pointer-events-auto z-20 group"
            >
              {/* Projector Base Stand & Body */}
              <svg viewBox="0 0 100 118" className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                {/* Back Reel */}
                <g className="origin-[35px_30px]" style={{ animation: "spin-linear 10s linear infinite" }}>
                  <circle cx="35" cy="30" r="22" fill="#111" stroke="#2a2a2a" strokeWidth="1.5" />
                  <circle cx="35" cy="30" r="16" fill="none" stroke="#222" strokeWidth="2" strokeDasharray="6 3" />
                  {/* Holes */}
                  <circle cx="35" cy="15" r="4" fill="#070707" />
                  <circle cx="48" cy="22" r="4" fill="#070707" />
                  <circle cx="48" cy="38" r="4" fill="#070707" />
                  <circle cx="35" cy="45" r="4" fill="#070707" />
                  <circle cx="22" cy="38" r="4" fill="#070707" />
                  <circle cx="22" cy="22" r="4" fill="#070707" />
                  <circle cx="35" cy="30" r="5" fill="#333" />
                </g>

                {/* Front Reel */}
                <g className="origin-[75px_40px]" style={{ animation: "spin-linear 8s linear infinite" }}>
                  <circle cx="75" cy="40" r="25" fill="#151515" stroke="#2a2a2a" strokeWidth="1.5" />
                  <circle cx="75" cy="40" r="18" fill="none" stroke="#222" strokeWidth="2.5" strokeDasharray="8 4" />
                  {/* Holes */}
                  <circle cx="75" cy="22" r="4.5" fill="#070707" />
                  <circle cx="91" cy="31" r="4.5" fill="#070707" />
                  <circle cx="91" cy="49" r="4.5" fill="#070707" />
                  <circle cx="75" cy="58" r="4.5" fill="#070707" />
                  <circle cx="59" cy="49" r="4.5" fill="#070707" />
                  <circle cx="59" cy="31" r="4.5" fill="#070707" />
                  <circle cx="75" cy="40" r="6" fill="#333" stroke="#d4af37" strokeWidth="1" />
                </g>

                {/* Reel Support Arms */}
                <path d="M 35 30 L 40 70 M 75 40 L 60 75" stroke="#181818" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 35 30 L 40 70 M 75 40 L 60 75" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 1" />

                {/* Projector Body (Matte black metal, worn texture) */}
                <rect x="28" y="70" width="38" height="42" rx="3.5" fill="#121212" stroke="#262626" strokeWidth="1.5" />
                {/* Dial Panel */}
                <rect x="33" y="75" width="28" height="16" fill="#090909" rx="1" />
                <line x1="36" y1="80" x2="58" y2="80" stroke="#1f1f1f" strokeWidth="2" />
                <line x1="36" y1="85" x2="58" y2="85" stroke="#1f1f1f" strokeWidth="2" />
                {/* Mechanical dials */}
                <circle cx="39" cy="100" r="3" fill="#222" stroke="#333" strokeWidth="0.5" />
                <circle cx="47" cy="100" r="3.5" fill="#181818" stroke="#d4af37" strokeWidth="0.5" />
                <circle cx="56" cy="100" r="2.5" fill="#222" stroke="#333" strokeWidth="0.5" />
                
                {/* Lens housing & Brass ring */}
                <path d="M 66 80 L 81 82 L 81 98 L 66 100 Z" fill="#1d1d1d" stroke="#111" strokeWidth="1" />
                {/* Brass lens ring */}
                <rect x="81" y="80" width="4" height="20" rx="1.2" fill="#d4af37" stroke="#b28d22" strokeWidth="0.5" />
                
                {/* Glowing Lens Glass reflection */}
                <ellipse 
                  cx="85" 
                  cy="90" 
                  rx="1" 
                  ry="8" 
                  fill="#fffdf5" 
                  className={`group-hover:opacity-100 transition-opacity duration-300 ${isChanging ? "animate-shutter" : ""}`}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(255,253,245,0.9))",
                    opacity: beamDimmed ? 0.2 : 0.8
                  }}
                />
                
                {/* Base plate */}
                <path d="M 22 112 L 78 112 L 72 118 L 28 118 Z" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="0.5" />
              </svg>

              {/* Dark Wooden Table Top */}
              <div className="w-full h-[88px] bg-gradient-to-b from-[#160f08] to-[#0a0603] border-t border-[#291c10] rounded-t shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 to-transparent" />
              </div>
            </motion.div>

            {/* VOLUMETRIC LIGHT BEAM (Lens to Screen) */}
            <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10">
              <svg viewBox="0 0 1440 820" className="w-full h-full absolute inset-0 pointer-events-none" style={{ mixBlendMode: "screen" }}>
                <defs>
                  <radialGradient id="beamGradient" cx="20%" cy="77%" r="85%">
                    <stop offset="0%" stopColor="#FFFDF5" stopOpacity="0.4" />
                    <stop offset="25%" stopColor="#F9E7B2" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="rgba(255,210,120,0)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Light Cone */}
                <motion.polygon 
                  points="287,633 788,50 788,770" 
                  fill="url(#beamGradient)"
                  animate={{
                    opacity: beamDimmed ? 0.04 : isScreenFlickering ? 0.28 : 0.35
                  }}
                  transition={{
                    duration: isChanging ? 0.2 : 0.15
                  }}
                  className={`origin-[287px_633px] ${isChanging ? "animate-shutter" : ""}`}
                  style={{
                    filter: "blur(4px)",
                    animation: "beam-flicker-gentle 5s ease-in-out infinite"
                  }}
                />

                {/* Floating dust particles inside the light cone boundaries */}
                <g opacity="0.8">
                  <circle cx="420" cy="480" r="1.2" fill="#fffdf5" style={{ animation: "dust-float-1 11s linear infinite" }} />
                  <circle cx="580" cy="360" r="1.5" fill="#fffdf5" style={{ animation: "dust-float-2 13s linear infinite" }} />
                  <circle cx="690" cy="520" r="1.0" fill="#fffdf5" style={{ animation: "dust-float-3 15s linear infinite" }} />
                  <circle cx="500" cy="280" r="1.3" fill="#fffdf5" style={{ animation: "dust-float-4 12s linear infinite" }} />
                  <circle cx="620" cy="220" r="1.1" fill="#fffdf5" style={{ animation: "dust-float-1 14s linear infinite" }} />
                  <circle cx="710" cy="410" r="1.4" fill="#fffdf5" style={{ animation: "dust-float-3 10s linear infinite" }} />
                </g>
              </svg>
            </div>

            {/* RIGHT ZONE — PROJECTION SCREEN (65% Width area on desktop) */}
            <div className="w-full max-w-[620px] lg:max-w-[640px] h-[720px] lg:h-[760px] relative z-20 mx-auto lg:mr-[5%] lg:ml-auto flex flex-col justify-end">
              
              {/* Director Selector Tabs (Luxury Roster Controls) */}
              <div className="absolute right-0 -top-16 flex gap-x-8 text-base md:text-lg font-heading font-extrabold tracking-wide z-30">
                {teamData.map((member, idx) => (
                  <button
                    key={member.name}
                    onClick={() => handleDirectorChange(idx)}
                    className={`transition-colors duration-300 relative py-1 ${
                      activeIdx === idx ? "text-[#D71920]" : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {member.name}
                    {activeIdx === idx && (
                      <motion.span
                        layoutId="activeRosterIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D71920]"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Warm Fabric Projection Screen Container */}
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{
                  opacity: 1,
                  filter: isScreenFlickering ? "brightness(0.96) contrast(1.03)" : "brightness(1) contrast(1)",
                  y: isScreenFlickering ? 0.5 : 0
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  filter: { duration: 0.1 },
                  y: { duration: 0.1 }
                }}
                style={{
                  boxShadow: "0 0 90px rgba(255,220,150,0.22)",
                  border: "1px solid rgba(0,0,0,0.15)"
                }}
                className="w-full h-full bg-[#F8F3E8] rounded-[2px] flex flex-col relative overflow-hidden select-none hover:brightness-[1.03] transition-all duration-300 ease-out group projection-screen-card"
              >
                {/* Screen Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_55%,_rgba(0,0,0,0.08)_100%)] pointer-events-none z-10" />

                {/* Sub-pixel Projection Canvas Content */}
                <div className="relative w-full h-full flex flex-col justify-between py-[5%] px-[6%] z-10">
                  
                  {/* Director Monochrome Portrait */}
                  <div className="w-full aspect-square overflow-hidden bg-black relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeMember.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="w-full h-full"
                      >
                        {activeMember.image ? (
                          <img
                            src={activeMember.image}
                            alt={activeMember.name}
                            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                          />
                        ) : (
                          <div 
                            style={{ background: activeMember.placeholderBg }}
                            className="w-full h-full flex items-center justify-center border-b border-black/10"
                          >
                            <span className="text-white/20 font-heading font-extrabold text-3xl">
                              {activeMember.name.split(" ")[0]}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* One-frame film flicker flash overlay */}
                    {isFilmFlicker && (
                      <div 
                        className="absolute inset-0 bg-white/70 z-20 pointer-events-none"
                        style={{ animation: "film-flash 0.08s ease-out infinite" }}
                      />
                    )}
                  </div>

                  {/* Director Profile Details */}
                  <div className="flex-1 flex flex-col justify-end pt-4">
                    {/* Badge */}
                    <div>
                      <span className="bg-[#D71920] text-white text-xs font-heading font-extrabold px-3.5 py-1.5 uppercase tracking-widest inline-block rounded-[1px]">
                        {activeMember.role}
                      </span>
                    </div>

                    {/* Director Name */}
                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-heading font-black text-black tracking-tight uppercase leading-none mt-2.5 mb-3.5 select-text">
                      {activeMember.name}
                    </h2>

                    {/* Description Box with Left Vertical Line & Right Accent Dash */}
                    <div className="flex items-start max-w-[90%]">
                      <div className="w-[3px] bg-[#D71920] self-stretch mr-4 shrink-0" />
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed font-normal font-body select-text">
                        {activeMember.desc}
                        <span className="inline-block w-6 h-[2px] bg-[#D71920] ml-3 align-middle" />
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </main>
        </FooterReveal>
      </div>
    </SmoothScroll>
  );
}

const styleInject = (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes shutter-flicker {
      0%, 100% { opacity: 0.35; }
      12% { opacity: 0.05; }
      24% { opacity: 0.45; }
      36% { opacity: 0.08; }
      48% { opacity: 0.42; }
      60% { opacity: 0.05; }
      72% { opacity: 0.48; }
      84% { opacity: 0.1; }
      96% { opacity: 0.4; }
    }
    .animate-shutter {
      animation: shutter-flicker 0.18s linear infinite !important;
    }
    @keyframes spin-linear {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes beam-flicker-gentle {
      0%, 100% { opacity: 0.35; }
      15% { opacity: 0.342; }
      30% { opacity: 0.358; }
      45% { opacity: 0.339; }
      60% { opacity: 0.36; }
      75% { opacity: 0.345; }
      90% { opacity: 0.355; }
    }
    @keyframes film-flash {
      0%, 100% { opacity: 0; }
      20% { opacity: 0.15; }
      40% { opacity: 0.08; }
      60% { opacity: 0.22; }
      80% { opacity: 0.05; }
    }
    @keyframes dust-float-1 {
      0% { transform: translate3d(0, 0, 0); opacity: 0; }
      10% { opacity: 0.2; }
      90% { opacity: 0.2; }
      100% { transform: translate3d(50px, -60px, 0); opacity: 0; }
    }
    @keyframes dust-float-2 {
      0% { transform: translate3d(0, 0, 0); opacity: 0; }
      15% { opacity: 0.15; }
      85% { opacity: 0.15; }
      100% { transform: translate3d(-40px, -80px, 0); opacity: 0; }
    }
    @keyframes dust-float-3 {
      0% { transform: translate3d(0, 0, 0); opacity: 0; }
      20% { opacity: 0.25; }
      80% { opacity: 0.25; }
      100% { transform: translate3d(60px, -50px, 0); opacity: 0; }
    }
    @keyframes dust-float-4 {
      0% { transform: translate3d(0, 0, 0); opacity: 0; }
      10% { opacity: 0.15; }
      90% { opacity: 0.15; }
      100% { transform: translate3d(-20px, -70px, 0); opacity: 0; }
    }
  `}} />
);
