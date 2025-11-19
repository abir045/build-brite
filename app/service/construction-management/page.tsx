import ContactUs from "@/components/Home/ContactUs";
import Banner from "@/components/our-service/construction-management/Banner";
import CMHeader from "@/components/our-service/construction-management/CMHeader";
import ProjectSteps from "@/components/our-service/construction-management/ProjectSteps";
import QualityAssurance from "@/components/our-service/construction-management/QualityAssurance";
import SafetyStandards from "@/components/our-service/construction-management/SafetyStandards";

export default function ConstructionManagement() {
  return (
    <>
      <CMHeader />
      <Banner />
      <ProjectSteps />
      <SafetyStandards />
      <QualityAssurance />
      <ContactUs />
    </>
  );
}
