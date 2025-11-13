import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";

const HistoryHeader: React.FC = () => {
  return (
    <section
      className="container-custom flex flex-col pt-[180px] pb-6"
      data-theme="light"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <SectionCaption text="Our history" className="text-tertiary" />

        <Heading
          level="h2"
          variant="jakarta"
          className="text-dark1 max-w-[780px]"
        >
          <Heading level="span" variant="playfair">
            Five decades
          </Heading>
          {""} of innovation, growth, and excellence in construction
        </Heading>
      </div>
    </section>
  );
};

export default HistoryHeader;
