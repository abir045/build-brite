import React from "react";
import CallToAction from "../globals/section-headers/CallToAction";

const CTA = () => {
  return (
    <CallToAction
      imageSrc="/home/contact-us/contact.png"
      imageAlt="contact us"
      headingText="Explore how we're shaping the"
      highlightText="future of construction"
      highlightVariant="playfair"
      headingVariant="jakarta"
      headingClassName="text-white"
      highlightClassName="text-white"
      bodyText="Let's discuss how we can bring your vision to life with the same excellence and dedication"
      bodyClassName="text-white/60"
      buttonText="Discuss Your Project"
      buttonClassName="bg-primary gap-[67px]"
      buttonTextClassName="text-dark1"
      buttonIcon="/globals/right-primary.svg"
    />
  );
};

export default CTA;
