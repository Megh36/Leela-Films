"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassPanel } from "../ui/glass-panel";

interface WayForwardItem {
  title: string;
  desc: string;
  tag: string;
}

const wayForwardData: WayForwardItem[] = [
  {
    title: "Casting & Skill Development House",
    desc: "Grooming fresh talents, hosting casting calls, and running workshops for modern storytellers.",
    tag: "Talent Development",
  },
  {
    title: "Film Distribution Network",
    desc: "Connecting indie and mainstream cinematic films with worldwide theatrical screen networks.",
    tag: "Distribution",
  },
  {
    title: "Talent Management Division",
    desc: "Nurturing and representing top directors, writers, actors, and digital creators worldwide.",
    tag: "Management",
  },
  {
    title: "Film Promotions & Marketing",
    desc: "Architecting high-conversion promotional strategies that drive viewership and theater footfall.",
    tag: "Marketing",
  },
  {
    title: "Celebrity Coverage Unit (Paparazzi Division)",
    desc: "Facilitating high-visibility media coverage, influencer ties, and premium PR presence.",
    tag: "PR & Media",
  },
  {
    title: "Short Film Competitions & Festivals",
    desc: "Running annual platforms to discover, award, and fund the next generation of filmmakers.",
    tag: "Festivals",
  },
  {
    title: "Music Distribution",
    desc: "Distributing and marketing original soundtracks and audio albums across streaming channels.",
    tag: "Music",
  },
  {
    title: "Stand-Up Comedy & Performance Space",
    desc: "Curating live stand-up comedy shows, writer circles, and intimate live acoustic gigs.",
    tag: "Live Events",
  },
  {
    title: "Creator Community Ecosystem",
    desc: "Fostering collaboration by providing resources and co-working support for digital artists.",
    tag: "Ecosystem",
  },
];

export const WayForwardTeaser: React.FC = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [screenType, setScreenType] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeHoverIndex, setActiveHoverIndex] = React.useState<number | null>(null);

  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenType("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Accordion dimensions based on screen type
  const cardWidth = screenType === "desktop" ? 420 : screenType === "tablet" ? 340 : 0;
  const cardHeight = screenType === "mobile" ? 240 : screenType === "tablet" ? 440 : 480;
  const overlapStep = screenType === "desktop" ? 50 : screenType === "tablet" ? 40 : 45;

  // Total container size
  const containerWidth = screenType === "desktop" ? 8 * overlapStep + cardWidth : 8 * overlapStep + cardWidth;
  const containerHeight = screenType === "mobile" ? 8 * overlapStep + cardHeight : cardHeight;

  // Scroll entrance/exit parameters
  const verticalOffset = useTransform(scrollYProgress, [0.0, 0.25, 0.75, 0.95], [400, 0, 0, 400]);
  const deckOpacity = useTransform(scrollYProgress, [0.0, 0.18, 0.25, 0.75, 0.82, 0.95], [0, 0.8, 1, 1, 0.8, 0]);
  const collapseProgress = useTransform(scrollYProgress, [0.0, 0.25, 0.75, 0.95], [1, 0, 0, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-black py-24 md:py-36 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-y-12">
        
        {/* Section Header with link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 relative z-30">
          <div className="flex flex-col gap-y-3">
            <motion.span
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs md:text-sm font-heading font-extrabold tracking-[0.3em] text-brand-red uppercase"
            >
              — THE FUTURE
            </motion.span>
            <motion.h2
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              Way Forward
            </motion.h2>
          </div>

          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/way-forward"
              className="group text-sm font-heading font-extrabold tracking-wider text-white hover:text-brand-red flex items-center gap-1.5 uppercase transition-colors duration-300"
            >
              Explore Way Forward
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* 1D Accordion Deck Container */}
        <div 
          id="way-forward-deck"
          className="relative mx-auto z-10 transition-all duration-300 overflow-visible"
          style={{
            width: screenType === "mobile" ? "100%" : `${containerWidth}px`,
            height: `${containerHeight}px`,
          }}
          onMouseLeave={() => {
            if (screenType !== "mobile") setActiveHoverIndex(null);
          }}
        >
          {wayForwardData.map((item, index) => {
            // Stacking order: Leftmost on top (index 0 is highest base z-index)
            // Rightmost cards are stacked behind, exposing their right 45px strip
            const baseZIndex = 20 - index;
            const isHovered = activeHoverIndex === index;

            // --- Accordion Target Position Calculations ---
            let targetX = 0;
            let targetY = 0;

            if (screenType === "mobile") {
              const restingY = index * overlapStep;
              const hoverShiftY = activeHoverIndex !== null && index >= activeHoverIndex ? 135 : 0;
              targetY = restingY + hoverShiftY;
            } else {
              const restingX = index * overlapStep;
              const hoverShiftX = activeHoverIndex !== null && index >= activeHoverIndex ? (cardWidth - overlapStep) : 0;
              targetX = restingX + hoverShiftX;
            }

            // --- Scroll Entrance/Exit Parent/Child Offsets ---
            // Collapse offsets cancel out the resting positions when collapsed
            const rawParentX = useTransform(collapseProgress, [0, 1], [0, -index * overlapStep]);
            const parentX = useMotionTemplate`${rawParentX}px`;

            const rawParentY = useTransform(collapseProgress, [0, 1], [0, -index * overlapStep]);
            const parentYCollapse = useMotionTemplate`${rawParentY}px`;

            const handleTap = (e: React.MouseEvent) => {
              if (screenType === "mobile") {
                e.preventDefault();
                setActiveHoverIndex(isHovered ? null : index);
              }
            };

            return (
              <motion.div
                key={index}
                style={
                  reducedMotion
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: screenType === "mobile" ? "100%" : `${cardWidth}px`,
                        height: screenType === "mobile" ? `${cardHeight}px` : "100%",
                        zIndex: isHovered ? 50 : baseZIndex,
                      }
                    : {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: screenType === "mobile" ? "100%" : `${cardWidth}px`,
                        height: screenType === "mobile" ? `${cardHeight}px` : "100%",
                        y: verticalOffset,
                        opacity: deckOpacity,
                        zIndex: isHovered ? 50 : baseZIndex,
                      }
                }
                animate={
                  reducedMotion
                    ? {}
                    : {
                        x: screenType === "mobile" ? 0 : targetX,
                        y: screenType === "mobile" ? targetY : 0,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Child container handling Scroll Collapse Offsets */}
                <motion.div
                  onMouseEnter={() => {
                    if (screenType !== "mobile") setActiveHoverIndex(index);
                  }}
                  onClick={handleTap}
                  style={{
                    width: "100%",
                    height: "100%",
                    x: screenType === "mobile" ? 0 : parentX,
                    y: screenType === "mobile" ? parentYCollapse : 0,
                  }}
                  className="relative rounded-2xl"
                >
                  <Link href={`/way-forward#division-${index}`} className="block h-full group">
                    <GlassPanel
                      glassColor="#080808"
                      className={`p-10 h-full flex flex-col justify-between gap-y-6 group-hover:border-brand-red/20 transition-all duration-300 shadow-none border-t border-l border-white/10 relative ${
                        screenType !== "mobile" ? "pr-20" : ""
                      }`}
                    >
                      {/* Exposed vertical index tab number on the right */}
                      {screenType !== "mobile" && (
                        <div className="absolute right-4 top-10 flex flex-col items-center gap-y-1 w-6">
                          <span className="text-base font-heading font-black tracking-wider text-[#DFBA6B] uppercase">
                            0{index + 1}
                          </span>
                          <div className="w-[1px] h-12 bg-gradient-to-b from-[#DFBA6B] to-transparent" />
                        </div>
                      )}

                      <div className="flex flex-col gap-y-4 pr-6">
                        {/* Tag */}
                        <span className="text-sm font-heading font-semibold tracking-wider text-brand-red/70 uppercase">
                          // {item.tag}
                        </span>
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white group-hover:text-brand-red transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>

                      {/* Body & Arrow */}
                      <div className="flex flex-col gap-y-4">
                        <p className="text-base md:text-lg leading-relaxed font-normal font-body text-white/70">
                          {item.desc}
                        </p>
                        <div className="flex justify-end text-white/30 group-hover:text-brand-red transition-colors duration-300">
                          <ArrowUpRight className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </GlassPanel>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default WayForwardTeaser;
