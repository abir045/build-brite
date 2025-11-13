"use client";

import Image from "next/image";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import LargeText from "../globals/typography/LargeText";

const historyData = {
  title: "Since 1975, Buildbrite has been at the forefront of the industry",
  description: [
    "Every project we undertake reflects our dedication to pushing boundaries while maintaining the highest standards of craftsmanship.",
    "Our expertise spans commercial, residential, healthcare, education, and infrastructure projects. We don't just construct buildings—we create environments where people live, work, learn, and heal.",
    "With a global workforce of over 10,000 professionals and operations in more than 30 countries, we bring local expertise and global best practices to every project. Our collaborative approach ensures that clients, architects, engineers, and communities work together seamlessly to achieve extraordinary results.",
  ],
  badge: "1350 Fill + 254 Hug",
  stats: [
    {
      icon: "/About/years.svg",
      value: "50+",
      label: "Years in Business",
    },
    {
      icon: "/About/employees.svg",
      value: "10,000+",
      label: "Employees Worldwide",
    },
    {
      icon: "/About/countries.svg",
      value: "11+",
      label: "Countries",
    },
    {
      icon: "/About/projects.svg",
      value: "500+",
      label: "Completed Projects",
    },
  ],
};

export default function History() {
  return (
    <section data-theme="light" className="bg-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[148px] gap-8">
          <div className="max-w-[548px]">
            <Heading level="h3" variant="jakarta">
              {historyData.title}
            </Heading>
          </div>

          <div className="flex flex-col gap-4">
            {historyData.description.map((paragraph, index) => (
              <BodyText
                key={index}
                className={index === 0 ? "text-accent" : "text-tertiary"}
              >
                {paragraph}
              </BodyText>
            ))}
          </div>
        </div>
        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-[60px] md:mt-[100px]">
          {historyData.stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-dark1 w-12 h-12 rounded-[2px] flex items-center justify-center">
                <Image src={stat.icon} width={24} height={24} alt="icons" />
              </div>

              <div className="flex flex-col gap-1">
                <LargeText variant="large-28-caps" className="text-dark1">
                  {stat.value}
                </LargeText>

                <BodyText variant="body-sm" className="text-dark1/60">
                  {stat.label}
                </BodyText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
