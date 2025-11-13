import Image from "next/image";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

export default function LeadershipHeader() {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-[180px] pb-6">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionCaption text="Our leadership" className="text-tertiary" />

          <Heading
            level="h2"
            variant="jakarta"
            className="text-dark1 max-w-[780px]"
          >
            Meet the{" "}
            <Heading variant="playfair" level="span">
              experienced team
            </Heading>{" "}
            guiding Buildbrite vision & strategy
          </Heading>
        </div>

        {/* image grid */}

        <div className="flex-col flex gap-8 items-center md:flex-row md:justify-between   md:p-10 p-4 mt-8 md:mt-14 h-auto md:max-h-[530px] bg-dark1">
          {/* left */}
          <div className="h-auto md:h-[450px]  md:px-[85.5px] aspect-square  w-full">
            <Image
              src="/our-leadership/profile.png"
              alt="profile"
              width={450}
              height={450}
              className="object-cover"
            />
          </div>

          {/* right */}

          <div className="flex flex-col gap-4 w-full">
            <LargeText variant="large-32-reg" className="text-primary">
              "Our success is built on the collective expertise, integrity, and
              passion of our leadership team. Together, we're committed to
              delivering excellence and creating lasting value for our clients
              and communities."
            </LargeText>

            <Heading level="h4" variant="playfair" className="text-white mt-8">
              Robert Chen
            </Heading>

            <BodyText variant="body" className="text-white/80">
              Chairman of buildbrite
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
}
