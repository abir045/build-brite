import ContactUs from "@/components/Home/ContactUs";
import ConstructionExcellence from "@/components/our-service/ConstructionExcellence";
import ServiceHeader from "@/components/our-service/ServiceHeader";
import TrackRecord from "@/components/our-service/TrackRecord";

export default function ServicePage() {
  return (
    <>
      <ServiceHeader />
      <ConstructionExcellence />
      <TrackRecord />
      <ContactUs />
    </>
  );
}
