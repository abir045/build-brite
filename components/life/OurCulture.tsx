import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";

// Interface definition
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

// Data array
export const officeGalleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/OurCulture/1.png",
    alt: "Modern office workspace with natural lighting and plants",
  },
  {
    id: "2",
    src: "/OurCulture/2.png",
    alt: "Contemporary conference room with large windows",
  },
  {
    id: "3",
    src: "/OurCulture/3.png",
    alt: "Team collaborating around a wooden conference table",
  },
  {
    id: "4",
    src: "/OurCulture/4.png",
    alt: "Open office layout with modern furniture",
  },
  {
    id: "5",
    src: "/OurCulture/5.png",
    alt: "Dark themed meeting room with glass walls",
  },
  {
    id: "6",
    src: "/OurCulture/6.png",
    alt: "Modern office corridor with glass partitions",
  },
];

const OurCulture = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom py-[60px] md:py-[100px] flex flex-col">
        <Heading variant="jakarta" level="h2" className="text-dark1">
          Our culture{" "}
          <Heading variant="playfair" level="span" className="inline">
            in action
          </Heading>
        </Heading>

        {/* image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 md:mt-14">
          {officeGalleryImages.map((item) => (
            <div key={item.id} className="aspect-[448/310]">
              <Image
                src={item.src}
                width={448}
                height={310}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
