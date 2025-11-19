import SectionHeader from "@/components/globals/section-headers/SectionHeader";
import Heading from "@/components/globals/typography/Heading";
import React from "react";

const DesignBuildHeader = () => {
  return (
    <SectionHeader
      caption="Services / Design-build"
      imageSrc="/services/design-build/steel-structure.png"
      imageAlt="construction"
      theme="light"
    >
      <Heading variant="playfair" level="span" className="inline">
        Streamlined delivery{" "}
      </Heading>
      through integrated design and construction
    </SectionHeader>
  );
};

export default DesignBuildHeader;
