import React from "react";
import { cn } from "@/lib/utils";

type BodyTextVariant =
  | "body-large"
  | "body"
  | "body-sm-bold"
  | "body-sm"
  | "caption"
  | "navigation";

interface BodyTextProps {
  variant?: BodyTextVariant;
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div" | "label";
}

const variantStyles: Record<BodyTextVariant, string> = {
  "body-large": "text-lg font-medium leading-[150%]", // 18px
  body: "text-sm md:text-base font-medium leading-[150%]", // 16px
  "body-sm-bold":
    "text-sm font-semibold md:font-bold leading-[150%] md:leading-[130%] ", // 14px
  "body-sm": "text-sm font-medium leading-[150%]", // 14px
  caption: "text-xs font-medium leading-[150%] md:leading-[120%]", // 12px
  navigation: "text-xs font-semibold leading-[150%] uppercase", // 12px
};

export const BodyText: React.FC<BodyTextProps> = ({
  variant = "body",
  children,
  className,
  as: Component = "p",
}) => {
  return (
    <Component
      className={cn("font-jakarta-sans", variantStyles[variant], className)}
    >
      {children}
    </Component>
  );
};

export default BodyText;
