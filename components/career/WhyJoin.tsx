import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";

// Interface definition
interface CompanyStat {
  icon: string; // You can use 'lucide-react' icon names or a custom icon component
  value: string;
  label: string;
}

// Data object
export const companyStats: CompanyStat[] = [
  {
    icon: "/globals/people.svg", // or use your icon component/string
    value: "10,000+",
    label: "Employees Worldwide",
  },
  {
    icon: "/globals/location-primary.svg",
    value: "50+",
    label: "Offices Globally",
  },
  {
    icon: "/globals/revenue.svg",
    value: "$50B+",
    label: "Annual Revenue",
  },
  {
    icon: "/globals/badge-primary.svg",
    value: "TOP 10",
    label: "Best Places to Work",
  },
];

const WhyJoin = () => {
  return (
    <section className="bg-accent">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Heading variant="jakarta" level="h2" className="text-white">
            Why join{" "}
            <Heading variant="playfair" level="span" className="inline">
              Buildbrite global?
            </Heading>
          </Heading>

          <BodyText
            variant="body"
            className="text-white/70 text-center max-w-[896px]"
          >
            At BuildCorp, we believe our people are our greatest asset. We're
            committed to fostering a culture of excellence, innovation, and
            continuous growth. Join us in building the future while building
            your career.
          </BodyText>
          {/* grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 mt-10 md:mt-14">
            {companyStats.map((item, index) => (
              <div key={index} className="flex items-center gap-4 w-full">
                <div className="flex items-center justify-center rounded-[2px] bg-dark1 w-12 h-12">
                  <Image src={item.icon} alt="icon" width={24} height={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <LargeText variant="large-28-caps" className="text-white">
                    {item.value}
                  </LargeText>

                  <BodyText variant="body-sm" className="text-white">
                    {item.label}
                  </BodyText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
