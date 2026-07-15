"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, UserCheck, Orbit, Home, Zap } from "lucide-react";
import { GlassPanel } from "../ui/glass-panel";
import { GlassButton } from "../ui/apple-tahoe-liquid-glass-button";
import Link from "next/link";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className, hoverScale }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0, active: false });
  const [cardDim, setCardDim] = React.useState({ width: 0, height: 0 });

  const handleMouseEnter = () => {
    if (cardRef.current) {
      setCardDim({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }
    setMousePos(prev => ({ ...prev, active: true }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePos(prev => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full w-full"
    >
      <GlassPanel hoverScale={hoverScale} className={`${className} overflow-hidden relative group`}>
        {/* Spotlight Beam & Head (Tracks Mouse Cursor on X & Y) */}
        {mousePos.active && cardDim.width > 0 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-20">
            <defs>
              <radialGradient id="spotlightGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
                <stop offset="45%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </radialGradient>
              <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.35)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
              </linearGradient>
            </defs>
            
            {/* Dynamic Spotlight Cone Beam from Top Center to Cursor */}
            <polygon
              points={`${cardDim.width / 2 - 12},0 ${cardDim.width / 2 + 12},0 ${mousePos.x + 70},${mousePos.y} ${mousePos.x - 70},${mousePos.y}`}
              fill="url(#beamGradient)"
              filter="blur(8px)"
            />
            
            {/* Dynamic Spotlight Circle (follows cursor on X and Y) */}
            <circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="80"
              fill="url(#spotlightGlow)"
              filter="blur(6px)"
            />

            {/* Top Light Source Lens */}
            <ellipse
              cx={cardDim.width / 2}
              cy="0"
              rx="24"
              ry="8"
              fill="rgba(255, 255, 255, 0.85)"
              filter="blur(3px)"
            />
          </svg>
        )}
        {children}
      </GlassPanel>
    </div>
  );
};

export const VisionMissionValues: React.FC = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const values = [
    { text: "Creating stories that inspire and entertain", icon: Sparkles },
    { text: "Providing space for every creative voice", icon: UserCheck },
    { text: "Thinking beyond conventional boundaries", icon: Orbit },
    { text: "Building a \"home away from home\" for creators", icon: Home },
    { text: "Delivering excellence with passion, agility, and purpose", icon: Zap },
  ];

  return (
    <section className="relative w-full bg-black py-24 md:py-36 px-6 md:px-16 lg:px-20">
      <div className="w-full mx-auto flex flex-col gap-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-y-3">
          <motion.span
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm md:text-base font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
          >
            — THE STRATEGY
          </motion.span>
          <motion.h2
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-[4rem] font-heading font-extrabold text-white tracking-tight leading-none"
          >
            Vision, Mission & Core Values
          </motion.h2>
        </div>

        {/* 3-Part Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Vision & Mission (Stack) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Vision Card */}
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1"
            >
              <SpotlightCard hoverScale className="p-12 h-full flex flex-col gap-y-6">
                <div className="h-12 w-12 bg-brand-red/10 border border-brand-red/30 rounded-xl flex items-center justify-center text-brand-red relative z-10 flex-shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-white relative z-10">Our Vision</h3>
                <p className="text-white relative z-10 font-bold text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-tight">
                  To build the entertainment industry's most powerful hybrid ecosystem — creating iconic storytelling while delivering world class creative, production and brand services at a global standard.
                </p>
                <div className="pt-4 mt-auto relative z-10">
                  <Link href="/about">
                    <GlassButton variant="default" size="sm" className="font-heading font-bold text-xs tracking-wider">
                      EXPLORE ECOSYSTEM
                    </GlassButton>
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex-1"
            >
              <SpotlightCard hoverScale className="p-12 h-full flex flex-col gap-y-6">
                <div className="h-12 w-12 bg-brand-red/10 border border-brand-red/30 rounded-xl flex items-center justify-center text-brand-red relative z-10 flex-shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-white relative z-10">Our Mission</h3>
                <p className="text-white relative z-10 font-bold text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-tight">
                  To dominate every vertical of the entertainment and media industry through premium creativity, cultural impact, and uncompromising execution that connects with every generation.
                </p>
                <div className="pt-4 mt-auto relative z-10">
                  <Link href="/about">
                    <GlassButton variant="default" size="sm" className="font-heading font-bold text-xs tracking-wider">
                      EXPLORE ECOSYSTEM
                    </GlassButton>
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Right Block: Core Values List (Single Tall Glass Card) */}
          <motion.div
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6"
          >
            <SpotlightCard className="p-12 h-full flex flex-col gap-y-8">
              <h3 className="text-4xl md:text-5xl font-heading font-black text-white border-b border-white/10 pb-4 relative z-10">
                Core Values
              </h3>
              
              <div className="flex flex-col gap-y-12 my-auto relative z-10">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: reducedMotion ? 0 : idx * 0.1 }}
                      className="flex items-start gap-4 group/item"
                    >
                      <div className="h-10 w-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/75 group-hover/item:text-brand-red group-hover/item:border-brand-red/30 transition-all duration-300 flex-shrink-0 mt-0.5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-white/85 leading-relaxed font-semibold font-body text-xl md:text-2xl lg:text-3xl group-hover/item:text-white transition-colors duration-300">
                        {val.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
