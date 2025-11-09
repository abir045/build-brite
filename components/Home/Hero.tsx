import Image from "next/image";
import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import { Button } from "../ui/button";

const stats = [
  {
    id: 1,
    number: "11+",
    label: "Countries",
  },
  {
    id: 2,
    number: "500+",
    label: "Active Projects",
  },
  {
    id: 3,
    number: "10,000+",
    label: "Professionals",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[90dvh] flex flex-col">
      <Image
        src="/home/hero.png"
        fill
        alt="hero background image"
        className="w-full h-full object-cover"
      />

      <div className="flex flex-col gap-6 absolute bottom-[60px] md:bottom-40 inset-x-5 lg:inset-x-10">
        <Heading
          variant="jakarta"
          level="h1"
          className="text-white max-w-[896px]"
        >
          Delivering world-class construction & management services{" "}
          <Heading
            variant="playfair"
            level="h1"
            className="text-white inline-block"
          >
            across the globe
          </Heading>
        </Heading>

        <BodyText variant="body-large" className="text-white opacity-70">
          Building the Future with Integrity and Innovation
        </BodyText>

        {/* button and stats */}

        <div className="flex flex-col gap-[116px] md:gap-0 md:flex-row md:justify-between mt-10 w-full">
          <div className="">
            <button
              // variant="ghost"
              className="flex items-center gap-[34px] px-4 py-2.5 border border-white/15 rounded"
            >
              <BodyText variant="navigation" className="text-primary">
                View our projects
              </BodyText>
              <Image
                src="/home/right-arrow.svg"
                alt="right icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="flex items-start gap-20">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-2 w-full ">
                <Heading variant="jakarta" level="h4" className="text-primary">
                  {stat.number}
                </Heading>
                <BodyText
                  variant="body-sm"
                  className="text-xs md:text-sm text-white/70 "
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

export default Hero;
