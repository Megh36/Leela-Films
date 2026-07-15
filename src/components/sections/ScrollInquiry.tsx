"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { User, Mail, ChevronDown, Send } from "lucide-react";

export default function ScrollInquiry() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [interest, setInterest] = React.useState("Brand Campaign & TVC");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 58%", "start 10%"]
  });

  // Smooth scroll unrolling maps:
  // Height maps from 0px (rolled-up) to 840px (unrolled)
  // Transition folds add another 100px total height, matching the original 940px dimension.
  const parchmentHeight = useTransform(scrollYProgress, [0, 1], [0, 840]);
  
  // Subtle sway/swing kinetic motion as scroll unrolls (rotation and horizontal translate)
  const scrollSwayRotate = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, -0.6, 0.4, 0]);
  const scrollSwayX = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, -1.8, 1.2, 0]);

  // Dropdown options
  const dropdownOptions = [
    "Brand Campaign & TVC",
    "Feature Film / Cinema",
    "Music Video Production",
    "Corporate & Branding Film",
    "Other Creative Collaboration"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#070707] pt-20 pb-20 px-4 flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Shared SVG Definitions for Gradients, brocade pattern, and velvet pile texture filters */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          {/* Antique Brushed Gold / Brass */}
          <linearGradient id="antiqueGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA6B" />
            <stop offset="35%" stopColor="#C49B45" />
            <stop offset="70%" stopColor="#8F6A1E" />
            <stop offset="100%" stopColor="#5E430B" />
          </linearGradient>
          
          {/* Dark Walnut Wood */}
          <linearGradient id="walnutGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E1B0E" />
            <stop offset="40%" stopColor="#4A2D19" />
            <stop offset="70%" stopColor="#2E1B0E" />
            <stop offset="100%" stopColor="#1B0E05" />
          </linearGradient>

          {/* Embossed Brocade Floral Pattern */}
          <pattern id="brocadePattern" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Elegant repeating damask medallion outline fill */}
            <path 
              d="M 30 4 C 32 12, 42 12, 42 22 C 42 32, 32 32, 32 40 C 32 32, 22 32, 22 22 C 22 12, 28 12, 30 4 Z M 30 12 C 33 15, 38 18, 38 22 C 38 26, 33 29, 30 32 C 27 29, 22 26, 22 22 C 22 18, 27 15, 30 12 Z" 
              fill="#B31D3D" 
              fillOpacity="0.14" 
            />
            {/* Small floral accents */}
            <circle cx="30" cy="22" r="2" fill="#8F112B" fillOpacity="0.18" />
            <path d="M 30 40 C 30 43, 35 46, 38 48" fill="none" stroke="#B31D3D" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
            <path d="M 30 40 C 30 43, 25 46, 22 48" fill="none" stroke="#B31D3D" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
            <path d="M 0 30 C 8 30, 12 25, 15 22 C 12 19, 8 14, 0 14" fill="none" stroke="#B31D3D" strokeWidth="0.8" opacity="0.12" />
            <path d="M 60 30 C 52 30, 48 25, 45 22 C 48 19, 52 14, 60 14" fill="none" stroke="#B31D3D" strokeWidth="0.8" opacity="0.12" />
          </pattern>

          {/* Velvet pile micro-texture filter */}
          <filter id="velvetPileNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.06 0" />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Background radial spotlight behind scroll to make it pop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(110,8,28,0.05)_0%,_transparent_65%)] pointer-events-none" />

      {/* Scroll Wrapper to maintain constant height and resolve Lenis smooth scroll clipping */}
      <div className="w-[660px] max-w-full h-[1050px] flex flex-col items-center justify-start relative z-10">
        {/* Hanging Anchor Nail & String */}
        <div className="w-[660px] max-w-full flex flex-col items-center relative z-10">
        
        {/* String Hook Nail */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#1e140d] border border-[#a28659]/30 shadow-md mb-[-2px] z-30" />
        
        {/* Hanging Cord Triangle */}
        <svg width="480" height="90" viewBox="0 0 480 90" className="w-full max-w-[480px] drop-shadow-[0_5px_8px_rgba(0,0,0,0.7)]">
          {/* Base Shadow */}
          <path 
            d="M 240 4 L 40 85 M 240 4 L 440 85" 
            stroke="rgba(0,0,0,0.5)" 
            strokeWidth="5" 
            fill="none" 
            strokeLinecap="round"
          />
          {/* Deep Red Base Cord */}
          <path 
            d="M 240 4 L 40 85 M 240 4 L 440 85" 
            stroke="#4a0407" 
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="round"
          />
          {/* Bright Red Cord body */}
          <path 
            d="M 240 4 L 40 85 M 240 4 L 440 85" 
            stroke="#6E081C" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round"
          />
          {/* Light highlights to simulate twisted thread */}
          <path 
            d="M 240 4 L 40 85 M 240 4 L 440 85" 
            stroke="#B31D3D" 
            strokeWidth="1.2" 
            fill="none" 
            strokeLinecap="round"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      {/* Hanging Scroll Container */}
      <motion.div 
        style={reducedMotion ? {} : { rotate: scrollSwayRotate, x: scrollSwayX }}
        className="w-[660px] max-w-full flex flex-col items-center relative z-20 origin-top select-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
      >
        
        {/* Tassels & Knots (Floating fixed to the sides of top roller) */}
        <div className="absolute left-[20px] top-[75px] h-[550px] pointer-events-none z-30 hidden sm:block">
          {/* Hanging cord */}
          <div 
            className="w-[2.5px] h-[100px] mx-auto opacity-90 shadow-sm"
            style={{
              background: 'repeating-linear-gradient(-45deg, #3B0511 0px, #3B0511 2.5px, #6E081C 2.5px, #6E081C 5px, #B31D3D 5px, #B31D3D 7px)'
            }}
          />
          
          {/* Handcrafted Braided Knot */}
          <svg width="32" height="32" viewBox="0 0 32 32" className="mx-auto drop-shadow-md">
            {/* Knot structure using multiple stroke offsets to simulate weave */}
            <rect x="12" y="4" width="8" height="24" rx="2" fill="#3B0511" />
            <circle cx="16" cy="16" r="8.5" fill="#6E081C" stroke="#8F112B" strokeWidth="1" />
            <circle cx="16" cy="16" r="5" fill="#3B0511" />
            <path d="M 8 16 C 8 7, 24 7, 24 16 C 24 25, 8 25, 8 16" fill="none" stroke="#DFBA6B" strokeWidth="0.8" opacity="0.8" />
            <path d="M 12 12 C 14 14, 18 14, 20 12" fill="none" stroke="#B31D3D" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 12 20 C 14 18, 18 18, 20 20" fill="none" stroke="#B31D3D" strokeWidth="1.2" strokeLinecap="round" />
          </svg>

          {/* Antique Diamond Medallion */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="mx-auto my-1.5 drop-shadow-md">
            <path d="M 12 2 L 6 12 L 12 22 L 18 12 Z" fill="url(#antiqueGoldGrad)" stroke="#5e430b" strokeWidth="0.8" />
            {/* Tiny engraved inner border detail */}
            <path d="M 12 5 L 8 12 L 12 19 L 16 12 Z" fill="none" stroke="#5e430b" strokeWidth="0.5" opacity="0.6" />
            <circle cx="12" cy="12" r="3.5" fill="#3B0511" />
            <circle cx="12" cy="12" r="1.5" fill="url(#antiqueGoldGrad)" />
          </svg>

          {/* Silk Cord */}
          <div 
            className="w-[2.5px] h-[80px] mx-auto opacity-90 shadow-sm"
            style={{
              background: 'repeating-linear-gradient(-45deg, #3B0511 0px, #3B0511 2.5px, #6E081C 2.5px, #6E081C 5px, #B31D3D 5px, #B31D3D 7px)'
            }}
          />

          {/* Antique Gold Butterfly Medal */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="mx-auto my-1.5 drop-shadow-md">
            {/* Wing Base */}
            <path 
              d="M 12 12 C 14 5, 22 3, 22 10 C 22 14, 14 15, 12 20 C 10 15, 2 14, 2 10 C 2 3, 10 5, 12 12 Z" 
              fill="url(#antiqueGoldGrad)" 
              stroke="#5e430b" 
              strokeWidth="0.8" 
            />
            {/* Engraved Wing Vein lines */}
            <path d="M 12 12 C 15 9, 18 9, 20 10 M 12 12 C 16 12, 19 13, 21 12 M 12 12 C 14 13, 17 15, 19 15" stroke="#3c2a05" strokeWidth="0.6" fill="none" opacity="0.65" />
            <path d="M 12 12 C 9 9, 6 9, 4 10 M 12 12 C 8 12, 5 13, 3 12 M 12 12 C 10 13, 7 15, 5 15" stroke="#3c2a05" strokeWidth="0.6" fill="none" opacity="0.65" />
            {/* Butterfly body */}
            <path d="M 11.5 7 C 11.5 6, 12.5 6, 12.5 7 L 12.5 17 C 12.5 18, 11.5 18, 11.5 17 Z" fill="#3B0511" />
            <circle cx="12" cy="7" r="1.5" fill="url(#antiqueGoldGrad)" />
          </svg>

          {/* Silk Cord 2 */}
          <div 
            className="w-[2.5px] h-[30px] mx-auto opacity-90 shadow-sm"
            style={{
              background: 'repeating-linear-gradient(-45deg, #3B0511 0px, #3B0511 2.5px, #6E081C 2.5px, #6E081C 5px, #B31D3D 5px, #B31D3D 7px)'
            }}
          />

          {/* Polished Tassel Cap sphere */}
          <div 
            className="w-4 h-4 rounded-full mx-auto shadow-md relative border border-[#3B0511]/30"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #8F112B 0%, #3B0511 70%, #1a0002 100%)'
            }}
          >
            {/* Polish sheen highlight */}
            <div className="absolute top-[2px] left-[3px] w-1.5 h-1 rounded-full bg-white/20 rotate-[-30deg]" />
          </div>

          {/* Rich Handcrafted Hanging Tassel strands */}
          <div 
            className="w-5 h-32 mx-auto rounded-b-[4px] relative overflow-hidden shadow-lg border-t border-[#a28659]/30"
            style={{
              background: `
                linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 25%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.55) 100%),
                repeating-linear-gradient(90deg, #3B0511 0px, #3B0511 1px, #580306 2px, #6E081C 3px, #8F112B 4.5px, #6E081C 6px, #3B0511 7px)
              `,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 93% 97%, 86% 93%, 79% 98%, 72% 94%, 65% 97%, 58% 93%, 51% 99%, 44% 94%, 37% 97%, 30% 93%, 23% 98%, 16% 94%, 9% 96%, 0% 93%)'
            }}
          />
        </div>

        <div className="absolute right-[20px] top-[75px] h-[550px] pointer-events-none z-30 hidden sm:block">
          {/* Hanging cord */}
          <div 
            className="w-[2.5px] h-[100px] mx-auto opacity-90 shadow-sm"
            style={{
              background: 'repeating-linear-gradient(-45deg, #3B0511 0px, #3B0511 2.5px, #6E081C 2.5px, #6E081C 5px, #B31D3D 5px, #B31D3D 7px)'
            }}
          />
          
          {/* Handcrafted Braided Knot */}
          <svg width="32" height="32" viewBox="0 0 32 32" className="mx-auto drop-shadow-md">
            <rect x="12" y="4" width="8" height="24" rx="2" fill="#3B0511" />
            <circle cx="16" cy="16" r="8.5" fill="#6E081C" stroke="#8F112B" strokeWidth="1" />
            <circle cx="16" cy="16" r="5" fill="#3B0511" />
            <path d="M 8 16 C 8 7, 24 7, 24 16 C 24 25, 8 25, 8 16" fill="none" stroke="#DFBA6B" strokeWidth="0.8" opacity="0.8" />
            <path d="M 12 12 C 14 14, 18 14, 20 12" fill="none" stroke="#B31D3D" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 12 20 C 14 18, 18 18, 20 20" fill="none" stroke="#B31D3D" strokeWidth="1.2" strokeLinecap="round" />
          </svg>

          {/* Antique Diamond Medallion */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="mx-auto my-1.5 drop-shadow-md">
            <path d="M 12 2 L 6 12 L 12 22 L 18 12 Z" fill="url(#antiqueGoldGrad)" stroke="#5e430b" strokeWidth="0.8" />
            <path d="M 12 5 L 8 12 L 12 19 L 16 12 Z" fill="none" stroke="#5e430b" strokeWidth="0.5" opacity="0.6" />
            <circle cx="12" cy="12" r="3.5" fill="#3B0511" />
            <circle cx="12" cy="12" r="1.5" fill="url(#antiqueGoldGrad)" />
          </svg>

          {/* Silk Cord */}
          <div 
            className="w-[2.5px] h-[80px] mx-auto opacity-90 shadow-sm"
            style={{
              background: 'repeating-linear-gradient(-45deg, #3B0511 0px, #3B0511 2.5px, #6E081C 2.5px, #6E081C 5px, #B31D3D 5px, #B31D3D 7px)'
            }}
          />

          {/* Antique Gold Butterfly Medal */}
          <svg width="24" height="24" viewBox="0 0 24 24" className="mx-auto my-1.5 drop-shadow-md">
            <path 
              d="M 12 12 C 14 5, 22 3, 22 10 C 22 14, 14 15, 12 20 C 10 15, 2 14, 2 10 C 2 3, 10 5, 12 12 Z" 
              fill="url(#antiqueGoldGrad)" 
              stroke="#5e430b" 
              strokeWidth="0.8" 
            />
            <path d="M 12 12 C 9 9, 6 9, 4 10 M 12 12 C 8 12, 5 13, 3 12 M 12 12 C 10 13, 7 15, 5 15" stroke="#3c2a05" strokeWidth="0.6" fill="none" opacity="0.65" />
            <path d="M 12 12 C 15 9, 18 9, 20 10 M 12 12 C 16 12, 19 13, 21 12 M 12 12 C 14 13, 17 15, 19 15" stroke="#3c2a05" strokeWidth="0.6" fill="none" opacity="0.65" />
            <path d="M 11.5 7 C 11.5 6, 12.5 6, 12.5 7 L 12.5 17 C 12.5 18, 11.5 18, 11.5 17 Z" fill="#3B0511" />
            <circle cx="12" cy="7" r="1.5" fill="url(#antiqueGoldGrad)" />
          </svg>

          {/* Silk Cord 2 */}
          <div 
            className="w-[2.5px] h-[30px] mx-auto opacity-90 shadow-sm"
            style={{
              background: 'repeating-linear-gradient(-45deg, #3B0511 0px, #3B0511 2.5px, #6E081C 2.5px, #6E081C 5px, #B31D3D 5px, #B31D3D 7px)'
            }}
          />

          {/* Polished Tassel Cap sphere */}
          <div 
            className="w-4 h-4 rounded-full mx-auto shadow-md relative border border-[#3B0511]/30"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #8F112B 0%, #3B0511 70%, #1a0002 100%)'
            }}
          >
            <div className="absolute top-[2px] left-[3px] w-1.5 h-1 rounded-full bg-white/20 rotate-[-30deg]" />
          </div>

          {/* Rich Handcrafted Hanging Tassel strands */}
          <div 
            className="w-5 h-32 mx-auto rounded-b-[4px] relative overflow-hidden shadow-lg border-t border-[#a28659]/30"
            style={{
              background: `
                linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 25%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.55) 100%),
                repeating-linear-gradient(90deg, #3B0511 0px, #3B0511 1px, #580306 2px, #6E081C 3px, #8F112B 4.5px, #6E081C 6px, #380104 7px)
              `,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 94%, 93% 97%, 86% 93%, 79% 98%, 72% 94%, 65% 97%, 58% 93%, 51% 99%, 44% 94%, 37% 97%, 30% 93%, 23% 98%, 16% 94%, 9% 96%, 0% 93%)'
            }}
          />
        </div>

        {/* TOP WOODEN ROLLER & SILK TOP PANEL */}
        <div className="w-[580px] max-w-[90%] relative z-20 flex flex-col items-center">
          
          {/* Top Roller End Caps (Antique Gold collar rings and dark hand-polished walnut knobs) */}
          <div className="absolute left-[-22px] right-[-22px] top-[8px] h-[28px] flex justify-between pointer-events-none z-15">
            {/* Left Knob */}
            <svg width="24" height="28" viewBox="0 0 24 28" className="pointer-events-none drop-shadow-md">
              <rect x="0" y="5" width="4" height="18" fill="url(#antiqueGoldGrad)" rx="0.5" />
              <path 
                d="M 4 5 C 10 4, 22 6, 22 14 C 22 22, 10 24, 4 23 Z" 
                fill="url(#walnutGrad)" 
                stroke="#1B0E05" 
                strokeWidth="0.6" 
              />
              <path d="M 6 10 C 11 11, 15 13, 17 14" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 5 18 C 9 19, 13 19, 15 18" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 6 8 C 10 8, 14 10, 15 12" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
            {/* Right Knob (Mirrored) */}
            <svg width="24" height="28" viewBox="0 0 24 28" className="pointer-events-none drop-shadow-md scale-x-[-1]">
              <rect x="0" y="5" width="4" height="18" fill="url(#antiqueGoldGrad)" rx="0.5" />
              <path 
                d="M 4 5 C 10 4, 22 6, 22 14 C 22 22, 10 24, 4 23 Z" 
                fill="url(#walnutGrad)" 
                stroke="#1B0E05" 
                strokeWidth="0.6" 
              />
              <path d="M 6 10 C 11 11, 15 13, 17 14" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 5 18 C 9 19, 13 19, 15 18" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 6 8 C 10 8, 14 10, 15 12" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Top Brass corner brackets */}
          <div className="absolute left-[16px] top-[13px] w-[8px] h-[18px] fill-url z-25 bg-gradient-to-b from-[#DFBA6B] via-[#C49B45] to-[#5E430B] shadow-md border-r border-[#5e430b]/20" />
          <div className="absolute right-[16px] top-[13px] w-[8px] h-[18px] fill-url z-25 bg-gradient-to-b from-[#DFBA6B] via-[#C49B45] to-[#5E430B] shadow-md border-l border-[#5e430b]/20" />

          {/* Top Silk Roller wrap cylinder (Velvet Shading) */}
          <div 
            className="w-full h-[44px] border-b border-[#3B0511]/30 flex flex-col justify-between items-center shadow-md relative overflow-hidden rounded-t-[1px]"
            style={{
              background: `
                linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 35%, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0.8) 100%),
                linear-gradient(to right, rgba(0, 0, 0, 0.45) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0, 0, 0, 0.45) 100%),
                #6E081C
              `
            }}
          >
            {/* Brocade pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-80 pointer-events-none z-10">
              <rect width="100%" height="100%" fill="url(#brocadePattern)" />
            </svg>
            {/* Velvet pile noise overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-8 z-20" style={{ filter: 'url(#velvetPileNoise)' }} />
            
            <div className="absolute inset-x-0 top-0 h-[3px] bg-white/20 z-30" />
            <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#DFBA6B]/35 z-30" />
          </div>

          {/* Top Velvet Transition Fold (Flat panel below roller, parchment sewn into it) */}
          <div 
            className="w-full h-[50px] mt-[-1px] border-b border-[#3B0511]/20 relative z-10 overflow-hidden"
            style={{
              background: `
                linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 25%, rgba(255,255,255,0.06) 60%, rgba(0,0,0,0.25) 100%),
                linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0, 0, 0, 0.4) 100%),
                #6E081C
              `
            }}
          >
            {/* Brocade Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
              <rect width="100%" height="100%" fill="url(#brocadePattern)" />
            </svg>
            <div className="absolute inset-0 mix-blend-overlay opacity-8" style={{ filter: 'url(#velvetPileNoise)' }} />
            {/* Gold stitched seam line */}
            <div className="absolute inset-x-0 bottom-[3px] h-[1px] border-b border-dashed border-[#DFBA6B]/40" />
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#3B0511]/35" />
          </div>

        </div>

        {/* PARCHMENT BODY Chapters */}
        <motion.div 
          style={{ height: reducedMotion ? 840 : parchmentHeight }}
          className="w-[580px] max-w-[90%] bg-[#F6EFE4] relative overflow-hidden flex flex-col justify-start z-10 border-x border-[#dcd1be] shadow-[inset_0_0_40px_rgba(43,26,12,0.08)]"
        >
          {/* Velvet fold shadows cast onto top and bottom edges of the parchment */}
          <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/25 to-transparent pointer-events-none z-15" />
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/25 to-transparent pointer-events-none z-15" />

          {/* Aged paper background texture, stains and fine noise overlay */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-15 mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
          <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_60%,_rgba(61,46,26,0.06)_100%)]" />
          
          {/* Vintage border floral lace pattern at the top of the parchment paper */}
          <div className="w-full h-8 bg-[length:32px_auto] bg-repeat-x opacity-[0.25] mix-blend-multiply pointer-events-none z-0 mt-1"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='16' viewBox='0 0 32 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 14 C12 10 4 10 0 14 L0 0 L32 0 L32 14 C28 10 20 10 16 14 Z' fill='%238D1E24' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

          {/* Form Content container (Absolute positioned relative to top rod so it stays anchored as scroll extends) */}
          <div className="absolute left-0 top-0 w-full flex flex-col pt-[35px] px-[32px] sm:px-[60px] pb-[60px] z-10 text-[#3B3026]">
            
            {/* Form Title */}
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-[0.1em] text-center text-[#2A2017] mb-[32px] uppercase">
              SEND A MESSAGE
            </h3>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 pointer-events-auto">
              
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="name" className="text-sm font-heading font-extrabold tracking-widest text-[#8D1E24] uppercase">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A6451] opacity-60" />
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-[8px] pl-10 pr-4 py-3.5 bg-[rgba(255,255,255,0.18)] border border-[#B79E74] focus:border-[#8D1E24] focus:ring-1 focus:ring-[#8D1E24] outline-none text-[#3B3026] text-base transition-all duration-300 placeholder:text-[#3B3026]/40"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="email" className="text-sm font-heading font-extrabold tracking-widest text-[#8D1E24] uppercase">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A6451] opacity-60" />
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email"
                      className="w-full rounded-[8px] pl-10 pr-4 py-3.5 bg-[rgba(255,255,255,0.18)] border border-[#B79E74] focus:border-[#8D1E24] focus:ring-1 focus:ring-[#8D1E24] outline-none text-[#3B3026] text-base transition-all duration-300 placeholder:text-[#3B3026]/40"
                    />
                  </div>
                </div>

              </div>

              {/* Collaboration Interest Dropdown */}
              <div className="flex flex-col gap-y-2 relative">
                <label className="text-sm font-heading font-extrabold tracking-widest text-[#8D1E24] uppercase">
                  Collaboration Interest
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full rounded-[8px] px-4 py-3.5 bg-[rgba(255,255,255,0.18)] border border-[#B79E74] text-[#3B3026] text-base flex items-center justify-between outline-none transition-all duration-300 text-left"
                >
                  <span>{interest}</span>
                  <ChevronDown className={`h-4 w-4 text-[#8D1E24] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown list Options */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-[102%] bg-[#F5EFEB] border border-[#B79E74] rounded-[8px] shadow-xl overflow-hidden z-40 pointer-events-auto"
                    >
                      {dropdownOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setInterest(opt);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm sm:text-base text-[#3B3026] hover:bg-[#8D1E24] hover:text-[#F6EFE4] transition-colors duration-200 border-b border-[#B79E74]/20 last:border-b-0"
                        >
                          {opt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Box */}
              <div className="flex flex-col gap-y-2">
                <label htmlFor="message" className="text-sm font-heading font-extrabold tracking-widest text-[#8D1E24] uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your idea or collaboration request..."
                  className="w-full h-[180px] rounded-[8px] px-4 py-3.5 bg-[rgba(255,255,255,0.18)] border border-[#B79E74] focus:border-[#8D1E24] focus:ring-1 focus:ring-[#8D1E24] outline-none text-[#3B3026] text-base transition-all duration-300 placeholder:text-[#3B3026]/40 resize-none"
                />
              </div>

              {/* Submit Button Section */}
              <div className="pt-2 flex flex-col items-center gap-y-4">
                <button 
                  type="submit" 
                  disabled={submitted}
                  className="w-[320px] max-w-full h-[60px] rounded-full border-2 border-[#8D1E24] text-[#8D1E24] hover:bg-[#8D1E24] hover:text-[#F6EFE4] font-heading font-extrabold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
                >
                  {submitted ? "Sending Inquiry..." : "Submit Inquiry"}
                  {!submitted && <Send className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />}
                </button>

                {/* Submission Success Toast message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-heading font-bold text-[#8D1E24] tracking-wider uppercase mt-2"
                    >
                      Inquiry Sent Successfully.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>

          {/* Vintage border pattern at the bottom of the parchment paper */}
          <div className="w-full h-8 bg-[length:32px_auto] bg-repeat-x opacity-[0.25] mix-blend-multiply pointer-events-none z-0 mt-auto mb-1 rotate-180"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='16' viewBox='0 0 32 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 14 C12 10 4 10 0 14 L0 0 L32 0 L32 14 C28 10 20 10 16 14 Z' fill='%238D1E24' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
        </motion.div>

        {/* BOTTOM SILK PANEL & WOODEN ROLLER */}
        <div className="w-[580px] max-w-[90%] relative z-20 flex flex-col items-center">
          
          {/* Bottom Velvet Transition Fold (Flat panel above roller, parchment sewn into it) */}
          <div 
            className="w-full h-[50px] mb-[-1px] border-t border-[#3B0511]/20 relative z-10 overflow-hidden"
            style={{
              background: `
                linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0.06) 40%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.55) 100%),
                linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0, 0, 0, 0.4) 100%),
                #6E081C
              `
            }}
          >
            {/* Brocade Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
              <rect width="100%" height="100%" fill="url(#brocadePattern)" />
            </svg>
            <div className="absolute inset-0 mix-blend-overlay opacity-8" style={{ filter: 'url(#velvetPileNoise)' }} />
            {/* Gold stitched seam line */}
            <div className="absolute inset-x-0 top-[3px] h-[1px] border-t border-dashed border-[#DFBA6B]/40" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#3B0511]/35" />
          </div>

          {/* Bottom Roller End Caps (Walnut wood knobs with gold collar rings) */}
          <div className="absolute left-[-22px] right-[-22px] bottom-[8px] h-[28px] flex justify-between pointer-events-none z-15">
            {/* Left Knob */}
            <svg width="24" height="28" viewBox="0 0 24 28" className="pointer-events-none drop-shadow-md">
              <rect x="0" y="5" width="4" height="18" fill="url(#antiqueGoldGrad)" rx="0.5" />
              <path 
                d="M 4 5 C 10 4, 22 6, 22 14 C 22 22, 10 24, 4 23 Z" 
                fill="url(#walnutGrad)" 
                stroke="#1B0E05" 
                strokeWidth="0.6" 
              />
              <path d="M 6 10 C 11 11, 15 13, 17 14" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 5 18 C 9 19, 13 19, 15 18" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 6 8 C 10 8, 14 10, 15 12" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
            {/* Right Knob (Mirrored) */}
            <svg width="24" height="28" viewBox="0 0 24 28" className="pointer-events-none drop-shadow-md scale-x-[-1]">
              <rect x="0" y="5" width="4" height="18" fill="url(#antiqueGoldGrad)" rx="0.5" />
              <path 
                d="M 4 5 C 10 4, 22 6, 22 14 C 22 22, 10 24, 4 23 Z" 
                fill="url(#walnutGrad)" 
                stroke="#1B0E05" 
                strokeWidth="0.6" 
              />
              <path d="M 6 10 C 11 11, 15 13, 17 14" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 5 18 C 9 19, 13 19, 15 18" stroke="#1B0E05" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M 6 8 C 10 8, 14 10, 15 12" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom Brass corner brackets */}
          <div className="absolute left-[16px] bottom-[13px] w-[8px] h-[18px] fill-url z-25 bg-gradient-to-b from-[#DFBA6B] via-[#C49B45] to-[#5E430B] shadow-md border-r border-[#5e430b]/20" />
          <div className="absolute right-[16px] bottom-[13px] w-[8px] h-[18px] fill-url z-25 bg-gradient-to-b from-[#DFBA6B] via-[#C49B45] to-[#5E430B] shadow-md border-l border-[#5e430b]/20" />

          {/* Bottom Silk Roller wrap cylinder (Velvet Shading) */}
          <div 
            className="w-full h-[44px] border-t border-[#3B0511]/30 flex flex-col justify-between items-center shadow-md relative overflow-hidden rounded-b-[1px]"
            style={{
              background: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 10%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0.16) 100%),
                linear-gradient(to right, rgba(0, 0, 0, 0.45) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0, 0, 0, 0.45) 100%),
                #6E081C
              `
            }}
          >
            {/* Brocade pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-80 pointer-events-none z-10">
              <rect width="100%" height="100%" fill="url(#brocadePattern)" />
            </svg>
            {/* Velvet pile noise overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-8 z-20" style={{ filter: 'url(#velvetPileNoise)' }} />

            <div className="absolute inset-x-0 bottom-0 h-[4px] bg-black/45 z-30" />
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-[#DFBA6B]/35 z-30" />
          </div>
        </div>

      </motion.div>
    </div>
  </section>
  );
}
