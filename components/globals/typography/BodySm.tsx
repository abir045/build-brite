import React, { ReactNode } from "react";

interface BodySmProps {
  children: ReactNode;
  className?: string;
}

const BodySm: React.FC<BodySmProps> = ({ children, className }) => {
  return (
    <p
      className={` text-[14px] font-bold leading-[130%] tracking-[0px] ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
};

export default BodySm;
