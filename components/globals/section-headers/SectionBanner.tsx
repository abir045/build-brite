import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import LargeText from "@/components/globals/typography/LargeText";
import React from "react";

interface BannerProps {
  caption: string;
  captionClassName?: string;
  children: React.ReactNode;
  textClassName?: string;
  textVariant?: string;
  maxWidth?: string;
  backgroundColor?: string;
  paddingY?: string;
}

const SectionBanner: React.FC<BannerProps> = ({
  caption,
  captionClassName = "text-tertiary",
  children,
  textClassName = "text-dark1",
  textVariant = "large-32-reg",
  maxWidth = "896px",
  backgroundColor = "bg-primary",
  paddingY = "py-[60px] md:py-[100px]",
}) => {
  return (
    <section className={backgroundColor} data-theme="light">
      <div className={`container-custom flex flex-col ${paddingY}`}>
        <div className="flex flex-col items-center gap-10">
          <SectionCaption text={caption} className={captionClassName} />

          <LargeText
            variant={textVariant}
            className={`${textClassName} text-center max-w-[${maxWidth}] }`}
          >
            {children}
          </LargeText>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
