import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  progress?: number; // 0 to 100
  isFilled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  progress,
  isFilled = false,
  size = "md",
}) => {
  // Size classes matching the 2:1 aspect ratio of the cropped logo
  const sizeClasses = {
    sm: {
      width: "w-[56px]",
      height: "h-[28px]",
    },
    md: {
      width: "w-[88px]",
      height: "h-[44px]",
    },
    lg: {
      width: "w-[144px]",
      height: "h-[72px]",
    },
    xl: {
      width: "w-[220px] md:w-[240px]",
      height: "h-[110px] md:h-[120px]",
    },
  };

  const current = sizeClasses[size];

  return (
    <div
      className={cn(
        "relative select-none inline-block flex-shrink-0",
        current.width,
        current.height,
        className
      )}
    >
      {/* Background outline during loading progress */}
      {!isFilled && progress !== undefined && progress < 100 && (
        <img
          src="/logo.png"
          alt="Leela Films Logo Loading"
          className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
          style={{
            filter: "invert(1) hue-rotate(180deg) brightness(0.6)",
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Main active filled layer */}
      <img
        src="/logo.png"
        alt="Leela Films Logo"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{
          filter: "invert(1) hue-rotate(180deg)",
          mixBlendMode: "screen",
          clipPath: progress !== undefined ? `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)` : undefined,
        }}
      />
    </div>
  );
};
export default Logo;
