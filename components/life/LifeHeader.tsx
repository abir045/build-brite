import React from "react";
import SectionHeader from "../globals/section-headers/SectionHeader";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import Image from "next/image";

const LifeHeader = () => {
  return (
    <>
      <SectionHeader caption="Life at buildbrite" theme="light">
        Join a team that's shaping the skylines and {""}
        <Heading variant="playfair" level="span" className="inline">
          communities of tomorrow{" "}
        </Heading>
      </SectionHeader>

      <section className="bg-white">
        <div className="container-custom  pb-[60px] md:pb-[100px]">
          <button className="group flex items-center px-4 py-2.5 bg-primary text-dark1 hover:bg-dark1 hover:text-primary transition-colors duration-300 rounded gap-[22px]">
            <BodyText variant="navigation">View Open Positions</BodyText>
            <Image
              src="/globals/right-dark-arrow.svg"
              width={20}
              height={20}
              alt="icon"
              className="group-hover:invert transition-colors duration-300"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default LifeHeader;
