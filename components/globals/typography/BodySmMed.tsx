import React, { ReactNode } from "react";

interface BodySmMedProps {
  children: ReactNode;
  className?: string;
}

const BodySmMed: React.FC<BodySmMedProps> = ({ children, className }) => {
  return (
    <p
      className={`text-[14px] font-medium leading-[150%] tracking-[0px] ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
};

export default BodySmMed;
