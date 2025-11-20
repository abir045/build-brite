import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export const statsData: StatItem[] = [
  {
    id: 1,
    value: "50+",
    label: "Industry Awards",
  },
  {
    id: 2,
    value: "15",
    label: "Safety Certifications",
  },
  {
    id: 3,
    value: "200+",
    label: "LEED Projects",
  },
  {
    id: 4,
    value: "100%",
    label: "Client Satisfaction",
  },
];

const Recognition: React.FC = () => {
  return (
    <section className="bg-light-blue">
      <div className="container-custom flex flex-col  py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <SectionCaption
            text="Recognition by the numbers"
            className="text-tertiary"
          />

          <LargeText
            variant="large-32-reg"
            className="text-center max-w-[896px]"
          >
            A testament to our commitment to excellence {""}
            <LargeText variant="large-32-playfair" className="inline">
              across all facets of construction
            </LargeText>
          </LargeText>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-4  mt-10 md:mt-14 mx-auto w-full max-w-[896px]">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-3 w-full"
            >
              <Heading variant="playfair" level="h2" className="text-dark1">
                {item.value}
              </Heading>

              <BodyText variant="body-sm" className="text-tertiary">
                {item.label}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
