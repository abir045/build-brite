import Image from "next/image";
import React from "react";
import BodyText from "../globals/typography/BodyText";
import LargeText from "../globals/typography/LargeText";

export interface AwardCard {
  id: number;
  year: number;
  title: string;
  organization: string;
  description: string;
  icon: string; // replace with ReactNode if using actual icons
  theme: "light" | "dark"; // because your cards alternate bg color
  iconTheme: "light" | "dark"; // icon box background
}

export const awardsData: AwardCard[] = [
  {
    id: 1,
    year: 2024,
    title: "National engineering excellence award",
    organization: "American council of engineering",
    description:
      "Harbor Crossing Bridge recognized for outstanding engineering achievement",
    icon: "/globals/badge.svg",
    theme: "light",
    iconTheme: "dark",
  },
  {
    id: 2,
    year: 2024,
    title: "Construction Safety Excellence Award",
    organization: "Associated General Contractors",
    description:
      "Recognition for industry-leading safety performance across all projects",
    icon: "/globals/shield.svg",
    theme: "dark",
    iconTheme: "light",
  },
  {
    id: 3,
    year: 2024,
    title: "Green Building Leadership Award",
    organization: "U.S. Green Building Council",
    description: "Outstanding commitment to sustainable construction practices",
    icon: "/globals/badge.svg",
    theme: "light",
    iconTheme: "dark",
  },
  {
    id: 4,
    year: 2024,
    title: "Construction Innovation Award",
    organization: "Construction Management Association",
    description: "Revolutionary AI-powered project management platform",
    icon: "/globals/shield.svg",
    theme: "dark",
    iconTheme: "light",
  },
  {
    id: 5,
    year: 2024,
    title: "Project of the Year",
    organization: "Engineering News-Record",
    description: "Metropolitan Tower recognized as top commercial project",
    icon: "/globals/cup.svg",
    theme: "light",
    iconTheme: "dark",
  },
  {
    id: 6,
    year: 2024,
    title: "Best Places to Work",
    organization: "Construction Industry Institute",
    description: "Top-rated employer in construction industry",
    icon: "/globals/star.svg",
    theme: "dark",
    iconTheme: "light",
  },
];

const AwardsGrid = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col pt-4 pb-[60px] md:pb-[100px]">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {awardsData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col p-5 md:p-8 ${
                item.theme === "light" ? "bg-primary" : "bg-dark2"
              } `}
            >
              <div
                className={` w-16 h-16 rounded-[2px] flex items-center justify-center ${
                  item.iconTheme === "light" ? "bg-primary" : "bg-dark2"
                } `}
              >
                <Image width={32} height={32} src={item.icon} alt="icon" />
              </div>

              <div className="flex items-center gap-2 mt-20 md:mt-[161px]">
                <Image
                  src="/globals/briefcase.svg"
                  alt="icon"
                  width={16}
                  height={16}
                />
                <BodyText variant="body-sm-bold" className="text-accent">
                  {item.year}
                </BodyText>
              </div>

              <LargeText
                variant="large-28-semibold"
                className={`${
                  item.theme === "light" ? "text-dark1" : "text-white"
                } mt-6`}
              >
                {item.title}
              </LargeText>

              <BodyText
                variant="body-large"
                className={`${
                  item.theme === "light" ? "text-dark1" : "text-white"
                } mt-2`}
              >
                {item.organization}
              </BodyText>

              <BodyText
                variant="body-sm"
                className={`mt-6 ${
                  item.theme === "light" ? "text-tertiary/80" : "text-white/70"
                } `}
              >
                {item.description}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;
