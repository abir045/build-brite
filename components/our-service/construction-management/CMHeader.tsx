import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import SectionHeader from "@/components/globals/section-headers/SectionHeader";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import React from "react";

const CMHeader: React.FC = () => {
  return (
    <SectionHeader
      caption="Services / Construction management"
      imageSrc="/services/management/shipyard.png"
      imageAlt="construction"
      theme="light"
    >
      <Heading variant="playfair" level="span" className="inline">
        Expert execution with unwavering{" "}
      </Heading>
      commitment to safety, quality, and timely delivery
    </SectionHeader>
  );
};

export default CMHeader;
