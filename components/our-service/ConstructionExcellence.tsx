import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import { div } from "framer-motion/client";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";

interface ServiceItem {
  id: number;
  image: string;
  badge: string;
  title: string;
  description: string;
  link: string;
  icon: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    image: "/services/preconstruction.png",
    badge: "PLANNING",
    title: "Preconstruction Services",
    description:
      "From initial feasibility studies to detailed cost estimates and scheduling, our preconstruction team ensures your project starts on solid ground, mitigating risks and setting clear expectations.",
    link: "LEARN MORE",
    icon: "/services/services.svg",
  },
  {
    id: 2,
    image: "/services/management.png",
    badge: "EXECUTION",
    title: "Construction Management",
    description:
      "Our experienced project managers oversee every detail, from mobilization to final walkthrough, ensuring quality craftsmanship, schedule adherence, and transparent communication throughout.",
    link: "LEARN MORE",
    icon: "/services/cm.svg",
  },
  {
    id: 3,
    image: "/services/design.png",
    badge: "INTEGRATION",
    title: "Design-Build",
    description:
      "Streamline your project with our integrated design-build approach, where our in-house design and construction teams work in unison to deliver innovative solutions on time and within budget.",
    link: "LEARN MORE",
    icon: "/services/db.svg",
  },
  {
    id: 4,
    image: "/services/innovation.png",
    badge: "INNOVATION",
    title: "Sustainability & Innovation",
    description:
      "Leading the industry in eco-friendly building practices and emerging technologies, we integrate sustainable materials and renewable energy systems into every project, creating environmentally responsible spaces.",
    link: "LEARN MORE",
    icon: "/services/leaf.svg",
  },
];

const ConstructionExcellence: React.FC = () => {
  return (
    <section className="bg-white ">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[170px] md:items-start">
          <div className="max-w-[526px]">
            <Heading variant="jakarta" level="h2" className="text-dark1">
              A century of{" "}
              <Heading variant="playfair" level="span" className="inline">
                {""} construction excellence
              </Heading>
            </Heading>
          </div>

          <div className="max-w-[664px] md:mt-24">
            <BodyText variant="body" className="text-tertiary/80 ">
              For over 100 years, BuildCorp Global has been the trusted partner
              for construction projects of every scale and complexity. Our
              comprehensive suite of services combines time-tested expertise
              with cutting-edge innovation, ensuring your vision becomes reality
              with precision, quality, and integrity.
            </BodyText>
          </div>
        </div>

        {/* excellence grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-14">
          {servicesData.map((item) => (
            <div key={item.id} className="flex flex-col">
              <Image src={item.image} alt="image" width={664} height={380} />

              <div className="bg-dark1 flex justify-center items-center w-10 h-10 rounded-full mt-8">
                <Image alt="icon" src={item.icon} width={16} height={16} />
              </div>

              <LargeText
                className="text-dark1 mt-6"
                variant="large-28-semibold"
              >
                {item.title}
              </LargeText>

              <BodyText variant="body" className=" text-tertiary/80 mt-4">
                {item.description}
              </BodyText>

              <button className="px-4 py-2.5 flex items-center  rounded w-full h-12 md:max-w-[210px] justify-between md:gap-[81px] mt-10 bg-primary">
                <BodyText variant="navigation">{item.link} </BodyText>{" "}
                <Image
                  src="/home/news/green-right-arrow.svg"
                  alt="right-icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionExcellence;
