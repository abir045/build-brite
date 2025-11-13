import AboutHeader from "@/components/about/AboutHeader";
import BuildingTomorrow from "@/components/about/BuldingTommorow";
import History from "@/components/about/History";
import Mission from "@/components/about/Mission";
import Vission from "@/components/about/Vission";
import ContactUs from "@/components/Home/ContactUs";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <History />
      <Mission />
      <Vission />
      <BuildingTomorrow />
      <ContactUs />
    </>
  );
}
