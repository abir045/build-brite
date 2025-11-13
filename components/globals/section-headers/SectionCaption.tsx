import Image from "next/image";
import BodyText from "../typography/BodyText";

interface SectionCaptionProps {
  text: string;
  className?: string;
}

const SectionCaption = ({ text, className = "" }: SectionCaptionProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/home/green-circle.svg" width={8} height={8} alt="icon" />
      <BodyText variant="body-sm" className={`text-white ${className}`}>
        {text}
      </BodyText>
    </div>
  );
};

export default SectionCaption;
