import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <FeaturedProjects />
    </>
  );
}
