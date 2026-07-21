"use client";

import * as React from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles } from "lucide-react";
import GlassPanel from "../ui/glass-panel";

export const LetsConnect: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // Video modal state
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const [isHoveringButton, setIsHoveringButton] = React.useState(false);

  // Spring physics for ultra-smooth gesture tracking
  const springConfig = { stiffness: 140, damping: 20, mass: 0.5 };
  const proximitySpring = useSpring(0, springConfig);

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

    // Maximum distance for proximity reaction (e.g. 500px radius)
    const maxDistance = 500;
    const normProximity = Math.max(0, Math.min(1, 1 - distance / maxDistance));

    // Ease proximity curve for quick organic closing when approaching
    const easedProximity = Math.pow(normProximity, 1.2);
    proximitySpring.set(easedProximity);
  };

  const handleMouseLeave = () => {
    proximitySpring.set(0);
    setIsHoveringButton(false);
  };

  // Motion transforms for Left Wireframe Hand (moves from top-left towards center)
  // Fingertip is at Y=68% inside image. Offset of -70px brings fingertip exactly to Y=0 (Play Button center)
  const leftHandX = useTransform(proximitySpring, [0, 1], [-240, 0]);
  const leftHandY = useTransform(proximitySpring, [0, 1], [-180, -70]);
  const leftHandScale = useTransform(proximitySpring, [0, 1], [0.88, 1.05]);

  // Motion transforms for Right Realistic Human Hand (moves from bottom-right towards center)
  // Lowered Y offset (+225px) so the index fingertip sits exactly in the middle of the Play Button
  const rightHandX = useTransform(proximitySpring, [0, 1], [240, 10]);
  const rightHandY = useTransform(proximitySpring, [0, 1], [280, 225]);
  const rightHandScale = useTransform(proximitySpring, [0, 1], [0.88, 1.05]);

  // Energy spark opacity & scale at fingertip touch point
  const sparkOpacity = useTransform(proximitySpring, [0.85, 1], [0, 1]);
  const sparkScale = useTransform(proximitySpring, [0.85, 1], [0.3, 1.4]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] bg-black overflow-hidden flex flex-col items-center justify-center py-16 md:py-24 select-none border-t border-b border-white/10"
    >
      {/* Deep Space Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(229,27,36,0.15)_0%,_rgba(5,5,5,0.98)_75%)] pointer-events-none" />

      {/* Floating starry particles background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(255, 255, 255, 0.45) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header Title */}
      <div className="relative z-20 text-center max-w-2xl px-6 mb-4 md:mb-8 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-heading font-extrabold text-brand-red uppercase tracking-[0.35em] block mb-2"
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
          className="text-xs md:text-sm text-white/70 mt-2 font-body font-normal"
        >
          Hover over the center play button to bring human connection & innovation together.
        </motion.p>
      </div>

      {/* Central Interactive Motion Gesture Arena */}
      <div className="relative w-full max-w-6xl h-[400px] sm:h-[480px] md:h-[560px] flex items-center justify-center">

        {/* LEFT HAND — 3D Cybernetic Wireframe Hand Cutout */}
        <motion.div
          style={{
            x: leftHandX,
            y: leftHandY,
            scale: leftHandScale,
          }}
          className="absolute left-[-5%] sm:left-[2%] md:left-[5%] top-[0%] md:top-[2%] z-10 pointer-events-none origin-top-left"
        >
          <img
            src="/wireframe-hand.png"
            alt="Cybernetic Wireframe Hand"
            className="w-[280px] sm:w-[380px] md:w-[500px] lg:w-[560px] h-auto object-contain filter drop-shadow-[0_0_25px_rgba(229,27,36,0.7)] pointer-events-none"
          />
        </motion.div>

        {/* RIGHT HAND — Photorealistic Human Hand Cutout */}
        <motion.div
          style={{
            x: rightHandX,
            y: rightHandY,
            scale: rightHandScale,
          }}
          className="absolute right-[-5%] sm:right-[2%] md:right-[5%] bottom-[0%] md:bottom-[2%] z-10 pointer-events-none origin-bottom-right"
        >
          <img
            src="/human-hand.png"
            alt="Photorealistic Human Hand"
            className="w-[300px] sm:w-[400px] md:w-[520px] lg:w-[580px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] pointer-events-none"
          />
        </motion.div>

        {/* Dynamic Energy Spark Arc (Triggers when fingertips meet in hover state) */}
        <motion.div
          style={{
            opacity: sparkOpacity,
            scale: sparkScale,
          }}
          className="absolute z-20 pointer-events-none flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-red via-white to-brand-red blur-lg opacity-90 animate-pulse" />
          <Sparkles className="absolute w-10 h-10 text-white animate-spin" />
        </motion.div>

        {/* CENTER INTERACTIVE PLAY / CONNECT BUTTON */}
        <div className="relative z-30 flex flex-col items-center justify-center">
          <motion.button
            ref={buttonRef}
            onClick={() => setIsVideoOpen(true)}
            onMouseEnter={() => setIsHoveringButton(true)}
            onMouseLeave={() => setIsHoveringButton(false)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer outline-none"
          >
            {/* Liquid Glass Background Wrapper */}
            <GlassPanel
              variant="accent"
              className="absolute inset-0 rounded-full flex items-center justify-center border border-white/25 group-hover:border-brand-red/80 transition-colors duration-300 shadow-[0_0_35px_rgba(229,27,36,0.4)]"
            >
              {/* Outer Pulse Ring */}
              <div className="absolute inset-0 rounded-full bg-brand-red/20 animate-ping opacity-75 group-hover:bg-brand-red/30" />

              {/* Central Play Icon */}
              <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_25px_rgba(229,27,36,0.9)] transition-all duration-300">
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
