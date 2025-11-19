import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

export interface SafetyFeature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const safetyFeatures: SafetyFeature[] = [
  {
    id: 1,
    icon: "/services/management/shield.svg",
    title: "ZERO-HARM CULTURE",
    description:
      "Daily safety briefings, hazard identification, and continuous monitoring across all sites.",
  },
  {
    id: 2,
    icon: "/services/management/people.svg",
    title: "CERTIFIED TEAMS",
    description:
      "OSHA-certified safety officers and ongoing training for all personnel.",
  },
  {
    id: 3,
    icon: "/services/management/record.svg",
    title: "PROVEN RECORD",
    description:
      "Industry-leading safety metrics with 3+ million safe work hours annually.",
  },
];

const SafetyStandards: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col xl:flex-row items-center gap-20">
          {/* left */}
          <div className="flex items-center gap-2">
            <div className="relative aspect-[1/2]">
              <Image
                src="/services/management/hard-hat.png"
                width={200}
                height={400}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[408/530]">
              <Image
                src="/services/management/house.png"
                width={408}
                height={530}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col max-w-[664px]">
            <SectionCaption text="Safety first" className="text-tertiary" />

            <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
              <Heading variant="jakarta" level="h2" className="text-dark1">
                Uncompromising {""}
                <Heading variant="playfair" level="span">
                  safety standards
                </Heading>
              </Heading>

              <BodyText variant="body" className="text-tertiary/70">
                Safety isn't just a priority—it's a core value embedded in every
                decision we make. Our comprehensive safety programs have earned
                industry recognition and ensure every worker returns home safely
                each day.
              </BodyText>

              {/* stats */}
              <div className="flex flex-col gap-10">
                {safetyFeatures.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-start md:flex-row  md:items-center gap-4"
                  >
                    {/* left */}
                    <div className="bg-dark1 w-12 h-12 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                    </div>

                    {/* right */}
                    <div className="flex flex-col gap-1">
                      <LargeText variant="large-28-caps" className="text-dark1">
                        {item.title}
                      </LargeText>

                      <BodyText variant="body-sm" className="text-dark1/60">
                        {item.description}
                      </BodyText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStandards;
