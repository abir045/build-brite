import BodyText from "@/components/globals/typography/BodyText";
import Heading from "@/components/globals/typography/Heading";
import LargeText from "@/components/globals/typography/LargeText";

import Image from "next/image";
import React from "react";

interface ServiceDetailItem {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const serviceDetailsData: ServiceDetailItem[] = [
  {
    title: "Design Collaboration",
    description:
      "We work closely with architects and designers from concept to final plans, providing constructability reviews, value engineering, and innovative solutions that optimize both design intent and buildability.",
    features: [
      "Constructability analysis",
      "Value engineering recommendations",
      "Material and system selection",
    ],
    image: "/services/preconstruction/collab.png",
  },
  {
    title: "Cost Estimation",
    description:
      "Our estimating team leverages decades of experience and proprietary databases to deliver precise, detailed cost projections, helping you make informed financial decisions with confidence.",
    features: [
      "Detailed quantity takeoffs",
      "Market analysis and pricing",
      "Contingency planning",
    ],
    image: "/services/preconstruction/estimation.png",
  },
  {
    title: "Feasibility Planning",
    description:
      "Before breaking ground, we conduct comprehensive feasibility studies to evaluate site conditions, zoning requirements, environmental considerations, and project viability.",
    features: [
      "Site analysis and due diligence",
      "Regulatory and permitting review",
      "Risk assessment and mitigation",
    ],
    image: "/services/preconstruction/planning.png",
  },
];

// const OurStrength = () => {
//   return (
//     <section className="bg-white">
//       <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
//         <Heading variant="jakarta" level="h2">
//           Our
//           <Heading variant="playfair" level="span">
//             strength
//           </Heading>
//         </Heading>

//         {/* grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
//           {serviceDetailsData.map((item, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${
//                 index === 1 ? "flex-col-reverse" : ""
//               }`}
//             >
//               <div className="flex flex-col  p-5  md:p-8 border border-accent">
//                 <LargeText variant="large-20-bold" className="text-dark1">
//                   {item.title}
//                 </LargeText>

//                 <BodyText variant="body" className="mt-2 text-tertiary/80">
//                   {item.description}
//                 </BodyText>

//                 {/* Features */}
//                 <ul className="flex flex-col mt-6 gap-4">
//                   {item.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-3">
//                       <div className="relative w-6 h-6">
//                         <Image
//                           src={"/services/preconstruction/tick.svg"}
//                           width={12}
//                           height={12}
//                           alt="icon"
//                         />
//                       </div>
//                       <BodyText
//                         variant="body-sm-bold"
//                         className="text-dark1/80"
//                       >
//                         {feature}
//                       </BodyText>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <Image src={item.image} width={432} height={348} alt="image" />
//             </div>
//           ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const OurStrength = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <Heading variant="jakarta" level="h2" className="text-dark1">
          Our{" "}
          <Heading variant="playfair" level="span">
            strength
          </Heading>
        </Heading>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-14">
          {serviceDetailsData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index === 1 ? "flex-col-reverse" : ""
              }`}
            >
              <div className="flex flex-col p-5 md:p-8 border border-accent">
                <LargeText variant="large-20-bold" className="text-dark1">
                  {item.title}
                </LargeText>

                <BodyText variant="body" className="mt-2 text-tertiary/80">
                  {item.description}
                </BodyText>

                {/* Features */}
                <ul className="flex flex-col mt-6 gap-4">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image
                          src="/services/preconstruction/tick.svg"
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      </div>
                      <BodyText
                        variant="body-sm-bold"
                        className="text-dark1/80"
                      >
                        {feature}
                      </BodyText>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative w-full ">
                <Image
                  src={item.image}
                  width={432}
                  height={348}
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
