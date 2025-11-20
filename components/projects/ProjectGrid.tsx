"use client";

import React, { useState } from "react";
import BodyText from "../globals/typography/BodyText";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";

interface ProjectTab {
  id: number;
  label: string;
  value: string;
}

const tabs: ProjectTab[] = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Commercial", value: "commercial" },
  { id: 3, label: "Residential", value: "residential" },
  { id: 4, label: "Industrial", value: "industrial" },
  { id: 5, label: "Infrastructure", value: "infrastructure" },
  { id: 6, label: "Institutional", value: "institutional" },
];

interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  location: string;
  size?: string;
}

const projectList: Project[] = [
  {
    id: 1,
    category: "Commercial",
    image: "/projects/metropolitan.png",
    title: "Metropolitan Tower",
    description:
      "52-story mixed-use tower featuring premium office space and retail",
    location: "New York, USA",
    size: "432 Fill × 500",
  },
  {
    id: 2,
    category: "Residential",
    image: "/projects/riverside.png",
    title: "Riverside Residences",
    description: "Luxury waterfront residential complex with 280 units",
    location: "Seattle, USA",
  },
  {
    id: 3,
    category: "Industrial",
    image: "/projects/tech.png",
    title: "Tech Logistics Hub",
    description: "State-of-the-art automated distribution facility",
    location: "Austin, USA",
  },
  {
    id: 4,
    category: "Commercial",
    image: "/projects/harbor.png",
    title: "Harbor Crossing Bridge",
    description: "1.5M cable-stayed bridge connecting downtown centers",
    location: "Boston, USA",
  },
  {
    id: 5,
    category: "Institutional",
    image: "/projects/state.png",
    title: "State University Science Center",
    description: "Advanced research facility for STEM programs",
    location: "Ann Arbor, USA",
  },
  {
    id: 6,
    category: "Institutional",
    image: "/projects/central.png",
    title: "Central Medical Center",
    description: "300-bed hospital with emergency and specialty care",
    location: "Phoenix, USA",
  },
  {
    id: 7,
    category: "Commercial",
    image: "/projects/downtown.png",
    title: "Downtown Plaza",
    description: "Mixed-use development with premium retail complex",
    location: "Denver, USA",
  },
  {
    id: 8,
    category: "Residential",
    image: "/projects/skyline.png",
    title: "Skyline Apartments",
    description: "High-rise residential tower with 180 units",
    location: "Miami, USA",
  },
  {
    id: 9,
    category: "Infrastructure",
    image: "/projects/airport.png",
    title: "International Airport Terminal",
    description: "State-of-the-art terminal expansion and modernization",
    location: "Dallas, USA",
  },
];

const ProjectGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectList
      : projectList.filter(
          (project) => project.category.toLowerCase() === activeCategory
        );

  return (
    <section className="bg-white" data-theme="dark">
      <div className="container-custom flex flex-col pt-8 pb-[60px] md:pb-[100px]">
        {/* tabs */}
        <div className="flex overflow-x-auto gap-4 items-center md:gap-2 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-5 py-2.5 rounded ${
                activeCategory === tab.value ? "bg-dark1" : "bg-[#F1F1F1]"
              }`}
              onClick={() => setActiveCategory(tab.value)}
            >
              <BodyText
                variant="body-sm"
                className={`${
                  activeCategory === tab.value
                    ? "text-primary leading-[130%] font-bold"
                    : "text-dark1"
                }`}
              >
                {tab.label}
              </BodyText>
            </button>
          ))}
        </div>

        {/* project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={432}
                height={500}
              />

              <div className="absolute top-6 left-6 bg-primary px-3 py-[5.5px] rounded">
                <BodyText variant="body-sm" className="text-dark1">
                  {project.category}
                </BodyText>
              </div>

              <div className="absolute bottom-6 left-6 right-0  max-w-[384px]">
                <LargeText variant="large-20-bold" className="text-white">
                  {project.title}
                </LargeText>
                <BodyText
                  variant="body-sm"
                  className="text-white/60 mt-4 w-full max-w-[340px] md:max-w-[384px]"
                >
                  {project.description}
                </BodyText>
                <div className="flex items-center gap-2 mt-4">
                  <Image
                    src="/projects/location.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                  <BodyText variant="body-sm" className="text-white/70 ">
                    {project.location}
                  </BodyText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
