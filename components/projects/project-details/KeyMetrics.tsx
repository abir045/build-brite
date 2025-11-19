import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

interface ProjectStat {
  id: number;
  icon: string;
  value: string;
  label: string;
}

const projectData: ProjectStat[] = [
  {
    id: 1,
    icon: "/globals/light.svg",
    value: "425,000 SQ FT",
    label: "Size",
  },
  {
    id: 2,
    icon: "/globals/light.svg",
    value: "28 MONTHS",
    label: "Duration",
  },
  { id: 3, icon: "/globals/light.svg", value: "2023", label: "Completion" },
  { id: 4, icon: "/globals/light.svg", value: "$185M", label: "Project Value" },
];

const KeyMetrics: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-14 xl:flex-row xl:items-center xl:justify-between">
          {/* left */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-[616px] w-full">
            <SectionCaption text="Key metrics" className="text-tertiary" />

            <Heading
              variant="jakarta"
              level="h2"
              className="text-dark1 max-w-[616px]"
            >
              <Heading variant="playfair" level="span" className="inline-block">
                Client:
              </Heading>{" "}
              Waterfront Living LLC
            </Heading>

            <BodyText variant="body" className="text-tertiary/70 max-w-[616px]">
              Our quality control processes are built on decades of experience
              and continuous improvement. We don't just meet standards—we set
              them.
            </BodyText>

            {/* metrics grid */}
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              {projectData.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="bg-dark1 rounded-[2px] w-12 h-12 flex items-center justify-center">
                    <Image src={item.icon} alt="logo" width={24} height={24} />
                  </div>

                  <div className="flex flex-col gap-1">
                    <LargeText variant="large-28-caps" className="text-dark1">
                      {item.value}
                    </LargeText>

                    <BodyText variant="body-sm" className="text-dark1/60">
                      {item.label}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-2 ]">
            <div className=" aspect-[1/2]">
              <Image
                src="/project-details/metric-1.png"
                width={200}
                height={400}
                alt="multistored building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[456/530]">
              <Image
                src="/project-details/metric-2.png"
                width={456}
                height={530}
                alt="steel structure"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
