import Image from "next/image";
import React from "react";
import BodyText from "../globals/typography/BodyText";
import Heading from "../globals/typography/Heading";
import Link from "next/link";

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
  date: "October 1, 2025",
  title: "Sustainable materials:",
  subtitle: "The future of construction",
  description: [
    "An in-depth look at how implementing Building Information Modeling across our portfolio delivered significant cost savings and improved project outcomes.",
    "Our comprehensive BIM adoption strategy transformed project delivery, enabling better collaboration, clash detection, and predictive analytics that reduced rework and accelerated timelines.",
  ],
  link: "/articles/bim-digital-transformation",
  category: "Technology",
};

const SustainableMaterials: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* left */}

          <div className="aspect-[664/648] flex-1">
            <Image
              src="/case-studies/sustainable.png"
              width={664}
              height={648}
              alt="image"
              className="object-cover "
            />
          </div>
          {/* right */}

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
            <Link href={`/case-studies/${articleData.id}`}>
              <button className="flex cursor-pointer items-center gap-4 bg-transparent py-2.5 rounded mt-6">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableMaterials;
