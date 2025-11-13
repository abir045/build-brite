import React from "react";
import Image from "next/image";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import { Button } from "../ui/button";

interface AboutData {
  badge: string;
  title: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  ctaText: string;
}

const aboutData: AboutData = {
  badge: "Who we are",
  title: "Building excellence for over ",
  titleHighlight: "50 years",
  paragraph1:
    "For over 50 years, Buildbrite Global has been at the forefront of transforming skylines and communities worldwide. Our commitment to excellence, innovation, and sustainability has made us a trusted partner for some of the world's most ambitious construction projects.",
  paragraph2:
    "With a presence in over 11 countries, our team of 10,000+ professionals brings unparalleled expertise in preconstruction, project management, and sustainable building practices. We don't just build structures—we build legacies that stand the test of time.",
  ctaText: "VIEW OUR PROJECTS",
};

const WhoWeAre: React.FC = () => {
  return (
    <section className="container-custom py-[100px] w-full" data-theme="light">
      <div className="flex flex-col items-start lg:flex-row md:justify-between md:items-baseline w-full">
        {/* Left column */}
        <div className="flex flex-col gap-4 md:gap-6 max-w-[548px]">
          <div className="flex items-center gap-2">
            <Image
              src="/home/green-circle.svg"
              width={8}
              height={8}
              alt="icon"
            />

            <BodyText variant="body-sm" className="text-tertiary">
              {aboutData.badge}
            </BodyText>
          </div>

          <Heading variant="jakarta" level="h2" className="text-dark1">
            {aboutData.title}
            <Heading
              variant="playfair"
              level="h2"
              className="text-dark1 inline-block"
            >
              {aboutData.titleHighlight}
            </Heading>
          </Heading>

          <div className="mt-4 relative h-[350px] ">
            <Image
              src="/home/steel.png"
              alt="Construction site at sunset"
              fill
              className="object-cover w-full "
            />
          </div>

          <BodyText variant="body" className="text-tertiary">
            {aboutData.paragraph2}
          </BodyText>

          {/* desktop button hidden on mb */}

          <button className="self-start hidden md:flex gap-14 px-4 py-2.5 rounded bg-primary hover:bg-primary  mt-[52px]">
            <BodyText variant="navigation" className="text-dark1">
              {aboutData.ctaText}
            </BodyText>

            <Image
              src="/home/dark-right-arrow.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </button>
        </div>

        {/* Right column */}
        <div className="flex flex-col-reverse mt-8 md:mt-0 md:flex-col gap-8 md:gap-10 max-w-[580px]">
          <BodyText variant="body" className="text-tertiary">
            {aboutData.paragraph1}
          </BodyText>

          <div className="relative w-full ">
            <Image
              src="/home/worker.png"
              alt="Construction professionals"
              width={580}
              height={650}
              className="object-cover"
            />
          </div>
        </div>

        {/* hidden button on md screens */}
        <button className="self-start flex items-center md:hidden gap-14 px-4 py-2.5 rounded bg-primary hover:bg-primary  mt-8">
          <BodyText variant="navigation" className="text-dark1">
            {aboutData.ctaText}
          </BodyText>

          <Image
            src="/home/dark-right-arrow.svg"
            width={20}
            height={20}
            alt="icon"
          />
        </button>
      </div>
    </section>
  );
};

export default WhoWeAre;
