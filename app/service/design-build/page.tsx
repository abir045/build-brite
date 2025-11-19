import ContactUs from "@/components/Home/ContactUs";
import DesignBuildBanner from "@/components/our-service/design-build/Banner";
import CollaborativeProcess from "@/components/our-service/design-build/CollaborativeProcess";
import ComplexProjects from "@/components/our-service/design-build/ComplexProjects";
import DesignBuildAdvantage from "@/components/our-service/design-build/DesignBuildAdvantage";
import DesignBuildHeader from "@/components/our-service/design-build/DesignBuildHeader";

export default function DesignBuild() {
  return (
    <>
      <DesignBuildHeader />
      <DesignBuildBanner />
      <DesignBuildAdvantage />
      <CollaborativeProcess />
      <ComplexProjects />
      <ContactUs />
    </>
  );
}
