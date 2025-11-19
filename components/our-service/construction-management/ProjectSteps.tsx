import BodyText from "@/components/globals/typography/BodyText";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

export interface ServiceFeature {
  id: number;
  text: string;
}

export interface ConstructionService {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
}

export const constructionServices: ConstructionService[] = [
  {
    id: 1,
    icon: "/services/management/execution.svg",
    title: "Project Execution",
    description:
      "Our experienced project managers coordinate every aspect of construction, ensuring seamless execution from mobilization through closeout.",
    features: [
      {
        id: 1,
        text: "Site logistics and mobilization",
      },
      {
        id: 2,
        text: "Trade coordination and scheduling",
      },
      {
        id: 3,
        text: "Resource and material management",
      },
      {
        id: 4,
        text: "Real-time progress tracking",
      },
    ],
  },
  {
    id: 2,
    icon: "/services/management/ontime.svg",
    title: "On-Time Delivery",
    description:
      "We employ advanced scheduling tools and proactive problem-solving to keep projects on track, meeting milestones and deadlines consistently.",
    features: [
      {
        id: 1,
        text: "Critical path method scheduling",
      },
      {
        id: 2,
        text: "Milestone tracking and reporting",
      },
      {
        id: 3,
        text: "Proactive issue resolution",
      },
      {
        id: 4,
        text: "Acceleration strategies when needed",
      },
    ],
  },
  {
    id: 3,
    icon: "/services/management/quality.svg",
    title: "Quality Control",
    description:
      "Rigorous quality assurance processes and inspections ensure every element meets or exceeds specifications and industry standards.",
    features: [
      {
        id: 1,
        text: "Multi-phase inspection protocols",
      },
      {
        id: 2,
        text: "Material testing and verification",
      },
      {
        id: 3,
        text: "Workmanship standards enforcement",
      },
      {
        id: 4,
        text: "Comprehensive documentation",
      },
    ],
  },
];

const ProjectSteps = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constructionServices.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="bg-dark1 w-18 h-18 flex items-center justify-center rounded-[2px]">
                <Image src={item.icon} alt="icon" width={28} height={28} />
              </div>

              <LargeText variant="large-20-bold" className="text-dark1 mt-10">
                {item.title}
              </LargeText>

              <BodyText
                variant="body"
                className="text-tertiary mt-4 max-w-[432px]"
              >
                {item.description}
              </BodyText>

              {/* Features List */}
              <ul className="space-y-4 mt-6">
                {item.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-start gap-4 text-dark1"
                  >
                    <Image
                      src="/services/management/tick.svg"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                    <BodyText variant="body-sm" className="text-dark1/80">
                      {feature.text}
                    </BodyText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSteps;
