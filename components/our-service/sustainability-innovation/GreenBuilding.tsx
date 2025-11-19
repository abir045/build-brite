import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import React from "react";

interface SustainabilityFeature {
  id: number;
  title: string;
  description: string;
}

const features: SustainabilityFeature[] = [
  {
    id: 1,
    title: "Renewable Energy Integration",
    description:
      "Solar panels, geothermal systems, and energy-efficient HVAC solutions",
  },
  {
    id: 2,
    title: "Sustainable Materials",
    description:
      "Recycled content, locally sourced materials, and low-VOC products",
  },
  {
    id: 3,
    title: "Water Conservation",
    description:
      "Rainwater harvesting, low-flow fixtures, and efficient irrigation systems",
  },
];

const GreenBuilding: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px] ">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center">
          {/* left */}
          <div className="relative aspect-[664/648]">
            <Image
              src="/services/sustainability/forest.png"
              width={664}
              height={648}
              alt="forest"
            />
          </div>

          {/* right */}

          <div className="flex flex-col gap-4">
            <div className="flex self-start items-center gap-2 bg-[#DCF3EA] rounded-[100px] px-3 py-[7.5px]">
              <Image
                src="/services/sustainability/bright-leaf.svg"
                alt="icon"
                width={16}
                height={16}
              />

              <BodyText variant="body-sm" className="text-[#117E52]">
                Green Building
              </BodyText>
            </div>

            <Heading variant="jakarta" level="h2" className="text-dark1 mt-6">
              Sustainable by{" "}
              <Heading variant="playfair" level="span" className="inline">
                design
              </Heading>
            </Heading>

            <BodyText variant="body" className="text-tertiary/80 max-w-[664px]">
              From material selection to energy systems, we integrate
              sustainability into every phase of construction. Our green
              building expertise helps clients achieve LEED, BREEAM, and other
              certifications while reducing environmental impact.
            </BodyText>
            {/* stats */}
            <div className="flex flex-col gap-4 mt-6">
              {features.map((item) => (
                <div key={item.id} className="flex items-center gap-6">
                  <Image
                    src="/services/sustainability/bright-green-tick.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />

                  <div className="flex flex-col gap-2">
                    <BodyText variant="body-sm-bold" className="text-dark1">
                      {item.title}
                    </BodyText>

                    <BodyText variant="body-sm" className="text-dark1/80">
                      {item.description}
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

export default GreenBuilding;
