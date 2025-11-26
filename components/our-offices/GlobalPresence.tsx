import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import LargeText from "../globals/typography/LargeText";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";

interface Stat {
  id: number;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: "50+",
    label: "Offices Worldwide",
  },
  {
    id: 2,
    value: "11+",
    label: "Countries",
  },
  {
    id: 3,
    value: "4",
    label: "Continents",
  },
];

const GlobalPresence = () => {
  return (
    <section className="bg-light-blue">
      <div className="flex flex-col container-custom bg-light-blue py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <SectionCaption
            text="Our global presence"
            className="text-tertiary"
          />
          <LargeText
            variant="large-32-reg"
            className="text-dark1 text-center max-w-[896px]"
          >
            With offices spanning four continents, we bring local expertise and
            global resources to every project
          </LargeText>
        </div>
        {/* stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 max-w-[896px] mx-auto w-full">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-3 text-dark1 "
            >
              <Heading variant="playfair" level="h2">
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

export default GlobalPresence;
