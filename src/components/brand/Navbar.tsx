"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { GlassPanel } from "../ui/glass-panel";
import { GlassButton } from "../ui/apple-tahoe-liquid-glass-button";

interface NavbarProps {
  isDocked: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isDocked }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const menuItems = [
    { name: "Our Work / Films", href: "/work" },
    { name: "Way Forward", href: "/way-forward" },
    { name: "Our Team", href: "/team" },
    { name: "Group of Companies", href: "/group" },
    { name: "Contact", href: "/contact" },
  ];

  // Disable body scroll when full-screen menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else if (isDocked) {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isDocked]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none select-none">
        <AnimatePresence>
          {isDocked && (
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: -100 } : { opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full"
            >
              <div className="w-full px-6 md:px-12 py-7 bg-black/65 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between overflow-visible">
                
                {/* Left: Brand Logo (direct layout link, no capsule) */}
                <Link href="/" className="block active:scale-95 transition-transform duration-300">
                  <motion.div layoutId="logo-lockup" transition={reducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                    <Logo size="lg" isFilled />
                  </motion.div>
                </Link>

                {/* Right: Navigation controls */}
                <div className="flex items-center gap-12">
                  {/* About & Services desktop links */}
                  <nav className="hidden md:flex items-center gap-10">
                    <Link href="/about" className="text-xl font-bold tracking-widest text-white/80 hover:text-white transition-colors uppercase">
                      About
                    </Link>
                    <Link href="/services" className="text-xl font-bold tracking-widest text-white/80 hover:text-white transition-colors uppercase">
                      Services
                    </Link>
                  </nav>

                  {/* Hamburger Menu Icon */}
                  <GlassButton
                    size="icon"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open Menu"
                    className="h-14 w-14"
                  >
                    <Menu className="h-7 w-7 text-white/95" />
                  </GlassButton>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-screen Liquid Glass Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-2xl"
          >
            {/* Liquid-glass styled container for the full-screen menu */}
            <GlassPanel className="w-full max-w-4xl h-[90vh] md:h-[80vh] flex flex-col justify-between p-8 md:p-16 rounded-3xl relative">
              
              {/* Close Button */}
              <div className="absolute top-8 right-8">
                <GlassButton
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className="h-11 w-11"
                >
                  <X className="h-5 w-5 text-white/95" />
                </GlassButton>
              </div>

              {/* Top Section: Branding in Menu */}
              <div className="flex flex-col gap-2">
                <Logo size="md" isFilled />
                <p className="text-sm tracking-[0.2em] font-heading font-semibold text-white/45 uppercase mt-2">
                  From Home to Worldwide
                </p>
              </div>

              {/* Middle Section: Menu List (Staggered Staggering) */}
              <nav className="flex flex-col gap-y-4 md:gap-y-6 my-auto text-left">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: reducedMotion ? 0 : 0.1 + index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group inline-flex items-center text-3xl md:text-5xl font-heading font-bold text-white hover:text-brand-red transition-colors duration-300"
                    >
                      <span className="mr-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-heading text-xl md:text-2xl">
                        //
                      </span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section: Footer inside menu */}
              <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm tracking-wider text-white/45 uppercase font-heading font-semibold">
                <div>© {new Date().getFullYear()} Leela Films Pvt Ltd</div>
                <div className="flex gap-6">
                  <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

            </GlassPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
