import Image from "next/image";
import React from "react";
import BodyText from "../globals/typography/BodyText";
import Heading from "../globals/typography/Heading";

export interface ArticleCard {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string[];
  link: string;
  category?: string;
}

// Example article data object
export const articleData: ArticleCard = {
  id: "1",
  date: "September 25, 2025",
  title: "Building a zero-harm",
  subtitle: "safety culture",
  description: [
    "Explore the strategies, technologies, and cultural shifts that helped us achieve industry-leading safety performance.",
    "From wearable technology to VR training and predictive analytics, discover how we're revolutionizing construction site safety.",
  ],
  link: "/articles/bim-digital-transformation",
  category: "Technology",
};

const ZeroHarm: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* left */}

          <div className="flex flex-col gap-4 max-w-[664px] flex-1">
            <div className="flex items-center self-start gap-2 bg-primary rounded-[100px] px-3 py-[7.5px]">
              <Image
                src="/globals/brief-case.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <BodyText>{articleData.date}</BodyText>
            </div>

            <Heading
              variant="jakarta"
              level="h2"
              className="text-dark1 mt-6 max-w-[664px]"
            >
              {articleData.title}{" "}
              <Heading variant="playfair" level="span" className="inline">
                {articleData.subtitle}
              </Heading>
            </Heading>

            <div className="flex flex-col gap-4">
              {articleData.description.map((item, index) => (
                <BodyText
                  key={index}
                  variant="body"
                  className="text-tertiary/80"
                >
                  {item}
                </BodyText>
              ))}
            </div>

            <button className="flex items-center gap-4 bg-transparent py-2.5 rounded mt-6">
              <BodyText variant="navigation" className="text-dark1">
                Read full article
              </BodyText>
              <Image
                src="/globals/right-primary.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* right */}

          <div className="aspect-[664/648] flex-1">
            <Image
              src="/case-studies/zero-harm.png"
              width={664}
              height={648}
              alt="image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroHarm;
