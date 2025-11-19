import React from "react";
import SectionHeader from "../globals/section-headers/SectionHeader";
import Heading from "../globals/typography/Heading";

const ProjectsHeader = () => {
  return (
    <SectionHeader caption="Our projects" theme="light">
      Discover our portfolio of landmark projects that {""}
      <Heading variant="playfair" level="span" className="inline">
        shape skylines and communities worldwide{" "}
      </Heading>
    </SectionHeader>
  );
};

export default ProjectsHeader;
