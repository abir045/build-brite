import AwardsGrid from "@/components/awards-recognition/AwardsGrid";
import AwardsHeader from "@/components/awards-recognition/AwardsHeader";
import Recognition from "@/components/awards-recognition/Recognition";
import ContactUs from "@/components/Home/ContactUs";

export default function AwardsAndRecognition() {
  return (
    <>
      <AwardsHeader />
      <AwardsGrid />
      <Recognition />
      <ContactUs />
    </>
  );
}
