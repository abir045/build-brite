import Image from "next/image";
import SectionCaption from "../globals/section-headers/SectionCaption";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";

export default function AboutHeader() {
  return (
    <section data-theme="light" className="bg-white">
      <div className="container-custom flex flex-col mt-[60px] lg:mt-[120px] px-5 md:px-10">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionCaption text="About us" className="text-tertiary" />
          <div className="max-w-[780px] text-dark1">
            <Heading variant="jakarta" level="h2">
              Building the world's most ambitious projects with{" "}
              <Heading variant="playfair" level="span">
                integrity, innovation, and excellence
              </Heading>
            </Heading>
          </div>
        </div>

        {/* image container */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-8 md:mt-14">
          <div className="relative h-[500px]">
            <Image src="/About/book.png" fill alt="book" />
          </div>

          <div className="relative h-[500px]">
            <Image src="/About/building.png" fill alt="book" />
          </div>

          <div className="bg-primary p-10 flex flex-col gap-6">
            <Heading variant="jakarta" level="h4">
              History in the making- Since 1975
            </Heading>

            <BodyText variant="body">
              What started as a small regional builder has grown into one of the
              world's most respected construction management firms, driven by an
              unwavering commitment to quality.
            </BodyText>

            <button className="px-4 py-2.5 bg-dark1 flex items-center justify-between mt-[148px]">
              <BodyText variant="navigation" className="text-primary">
                View Our History
              </BodyText>

              <Image
                src="/About/primary-right-arrow.svg"
                width={16}
                height={10}
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
