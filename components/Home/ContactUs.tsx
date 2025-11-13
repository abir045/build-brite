"use client";

import Image from "next/image";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";

const ContactUs = () => {
  return (
    <section className="bg-dark2" data-theme="dark">
      <div className="container-custom py-[60px] md:py-20 px-5 md:px-10">
        <div className="grid grid-cols-1 gap-8 items-center justify-center md:grid-cols-2">
          {/* left div */}
          <div className="relative w-full max-w-[290px] mx-auto aspect-square">
            <Image
              src="/home/contact-us/contact.png"
              alt="image"
              className="object-cover"
              fill
            />
          </div>

          {/* right div */}
          <div className="md:mx-0">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="max-w-[528px]">
                <Heading variant="jakarta" level="h2" className="text-white">
                  Let's build the future{" "}
                  <Heading
                    level="h2"
                    variant="playfair"
                    className="inline-block text-white"
                  >
                    together
                  </Heading>
                </Heading>
              </div>

              <BodyText variant="body" className="text-white/60">
                Ready to start your next project? Get in touch with our team
                today.
              </BodyText>

              <button className="rounded flex px-4 py-2.5 items-center gap-[38px] justify-between bg-primary mt-8 md:mt-10 md:self-start">
                <BodyText variant="navigation" className="text-dark1">
                  Contact Us Today
                </BodyText>

                <Image
                  src="/home/news/green-right-arrow.svg"
                  width={20}
                  height={20}
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
