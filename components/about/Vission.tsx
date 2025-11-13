"use client";

import Image from "next/image";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";

const missionData = {
  id: 1,
  label: "Our vision",
  title: "Leading the future of construction",
  description:
    "To be the global leader in sustainable construction, recognized for innovation, safety excellence, and the transformative impact we create in every community we serve. We envision a future where our projects set the standard for quality, sustainability, and positive social impact.",
  image: "/About/vission.png",
};

export default function Vission() {
  return (
    <section
      className="relative h-[450px] md:h-[750px] w-full"
      data-theme="dark"
    >
      <Image
        src={missionData.image}
        alt={missionData.title}
        fill
        className="object-cover"
        priority
      />

      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.51),rgba(0,0,0,1))]" />

      <div className={`absolute  bottom-[100px] left-10 right-10 `}>
        <div className="container-custom">
          <div className="flex flex-col gap-4 items-center justify-between w-full   md:flex-row md:items-end md:gap-[140px] ">
            <div className="flex flex-col gap-6 flex-1 max-w-[548px]">
              <SectionCaption text={missionData.label} />

              <Heading variant="jakarta" level="h3" className="text-primary">
                {missionData.title}
              </Heading>
            </div>
            <div className="max-w-[664px] flex-1">
              <BodyText variant="body" className={`  mx-auto text-white/80 `}>
                {missionData.description}
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
