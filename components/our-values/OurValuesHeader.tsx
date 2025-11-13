import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";

const OurValuesHeader: React.FC = () => {
  return (
    <section
      className="container-custom flex bg-white flex-col pt-[180px] pb-6"
      data-theme="light"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <SectionCaption className="text-tertiary" text="Our values & culture" />

        <div className="max-w-[780px]">
          <Heading variant="jakarta" level="h2" className="text-dark1">
            The principles that{" "}
            <Heading variant="playfair" level="span" className="text-dark1">
              guide our work
            </Heading>{" "}
            and define who we are
          </Heading>
        </div>
      </div>
    </section>
  );
};

export default OurValuesHeader;
