import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";

const VisitUs = () => {
  return (
    <section className="bg-accent">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* left */}
          <div className="flex flex-col">
            <Heading variant="jakarta" level="h2" className="text-white">
              Visit us{" "}
              <Heading variant="playfair" level="span" className="inline">
                in person
              </Heading>
            </Heading>

            <BodyText variant="body" className="text-white/80 mt-6">
              With offices across the globe, we're always nearby. Find the
              location nearest you.
            </BodyText>

            <button className="group mt-10 flex self-start hover:text-dark1 hover:bg-primary  items-center gap-[46px] bg-dark1 text-primary rounded px-4 py-2.5">
              <BodyText
                variant="navigation"
                // className="text-primary"
              >
                Find Our Offices
              </BodyText>

              <Image
                src="/globals/right-nav.svg"
                alt="icon"
                width={20}
                height={20}
                className="group-hover:invert transition-colors"
              />
            </button>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[27px]">
            <LargeText
              variant="large-28-reg"
              className="text-white max-w-[664px]"
            >
              "We're committed to building lasting relationships with our
              clients, partners, and communities. Your success is our success,
              and we're here to support you every step of the way."
            </LargeText>

            <BodyText variant="body-sm" className="text-primary">
              — Buildbrite Global Team
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
