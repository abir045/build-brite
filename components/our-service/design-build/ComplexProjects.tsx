import React from "react";
import Image from "next/image";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: "/services/design-build/fast-track.svg",
    title: "Fast-Track Schedules",
    description:
      "When time is critical and you need to occupy your building as quickly as possible.",
    bgColor: "bg-[#1C3C39]",
  },
  {
    id: 2,
    icon: "/services/design-build/budget.svg",
    title: "Budget Certainty",
    description:
      "Fixed-price contracts with guaranteed maximum price options provide cost predictability.",
    bgColor: "bg-[#204769]",
  },
  {
    id: 3,
    icon: "/services/design-build/complex.svg",
    title: "Complex Requirements",
    description:
      "Technical buildings requiring specialized expertise and coordination.",
    bgColor: "bg-[#54502A]",
  },
  {
    id: 4,
    icon: "/services/design-build/innovation.svg",
    title: "Innovation Focus",
    description:
      "Projects seeking cutting-edge design solutions and sustainable features.",
    bgColor: "bg-[#B27548]",
  },
];

const ComplexProjects: React.FC = () => {
  return (
    <section className="bg-off-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex items-center justify-center gap-2">
          <Image src="/home/green-circle.svg" width={8} height={8} alt="icon" />

          <BodyText variant="body-sm">Ideal for complex projects</BodyText>
        </div>

        <Heading
          level="h2"
          variant="jakarta"
          className="text-center mt-4 md:mt-6 max-w-[1128px] mx-auto"
        >
          <Heading className="inline-block" level="h2" variant="playfair">
            Design-build excels
          </Heading>{" "}
          in scenarios requiring fast-track delivery, innovation, &
          collaboration
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8 lg:mt-14">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} py-8 px-5 lg:p-8 rounded flex flex-col `}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={28}
                  height={28}
                  className=""
                />
              </div>

              {/* Title */}
              <LargeText
                variant="large-20-bold"
                className="text-white mt-8 md:mt-12"
              >
                {service.title}
              </LargeText>

              {/* Description */}
              <BodyText
                variant="body-sm"
                className="text-white mt-4 md:mt-6 pb-[63px] lg:pb-[92px]"
              >
                {service.description}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplexProjects;
