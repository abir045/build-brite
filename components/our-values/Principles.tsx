import { Shield, Users, Heart, Lightbulb, Award, Leaf } from "lucide-react";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

const coreValuesData: CoreValue[] = [
  {
    id: "Our Core Values",
    title: "Our Core Values",
    description:
      "These values aren't just words on a wall—they're the foundation of every decision we make and every project we deliver",
  },
  {
    id: "safety-first",
    title: "Safety First",
    description:
      "We maintain a zero-harm culture where every person goes home safe every day. Safety isn't just a priority—it's our core value and non-negotiable commitment.",
    icon: "/our-values/shield.svg",
  },
  {
    id: "teamwork",
    title: "Teamwork",
    description:
      "Success is built on collaboration. We work together with clients, partners, and communities to achieve extraordinary results through mutual respect and shared goals.",
    icon: "/our-values/team.svg",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical standards. Our reputation is built on trust, and we honor our commitments without compromise.",
    icon: "/our-values/heart.svg",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We embrace new technologies and methodologies to deliver smarter, more efficient solutions. Continuous improvement drives everything we do.",
    icon: "/our-values/innovation.svg",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "We set the highest standards in everything we do—from project execution to client service. Quality and precision define our work.",
    icon: "/our-values/excellence.svg",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "We're committed to environmental stewardship, building responsibly to minimize our impact and create a sustainable future for generations to come.",
    icon: "/our-values/sustain.svg",
  },
];

export default function Principles() {
  return (
    <section className="bg-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {coreValuesData.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.id}
                className={`bg-dark1 flex flex-col p-4 md:p-8 rounded ${
                  index === 0 ? "col-span-1 md:col-span-2" : "col-span-1"
                }`}
              >
                {value.icon && (
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center md:mb-12 mb-0">
                    <Image src={value.icon} width={28} height={28} alt="icon" />
                  </div>
                )}

                <div className="flex flex-col gap-4 md:gap-6">
                  <LargeText
                    variant="large-20-bold"
                    className={` ${
                      index === 0
                        ? "text-primary mt-[103.5px] text-[24px] md:text-[32px] leading-[120%] tracking-[-1px] font-normal"
                        : "text-white mt-0"
                    }`}
                  >
                    {value.title}
                  </LargeText>
                  <BodyText
                    variant="body-sm"
                    className={`text-white/70 ${
                      index === 0 ? "max-w-[400px]" : ""
                    }`}
                  >
                    {value.description}
                  </BodyText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
