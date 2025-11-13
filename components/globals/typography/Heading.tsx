import React from "react";
import { cn } from "@/lib/utils";

// Font variants enum for type safety
export type FontVariant = "jakarta" | "playfair";

// Heading levels
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "span";

interface HeadingProps {
  level?: HeadingLevel;
  variant?: FontVariant;
  children: React.ReactNode;
  className?: string;
}

// Styles for Jakarta Sans variant
const jakartaStyles: Record<HeadingLevel, string> = {
  h1: "text-[40px] md:text-[60px] leading-[100%] tracking-[-3px] font-medium",
  h2: "text-[32px] md:text-[48px] leading-[100%] tracking-[-1px] font-medium",
  h3: "text-[32px] md:text-[40px] leading-[100%] tracking-[-1px] font-medium",
  h4: "text-[24px] md:text-[36px] leading-[100%] tracking-[-2px] font-medium",
  span: "text-[32px] md:text-[48px] leading-[100%] tracking-[-1px] font-medium",
};

// Styles for Playfair Display variant
const playfairStyles: Record<HeadingLevel, string> = {
  h1: "text-[40px] md:text-[60px] leading-[100%] tracking-[-3px] font-medium italic",
  h2: "text-[32px] md:text-[48px] leading-[100%] tracking-[-1px] font-medium italic",
  h3: "text-[40px] leading-[100%] tracking-[-1px] font-medium", // No playfair variant specified, using jakarta
  h4: "text-[24px] md:text-[36px] leading-[150%] tracking-[0px] font-medium italic",
  span: "text-[32px] md:text-[48px] leading-[100%] tracking-[-1px] font-medium italic",
};

// Font-specific styles
const fontStyles: Record<FontVariant, string> = {
  jakarta: "font-jakarta-sans",
  playfair: "font-playfair-display",
};

export const Heading: React.FC<HeadingProps> = ({
  level = "h1",
  variant = "jakarta",
  children,
  className,
}) => {
  const Tag = level;
  const sizeStyles =
    variant === "playfair" ? playfairStyles[level] : jakartaStyles[level];

  return (
    <Tag className={cn(fontStyles[variant], sizeStyles, className)}>
      {children}
    </Tag>
  );
};

export default Heading;
