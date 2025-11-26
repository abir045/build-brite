import CareerHeader from "@/components/career/CareerHeader";
import CTA from "@/components/career/CTA";
import OpenPositions from "@/components/career/OpenPositions";
import WhatWeOffer from "@/components/career/WhatWeOffer";
import WhyJoin from "@/components/career/WhyJoin";

export default function Career() {
  return (
    <>
      <CareerHeader />
      <WhyJoin />
      <WhatWeOffer />
      <OpenPositions />
      <CTA />
    </>
  );
}
