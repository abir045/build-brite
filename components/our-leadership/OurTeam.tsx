import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Robert Chen",
    title: "Chief Executive Officer",
    description:
      "Robert brings over 15 years of construction industry experience, having led major infrastructure and commercial projects across Asia and North America.",
    image: "/our-leadership/robert.png",
  },
  {
    id: 2,
    name: "Jennifer Martinez",
    title: "Chief Financial Officer",
    description:
      "Jennifer oversees all financial operations and strategic planning, with extensive experience in global finance and risk management.",
    image: "/our-leadership/jennifer.png",
  },
  {
    id: 3,
    name: "David Thompson",
    title: "Chief Operations Officer",
    description:
      "David leads operational excellence initiatives across all regions, focusing on project delivery, safety, and client satisfaction.",
    image: "/our-leadership/david.png",
  },
  {
    id: 4,
    name: "Sarah Okonkwo",
    title: "Chief Technology Officer",
    description:
      "Sarah drives digital transformation and innovation, implementing cutting-edge construction technologies and data analytics platforms.",
    image: "/our-leadership/sarah.png",
  },
  {
    id: 5,
    name: "Michael Rosenberg",
    title: "Chief Safety Officer",
    description:
      "Michael champions our zero-harm culture, developing comprehensive safety programs that have set industry benchmarks.",
    image: "/our-leadership/michael.png",
  },
  {
    id: 6,
    name: "Lisa Wang",
    title: "VP of Sustainability",
    description:
      "Lisa leads our environmental initiatives, ensuring sustainable practices across all projects and achieving net-zero commitments.",
    image: "/our-leadership/lisa.png",
  },
];

const OurTeam: React.FC = () => {
  return (
    <div className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <Heading level="h2" variant="jakarta" className="text-dark1">
          Our{" "}
          <Heading variant="playfair" level="span">
            dynamic team
          </Heading>
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:items-start">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col ${
                index === 1 || index === 4 ? "md:mt-20" : "mt-0"
              }`}
            >
              <div className="h-full w-full">
                <Image
                  src={member.image}
                  width={432}
                  height={470}
                  alt="profile image"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <LargeText variant="large-32-reg" className="text-dark1">
                  {member.name}
                </LargeText>

                <BodyText variant="body-sm-bold" className="text-accent">
                  {member.title}
                </BodyText>

                <BodyText variant="body" className="text-tertiary/80 mt-4">
                  {member.description}
                </BodyText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
