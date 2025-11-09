import React from "react";

interface NavigationTextProps {
  text: string;
  className?: string;
}

const NavigationText: React.FC<NavigationTextProps> = ({ text, className }) => {
  return (
    <span
      className={`font-semibold text-[12px] leading-[150%] tracking-[0px] uppercase  ${
        className || ""
      }`}
    >
      {text}
    </span>
  );
};

export default NavigationText;
