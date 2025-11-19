import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import LargeText from "../globals/typography/LargeText";
import { div } from "framer-motion/client";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    value: "11+",
    label: "Years of Experience",
  },
  {
    value: "$50B+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "On-Time Completion",
  },
  {
    value: "99.5%",
    label: "Client Satisfaction",
  },
];

const TrackRecord = () => {
  return (
    <section className="bg-primary" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-10">
          <SectionCaption
            text="Proven track record"
            className="text-tertiary text-center"
          />

          <div className="max-w-[896px] text-center">
            <LargeText variant="large-32-reg" className="text-dark1">
              Numbers that speak to our{" "}
              <LargeText variant="large-32-playfair" className="inline">
                commitment to excellence
              </LargeText>
            </LargeText>
          </div>

          {/* stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            {statsData.map((item, index) => (
              <div key={index} className="flex flex-col w-56 gap-3">
                <Heading
                  variant="playfair"
                  level="h2"
                  className="text-dark1 text-center"
                >
                  {item.value}
                </Heading>

                <BodyText
                  variant="body-sm"
                  className="text-tertiary text-center"
                >
                  {item.label}
                </BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
