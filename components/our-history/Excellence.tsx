import SectionCaption from "../globals/section-headers/SectionCaption";
import LargeText from "../globals/typography/LargeText";

const Excellence: React.FC = () => {
  return (
    <section className="bg-primary" data-theme="light">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <SectionCaption
            text="A legacy of excellence"
            className="text-dark1 "
          />

          <div className="max-w-[896px] mx-auto">
            <LargeText
              variant="large-32-reg"
              className="text-dark1 text-center"
            >
              From our humble beginnings{" "}
              <LargeText
                variant="large-32-playfair"
                className="inline text-dark1"
              >
                in 1975 to our position as a global leader today
              </LargeText>{" "}
              , every milestone represents our commitment to innovation and the
              qualities we serve. As we look to the future, we remain dedicated
              to building not just structures, but lasting legacies that will
              inspire generations to come.
            </LargeText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
