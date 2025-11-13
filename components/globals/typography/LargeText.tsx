import React from "react";
import { cn } from "@/lib/utils";

export type LargeTextVariant =
  | "large-32-reg"
  | "large-32-playfair"
  | "large-28-caps"
  | "large-28-semibold"
  | "large-28-reg"
  | "large-24-reg"
  | "large-20-bold"
  | "large-20-caps"
  | "large-18-semibold";

interface LargeTextProps {
  variant?: LargeTextVariant;
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const variantStyles: Record<LargeTextVariant, string> = {
  "large-32-reg":
    "text-[24px] md:text-[32px] leading-[120%] tracking-[-1px] font-normal",
  "large-32-playfair":
    "ext-[24px] md:text-[32px] leading-[120%] tracking-[-1px] font-normal italic",
  "large-28-caps":
    "text-[20px] md:text-[28px] leading-[100%] tracking-[-1px] font-semibold uppercase",
  "large-28-semibold":
    "text-[20px] md:text-[28px] leading-[120%] tracking-0 md:tracking-[-1px] font-semibold",
  "large-28-reg": "text-[28px] leading-[120%] tracking-[-1px] font-normal",
  "large-24-reg": "text-[24px] leading-[120%] tracking-[-1px] font-normal",
  "large-20-bold":
    "text-[20px] leading-[150%] md:leading-[140%] tracking-[0px] font-bold",
  "large-20-caps":
    "text-[20px] leading-[110%] tracking-[-1px] font-semibold uppercase",
  "large-18-semibold":
    "text-[14px] md:text-[18px] leading-[120%] tracking-[0px] font-semibold",
};

const fontStyles: Record<LargeTextVariant, string> = {
  "large-32-reg": "font-jakarta-sans",
  "large-32-playfair": "font-playfair",
  "large-28-caps": "font-jakarta-sans",
  "large-28-semibold": "font-jakarta-sans",
  "large-28-reg": "font-jakarta-sans",
  "large-24-reg": "font-jakarta-sans",
  "large-20-bold": "font-jakarta-sans",
  "large-20-caps": "font-jakarta-sans",
  "large-18-semibold": "font-jakarta-sans",
};

export const LargeText: React.FC<LargeTextProps> = ({
  variant = "large-28-reg",
  children,
  className,
  as: Component = "p",
}) => {
  return (
    <Component
      className={cn(fontStyles[variant], variantStyles[variant], className)}
    >
      {children}
    </Component>
  );
};

export default LargeText;
