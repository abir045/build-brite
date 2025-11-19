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
    title: "Buildbrite wins major healthcare project in Toronto",
    img: "/news/toronto.png",
    link: "/news/buildbrite-healthcare-toronto",
  },
  {
    id: 2,
    title: "Innovative Modular Construction Approach Reduces Timeline by 30%",
    img: "/news/innovative.png",
    link: "/news/modular-construction-timeline",
  },
  {
    id: 3,
    title: "Buildbrite Achieves Carbon Neutral Operations Across All Sites",
    img: "/news/carbon.png",
    link: "/news/carbon-neutral-achievement",
  },
  {
    id: 4,
    title: "Buildbrite Celebrates Decades of Engineering Excellence",
    img: "/news/engineering.png",
    link: "/news/engineering-excellence",
  },
  {
    id: 5,
    title: "We Redefine Global Construction Standards with Innovation",
    img: "/news/redefine.png",
    link: "/news/global-construction-innovation",
  },
];

const NewsPartThree: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-8 pb-[60px] md:pb-[100px]">
        <div className="flex flex-col gap-8 items-end lg:flex-row">
          {/* left */}
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

          {/* right */}
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
        </div>
      </div>
    </section>
  );
};

export default NewsPartThree;
