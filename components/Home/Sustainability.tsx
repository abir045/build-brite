import React from "react";
import Image from "next/image";
import BodyText from "../globals/typography/BodyText";
import Heading from "../globals/typography/Heading";
import LargeText from "../globals/typography/LargeText";

interface StatisticItem {
  id: number;
  icon: string;
  value: string;
  description: string;
}

const statisticsData: StatisticItem[] = [
  {
    id: 1,
    icon: "home/sustainability/light.svg", // Replace with your icon path
    value: "85%",
    description: "Renewable energy integration",
  },
  {
    id: 2,
    icon: "home/sustainability/light.svg", // Replace with your icon path
    value: "90%",
    description: "Construction waste recycled",
  },
  {
    id: 3,
    icon: "home/sustainability/light.svg", // Replace with your icon path
    value: "40%",
    description: "Water consumption reduction",
  },
  {
    id: 4,
    icon: "home/sustainability/light.svg", // Replace with your icon path
    value: "200+",
    description: "LEED certified projects",
  },
];

const Sustainability: React.FC = () => {
  return (
    <section className="bg-primary" data-theme="light">
      <div className="custom-container py-[60px] md:py-[100px] px-5 md:px-10">
        {/* outer div */}
        <div className="flex flex-col gap-[78px] lg:flex-row items-center lg:gap-20">
          {/* left div */}
          <div className="flex items-center gap-[4.7px] md:gap-2 w-full">
            <div className="relative w-full  h-[235px] md:h-[400px] ">
              <Image
                src="/home/sustainability/sustain1.png"
                alt="green image"
                fill
                className="object-cover w-full"
              />
            </div>
            <div className="relative w-full h-[310px] md:h-[530px] ">
              <Image
                src="/home/sustainability/sustain2.png"
                alt="green image"
                fill
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* right div */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/home/green-circle.svg"
                width={8}
                height={8}
                alt="green circle"
              />
              <BodyText variant="body-sm" className="text-tertiary">
                Sustainability & CSR
              </BodyText>
            </div>

            <Heading level="h2" variant="jakarta" className="text-dark1">
              Building responsibly for a{" "}
              <Heading
                variant="playfair"
                level="h2"
                className="inline-block text-dark1"
              >
                sustainable tomorrow
              </Heading>
            </Heading>

            <BodyText variant="body" className="text-tertiary/70">
              Our commitment to sustainability goes beyond compliance. We
              integrate eco-friendly practices into every phase of construction,
              reducing carbon footprints and creating buildings that harmonize
              with their environment.
            </BodyText>

            {/* data grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-8 gap-6 md:gap-10">
              {statisticsData.map((stat) => (
                <div key={stat.id} className="flex items-center gap-4">
                  <div className="bg-dark1 p-3 rounded-[10px] md:rounded-[2px] w-12 h-12">
                    <Image src={stat.icon} width={24} height={24} alt="icon" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <LargeText
                      variant="large-28-caps"
                      className="text-[24px] md:text-[28px] text-dark1"
                    >
                      {stat.value}
                    </LargeText>

                    <BodyText variant="body-sm" className="text-dark1/60">
                      {stat.description}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
