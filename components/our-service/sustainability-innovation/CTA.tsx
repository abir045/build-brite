import CallToAction from "@/components/globals/section-headers/CallToAction";
import React from "react";

const CTA = () => {
  return (
    <CallToAction
      bgColor="bg-primary"
      dataTheme="light"
      imageSrc="/home/contact-us/contact.png"
      imageAlt="contact us"
      headingText="Build sustainably"
      highlightText="with us"
      headingClassName="text-dark1"
      highlightClassName="text-dark1"
      bodyText="Discover how design-build can accelerate your timeline and deliver exceptional results"
      bodyClassName="text-dark1/60"
      buttonText="Explore Design-Build"
      buttonClassName="bg-dark1 gap-[13px]"
      buttonTextClassName="text-primary"
      buttonIcon="/services/sustainability/primary-green-right-arrow.svg"
    />
  );
};

export default CTA;
