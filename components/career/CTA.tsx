import React from "react";
import CallToAction from "../globals/section-headers/CallToAction";

const CTA = () => {
  return (
    <CallToAction
      dataTheme="light"
      imageSrc="/home/contact-us/contact.png"
      imageAlt="contact us"
      headingText="Ready to build"
      highlightText="with us?"
      highlightVariant="jakarta"
      headingVariant="playfair"
      headingClassName="text-white"
      highlightClassName="text-white"
      bodyText="Take the first step toward a rewarding career with one of the world's leading construction companies"
      bodyClassName="text-white/60"
      buttonText="Join Our Team"
      buttonClassName="bg-primary gap-[67px]"
      buttonTextClassName="text-dark1"
      buttonIcon="/globals/right-primary.svg"
    />
  );
};

export default CTA;
