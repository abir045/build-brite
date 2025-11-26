import CTA from "@/components/our-offices/CTA";
import GlobalOffices from "@/components/our-offices/GlobalOffices";
import GlobalPresence from "@/components/our-offices/GlobalPresence";
import OfficeHeader from "@/components/our-offices/OfficeHeader";
import RegionalCoverage from "@/components/our-offices/RegionalCoverage";

export default function OurOffices() {
  return (
    <>
      <OfficeHeader />
      <GlobalPresence />
      <GlobalOffices />
      <RegionalCoverage />
      <CTA />
    </>
  );
}
