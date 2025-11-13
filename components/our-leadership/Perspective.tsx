import SectionCaption from "../globals/section-headers/SectionCaption";
import LargeText from "../globals/typography/LargeText";

const Perspective: React.FC = () => {
  return (
    <section className="bg-primary" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <SectionCaption
            text="Diverse perspectives, unified vision"
            className="text-tertiary"
          />

          <LargeText
            variant="large-32-reg"
            className="text-dark1 text-center max-w-[896px] mx-auto"
          >
            Our leadership team represents diverse backgrounds, experiences, and
            perspectives, a reflection of the global communities we serve. This
            diversity strengthens our decision-making, drives innovation, and
            ensures we build with empathy and understanding for all
            stakeholders.
          </LargeText>
        </div>
      </div>
    </section>
  );
};

export default Perspective;
