import SectionBanner from "@/components/globals/section-headers/SectionBanner";
import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import LargeText from "@/components/globals/typography/LargeText";
import React from "react";

const Banner: React.FC = () => {
  return (
    // <section className="bg-primary">
    //   <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
    //     <div className="flex flex-col items-center gap-10">
    //       <SectionCaption
    //         text="Excellence in execution"
    //         className="text-tertiary"
    //       />

    //       <LargeText
    //         variant="large-32-reg"
    //         className="text-dark1 max-w-[896px] text-center"
    //       >
    //         Our construction management services deliver projects on time and on
    //         budget without compromising quality or safety. With a century of
    //         experience managing complex builds, we bring proven processes,
    //         skilled teams, and relentless attention to detail to every project.
    //       </LargeText>
    //     </div>
    //   </div>
    // </section>

    <SectionBanner caption="Excellence in execution">
      Our construction management services deliver projects on time and on
      budget without compromising quality or safety. With a century of
      experience managing complex builds, we bring proven processes, skilled
      teams, and relentless attention to detail to every project.
    </SectionBanner>
  );
};

export default Banner;
