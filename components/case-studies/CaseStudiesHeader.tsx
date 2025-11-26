import React from "react";
import SectionHeader from "../globals/section-headers/SectionHeader";
import Heading from "../globals/typography/Heading";

const CaseStudiesHeader = () => {
  return (
    <SectionHeader caption="Case studies" data-theme="light">
      Dive deep into our most {""}
      <Heading variant="playfair" level="span" className="inline">
        impactful innovations and success stories{" "}
      </Heading>
    </SectionHeader>
  );
};

export default CaseStudiesHeader;
