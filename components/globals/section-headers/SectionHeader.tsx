import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import React from "react";

interface ServiceHeaderProps {
  caption: string;
  captionClassName?: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  theme?: "light" | "dark";
}

const SectionHeader: React.FC<ServiceHeaderProps> = ({
  caption,
  captionClassName = "text-tertiary",
  children,
  imageSrc,
  imageAlt,
  imageWidth = 1360,
  imageHeight = 580,
  theme = "light",
}) => {
  return (
    <section className="bg-white" data-theme={theme}>
      <div className="container-custom flex flex-col pt-[180px] pb-10">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionCaption text={caption} className={captionClassName} />

          <Heading
            variant="jakarta"
            level="h2"
            className="text-dark1 max-w-[780px]"
          >
            {children}
          </Heading>
        </div>

        {imageSrc && imageAlt && (
          <div className="mt-8 md:mt-14 h-[350px] md:h-[580px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionHeader;
