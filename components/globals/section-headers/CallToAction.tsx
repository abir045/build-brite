// "use client";

// import Image from "next/image";
// import Heading from "../typography/Heading";
// import BodyText from "../typography/BodyText";

// interface CallToActionProps {
//   bgColor?: string;
//   dataTheme?: "light" | "dark";
//   imageSrc: string;
//   imageAlt: string;
//   headingText: string;
//   headingClassName?: string;
//   highlightText?: string;
//   highlightClassName?: string;
//   bodyText: string;
//   bodyClassName?: string;
//   buttonText: string;
//   buttonClassName?: string;
//   buttonTextClassName?: string;
//   buttonIcon?: string;
//   onButtonClick?: () => void;
//   imagePosition?: "left" | "right";
// }

// const CallToAction = ({
//   bgColor = "bg-dark2",
//   dataTheme = "dark",
//   imageSrc,
//   imageAlt,
//   headingText,
//   headingClassName = "text-white",
//   highlightText,
//   highlightClassName = "text-white",
//   bodyText,
//   bodyClassName = "text-white/60",
//   buttonText,
//   buttonClassName = "bg-primary",
//   buttonTextClassName = "text-dark1",
//   buttonIcon = "/home/news/green-right-arrow.svg",
//   onButtonClick,
//   imagePosition = "left",
// }: CallToActionProps) => {
//   return (
//     <section className={bgColor} data-theme={dataTheme}>
//       <div className="container-custom py-[60px] md:py-20 px-5 md:px-10">
//         <div className="grid grid-cols-1 gap-8 items-center justify-center md:grid-cols-2">
//           {/* Image div */}
//           <div
//             className={`relative w-full max-w-[290px] mx-auto aspect-square ${
//               imagePosition === "right" ? "md:order-2" : ""
//             }`}
//           >
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               className="object-cover"
//               fill
//             />
//           </div>

//           {/* Content div */}
//           <div
//             className={`md:mx-0 ${
//               imagePosition === "right" ? "md:order-1" : ""
//             }`}
//           >
//             <div className="flex flex-col gap-4 md:gap-6">
//               <div className="max-w-[528px]">
//                 <Heading
//                   variant="jakarta"
//                   level="h2"
//                   className={headingClassName}
//                 >
//                   {headingText}{" "}
//                   {highlightText && (
//                     <Heading
//                       level="h2"
//                       variant="playfair"
//                       className={`inline-block ${highlightClassName}`}
//                     >
//                       {highlightText}
//                     </Heading>
//                   )}
//                 </Heading>
//               </div>

//               <BodyText variant="body" className={bodyClassName}>
//                 {bodyText}
//               </BodyText>

//               <button
//                 onClick={onButtonClick}
//                 className={`rounded flex px-4 py-2.5 items-center  justify-between mt-8 md:mt-10 md:self-start ${buttonClassName}`}
//               >
//                 <BodyText variant="navigation" className={buttonTextClassName}>
//                   {buttonText}
//                 </BodyText>

//                 <Image
//                   src={buttonIcon}
//                   width={20}
//                   height={20}
//                   alt="arrow icon"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

// "use client";

// import Image from "next/image";
// import Heading from "../typography/Heading";
// import BodyText from "../typography/BodyText";

// interface CallToActionProps {
//   bgColor?: string;
//   dataTheme?: "light" | "dark";
//   imageSrc: string;
//   imageAlt: string;
//   headingText: string;
//   headingClassName?: string;
//   headingVariant?: "playfair" | "jakarta";
//   highlightText?: string;
//   highlightClassName?: string;
//   highlightVariant?: "playfair" | "jakarta";
//   bodyText: string;
//   bodyClassName?: string;
//   buttonText: string;
//   buttonClassName?: string;
//   buttonTextClassName?: string;
//   buttonIcon?: string;
//   onButtonClick?: () => void;
//   imagePosition?: "left" | "right";
// }

// const CallToAction = ({
//   bgColor = "bg-dark2",
//   dataTheme = "dark",
//   imageSrc,
//   imageAlt,
//   headingText,
//   headingClassName = "text-white",
//   headingVariant = "jakarta",
//   highlightText,
//   highlightClassName = "text-white",
//   highlightVariant = "playfair",
//   bodyText,
//   bodyClassName = "text-white/60",
//   buttonText,
//   buttonClassName = "bg-primary",
//   buttonTextClassName = "text-dark1",
//   buttonIcon = "/home/news/green-right-arrow.svg",
//   onButtonClick,
//   imagePosition = "left",
// }: CallToActionProps) => {
//   return (
//     <section className={bgColor} data-theme={dataTheme}>
//       <div className="container-custom py-[60px] md:py-20 px-5 md:px-10">
//         <div className="grid grid-cols-1 gap-8 items-center justify-center md:grid-cols-2">
//           {/* Image div */}
//           <div
//             className={`relative w-full max-w-[290px] mx-auto aspect-square ${
//               imagePosition === "right" ? "md:order-2" : ""
//             }`}
//           >
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               className="object-cover"
//               fill
//             />
//           </div>

//           {/* Content div */}
//           <div
//             className={`md:mx-0 ${
//               imagePosition === "right" ? "md:order-1" : ""
//             }`}
//           >
//             <div className="flex flex-col gap-4 md:gap-6">
//               <div className="max-w-[528px]">
//                 <Heading
//                   variant={headingVariant}
//                   level="h2"
//                   className={headingClassName}
//                 >
//                   {headingText}{" "}
//                   {highlightText && (
//                     <Heading
//                       level="h2"
//                       variant={highlightVariant}
//                       className={`inline-block ${highlightClassName}`}
//                     >
//                       {highlightText}
//                     </Heading>
//                   )}
//                 </Heading>
//               </div>

//               <BodyText variant="body" className={bodyClassName}>
//                 {bodyText}
//               </BodyText>

//               <button
//                 onClick={onButtonClick}
//                 className={`rounded flex px-4 py-2.5 items-center  justify-between mt-8 md:mt-10 md:self-start ${buttonClassName}`}
//               >
//                 <BodyText variant="navigation" className={buttonTextClassName}>
//                   {buttonText}
//                 </BodyText>

//                 <Image
//                   src={buttonIcon}
//                   width={20}
//                   height={20}
//                   alt="arrow icon"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

"use client";

import Image from "next/image";
import Heading from "../typography/Heading";
import BodyText from "../typography/BodyText";

interface CallToActionProps {
  bgColor?: string;
  dataTheme?: "light" | "dark";
  imageSrc: string;
  imageAlt: string;
  headingText: string;
  headingClassName?: string;
  headingVariant?: "playfair" | "jakarta";
  highlightText?: string;
  highlightClassName?: string;
  highlightVariant?: "playfair" | "jakarta";
  bodyText: string;
  bodyClassName?: string;
  buttonText: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  buttonIcon?: string;
  onButtonClick?: () => void;
  imagePosition?: "left" | "right";
}

const CallToAction = ({
  bgColor = "bg-dark2",
  dataTheme = "dark",
  imageSrc,
  imageAlt,
  headingText,
  headingClassName = "text-white",
  headingVariant = "jakarta",
  highlightText,
  highlightClassName = "text-white",
  highlightVariant = "playfair",
  bodyText,
  bodyClassName = "text-white/60",
  buttonText,
  buttonClassName = "bg-primary",
  buttonTextClassName = "text-dark1",
  buttonIcon = "/home/news/green-right-arrow.svg",
  onButtonClick,
  imagePosition = "left",
}: CallToActionProps) => {
  return (
    <section className={bgColor} data-theme={dataTheme}>
      <div className="container-custom py-[60px] md:py-20 px-5 md:px-10">
        <div className="grid grid-cols-1 gap-8 items-center justify-center md:grid-cols-2">
          {/* Image div */}
          <div
            className={`relative w-full max-w-[290px] mx-auto aspect-square ${
              imagePosition === "right" ? "md:order-2" : ""
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-cover"
              fill
            />
          </div>

          {/* Content div */}
          <div
            className={`md:mx-0 ${
              imagePosition === "right" ? "md:order-1" : ""
            }`}
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="max-w-[528px]">
                <Heading
                  variant={headingVariant}
                  level="h2"
                  className={`inline ${headingClassName}`}
                >
                  {headingText}{" "}
                </Heading>
                {highlightText && (
                  <Heading
                    level="h2"
                    variant={highlightVariant}
                    className={`inline ${highlightClassName}`}
                  >
                    {highlightText}
                  </Heading>
                )}
              </div>

              <BodyText variant="body" className={bodyClassName}>
                {bodyText}
              </BodyText>

              <button
                onClick={onButtonClick}
                className={`group rounded hover:bg-dark1 transition-colors duration-300 flex px-4 py-2.5 items-center   justify-between mt-8 md:mt-10 md:self-start ${buttonClassName}`}
              >
                <BodyText
                  variant="navigation"
                  className={`group-hover:text-primary ${buttonTextClassName}`}
                >
                  {buttonText}
                </BodyText>

                <Image
                  src={buttonIcon}
                  width={20}
                  height={20}
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
