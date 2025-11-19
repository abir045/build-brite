import ChallengesAndSolutions from "@/components/projects/project-details/ChallengesAndSolutions";
import KeyMetrics from "@/components/projects/project-details/KeyMetrics";
import ProjectDetailsBanner from "@/components/projects/project-details/ProjectDetailsBanner";
import ProjectDetailsHeader from "@/components/projects/project-details/ProjectDetailsHeader";
import ProjectOutcome from "@/components/projects/project-details/ProjectOutcome";
import Slider from "@/components/projects/project-details/Slider";
import React from "react";

const ProjectDetails = () => {
  return (
    <>
      {" "}
      <ProjectDetailsHeader />
      <ProjectDetailsBanner />
      <KeyMetrics />
      <ChallengesAndSolutions />
      <ProjectOutcome />
      <Slider />
    </>
  );
};

export default ProjectDetails;
