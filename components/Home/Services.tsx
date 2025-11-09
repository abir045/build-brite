import React from "react";
import Image from "next/image";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import LargeText from "../globals/typography/LargeText";

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
    icon: "/home/preconstruction.svg",
    title: "Preconstruction",
    description:
      "Strategic planning and design services to ensure your project starts on the right foundation with accurate budgeting and scheduling.",
    bgColor: "bg-[#1E3A3A]",
  },
  {
    id: 2,
    icon: "/home/project-management.svg",
    title: "Project Management",
    description:
      "End-to-end construction management delivering projects on time, within budget, and to the highest quality standards.",
    bgColor: "bg-[#2C4A6B]",
  },
  {
    id: 3,
    icon: "/home/sustainability.svg",
    title: "Sustainability",
    description:
      "Green building solutions and LEED certification expertise to minimize environmental impact and maximize efficiency.",
    bgColor: "bg-[#6B6B3D]",
  },
  {
    id: 4,
    icon: "/home/services.svg",
    title: "Engineering Services",
    description:
      "Innovative engineering solutions combining cutting-edge technology with proven methodologies for complex projects.",
    bgColor: "bg-[#B8774D]",
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-off-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex items-center justify-center gap-2">
          <Image src="/home/green-circle.svg" width={8} height={8} alt="icon" />

          <BodyText variant="body-sm">Our services</BodyText>
        </div>

        <Heading
          level="h2"
          variant="jakarta"
          className="text-center mt-4 md:mt-6 max-w-[956px] mx-auto"
        >
          Comprehensive solutions tailored to meet the{" "}
          <Heading className="inline-block" level="h2" variant="playfair">
            unique needs
          </Heading>{" "}
          of every project
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

export default Services;
