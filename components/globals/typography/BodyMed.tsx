import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface BodyMedProps {
  children: ReactNode;
  className?: string;
}

const BodyMed: React.FC<BodyMedProps> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-[16px] font-medium leading-[150%] tracking-[0px]",
        className
      )}
    >
      {children}
    </p>
  );
};

export default BodyMed;
