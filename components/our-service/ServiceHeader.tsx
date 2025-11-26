import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";
import Image from "next/image";

const ServiceHeader = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className=" container-custom flex flex-col pt-[180px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionCaption text="Our services" className="text-tertiary" />

          <Heading
            variant="jakarta"
            level="h2"
            className="text-dark1 max-w-[780px]"
          >
            <Heading variant="playfair" level="span">
              Delivering excellence{" "}
            </Heading>
            from planning to completion
          </Heading>
        </div>

        <div className="mt-8 md:mt-14">
          <Image
            src={"/services/construction.png"}
            alt="construction"
            width={1360}
            height={580}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
