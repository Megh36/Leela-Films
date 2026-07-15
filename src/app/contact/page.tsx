"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/brand/Navbar";
import FooterReveal from "@/components/brand/FooterReveal";
import SmoothScroll from "@/components/brand/SmoothScroll";
import GlassPanel from "@/components/ui/glass-panel";
import { GlassButton } from "@/components/ui/apple-tahoe-liquid-glass-button";

export default function ContactPage() {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
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
                — GET IN TOUCH
              </motion.span>
              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white leading-none"
              >
                Contact Hub
              </motion.h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Block: Details & Addresses */}
              <motion.div
                initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-5 flex flex-col gap-y-8"
              >
                {/* Direct Info */}
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl font-heading font-bold text-white">General Contact</h2>
                  <div className="flex flex-col gap-y-3.5 text-base text-white/80 font-body font-normal">
                    <a href="tel:+919909045481" className="flex items-center gap-3 hover:text-white transition-colors group">
                      <div className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 group-hover:text-brand-red group-hover:border-brand-red/30 transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      +91 99090 45481
                    </a>
                    <a href="mailto:info@leelafilms.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                      <div className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 group-hover:text-brand-red group-hover:border-brand-red/30 transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                      info@leelafilms.com
                    </a>
                  </div>
                </div>

                {/* Corporate Address */}
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-2 text-sm font-heading font-extrabold tracking-widest text-brand-red uppercase">
                    <MapPin className="h-4 w-4" />
                    Corporate Address
                  </div>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed font-body font-normal pl-6">
                    The Leela House, F-2, Mangalam Nirvana 2, Behind Umiya Campus, Sola Bhagwat, S.G. Highway, Ahmedabad – 380060, Gujarat, India
                  </p>
                </div>

                {/* Registered Address */}
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-2 text-sm font-heading font-extrabold tracking-widest text-brand-red/70 uppercase">
                    <MapPin className="h-4 w-4" />
                    Registered Address
                  </div>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed font-body font-normal pl-6">
                    C/23, Flat No. 502, Golds Green, Yamuna Nagar, Oshiwara Andheri West, Mumbai – 400053, Maharashtra, India
                  </p>
                </div>

              </motion.div>

              {/* Right Block: Liquid Glass Contact Form */}
              <motion.div
                initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="lg:col-span-7"
              >
                <GlassPanel className="p-10 border border-white/5">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
                    
                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="name" className="text-sm font-heading font-extrabold tracking-widest text-white/75 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kumpal Patel"
                        className="w-full rounded-xl px-4 py-3 bg-[rgba(15,15,15,0.6)] border border-white/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none text-white text-base transition-all duration-300 placeholder:text-white/20"
                      />
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="email" className="text-sm font-heading font-extrabold tracking-widest text-white/75 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@leelafilms.com"
                        className="w-full rounded-xl px-4 py-3 bg-[rgba(15,15,15,0.6)] border border-white/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none text-white text-base transition-all duration-300 placeholder:text-white/20"
                      />
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="message" className="text-sm font-heading font-extrabold tracking-widest text-white/75 uppercase">
                        Message / Narrative Inquiry
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your next project, collaboration, or general query..."
                        className="w-full rounded-xl px-4 py-3 bg-[rgba(15,15,15,0.6)] border border-white/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none text-white text-base transition-all duration-300 placeholder:text-white/20 resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <GlassButton type="submit" variant="accent" className="w-full sm:w-auto font-bold group">
                        {submitted ? "Sending Inquiry..." : "Submit Inquiry"}
                        <Send className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300" />
                      </GlassButton>

                      <AnimatePresence>
                        {submitted && (
                          <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-sm font-heading font-semibold text-brand-red tracking-wider uppercase"
                          >
                            Inquiry Sent successfully.
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                  </form>
                </GlassPanel>
              </motion.div>

            </div>
          </main>
        </FooterReveal>
      </div>
    </SmoothScroll>
  );
}
