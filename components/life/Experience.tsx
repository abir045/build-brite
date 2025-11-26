import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";
import BodyText from "../globals/typography/BodyText";

const Experience = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col pt-[50px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <Heading variant="jakarta" level="h2">
            Experience{" "}
            <Heading variant="playfair" level="span" className="inline">
              Buildbrite culture
            </Heading>{" "}
          </Heading>

          <BodyText variant="body" className="text-dark1/70">
            Watch our team share their stories and see what it's like to work at
            one of the world's leading construction companies
          </BodyText>
        </div>
      </div>

      <div className="relative mt-10 md:mt-14">
        <Image
          src="/OurCulture/Video.jpg"
          width={1440}
          height={580}
          alt="image"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex flex-col gap-4 items-center">
            <Image
              //   className="absolute left-1/2 right-1/2 top-1/2 "
              src="/OurCulture/play.svg"
              width={80}
              height={80}
              alt="play"
            />

            <BodyText variant="body" className="text-white/70">
              Click to play video
            </BodyText>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
