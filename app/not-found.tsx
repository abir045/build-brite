import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-[180px] pb-14">
        <div className="flex flex-col gap-4 md:gap-6 items-center py-[60px] md:py-[100px]">
          <Heading
            variant="jakarta"
            level="h2"
            className="text-dark1 text-center"
          >
            Something{" "}
            <Heading variant="playfair" level="span" className="inline">
              went wrong!
            </Heading>
          </Heading>

          <BodyText variant="body" className="text-dark1/70 text-center">
            Looks like the page you’re looking for doesn’t exist or has been
            moved.
          </BodyText>

          <Link href="/">
            <button className="group flex items-center gap-[44px] w-full bg-dark1 text-primary hover:text-dark1 hover:bg-primary rounded px-4 py-2.5 mt-10 transition-colors duration-300">
              <BodyText
                variant="navigation"
                //    className="text-primary"
              >
                Go back to home
              </BodyText>

              <Image
                src="/globals/right-primary-og.svg"
                alt="icon"
                width={20}
                height={20}
                className="group-hover:invert"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
