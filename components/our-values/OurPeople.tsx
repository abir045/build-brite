import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";
import Heading from "../globals/typography/Heading";

interface StatItem {
  value: string;
  label: string;
}

interface PeopleStrengthData {
  title: string;
  description: string;
  stats: StatItem[];
}

const peopleStrengthData: PeopleStrengthData = {
  title:
    "At Buildbrite Global, our people are our greatest asset. We've cultivated a culture that values diverse perspectives, encourages innovation, and supports professional growth at every level.",
  description:
    "From apprentices to senior executives, every team member plays a vital role in our success. We invest in training, mentorship, and development programs that empower our people to reach their full potential while delivering exceptional results for our clients.",

  stats: [
    {
      value: "95%",
      label: "Employee satisfaction rate",
    },
    {
      value: "50+",
      label: "Training programs annually",
    },
  ],
};

const OurPeople = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
          {/* left div */}
          <div className="h-full w-full lg:px-[50px]">
            <Image
              src="/our-values/our-people.png"
              alt="people image"
              width={564}
              height={564}
              className="object-cover"
            />
          </div>

          {/* right div */}

          <div className="flex flex-col gap-4 md:gap-6">
            <SectionCaption
              text="Our people, our strength"
              className="text-tertiary"
            />

            <LargeText variant="large-24-reg" className="text-accent">
              {peopleStrengthData.title}
            </LargeText>

            <BodyText variant="body" className="text-tertiary/80">
              {peopleStrengthData.description}
            </BodyText>

            {/* stats */}

            <div className="grid grid-cols-2 gap-8 mt-4">
              {peopleStrengthData.stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <Heading
                    variant="jakarta"
                    level="h2"
                    className="text-tertiary"
                  >
                    {stat.value}
                  </Heading>

                  <BodyText variant="body-sm" className="text-tertiary ">
                    {stat.label}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
