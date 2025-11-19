import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export const designBuildBenefits: Benefit[] = [
  {
    id: 1,
    icon: "/services/design-build/fast.svg",
    title: "Faster Delivery",
    description:
      "Overlapping design and construction phases reduces overall project timeline by 30-40% compared to traditional methods.",
    metric: "30-40%",
    metricLabel: "Time savings",
  },
  {
    id: 2,
    icon: "/services/design-build/efficiency.svg",
    title: "Cost Efficiency",
    description:
      "Early collaboration and value engineering lead to significant cost savings without compromising quality or design intent.",
    metric: "15-20%",
    metricLabel: "Cost savings",
  },
  {
    id: 3,
    icon: "/services/design-build/handshake.svg",
    title: "Single Point of Responsibility",
    description:
      "One contract, one team, and clear accountability streamline communication and decision-making.",
    metric: "100%",
    metricLabel: "Accountability",
  },
];

const DesignBuildAdvantage = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row items-start">
          {/* left */}
          <div className="flex flex-col gap-6 max-w-[546px]">
            <Heading variant="jakarta" level="h2" className="text-dark1">
              The{" "}
              <Heading variant="playfair" level="span" className="inline">
                design-build
              </Heading>{" "}
              advantage
            </Heading>

            <BodyText variant="body" className="text-tertiary/70">
              Experience faster delivery, better outcomes, and stronger
              partnerships
            </BodyText>
          </div>
          {/* right */}
          <div className="flex flex-col gap-14 ">
            {designBuildBenefits.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-10 mt-8 md:mt-0"
              >
                <div className="w-12 h-12 bg-dark1 rounded-[2px] flex items-center justify-center">
                  <Image src={item.icon} width={24} height={24} alt="icon" />
                </div>

                <div className="flex flex-col gap-3">
                  <LargeText variant="large-20-bold" className="text-dark1">
                    {item.title}
                  </LargeText>

                  <BodyText
                    variant="body"
                    className="text-tertiary/80 max-w-[560px]"
                  >
                    {item.description}
                  </BodyText>

                  <div className="flex items-center gap-2 mt-5">
                    <BodyText variant="body" className="text-accent">
                      {item.metric}
                    </BodyText>

                    <BodyText variant="body" className="text-dark1">
                      {item.metricLabel}
                    </BodyText>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignBuildAdvantage;
