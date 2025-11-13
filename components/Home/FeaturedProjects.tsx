"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MapPin } from "lucide-react";
import LargeText from "../globals/typography/LargeText";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  size: "large" | "small";
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "METROPOLITAN TOWER",
    location: "New York, USA",
    description:
      "52-story mixed-use development featuring commercial and residential spaces",
    image: "/home/metro-tower.png",
    size: "large",
  },
  {
    id: 2,
    title: "HARBOR BRIDGE INFRASTRUCTURE",
    location: "Sydney, Australia",
    description: "Major infrastructure project connecting urban centers",
    image: "/home/metro-tower.png",
    size: "small",
  },
  {
    id: 3,
    title: "TECH CAMPUS INNOVATION CENTER",
    location: "San Francisco, USA",
    description: "State-of-the-art technology campus with sustainable design",
    image: "/home/metro-tower.png",
    size: "small",
  },
];

const FeaturedProjects: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-dark1" data-theme="dark">
      <div className="container-custom py-[60px] lg:py-[100px] flex flex-col">
        {/* Header */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <Image
              src="/home/green-circle.svg"
              width={8}
              height={8}
              alt="icon"
            />
            <BodyText variant="body-sm" className="text-white">
              Featured projects
            </BodyText>
          </div>

          <div className="flex justify-between items-end mt-4 lg:mt-6 ">
            <Heading
              variant="jakarta"
              level="h2"
              className="text-white max-w-[548px]"
            >
              Showcasing our{" "}
              <Heading
                variant="playfair"
                level="h2"
                className="text-white inline-block"
              >
                commitment to excellence
              </Heading>{" "}
              across diverse industries
            </Heading>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 px-4 py-2.5 border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors rounded"
              >
                <Image
                  src="/home/white-left-arrow.svg"
                  alt="Previous"
                  width={20}
                  height={20}
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 px-4 py-2.5 bg-primary flex items-center justify-center hover:bg-[#b3e84d] transition-colors"
              >
                <Image
                  src="/home/dark-right-arrow.svg"
                  alt="Next"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="mt-8 lg:mt-12 ">
          <Swiper
            // onBeforeInit={(swiper) => {
            //   swiperRef.current = swiper;
            // }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            loop={false}
            className="w-full"
          >
            {projectsData.map((project, index) => {
              // Calculate width for each slide
              const getSlideWidth = () => {
                if (hoveredIndex !== null) {
                  if (hoveredIndex === index)
                    return isMobile ? "381px" : "896px"; // expanded
                  return "224px"; // collapsed
                }
                return index === 0 ? (isMobile ? "281px" : "896px") : "224px";
              };

              const isExpanded =
                hoveredIndex === null
                  ? index === 0 // Default: first expanded
                  : hoveredIndex === index; // On hover: only hovered expanded

              return (
                <SwiperSlide
                  key={project.id}
                  style={{
                    width: getSlideWidth(),
                    transition: "width 0.15s cubic-bezier(0.45, 0, 0.2, 1)",

                    // transition: "width 1.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ProjectCard
                    project={project}
                    // isExpanded={index === 0 || hoveredIndex === index}
                    isExpanded={isExpanded}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; isExpanded?: boolean }> = ({
  project,
  isExpanded = false,
}) => {
  if (!isExpanded) {
    // Collapsed card (image only with title)
    return (
      <div className="relative w-full h-[450px] bg-dark1 text-white rounded-2xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /> */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-lg font-semibold tracking-wide leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
    );
  }

  // Expanded card (responsive)
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#0E141B] text-white  overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[495px] md:h-[450px] shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      {/* <div
        className="w-full md:w-1/2 flex flex-col justify-center p-5 lg:px-10  space-y-3"
        style={{
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out 0.6s", // Start fading in after width expands
          pointerEvents: isExpanded ? "auto" : "none",
          visibility: isExpanded ? "visible" : "hidden",
        }}
      >
        <LargeText variant="large-28-caps" className="">
          {project.title}
        </LargeText>

        <div className="flex items-center mt-4 lg:mt-6">
          <MapPin className="w-4 h-4 text-primary mr-1" />
          <BodyText variant="body-sm" className="text-white/60">
            {project.location}
          </BodyText>
        </div>

        <BodyText variant="body" className="text-white/60 mt-8 lg:mt-12">
          {project.description}
        </BodyText>
      </div> */}

      {/* Content Section */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center p-5 lg:px-10 space-y-3 transition-all duration-500 ease-in-out
        `}
        style={{
          transition: "opacity 0.45s ease 0.25s, transform 0.45s ease 0.25s",
          transform: isExpanded ? "translateX(0)" : "translateX(-10px)",
        }}
      >
        <LargeText variant="large-28-caps" className="">
          {project.title}
        </LargeText>

        <div className="flex items-center mt-4 lg:mt-6">
          <MapPin className="w-4 h-4 text-primary mr-1" />
          <BodyText variant="body-sm" className="text-white/60">
            {project.location}
          </BodyText>
        </div>

        <BodyText variant="body" className="text-white/60 mt-8 lg:mt-12">
          {project.description}
        </BodyText>
      </div>
    </div>
  );
};

export default FeaturedProjects;
