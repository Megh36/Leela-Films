"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface Pillar {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

const pillarsData: Pillar[] = [
  {
    title: "BE UNBEATABLE.",
    subtitle: "Take the risk. Win with us or watch us win.",
    desc: "Inspired by the fear of being average. You can literally come back from anything.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IT TAKES OBSESSION TO BE THE GREATEST.",
    subtitle: "Growing may feel uncomfortable, but so does staying the same.",
    desc: "Either increase your sacrifice or reduce your desire. The secret is action.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ALL ART IS COLLABORATION.",
    subtitle: "Steal from many, not one. Study deeply.",
    desc: "Transform, don't imitate. Originality is depth plus breadth of sources.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "BE BORING. IT'S THE ONLY WAY TO GET WORK DONE.",
    subtitle: "Discipline beats motivation. Consistency creates freedom.",
    desc: "Each wasted year is another year your father can't rest.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=800&q=80",
  },
];

export const Pillars: React.FC = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Framer Motion variants for 3D entry transitions
  const textVariants = {
    hidden: {
      opacity: 0,
      z: -200,
      rotateY: 15,
      x: -50,
    },
    visible: {
      opacity: 1,
      z: 0,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 300,
      rotateY: -20,
      rotateZ: 12,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.1,
      }
    }
  };

  return (
    <div className="w-full bg-black overflow-hidden">
      {pillarsData.map((pillar, index) => (
        <section
          key={index}
          className="relative w-full min-h-screen flex flex-col justify-center py-24 md:py-36 px-6 md:px-16 lg:px-20 border-b border-white/5 overflow-hidden"
          style={{ perspective: "1200px" }}
        >
          {/* Full-Screen Background Grayscale Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale opacity-30 pointer-events-none select-none"
            style={{ backgroundImage: `url(${pillar.image})` }}
          />
          {/* Dark overlays to blend sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black pointer-events-none" />
          <div className="cinematic-vignette opacity-70 pointer-events-none" />

          {/* Grid Layout Content Wrapper */}
          <div 
            className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            
            {/* Left side: Huge bold Red Typography */}
            <motion.div
              variants={reducedMotion ? {} : textVariants}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="lg:col-span-7 flex flex-col gap-y-6"
            >
              {/* Pillar Number */}
              <span className="text-brand-red/40 font-heading font-extrabold text-6xl md:text-8xl lg:text-[7rem] leading-none select-none drop-shadow-[0_0_15px_rgba(229,27,36,0.2)]">
                0{index + 1}
              </span>

              {/* Title */}
              <h2 
                className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-heading font-black text-brand-red tracking-tight leading-none"
                style={{ textShadow: "0 0 20px rgba(229, 27, 36, 0.45), 0 0 40px rgba(229, 27, 36, 0.15)" }}
              >
                {pillar.title}
              </h2>

              {/* Subtitle / Big Quote */}
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-normal font-body tracking-tight leading-snug">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/75 font-normal font-body max-w-2xl leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>

            {/* Right side: Stylized frame image with liquid overlay feel */}
            <motion.div
              variants={reducedMotion ? {} : cardVariants}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="lg:col-span-5 relative aspect-[4/5] max-w-md mx-auto w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] group"
            >
              {/* Image with slow zoom transition on hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${pillar.image})` }}
              />
              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-80" />
              {/* Highlight outline */}
              <div className="absolute inset-0 border border-brand-red/10 rounded-2xl pointer-events-none group-hover:border-brand-red/25 transition-colors duration-300" />
              
              {/* Lowercase script text overlay on card */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl md:text-2xl font-accent italic text-white/90 drop-shadow-md">
                  "{pillar.title.toLowerCase().replace(/\.$/, "")}"
                </p>
              </div>
            </motion.div>

          </div>
        </section>
      ))}
    </div>
  );
};
export default Pillars;
