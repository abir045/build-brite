import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

interface Achievement {
  id: number;
  text: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    text: "Zero environmental violations",
  },
  {
    id: 2,
    text: "100% unit sales in 6 months",
  },
  {
    id: 3,
    text: "Created 400 construction jobs",
  },
  {
    id: 4,
    text: "Enhanced waterfront public access",
  },
];

const ProjectOutcome = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[148px]">
          {/* left */}
          <div className="flex flex-col gap-4 md:gap-6">
            <Heading variant="jakarta" level="h2">
              Project{" "}
              <Heading variant="playfair" level="span" className="inline">
                outcome
              </Heading>
            </Heading>

            <BodyText variant="body" className="text-tertiary/70 max-w-[548px]">
              All 280 units sold within 6 months of completion. The development
              received recognition for environmental excellence and
              architectural design.
            </BodyText>
          </div>
          {/* right */}
          <div className="flex flex-col gap-10 ">
            <LargeText variant="large-32-reg" className="text-tertiary">
              Impact & Results
            </LargeText>

            {/* stats */}
            <div className="flex flex-col gap-6">
              {achievements.map((item) => (
                <div key={item.id} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-dark1 rounded-[10px] flex items-center justify-center">
                    <Image
                      src="/globals/primary-tick.svg"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>

                  <LargeText variant="large-20-bold" className="text-dark1">
                    {item.text}
                  </LargeText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOutcome;
