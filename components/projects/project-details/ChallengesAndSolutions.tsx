import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

interface Challenge {
  id: number;
  title: string;
  description: string;
}

interface Solution {
  id: number;
  title: string;
  description: string;
}

const keyChallenges: Challenge[] = [
  {
    id: 1,
    title: "Waterfront Construction",
    description:
      "Building on waterfront property required specialized foundation work and flood mitigation strategies.",
  },
  {
    id: 2,
    title: "Environmental Protection",
    description:
      "Strict environmental regulations to protect marine habitat during construction.",
  },
];

const ourSolutions: Solution[] = [
  {
    id: 1,
    title: "Marine Engineering",
    description:
      "Implemented deep pile foundations and elevated construction to meet flood zone requirements.",
  },
  {
    id: 2,
    title: "Environmental Stewardship",
    description:
      "Deployed silt barriers and erosion control measures, achieving zero environmental violations.",
  },
];

const ChallengesAndSolutions = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-[50px] pb-[60px] md:pb-[100px]">
        <Heading variant="jakarta" level="h2">
          Challenges &{" "}
          <Heading variant="playfair" level="span" className="inline">
            Solutions
          </Heading>
        </Heading>

        <div className="flex flex-col gap-8 md:flex-row mt-14">
          {/* left */}
          <div className="flex flex-col gap-8 p-8 bg-primary">
            <LargeText variant="large-32-reg" className="text-dark1">
              Key challenges
            </LargeText>

            <div className="flex flex-col gap-6">
              {keyChallenges.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 ${
                    index !== keyChallenges.length - 1
                      ? "pb-6 border-b border-black/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/globals/danger.svg"
                      width={24}
                      height={24}
                      alt="caution icon"
                    />
                    <BodyText variant="body-large" className="text-dark1">
                      {item.title}
                    </BodyText>
                  </div>
                  <BodyText
                    variant="body"
                    className="text-tertiary/80 max-w-[584px]"
                  >
                    {item.description}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>

          {/* right */}

          <div className="flex flex-col gap-8 p-8 bg-accent">
            <LargeText variant="large-32-reg" className="text-white">
              Our Solutions
            </LargeText>

            <div className="flex flex-col gap-6">
              {ourSolutions.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 ${
                    index !== ourSolutions.length - 1
                      ? "pb-6 border-b border-black/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/globals/tick.svg"
                      width={24}
                      height={24}
                      alt="caution icon"
                    />
                    <BodyText variant="body-large" className="text-white">
                      {item.title}
                    </BodyText>
                  </div>
                  <BodyText
                    variant="body"
                    className="text-white /80 max-w-[584px]"
                  >
                    {item.description}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesAndSolutions;
