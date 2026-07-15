"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "../brand/Logo";

export const Footer: React.FC = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const navLinks = [
    { name: "About Story", href: "/about" },
    { name: "Core Services", href: "/services" },
    { name: "Our Work / Films", href: "/work" },
    { name: "Way Forward", href: "/way-forward" },
  ];

  const companyLinks = [
    { name: "Our Team", href: "/team" },
    { name: "Group of Companies", href: "/group" },
    { name: "Contact Hub", href: "/contact" },
  ];

  return (
    <footer className="relative w-full bg-[#030303] border-t border-white/10 pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background Watermark Clapperboard */}
      <div 
        className="absolute inset-0 bg-[url('/clapperboard.png')] bg-center bg-no-repeat pointer-events-none select-none opacity-[0.065] invert"
        style={{ backgroundSize: "800px", backgroundPosition: "center 45%" }}
      />

      <div className="max-w-none mx-auto flex flex-col gap-y-20 w-full relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-5 flex flex-col gap-y-5">
            <Logo size="md" isFilled />
            <p className="text-xl font-accent italic text-white/80 leading-relaxed font-normal mt-2 max-w-xl">
              Shaping Culture. Empowering Talent. Telling Indian Stories Globally.
            </p>
            <span className="text-base font-heading font-semibold tracking-[0.25em] text-white/35 uppercase mt-1">
              From Home to Worldwide
            </span>
          </div>

          {/* Quick Nav links Column */}
          <div className="md:col-span-2 flex flex-col gap-y-5">
            <h4 className="text-lg font-heading font-black tracking-widest text-brand-red uppercase">
              Navigation
            </h4>
            <div className="flex flex-col gap-y-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-heading font-semibold tracking-wider text-white/60 hover:text-white transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Corporate links Column */}
          <div className="md:col-span-2 flex flex-col gap-y-5">
            <h4 className="text-lg font-heading font-black tracking-widest text-brand-red uppercase">
              Corporate
            </h4>
            <div className="flex flex-col gap-y-3.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-heading font-semibold tracking-wider text-white/60 hover:text-white transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 flex flex-col gap-y-5">
            <h4 className="text-lg font-heading font-black tracking-widest text-brand-red uppercase">
              Reach Out
            </h4>
            <div className="flex flex-col gap-y-4 text-lg text-white/75 font-body font-normal">
              <a href="tel:+919909045481" className="flex items-center gap-3.5 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-brand-red/80 flex-shrink-0" />
                +91 99090 45481
              </a>
              <a href="mailto:info@leelafilms.com" className="flex items-center gap-3.5 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-brand-red/80 flex-shrink-0" />
                info@leelafilms.com
              </a>
              <div className="flex items-start gap-3.5 leading-relaxed">
                <MapPin className="h-5 w-5 text-brand-red/80 flex-shrink-0 mt-1" />
                <span>
                  The Leela House, Sola Bhagwat, SG Highway, Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-base tracking-wider text-white/50 uppercase font-heading font-bold">
          <div>
            © {new Date().getFullYear()} Leela Films Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Corporate Registered in India</span>
            <span className="h-1 w-1 bg-white/20 rounded-full" />
            <span>Ahmedabad · Mumbai</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
