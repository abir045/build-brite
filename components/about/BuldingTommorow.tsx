import Image from "next/image";
import SectionCaption from "../globals/section-headers/SectionCaption";
import LargeText from "../globals/typography/LargeText";

export default function BuildingTomorrow() {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom py-[60px] md:py-[110px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="flex items-center justify-center  aspect-square max-w-[564px] px-[50px]">
            <Image
              src="/About/tomorrow.png"
              alt="image"
              width={564}
              height={564}
              className="object-cover w-full"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <SectionCaption
              text="Building Tomorrow, Today"
              className="text-dark1"
            />

            <LargeText variant="large-32-reg" className="text-accent">
              Every project we undertake is an opportunity to make a lasting
              difference. From iconic skyscrapers to essential infrastructure,
              we approach each challenge with the same dedication to excellence
              that has defined our work for nearly five decades.
            </LargeText>
          </div>
        </div>
      </div>
    </section>
  );
}
