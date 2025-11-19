import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import React from "react";

interface SafetyFeature {
  id: number;
  number: string;
  title: string;
  description: string;
}

const features: SafetyFeature[] = [
  {
    id: 1,
    number: "01",
    title: "Wearable Tech",
    description:
      "Smart helmets and vests with sensors that detect hazards in real-time",
  },
  {
    id: 2,
    number: "02",
    title: "VR Training",
    description:
      "Immersive safety training that prepares workers for real-world scenarios",
  },
  {
    id: 3,
    number: "03",
    title: "IoT Monitoring",
    description:
      "Connected sensors tracking environmental conditions and equipment status",
  },
  {
    id: 4,
    number: "04",
    title: "AI Safety Analysis",
    description:
      "Machine learning identifies patterns and predicts potential safety issues",
  },
];

const TechnologyEnhancedSafety: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-6">
          <Heading
            variant="jakarta"
            level="h2"
            className="text-dark1 text-center"
          >
            <Heading variant="playfair" level="span">
              Technology
            </Heading>
            -enhanced safety
          </Heading>

          <BodyText
            variant="body"
            className="text-dark1/60 text-center max-w-[896px]"
          >
            Innovation extends to worker safety. We deploy advanced technologies
            and methodologies that protect our teams while improving overall
            project outcomes.
          </BodyText>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8 md:mt-14">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-bottle gap-6 p-5 md:p-8 h-[396px] rounded"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                <LargeText variant="large-20-bold" className="text-primary">
                  {item.number}
                </LargeText>
              </div>

              <LargeText variant="large-20-bold" className="text-white/80 mt-6">
                {item.title}
              </LargeText>

              <BodyText variant="body-sm" className="text-white/70">
                {item.description}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyEnhancedSafety;
