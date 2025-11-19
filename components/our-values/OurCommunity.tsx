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

interface CommitmentData {
  stats: StatItem[];
}

const commitmentData: CommitmentData = {
  stats: [
    {
      value: "$5M+",
      label: "Community investment annually",
    },
    {
      value: "10,000+",
      label: "Volunteer hours",
    },
    {
      value: "50+",
      label: "Scholarship programs",
    },
  ],
};

const OurCommunity: React.FC = () => {
  return (
    <section className="bg-primary">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex justify-center">
            <SectionCaption
              className="text-tertiary text-center"
              text={"Building communities, not just buildings"}
            />
          </div>

          <div className="max-w-[896px] text-center">
            <LargeText variant="large-32-reg" className="text-dark1 inline">
              Our commitment extends beyond construction sites. Through{" "}
              <LargeText variant="large-32-playfair" className="inline">
                community partnerships, educational programs, and volunteer
                initiatives
              </LargeText>
              , we actively contribute to the social and economic wellbeing of
              the communities where we work.
            </LargeText>
          </div>

          {/* stat grid */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {commitmentData.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-3">
                <Heading
                  variant="playfair"
                  level="h2"
                  className="text-dark1 text-center"
                >
                  {stat.value}
                </Heading>

                <BodyText
                  variant="body-sm"
                  className="text-tertiary text-center"
                >
                  {stat.label}
                </BodyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommunity;
