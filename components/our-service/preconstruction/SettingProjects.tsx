import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

interface MetricItem {
  icon: string;
  title: string;
  description: string;
}

const metricsData: MetricItem[] = [
  {
    icon: "/services/preconstruction/accuracy.svg", // or you can use a component/emoji
    title: "95% ACCURACY",
    description: "Cost estimation across all projects",
  },
  {
    icon: "/services/preconstruction/cost.svg",
    title: "15-20%",
    description: "Average cost savings through value engineering",
  },
  {
    icon: "/services/preconstruction/target.svg",
    title: "100%",
    description: "Projects delivered within approved budgets",
  },
];

const SettingProjects: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="py-[60px] md:py-[100px] flex flex-col container-custom">
        <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between">
          {/* left */}
          <div className="flex flex-col gap-8">
            <div className="max-w-[526px]">
              <Heading variant="jakarta" level="h2" className="text-dark1">
                Setting projects up for{" "}
                <Heading variant="playfair" level="span">
                  success
                </Heading>
              </Heading>
            </div>

            <LargeText
              variant="large-24-reg"
              className="text-accent max-w-[664px]"
            >
              Our preconstruction services ensure every project begins with a
              solid foundation. Through meticulous planning, collaborative
              design, and accurate cost analysis, we identify opportunities and
              mitigate risks before construction begins—saving time, reducing
              costs, and delivering superior outcomes.
            </LargeText>
          </div>

          {/* right */}

          <div className="flex flex-col gap-8">
            {metricsData.map((item, index) => (
              <div className="flex items-center gap-6 " key={index}>
                <div className="bg-dark1 w-12 h-12 rounded-[2px] flex items-center justify-center">
                  <Image src={item.icon} width={24} height={24} alt="icon" />
                </div>

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
    </section>
  );
};

export default SettingProjects;
