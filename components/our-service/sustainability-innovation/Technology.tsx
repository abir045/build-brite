import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import React from "react";

interface TechnologyFeature {
  id: number;
  title: string;
  description: string;
}

const features: TechnologyFeature[] = [
  {
    id: 1,
    title: "Building Information Modeling (BIM)",
    description:
      "3D modeling and clash detection that identifies issues before construction begins, saving time and reducing costly changes.",
  },
  {
    id: 2,
    title: "Drones & Robotics",
    description:
      "Aerial site surveys, progress monitoring, and automated tasks that improve accuracy and safety.",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description:
      "Predictive analytics for scheduling, risk management, and resource optimization.",
  },
];

const Technology: React.FC = () => {
  return (
    <section className="bg-light-blue" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between ">
          {/* left */}
          <div className="flex flex-col gap-4">
            <div className="flex self-start items-center gap-2 bg-[#D6E8FF] rounded-[100px] px-3 py-[7.5px]">
              <Image
                src="/services/sustainability/tech.svg"
                alt="icon"
                width={16}
                height={16}
              />

              <BodyText variant="body-sm" className="text-[#1447E6]">
                Technology & Innovation
              </BodyText>
            </div>

            <Heading variant="jakarta" level="h2" className="text-dark1 mt-6">
              Building Smarter{" "}
              <Heading variant="playfair" level="span" className="inline">
                with Technology
              </Heading>
            </Heading>

            <BodyText variant="body" className="text-tertiary/80 max-w-[591px]">
              We leverage cutting-edge construction technologies to improve
              efficiency, reduce waste, enhance safety, and deliver superior
              quality. Our commitment to innovation keeps us at the forefront of
              the industry.
            </BodyText>

            {/* stats */}
            <div className="flex flex-col gap-4 mt-6">
              {features.map((item) => (
                <div key={item.id} className="flex items-center gap-6">
                  <Image
                    src="/services/sustainability/bright-blue-tick.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />

                  <div className="flex flex-col gap-2">
                    <BodyText variant="body-sm-bold" className="text-dark1">
                      {item.title}
                    </BodyText>

                    <BodyText
                      variant="body-sm"
                      className="text-dark1/80 max-w-[543px]"
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
              src="/services/sustainability/worker.png"
              alt="image"
              width={664}
              height={648}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
