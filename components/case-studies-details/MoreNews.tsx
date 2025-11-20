import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

export interface NewsCard {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const newsData: NewsCard[] = [
  {
    id: 1,
    title: "Metropolitan Tower Achieves LEED Gold Certification",
    image: "/case-studies-details/metropolitan.png",
    link: "/news/metropolitan-tower-leed-gold",
  },
  {
    id: 2,
    title: "Buildbrite Achieves 5 Million Safe Work Hours",
    image: "/case-studies-details/safe.png",
    link: "/news/safe-work-hours-5m",
  },
  {
    id: 3,
    title: "Carbon-Neutral Operations Goal Announced",
    image: "/case-studies-details/carbon-neutral.png",
    link: "/news/carbon-neutral-goal",
  },
];

const MoreNews = () => {
  return (
    <section className="bg-primary">
      <div className="py-[60px] md:py-[100px] container-custom flex flex-col">
        <div className="flex flex-col gap-10 md:gap-14">
          <Heading variant="jakarta" level="h2" className="text-dark1">
            Read more{" "}
            <Heading variant="playfair" level="span" className="inline">
              news
            </Heading>
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <Image
                  src={item.image}
                  width={432}
                  height={180}
                  alt="image"
                  className="object-cover aspect-[432/180]"
                />

                <LargeText
                  variant="large-18-semibold"
                  className="text-dark1 mt-2"
                >
                  {item.title}
                </LargeText>

                <button className="flex items-center gap-[18px] bg-transparent rounded py-2.5">
                  <BodyText variant="navigation">Read more</BodyText>

                  <Image
                    src="/globals/right-primary.svg"
                    alt="icon"
                    width={20}
                    height={20}
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

export default MoreNews;
