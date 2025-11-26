import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import LargeText from "../globals/typography/LargeText";
import Image from "next/image";

// Interface definition
interface JobListing {
  id: string;
  title: string;
  employmentType: "Full-time" | "Part-time" | "Contract";
  department: string;
  location: string;
  postedDate: string;
  description: string;
}

// Data object
export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Senior Project Manager",
    employmentType: "Full-time",
    department: "Project Management",
    location: "New York, NY",
    postedDate: "Posted 2 days ago",
    description:
      "Lead major commercial construction projects from planning through completion, ensuring on-time, on-budget delivery.",
  },
  {
    id: "2",
    title: "Civil Engineer",
    employmentType: "Full-time",
    department: "Engineering",
    location: "New York, NY",
    postedDate: "Posted 2 days ago",
    description:
      "Design and oversee infrastructure projects including bridges, roadways, and water systems.",
  },
  {
    id: "3",
    title: "Safety Director",
    employmentType: "Full-time",
    department: "Project Management",
    location: "Seattle, WA",
    postedDate: "Posted 1 week ago",
    description:
      "Develop and implement comprehensive safety programs across all project sites.",
  },
  {
    id: "4",
    title: "Sustainability Coordinator",
    employmentType: "Part-time",
    department: "Sustainability",
    location: "New York, NY",
    postedDate: "Posted 3 days ago",
    description:
      "Drive sustainable building practices and LEED certification processes across projects.",
  },
  {
    id: "5",
    title: "BIM Coordinator",
    employmentType: "Full-time",
    department: "Preconstruction",
    location: "Denver, CO",
    postedDate: "Posted 5 days ago",
    description:
      "Manage Building Information Modeling processes and coordinate 3D models across project teams.",
  },
];

const OpenPositions = () => {
  return (
    <section className="bg-light-blue">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-6">
          <Heading variant="jakarta" level="h2" className="text-dark1">
            Open{" "}
            <Heading variant="playfair" level="span" className="inline">
              positions
            </Heading>
          </Heading>

          <BodyText variant="body" className="text-tertiary/70">
            Explore opportunities to join our team and make an impact
          </BodyText>
        </div>

        {/* position grid */}
        <div className="grid grid-cols-1 gap-3 mt-10 md:mt-14 w-full">
          {jobListings.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 md:p-8 flex flex-col items-start gap-10 xl:flex-row xl:justify-between xl:items-center w-full"
            >
              {/* left */}
              <div className="flex flex-col gap-3">
                {/* 1st row */}
                <div className="flex items-center gap-[13px]">
                  <LargeText variant="large-20-bold">{item.title}</LargeText>

                  <div className="bg-primary px-2 py-[6px] rounded-[2px]">
                    <BodyText variant="body-sm" className="text-dark1">
                      {item.employmentType}
                    </BodyText>
                  </div>
                </div>
                {/* 2nd row */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* 1st */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/globals/green-case.svg"
                      width={16}
                      height={16}
                      alt="icon"
                    />
                    <BodyText variant="body-sm" className="text-tertiary/70">
                      {item.department}
                    </BodyText>
                  </div>
                  {/* 2nd */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/globals/location.svg"
                      alt="location icon"
                      width={16}
                      height={16}
                    />
                    <BodyText variant="body-sm" className="text-tertiary/70">
                      {item.location}
                    </BodyText>
                  </div>
                  {/* 3rd */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/globals/briefcase.svg"
                      alt="icon"
                      width={16}
                      height={16}
                    />
                    <BodyText variant="body-sm" className="text-tertiary/70">
                      {item.postedDate}
                    </BodyText>
                  </div>
                </div>
                {/* 3rd row */}
                <BodyText className="text-tertiary mt-2" variant="body">
                  {item.description}
                </BodyText>
              </div>

              {/* right */}
              <div className="">
                <button className="bg-dark1 rounded px-6 py-2.5 text-primary hover:bg-primary hover:text-dark1 transition-colors duration-300">
                  <BodyText
                    variant="navigation"
                    //  className="text-primary"
                  >
                    Apply now
                  </BodyText>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
