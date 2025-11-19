import SectionHeader from "@/components/globals/section-headers/SectionHeader";
import Heading from "@/components/globals/typography/Heading";
import React from "react";

const SustainabilityHeader = () => {
  return (
    <SectionHeader
      caption="Services / Sustainability & Innovation"
      imageSrc="/services/sustainability/home.png"
      imageAlt="construction"
      theme="light"
    >
      Building for a sustainable tomorrow through {""}
      <Heading variant="playfair" level="span" className="inline">
        green practices and technological advancement{" "}
      </Heading>
    </SectionHeader>
  );
};

export default SustainabilityHeader;
