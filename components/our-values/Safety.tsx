import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";
import BodyText from "../globals/typography/BodyText";
import { div } from "framer-motion/client";
import LargeText from "../globals/typography/LargeText";

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface SafetyData {
  titlePrefix: string;
  titleHighlight: string;
  descriptionParagraph1: string;
  descriptionParagraph2: string;
  stats: StatItem[];
}

const safetyData: SafetyData = {
  titlePrefix: "Safety:",
  titleHighlight: "Our top priority",
  descriptionParagraph1:
    "We believe that every person deserves to return home safely at the end of each day. Our comprehensive safety programs, rigorous training, and culture of accountability have established us as industry leaders in safety excellence.",
  descriptionParagraph2:
    "From daily toolbox talks to advanced safety technology implementation, we continuously invest in keeping our people safe. Our zero-harm philosophy extends to everyone on our sites—employees, subcontractors, and visitors alike.",
  stats: [
    {
      icon: "/our-values/light.svg",
      value: "3+ MILLION",
      label: "Safe work hours annually",
    },
    {
      icon: "/our-values/light.svg",
      value: "100%",
      label: "OSHA compliance rate",
    },
  ],
};

const Safety: React.FC = () => {
  return (
    <section className="bg-primary" data-theme="light">
      <div className="container-custom py-[60px] md:py-[100px]">
        <div className="grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-20">
          {/* left div */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center">
              <Heading variant="jakarta" level="h2" className="text-dark1">
                {safetyData.titlePrefix}
              </Heading>

              <Heading className="text-dark1" variant="playfair" level="h2">
                {" "}
                {safetyData.titleHighlight}{" "}
              </Heading>
            </div>

            {/* 1st para */}

            <BodyText variant="body" className="text-tertiary/70">
              {safetyData.descriptionParagraph1}
            </BodyText>

            <BodyText variant="body" className="text-tertiary/70">
              {safetyData.descriptionParagraph2}
            </BodyText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {safetyData.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-dark1 flex items-center justify-center w-12 h-12 rounded-[2px]">
                    <Image src={stat.icon} width={24} height={24} alt="icon" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <LargeText variant="large-28-caps" className="text-dark1">
                      {stat.value}
                    </LargeText>

                    <BodyText variant="body-sm" className="text-dark1/60">
                      {stat.label}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right div */}
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/our-values/danger.png"
                alt="danger sign"
                width={456}
                height={530}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <Image
                src="/our-values/collegues.png"
                alt="workers"
                width={200}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
