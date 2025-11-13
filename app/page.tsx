import ContactUs from "@/components/Home/ContactUs";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Hero from "@/components/Home/Hero";
import Map from "@/components/Home/Map";
import NewsInsights from "@/components/Home/NewsInsights";
import Services from "@/components/Home/Services";
import Sustainability from "@/components/Home/Sustainability";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <FeaturedProjects />
      <Sustainability />
      <NewsInsights />
      <Map />
      <ContactUs />
    </>
  );
}
