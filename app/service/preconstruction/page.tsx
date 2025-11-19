import ContactUs from "@/components/Home/ContactUs";
import OurStrength from "@/components/our-service/preconstruction/OurStrength";
import PreconstructionProcess from "@/components/our-service/preconstruction/PreconstructionProcess";
import PreHeader from "@/components/our-service/preconstruction/PreHeader";
import SettingProjects from "@/components/our-service/preconstruction/SettingProjects";

export default function Preconstruction() {
  return (
    <>
      <PreHeader />
      <SettingProjects />
      <OurStrength />
      <PreconstructionProcess />
      <ContactUs />
    </>
  );
}
