import React from "react";
import SectionHeader from "../globals/section-headers/SectionHeader";
import Heading from "../globals/typography/Heading";

const AwardsHeader: React.FC = () => {
  return (
    <SectionHeader caption="Awards & Recognition">
      Our commitment to excellence has earned {""}
      <Heading variant="playfair" level="span" className="inline">
        recognition from leading industry organizations{" "}
      </Heading>
    </SectionHeader>
  );
};

export default AwardsHeader;
