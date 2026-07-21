"use client";

import * as React from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles, CheckCircle2 } from "lucide-react";
import GlassPanel from "../ui/glass-panel";

export const LetsConnect: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // Video modal state
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const [isHoveringButton, setIsHoveringButton] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  // Spring physics for smooth gesture tracking
  const rawProximity = React.useRef(0);
  const springConfig = { stiffness: 120, damping: 18, mass: 0.6 };
  const proximitySpring = useSpring(0, springConfig);

  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Track cursor position relative to the central play button
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || !sectionRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const dx = cursorX - buttonCenterX;
    const dy = cursorY - buttonCenterY;
    const distance = Math.hypot(dx, dy);

    // Maximum distance for proximity reaction (e.g. 450px)
    const maxDistance = 450;
    const normProximity = Math.max(0, Math.min(1, 1 - distance / maxDistance));

    // Ease proximity so hands close faster as mouse nears the button
    const easedProximity = Math.pow(normProximity, 1.4);
    proximitySpring.set(easedProximity);
  };

  const handleMouseLeave = () => {
    proximitySpring.set(0);
    setIsHoveringButton(false);
  };

  // Motion transforms for Left Wireframe Hand (moves down-right towards button center)
  const leftHandX = useTransform(proximitySpring, [0, 1], [-160, 0]);
  const leftHandY = useTransform(proximitySpring, [0, 1], [-90, 0]);
  const leftHandScale = useTransform(proximitySpring, [0, 1], [0.92, 1.05]);

  // Motion transforms for Right Human Hand (moves up-left towards button center)
  const rightHandX = useTransform(proximitySpring, [0, 1], [180, 0]);
  const rightHandY = useTransform(proximitySpring, [0, 1], [110, 0]);
  const rightHandScale = useTransform(proximitySpring, [0, 1], [0.9, 1.05]);

  // Energy spark opacity & scale at fingertips touch point
  const sparkOpacity = useTransform(proximitySpring, [0.85, 1], [0, 1]);
  const sparkScale = useTransform(proximitySpring, [0.85, 1], [0.4, 1.3]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-black overflow-hidden flex flex-col items-center justify-center py-20 select-none border-t border-b border-white/10"
    >
      {/* Background Ambient Starfield & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,27,36,0.12)_0%,_rgba(0,0,0,0.95)_70%)] pointer-events-none" />

      {/* Floating starry dust background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Header Title */}
      <div className="relative z-20 text-center max-w-2xl px-6 mb-8 lg:mb-12 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-heading font-extrabold text-brand-red uppercase tracking-[0.3em] block mb-3"
        >
          Interactive Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight"
        >
          LET'S CONNECT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-white/70 mt-3 font-body font-normal"
        >
          Move your cursor toward the center to bring humanity & innovation together.
        </motion.p>
      </div>

      {/* Central Interactive Gesture Arena */}
      <div className="relative w-full max-w-6xl h-[420px] md:h-[520px] flex items-center justify-center">

        {/* LEFT HAND — Cybernetic Wireframe Hand */}
        <motion.div
          style={{
            x: leftHandX,
            y: leftHandY,
            scale: leftHandScale,
          }}
          className="absolute left-[2%] md:left-[8%] top-[5%] md:top-[8%] z-10 pointer-events-none origin-top-left"
        >
          <svg
            width="340"
            height="320"
            viewBox="0 0 340 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[260px] sm:w-[320px] md:w-[420px] h-auto filter drop-shadow-[0_0_15px_rgba(229,27,36,0.6)]"
          >
            <defs>
              <linearGradient id="wireframeGrad" x1="0" y1="0" x2="340" y2="320" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E51B24" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#E51B24" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Arm & Wrist Mesh Lines */}
            <path d="M-20 -20 Q40 40 100 80 Q140 100 170 120" stroke="url(#wireframeGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M-40 20 Q20 80 80 120 Q120 140 150 160" stroke="url(#wireframeGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
            <path d="M0 -40 Q60 20 120 60 Q160 80 190 100" stroke="url(#wireframeGrad)" strokeWidth="1.5" strokeDasharray="4 2" />

            {/* Cross Grid Contour Lines */}
            <path d="M40 20 C60 50 80 70 100 90 C120 110 140 130 160 150" stroke="#E51B24" strokeWidth="1" opacity="0.7" />
            <path d="M70 10 C90 40 110 60 130 80 C150 100 170 120 190 140" stroke="#E51B24" strokeWidth="1" opacity="0.7" />
            <path d="M100 0 C120 30 140 50 160 70 C180 90 200 110 220 130" stroke="#E51B24" strokeWidth="1" opacity="0.7" />

            {/* Palm Base Contour Mesh */}
            <polygon points="120,90 160,110 200,95 180,65 140,60" fill="rgba(229,27,36,0.08)" stroke="#E51B24" strokeWidth="1.5" />
            <polygon points="160,110 210,130 240,110 200,95" fill="rgba(229,27,36,0.12)" stroke="#E51B24" strokeWidth="1.5" />

            {/* Thumb Segment */}
            <path d="M140 115 L125 155 L115 190 L125 210" stroke="#E51B24" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="125" cy="155" r="4" fill="#E51B24" />
            <circle cx="115" cy="190" r="4" fill="#E51B24" />
            <circle cx="125" cy="210" r="5" fill="#FFFFFF" />

            {/* Index Finger (Extending directly towards top-right center point) */}
            <path d="M200 95 L240 115 L280 130 L325 148" stroke="#E51B24" strokeWidth="3" strokeLinecap="round" />
            <circle cx="200" cy="95" r="4.5" fill="#E51B24" />
            <circle cx="240" cy="115" r="4.5" fill="#E51B24" />
            <circle cx="280" cy="130" r="4.5" fill="#E51B24" />
            
            {/* Luminous Index Fingertip */}
            <circle cx="325" cy="148" r="6" fill="#FFFFFF" />
            <circle cx="325" cy="148" r="12" fill="#E51B24" opacity="0.6" className="animate-pulse" />

            {/* Middle Finger Curved */}
            <path d="M195 120 L230 145 L255 170 L245 200" stroke="#E51B24" strokeWidth="2.5" opacity="0.85" strokeLinecap="round" />
            <circle cx="245" cy="200" r="4" fill="#E51B24" />

            {/* Ring Finger Curved */}
            <path d="M180 135 L210 165 L230 195 L215 220" stroke="#E51B24" strokeWidth="2" opacity="0.7" strokeLinecap="round" />
            <circle cx="215" cy="220" r="3.5" fill="#E51B24" />

            {/* Pinky Finger Curved */}
            <path d="M165 145 L190 175 L205 205 L190 230" stroke="#E51B24" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
            <circle cx="190" cy="230" r="3" fill="#E51B24" />
          </svg>
        </motion.div>

        {/* RIGHT HAND — Realistic Human Hand */}
        <motion.div
          style={{
            x: rightHandX,
            y: rightHandY,
            scale: rightHandScale,
          }}
          className="absolute right-[2%] md:right-[8%] bottom-[5%] md:bottom-[8%] z-10 pointer-events-none origin-bottom-right"
        >
          <svg
            width="360"
            height="320"
            viewBox="0 0 360 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[280px] sm:w-[340px] md:w-[440px] h-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
          >
            <defs>
              <linearGradient id="skinGrad" x1="360" y1="320" x2="40" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8C533E" />
                <stop offset="40%" stopColor="#D98A6C" />
                <stop offset="80%" stopColor="#F2B39B" />
                <stop offset="100%" stopColor="#FFE0D1" />
              </linearGradient>
              <linearGradient id="nailGrad" x1="40" y1="150" x2="60" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF5F0" />
                <stop offset="100%" stopColor="#F5D0C2" />
              </linearGradient>
            </defs>

            {/* Wrist & Forearm Path */}
            <path
              d="M360 320 Q280 260 220 220 C180 190 150 170 120 160"
              stroke="url(#skinGrad)"
              strokeWidth="55"
              strokeLinecap="round"
            />

            {/* Palm Shadow & Depth Layer */}
            <path
              d="M260 300 Q190 220 150 180 Q120 160 90 150"
              stroke="#5E3525"
              strokeWidth="42"
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* Main Index Finger (Extending Pointing Left-Up to center point) */}
            <path
              d="M170 180 Q110 162 42 148"
              stroke="url(#skinGrad)"
              strokeWidth="24"
              strokeLinecap="round"
            />

            {/* Index Fingertip Highlight */}
            <circle cx="42" cy="148" r="10" fill="#FFE0D1" />
            {/* Fingernail */}
            <ellipse cx="44" cy="147" rx="5" ry="3.5" fill="url(#nailGrad)" />

            {/* Middle Finger (Curved under) */}
            <path
              d="M185 200 Q130 190 95 210 Q70 225 65 245"
              stroke="url(#skinGrad)"
              strokeWidth="22"
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* Ring Finger (Curved under) */}
            <path
              d="M210 225 Q160 220 125 245 Q105 260 100 280"
              stroke="url(#skinGrad)"
              strokeWidth="20"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Thumb (Curved below palm) */}
            <path
              d="M250 250 Q200 265 170 295"
              stroke="url(#skinGrad)"
              strokeWidth="26"
              strokeLinecap="round"
              opacity="0.95"
            />
          </svg>
        </motion.div>

        {/* Dynamic Energy Spark Arc (Triggers when fingertips touch in hover state) */}
        <motion.div
          style={{
            opacity: sparkOpacity,
            scale: sparkScale,
          }}
          className="absolute z-20 pointer-events-none flex items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-red via-white to-brand-red blur-md opacity-80 animate-pulse" />
          <Sparkles className="absolute w-8 h-8 text-white animate-spin" />
        </motion.div>

        {/* CENTER INTERACTIVE PLAY / CONNECT BUTTON */}
        <div className="relative z-30 flex flex-col items-center justify-center">
          <motion.button
            ref={buttonRef}
            onClick={() => setIsVideoOpen(true)}
            onMouseEnter={() => setIsHoveringButton(true)}
            onMouseLeave={() => setIsHoveringButton(false)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer outline-none"
          >
            {/* Liquid Glass Background Wrapper */}
            <GlassPanel
              variant="accent"
              className="absolute inset-0 rounded-full flex items-center justify-center border border-white/20 group-hover:border-brand-red/60 transition-colors duration-300 shadow-[0_0_30px_rgba(229,27,36,0.3)]"
            >
              {/* Outer Pulse Ring */}
              <div className="absolute inset-0 rounded-full bg-brand-red/10 animate-ping opacity-75 group-hover:bg-brand-red/20" />

              {/* Central Play Icon */}
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(229,27,36,0.8)] transition-all duration-300">
                <Play className="w-6 h-6 md:w-7 md:h-7 fill-white translate-x-0.5" />
              </div>
            </GlassPanel>
          </motion.button>

          {/* Interactive Caption / Info Badge Below Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center"
          >
            <p className="text-xs md:text-sm font-heading font-extrabold tracking-[0.2em] text-white/90 uppercase">
              informationOS 0.5.1
            </p>
            <p className="text-[11px] md:text-xs font-heading font-medium tracking-widest text-white/50 mt-1">
              by <span className="text-brand-red">Leela Films</span>
            </p>
          </motion.div>
        </div>

      </div>

      {/* VIDEO / SHOWCASE REEL MODAL OVERLAY */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative w-full max-w-5xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-sm md:text-base font-heading font-bold text-white tracking-wide">
                    LEELA FILMS — HYBRID ECOSYSTEM REEL
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Frame */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1&modestbranding=1"
                  title="Leela Films Interactive Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer Callout */}
              <div className="p-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-heading font-bold text-white">Ready to create something iconic?</h4>
                  <p className="text-xs text-white/60 font-body">Connect with our creative team to launch your project.</p>
                </div>
                <button
                  onClick={() => {
                    setIsVideoOpen(false);
                    const el = document.getElementById("contact") || document.querySelector("footer");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-2.5 bg-brand-red hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(229,27,36,0.4)]"
                >
                  START INQUIRY
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LetsConnect;
