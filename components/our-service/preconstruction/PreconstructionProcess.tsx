import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

interface ProcessStep {
  id: number;
  icon?: string;
  title: string;
  description: string;
}

const preconstructionSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Our preconstruction process",
    description:
      "A systematic approach that transforms your vision into a budget-conscious plan",
  },
  {
    id: 2,
    icon: "/services/preconstruction/heart.svg",
    title: "Initial Consultation",
    description: "Understanding your vision, goals, and requirements",
  },
  {
    id: 3,
    icon: "/services/preconstruction/bulb.svg",
    title: "Feasibility Analysis",
    description: "Site evaluation, regulatory review, and project viability",
  },
  {
    id: 4,
    icon: "/services/preconstruction/design.svg",
    title: "Design Collaboration",
    description: "Working with architects to optimize design for buildability",
  },
  {
    id: 5,
    icon: "/services/preconstruction/design.svg",
    title: "Cost Development",
    description: "Detailed budgeting and financial planning",
  },
  {
    id: 6,
    icon: "/services/preconstruction/bulb.svg",
    title: "Schedule Planning",
    description: "Creating realistic timelines with milestone tracking",
  },
  {
    id: 7,
    icon: "/services/preconstruction/design.svg",
    title: "Transition to Build",
    description: "Seamless handoff to construction phase",
  },
];

const PreconstructionProcess = () => {
  return (
    <section className="bg-primary" data-theme="light">
      <div className="container-custom py-[60px] md:py-[100px]">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {preconstructionSteps.map((value, index) => {
            return (
              <div
                key={value.id}
                className={`bg-bottle flex flex-col  rounded ${
                  index === 0
                    ? "col-span-1 md:col-span-2 bg-primary p-0"
                    : "col-span-1 p-4 md:p-8"
                }`}
              >
                {value.icon && (
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-12">
                    <Image src={value.icon} width={28} height={28} alt="icon" />
                  </div>
                )}

                {index === 0 && (
                  <SectionCaption
                    className="text-tertiary"
                    text={value.title}
                  />
                )}

                {index === 0 && (
                  <Heading
                    variant="jakarta"
                    level="h2"
                    className="mt-6 max-w-[548px] pb-10 md:pb-10"
                  >
                    <Heading variant="playfair" level="span">
                      A systematic approach {""}
                    </Heading>
                    that transforms your vision into a budget-conscious plan
                  </Heading>
                )}

                {index !== 0 && (
                  <div className="flex flex-col gap-4  md:gap-6">
                    <LargeText
                      variant="large-20-bold"
                      className="text-white/80 "
                      // className={` ${
                      //   index === 0
                      //     ? "text-primary mt-[103.5px] text-[24px] md:text-[32px] leading-[120%] tracking-[-1px] font-normal"
                      //     : "text-white "
                      // }`}
                    >
                      {value.title}
                    </LargeText>
                    <BodyText
                      variant="body-sm"
                      className="text-white/70 pb-14 md:pb-[134px]"
                      // className={`text-white/70 pb-8 md:pb-[111px] ${
                      //   index === 0 ? "max-w-[400px]" : ""
                      // }`}
                    >
                      {value.description}
                    </BodyText>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreconstructionProcess;
