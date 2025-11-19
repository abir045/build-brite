import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

export interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
}

export const designBuildProcess: ProcessStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Discovery & Conceptual Design",
    description:
      "We collaborate with you to understand your vision, requirements, and budget, developing conceptual design that balance creativity with constructability.",
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Design Development & Value Engineering",
    description:
      "Our integrated team refines your design while identifying cost-saving opportunities and constructability improvements early in the process.",
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Concurrent Design & Construction",
    description:
      "As design progresses, we begin construction on completed portions, accelerating overall delivery without sacrificing quality.",
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Completion & Handover",
    description:
      "Final inspections, commissioning, and comprehensive documentation secure a smooth transition to your completed project.",
  },
];

const CollaborativeProcess: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="py-[60px] md:py-[100px] container-custom">
        <div className="flex flex-col gap-8 xl:flex-row">
          {/* left */}
          <div className="flex flex-col gap-6">
            <SectionCaption
              text="How design-build works"
              className="text-tertiary"
            />

            <Heading variant="jakarta" level="h2" className="max-w-[664px]">
              A collaborative process from{" "}
              <Heading variant="playfair" level="span" className="inline">
                concept to completion
              </Heading>
            </Heading>

            {/* right */}
            <div className="flex flex-col gap-8 mt-8">
              {designBuildProcess.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start md:flex-row md:items-center gap-10"
                >
                  <div className="w-16 h-16 bg-dark1 rounded-[2px] flex items-center justify-center">
                    <LargeText variant="large-20-bold" className="text-primary">
                      {item.stepNumber}
                    </LargeText>
                  </div>

                  {/*right  */}

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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="relative aspect-[664/648]">
            <Image
              src="/services/design-build/collab-profile.png"
              alt="collab profile"
              width={664}
              height={648}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeProcess;
