import BodyText from "@/components/globals/typography/BodyText";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

const ProjectDetailsHeader = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-[116px] pb-10">
        <button className="flex items-center gap-4 bg-transparent">
          <Image
            src="/project-details/left-green-arrow.svg"
            alt="left nav"
            width={24}
            height={24}
          />

          <BodyText variant="body-sm" className="text-dark1">
            Back to all projects
          </BodyText>
        </button>

        <div className="relative mt-12 aspect-[1360/580]">
          <Image
            src="/project-details/project-header.jpg"
            alt="header image"
            width={1360}
            height={580}
            className="object-cover"
          />

          <div className="absolute inset-0 pointer-events-none">
            <div
              className="w-full h-full bg-white/1 backdrop-blur-[10px]
    [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_75.3%)]
    [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_75.3%)]"
            />
          </div>

          <div className="absolute left-12 bottom-12">
            <div className="bg-primary px-3 py-[5.5px] rounded max-w-[99px]">
              <BodyText variant="body-sm" className="text-dark1">
                Residential
              </BodyText>
            </div>

            <LargeText variant="large-20-bold" className="text-white mt-8">
              Riverside Residences
            </LargeText>

            <BodyText variant="body-sm" className="text-white/60 mt-4">
              52-story mixed-use tower featuring premium office space and retail
            </BodyText>

            <div className="flex items-center gap-2 mt-4">
              <Image
                src="/projects/location.svg"
                width={16}
                height={16}
                alt="icon"
              />
              <BodyText variant="body-sm" className="text-white/70">
                New York, USA
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsHeader;
