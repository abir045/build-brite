import SectionBanner from "@/components/globals/section-headers/SectionBanner";
import BodyText from "@/components/globals/typography/BodyText";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-accent">
      <div className="py-[60px] md:py-[100px] container-custom flex flex-col">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-2 border border-white/5 rounded-[100px] px-4 py-[3px]">
            <Image
              src="/services/sustainability/primary-green-circle.svg"
              alt="icon"
              width={8}
              height={8}
            />

            <BodyText variant="body-sm" className="text-white">
              Leading the industry in sustainable construction
            </BodyText>
          </div>

          <LargeText
            variant="large-32-reg"
            className="text-white text-center max-w-[896px]"
          >
            Sustainability isn't an afterthought—it's woven into the fabric of
            everything we do. Through innovative green building practices,
            cutting-edge technology adoption, and a commitment to continuous
            improvement, we're redefining what it means to build responsibly for
            future generations.
          </LargeText>
        </div>
      </div>
    </section>
  );
};

export default Banner;
