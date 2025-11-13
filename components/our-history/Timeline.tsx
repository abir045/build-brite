import React from "react";
import Image from "next/image";
import BodyText from "../globals/typography/BodyText";
import LargeText from "../globals/typography/LargeText";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "1975",
    title: "Foundation & First Project",
    description:
      "Buildbrite was founded with a vision to transform construction. Our first project, the Riverview Wharf complex, established our reputation for quality and reliability.",
    image: "/our-history/foundation.png",
    imagePosition: "left",
  },
  {
    id: 2,
    year: "1988",
    title: "National Expansion",
    description:
      "Expanded operations to West Coast, opening offices in San Francisco and Los Angeles. Secured our first large-scale $50 million commercial project.",
    image: "/our-history/expansion.png",
    imagePosition: "right",
  },
  {
    id: 3,
    year: "1995",
    title: "Global Presence Established",
    description:
      "Entered into partnerships with several partners in Europe, Asia and the Middle East. This expansion solidified our position as a global player, allowing us to undertake projects that would become industry standards.",
    image: "/our-history/global.png",
    imagePosition: "left",
  },
  {
    id: 4,
    year: "2005",
    title: "Sustainability Leadership",
    description:
      "Launched our Green Building Initiative, pioneering eco-friendly construction practices and earning LEED certifications for numerous projects.",
    image: "/our-history/leadership.png",
    imagePosition: "right",
  },
  {
    id: 5,
    year: "2015",
    title: "Digital Transformation",
    description:
      "Implemented Building Information Modeling (BIM) across all projects. Introduced advanced project tracking technologies that revolutionized our project management.",
    image: "/our-history/transformation.png",
    imagePosition: "left",
  },
  {
    id: 6,
    year: "2023",
    title: "Carbon Neutral Achievement",
    description:
      "Achieved carbon neutrality across all global operations, setting new industry standards and demonstrating our commitment to environmental sustainability.",
    image: "/our-history/carbon.png",
    imagePosition: "right",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom pt-10 pb-[60px] md:pb-[100px]">
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full"></div>

          {/* Timeline items */}
          <div className="flex flex-col gap-4">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-col lg:flex-row items-center lg:items-center"
              >
                {item.imagePosition === "left" ? (
                  <>
                    {/* Left side - Image */}
                    <div className="w-full max-w-[580px] flex justify-center">
                      <div className="relative w-full">
                        <Image
                          src={item.image}
                          width={580}
                          height={380}
                          alt="image"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 top-26 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-white z-10 shadow-md">
                      <div className="absolute inset-0 rounded-full bg-accent"></div>
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full max-w-[580px] flex justify-start lg:ml-[99px] mt-8 lg:mt-0">
                      <div className="w-full">
                        <div className="flex max-w-[90px] items-center gap-2 px-4 py-2 rounded-full bg-dark1">
                          <Image
                            src={"/our-history/milestone.svg"}
                            width={12}
                            height={12}
                            alt="box logo"
                          />
                          <BodyText variant="body" className="text-white">
                            {item.year}
                          </BodyText>
                        </div>

                        <LargeText
                          variant="large-20-bold"
                          className="mt-8 text-dark1"
                        >
                          {item.title}
                        </LargeText>

                        <BodyText
                          variant="body"
                          className="text-tertiary/80 mt-4"
                        >
                          {item.description}
                        </BodyText>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side - Content */}
                    <div className="w-full lg:w-1/2 flex justify-end lg:pr-[50px] order-2 lg:order-1 mt-8 lg:mt-0">
                      <div className="w-full max-w-[580px]">
                        <div className="flex max-w-[90px] items-center gap-2 px-4 py-2 rounded-full bg-dark1">
                          <Image
                            src={"/our-history/milestone.svg"}
                            width={12}
                            height={12}
                            alt="box logo"
                          />
                          <BodyText variant="body" className="text-white">
                            {item.year}
                          </BodyText>
                        </div>

                        <LargeText
                          variant="large-20-bold"
                          className="mt-8 text-dark1"
                        >
                          {item.title}
                        </LargeText>

                        <BodyText
                          variant="body"
                          className="text-tertiary/80 mt-4"
                        >
                          {item.description}
                        </BodyText>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 top-26 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-white z-10 shadow-md">
                      <div className="absolute inset-0 rounded-full bg-accent"></div>
                    </div>

                    {/* Right side - Image */}
                    <div className="w-full lg:w-1/2 flex justify-start lg:pl-[50px] order-1 lg:order-2">
                      <div className="relative w-full max-w-[580px]">
                        <Image
                          src={item.image}
                          width={580}
                          height={380}
                          alt="image"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
