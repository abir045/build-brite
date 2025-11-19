import React from "react";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";

const NewsHeader = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="pt-[180px] pb-6 container-custom flex flex-col">
        <div className="flex flex-col md:gap-6 gap-4">
          <SectionCaption text="News & Insights" className="text-tertiary" />

          <Heading variant="jakarta" level="h2" className="max-w-[780px]">
            Stay updated with our latest {""}
            <Heading variant="playfair" level="span" className="inline">
              projects, innovations, and achievements
            </Heading>
          </Heading>
        </div>
      </div>
    </section>
  );
};

export default NewsHeader;
