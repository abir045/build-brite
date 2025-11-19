import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

interface SustainabilityStat {
  icon: string;
  percentage: string;
  description: string;
}

const stats: SustainabilityStat[] = [
  {
    icon: "/services/sustainability/leaf.svg",
    percentage: "85%",
    description: "Projects with sustainable materials",
  },
  {
    icon: "/services/sustainability/light.svg",
    percentage: "40%",
    description: "Carbon emission reduction",
  },
  {
    icon: "/services/sustainability/carbon.svg",
    percentage: "200+",
    description: "LEED certified projects",
  },
  {
    icon: "/services/sustainability/water.svg",
    percentage: "90%",
    description: "Construction waste recycled",
  },
];

const Precision: React.FC = () => {
  return (
    <section className="bg-white ">
      <div className="py-[60px] md:py-[100px] container-custom flex flex-col">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* left */}
          <div className="flex flex-col gap-4 md:gap-6">
            <SectionCaption
              text="Sustainable by design"
              className="text-tertiary"
            />

            <Heading variant="jakarta" level="h2" className="text-dark1">
              <Heading variant="playfair" level="span" className="inline">
                Precision
              </Heading>{" "}
              in every detail
            </Heading>

            <BodyText variant="body" className="text-tertiary/70 max-w-[548px]">
              Building for a sustainable tomorrow through green practices and
              technological advancement
            </BodyText>
          </div>
          {/* right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-accent rounded-[2px] h-12 w-12 flex items-center justify-center">
                  <Image src={stat.icon} alt="icon" width={24} height={24} />
                </div>

                <div className="flex flex-col gap-1">
                  <LargeText variant="large-28-caps" className="text-dark1">
                    {stat.percentage}
                  </LargeText>

                  <BodyText variant="body-sm" className="text-tertiary/70">
                    {stat.description}
                  </BodyText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precision;
