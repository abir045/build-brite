import React from "react";
import Image from "next/image";
import BodyText from "../typography/BodyText";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;

  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",

  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2.5 flex items-center rounded w-full h-12 md:max-w-[210px] justify-between md:gap-[81px] mt-10  ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <BodyText variant="navigation">{children}</BodyText>
      <Image
        src="/home/news/green-right-arrow.svg"
        alt="right-icon"
        width={20}
        height={20}
      />
    </button>
  );
};

export default Button;
