import SectionCaption from "@/components/globals/section-headers/SectionCaption";
import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";
import Image from "next/image";
import React from "react";

export interface SafetyStat {
  id: number;
  value: string;
  label: string;
  icon?: string;
}

export const safetyStatistics: SafetyStat[] = [
  {
    id: 1,
    value: "85%",
    label: "First-time inspection pass rate",
    icon: "/home/sustainability/light.svg",
  },
  {
    id: 2,
    value: "99.5%",
    label: "Client satisfaction score",
    icon: "/home/sustainability/light.svg",
  },
  {
    id: 3,
    value: "100%",
    label: "Spec compliance",
    icon: "/home/sustainability/light.svg",
  },
  {
    id: 4,
    value: "0",
    label: "Tolerance for shortcuts",
    icon: "/home/sustainability/light.svg",
  },
];

const QualityAssurance = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col xl:flex-row items-center gap-20">
          {/* left */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-[616px]">
            <SectionCaption
              text="Quality assurance"
              className="text-tertiary"
            />

            <Heading variant="jakarta" level="h2">
              <Heading variant="playfair" level="span" className="text-dark1">
                Precision {""}
              </Heading>
              in every detail
            </Heading>

            <BodyText variant="body" className="text-tertiary/70 max-w-[616px]">
              Our quality control processes are built on decades of experience
              and continuous improvement. We don't just meet standards—we set
              them.
            </BodyText>

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
              {safetyStatistics.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark1 rounded-[2px] flex items-center justify-center">
                    <Image src={item.icon} width={24} height={24} alt="icon" />
                  </div>

                  <div className="flex flex-col gap-1 w-full">
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
          <div className="flex items-center gap-2">
            <div className="relative aspect-[1/2]">
              <Image
                src="/services/management/q1.png"
                alt="steel structure"
                width={200}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[456/530]">
              <Image
                src="/services/management/q2.png"
                alt="steel structure"
                width={456}
                height={530}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
