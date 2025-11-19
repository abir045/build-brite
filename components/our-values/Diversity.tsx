import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";
import Heading from "../globals/typography/Heading";

interface StatItem {
  value: string;
  label: string;
}

interface DiversityData {
  title: string;
  description: string;
  stats: StatItem[];
}

const diversityData: DiversityData = {
  title:
    "We believe that diverse teams build better buildings. Our commitment to diversity and inclusion goes beyond compliance—it's about creating an environment where everyone feels valued, respected, and empowered to contribute their unique perspectives.",
  description:
    "Through active recruitment, inclusive policies, and ongoing education, we're building a workforce that reflects the communities we serve. This diversity of thought, background, and experience makes us stronger, more innovative, and better equipped to tackle complex challenges.",

  stats: [
    {
      value: "95%",
      label: "Women in leadership",
    },
    {
      value: "60+",
      label: "Nationalities represented",
    },
  ],
};

const Diversity = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
          {/* left div */}
          <div className="h-full w-full lg:px-[50px]">
            <Image
              src="/our-values/diversity.png"
              alt="people image"
              width={564}
              height={564}
              className="object-cover"
            />
          </div>

          {/* right div */}

          <div className="flex flex-col gap-4 md:gap-6">
            <SectionCaption
              text="Diversity & inclusion"
              className="text-tertiary"
            />

            <LargeText variant="large-24-reg" className="text-accent">
              {diversityData.title}
            </LargeText>

            <BodyText variant="body" className="text-tertiary/80">
              {diversityData.description}
            </BodyText>

            {/* stats */}

            <div className="grid grid-cols-2 gap-8 mt-4">
              {diversityData.stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <Heading
                    variant="jakarta"
                    level="h2"
                    className="text-tertiary"
                  >
                    {stat.value}
                  </Heading>

                  <BodyText variant="body-sm" className="text-tertiary ">
                    {stat.label}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diversity;
