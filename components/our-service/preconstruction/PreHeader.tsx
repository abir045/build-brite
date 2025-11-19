import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import React from "react";

const PreHeader: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-[180px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionCaption
            text="Services / Preconstruction"
            className="text-tertiary"
          />

          <Heading
            variant="jakarta"
            level="h2"
            className="text-dark1 max-w-[780px]"
          >
            <Heading variant="playfair" level="span" className="">
              Strategic planning{" "}
            </Heading>
            that sets the foundation for successful project delivery
          </Heading>
        </div>

        <div className="mt-8 md:mt-14">
          <Image
            src={"/services/preconstruction/site.png"}
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

export default PreHeader;
