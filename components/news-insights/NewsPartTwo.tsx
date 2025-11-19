import Image from "next/image";
import React from "react";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

export interface NewsItem {
  id: number;
  title: string;
  img: string;
  link: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "New AI-Powered Construction Platform ",
    img: "/news/ai.png",
    link: "/news/buildbrite-healthcare-toronto",
  },
  {
    id: 2,
    title: "Metropolitan Tower Achieves LEED Gold Certification",
    img: "/news/metropolitan.png",
    link: "/news/modular-construction-timeline",
  },
  {
    id: 3,
    title: "Buildbrite Achieves 5 Million Safe Work Hours",
    img: "/news/safe.png",
    link: "/news/carbon-neutral-achievement",
  },
  {
    id: 4,
    title: "International Airport Terminal Breaks Ground",
    img: "/news/airport.png",
    link: "/news/engineering-excellence",
  },
  {
    id: 5,
    title: "Carbon-Neutral Operations Goal Announced",
    img: "/news/goal.png",
    link: "/news/global-construction-innovation",
  },
];

const NewsPartTwo: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-8 pb-[60px] md:pb-[100px]">
        <div className="flex flex-col gap-8 items-end lg:flex-row">
          {/* left */}
          <div className="grid grid-cols-2 gap-8 flex-1">
            {newsData.slice(1).map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div className="relative aspect-[316/180]">
                  <Image
                    src={item.img}
                    width={316}
                    height={180}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>

                <LargeText
                  variant="large-18-semibold"
                  className="text-tertiary mt-8"
                >
                  {item.title}
                </LargeText>

                <button className="flex items-center self-start gap-[18px] bg-transparent rounded py-2.5">
                  <BodyText variant="navigation">Read more</BodyText>
                  <Image
                    src="/globals/right-primary.svg"
                    width={20}
                    height={20}
                    alt="right nav"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* right */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative aspect-[664/354]">
              <Image
                src={newsData[0].img}
                height={354}
                width={664}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>

            <LargeText variant="large-28-semibold" className="text-dark1 mt-2">
              {newsData[0].title}
            </LargeText>

            <button className="flex items-center self-start gap-[18px] bg-transparent rounded py-2.5">
              <BodyText variant="navigation">Read more</BodyText>
              <Image
                src="/globals/right-primary.svg"
                width={20}
                height={20}
                alt="right nav"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPartTwo;
