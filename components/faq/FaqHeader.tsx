"use client";

import React from "react";
import SectionHeader from "../globals/section-headers/SectionHeader";
import Heading from "../globals/typography/Heading";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BodyText from "../globals/typography/BodyText";

const FaqHeader = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <>
      <SectionHeader caption="Frequently asked questions" theme="light">
        Need Help? {""}
        <Heading variant="playfair" level="span" className="inline">
          Find Answers Here{" "}
        </Heading>
      </SectionHeader>

      <section className="bg-white">
        <div className="container-custom flex  flex-col pb-14">
          <div className="flex items-center gap-2">
            <button
              className={`px-5 py-2.5 rounded  ${
                isActive("/contact-us") ? "bg-dark1" : "bg-[#F1F1F1]"
              }`}
            >
              <Link href={"/contact-us"}>
                <BodyText
                  variant="body-sm"
                  className={`${
                    isActive("/contact-us") ? "text-primary" : "text-dark1"
                  } `}
                >
                  Contact Us
                </BodyText>
              </Link>
            </button>

            <button
              // className="px-5 py-2.5 rounded bg-[#F1F1F1]"
              className={`px-5 py-2.5 rounded  ${
                isActive("/our-offices") ? "bg-dark1" : "bg-[#F1F1F1]"
              }`}
            >
              <Link href={"/our-offices"}>
                <BodyText
                  variant="body-sm"
                  className={`${
                    isActive("/our-offices") ? "text-primary" : "text-dark1"
                  } `}
                >
                  Our Offices
                </BodyText>
              </Link>
            </button>

            <button
              // className="px-5 py-2.5 rounded bg-[#F1F1F1]"
              className={`px-5 py-2.5 rounded  ${
                isActive("/faq") ? "bg-dark1" : "bg-[#F1F1F1]"
              }`}
            >
              <Link href={"/faq"}>
                <BodyText
                  variant="body-sm"
                  className={`${
                    isActive("/faq") ? "text-primary" : "text-dark1"
                  } `}
                >
                  FAQ
                </BodyText>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqHeader;
