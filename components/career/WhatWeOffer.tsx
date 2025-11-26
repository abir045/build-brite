import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

// Interface definition
interface Benefit {
  icon: string;
  id: number;
  title: string;
  description: string;
  features: string[];
}

// Data object
export const companyBenefits: Benefit[] = [
  {
    id: 1,
    icon: "/globals/hat.svg",

    title: "Learning & Development",
    description:
      "Invest in your future with comprehensive training programs and career advancement opportunities.",
    features: [
      "Leadership development programs",
      "Technical training and certifications",
      "Tuition reimbursement up to $10,000/year",
      "Mentorship and coaching",
      "Industry conference attendance",
    ],
  },
  {
    icon: "/globals/shield-primary.svg",
    id: 2,
    title: "Safety & Wellbeing",
    description:
      "Your health and safety are our top priorities, both on-site and off.",
    features: [
      "Industry-leading safety programs",
      "Comprehensive health insurance",
      "Mental health and wellness support",
      "Ergonomic workplace design",
      "Employee assistance programs",
    ],
  },
  {
    icon: "/globals/people.svg",
    id: 3,
    title: "Inclusive Environment",
    description:
      "Join a diverse team where everyone belongs and every voice is heard.",
    features: [
      "Diversity and inclusion initiatives",
      "Employee resource groups",
      "Equal opportunity employer",
      "Work-life balance programs",
      "Community engagement opportunities",
    ],
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[96px]">
        <Heading variant="jakarta" level="h2" className="text-dark1">
          What we{" "}
          <Heading variant="playfair" level="span" className="inline">
            offer
          </Heading>
        </Heading>

        {/* offer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {companyBenefits.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="bg-accent w-18 h-18 flex justify-center items-center rounded-[2px]">
                <Image src={item.icon} alt="icon" width={32} height={32} />
              </div>

              <LargeText variant="large-20-bold" className="text-dark1 mt-6">
                {item.title}
              </LargeText>

              <BodyText variant="body" className="text-tertiary/80">
                {item.description}
              </BodyText>

              <ul className="flex flex-col gap-4 mt-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Image
                      src="/globals/rounded-green-tick.svg"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                    <BodyText variant="body" className="text-dark1/80">
                      {feature}
                    </BodyText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* btn */}
        <button className="group flex self-start items-center gap-[22px] px-4 py-2.5 bg-primary text-dark1 hover:bg-dark1 hover:text-primary transition-colors duration-300 mt-14 rounded">
          <BodyText
            variant="navigation"
            // className="text-dark1"
          >
            View Open Positions
          </BodyText>
          <Image
            src="/globals/right-dark-arrow.svg"
            alt="icon"
            width={20}
            height={20}
            className="group-hover:invert"
          />
        </button>
      </div>
    </section>
  );
};

export default WhatWeOffer;
