import Banner from "@/components/our-service/sustainability-innovation/Banner";
import CTA from "@/components/our-service/sustainability-innovation/CTA";
import GreenBuilding from "@/components/our-service/sustainability-innovation/GreenBuilding";
import Precision from "@/components/our-service/sustainability-innovation/Precision";
import SustainabilityHeader from "@/components/our-service/sustainability-innovation/SustainabilityHeader";
import Technology from "@/components/our-service/sustainability-innovation/Technology";
import TechnologyEnhancedSafety from "@/components/our-service/sustainability-innovation/TechnologyEnhancedSafety";

export default function SustainabilityAndInnovation() {
  return (
    <>
      <SustainabilityHeader />
      <Banner />
      <Precision />
      <GreenBuilding />
      <Technology />
      <TechnologyEnhancedSafety />
      <CTA />
    </>
  );
}
