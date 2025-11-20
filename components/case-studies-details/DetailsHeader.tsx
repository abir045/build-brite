import Image from "next/image";
import React from "react";
import BodyText from "../globals/typography/BodyText";

const DetailsHeader = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col pt-[118px] pb-10">
        <button className="flex items-center gap-4 bg-transparent">
          <Image
            src="/globals/left-green-arrow.svg"
            alt="left nav"
            width={24}
            height={24}
          />

          <BodyText variant="body-sm" className="text-dark1">
            Go back
          </BodyText>
        </button>

        <div className="aspect-[1360/580] mt-12">
          <Image
            width={1360}
            height={580}
            src="/case-studies-details/header-img.png"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsHeader;
