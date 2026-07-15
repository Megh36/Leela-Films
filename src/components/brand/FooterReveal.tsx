"use client";

import * as React from "react";
import Footer from "../sections/Footer";

interface FooterRevealProps {
  children: React.ReactNode;
}

export const FooterReveal: React.FC<FooterRevealProps> = ({ children }) => {
  const [footerHeight, setFooterHeight] = React.useState(0);
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!footerRef.current) return;
    
    // Initial measurement
    const rect = footerRef.current.getBoundingClientRect();
    if (rect.height > 0) {
      setFooterHeight(rect.height);
    }

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.getBoundingClientRect().height;
        if (height > 0) {
          setFooterHeight(height);
        }
      }
    });

    observer.observe(footerRef.current);
    
    // Backup resize event
    const handleResize = () => {
      if (footerRef.current) {
        const h = footerRef.current.getBoundingClientRect().height;
        if (h > 0) setFooterHeight(h);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Main page content layer raised above the footer */}
      <div 
        className="relative z-20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.9)] w-full flex-1 flex flex-col"
        style={{ marginBottom: `${footerHeight}px` }}
      >
        {children}
      </div>

      {/* Fixed footer revealed underneath */}
      <div 
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 z-10 w-full pointer-events-auto"
      >
        <Footer />
      </div>
    </>
  );
};

export default FooterReveal;
