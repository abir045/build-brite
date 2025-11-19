import ContactUs from "@/components/Home/ContactUs";
import Diversity from "@/components/our-values/Diversity";
import OurCommunity from "@/components/our-values/OurCommunity";
import OurPeople from "@/components/our-values/OurPeople";
import OurValuesHeader from "@/components/our-values/OurValuesHeader";
import Principles from "@/components/our-values/Principles";
import Safety from "@/components/our-values/Safety";

export default function OurValues() {
  return (
    <>
      <OurValuesHeader />
      <Principles />
      <OurPeople />
      <Diversity />
      <Safety />
      <OurCommunity />
      <ContactUs />
    </>
  );
}
