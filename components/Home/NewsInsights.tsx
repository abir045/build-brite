import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import LargeText from "../globals/typography/LargeText";

interface NewsArticle {
  id: string;
  title: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Buildbrite Wins Major Healthcare Project in Toronto",
    image: "/home/news/1.png",
    slug: "buildbrite-wins-major-healthcare-project",
    featured: true,
  },
  {
    id: "2",
    title: "Innovative Modular Construction Approach Reduces Timeline by 30%",
    image: "/home/news/2.png",
    slug: "innovative-modular-construction-approach",
  },
  {
    id: "3",
    title: "Buildbrite Achieves Carbon Neutral Operations Across All Sites",
    image: "/home/news/3.png",
    slug: "buildbrite-achieves-carbon-neutral",
  },
  {
    id: "4",
    title: "Buildbrite Celebrates Decades of Engineering Excellence",
    image: "/home/news/4.png",
    slug: "buildbrite-celebrates-decades",
  },
  {
    id: "5",
    title: "We Redefines Global Construction Standards with Innovation",
    image: "/home/news/5.png",
    slug: "redefines-global-construction-standards",
  },
];

const NewsInsights = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        {/* heading */}
        <div className="flex flex-col gap-4 md:gap-6">
          <Heading level="h2" variant="jakarta" className="text-dark1">
            News &{" "}
            <Heading
              level="h2"
              variant="playfair"
              className="text-dark1 inline-block"
            >
              Insights
            </Heading>
          </Heading>

          <BodyText variant="body" className="text-tertiary/60">
            Stay informed about our latest projects, innovations, and industry
            leadership
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-8 md:mt-14 md:gap-20">
          {/* left div */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-52 md:h-[354px]">
              <Image
                alt="image"
                src={newsArticles[0].image}
                fill
                className="object-cover"
              />
            </div>

            <LargeText variant="large-28-semibold" className="text-dark1">
              {newsArticles[0].title}
            </LargeText>

            <button className="py-2.5 bg-transparent self-start flex items-center gap-[18px] rounded">
              <BodyText variant="navigation" className="text-dark1">
                Read more
              </BodyText>

              <Image
                src="/home/news/green-right-arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                className="text-accent"
              />
            </button>

            <button className="mt-[106px] bg-primary  items-center gap-2.5 px-4 py-2.5 self-start rounded hidden md:flex">
              <BodyText variant="navigation">View all news & insights</BodyText>

              <Image
                src="/home/dark-right-arrow.svg"
                width={16}
                height={10}
                alt="arrow"
              />
            </button>
          </div>

          {/* right div */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
            {newsArticles.slice(1).map((article) => (
              <div className="flex flex-col gap-4" key={article.id}>
                <div className="relative w-full h-[98px] md:h-[180px]">
                  <Image
                    src={article.image}
                    fill
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <LargeText variant="large-18-semibold" className="text-dark1">
                  {article.title}
                </LargeText>

                <button className="py-2.5 bg-transparent self-start flex items-center gap-[18px] rounded">
                  <BodyText variant="navigation" className="text-dark1">
                    Read more
                  </BodyText>

                  <Image
                    src="/home/news/green-right-arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="text-accent"
                  />
                </button>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-primary  items-center justify-between px-4 py-2.5  rounded flex md:hidden">
            <BodyText variant="navigation">View all news & insights</BodyText>

            <Image
              src="/home/dark-right-arrow.svg"
              width={16}
              height={10}
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
