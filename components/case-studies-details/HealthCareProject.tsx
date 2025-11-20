import React from "react";
import Heading from "../globals/typography/Heading";
import Image from "next/image";
import BodyText from "../globals/typography/BodyText";

export interface NewsArticle {
  id: string;
  title: string;
  location: string;
  country?: string;
  content: string[];
  image?: {
    src: string;
    alt: string;
  };
  shareLinks?: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Example article data object
export const newsArticleData: NewsArticle = {
  id: "1",
  title: "Buildbrite Wins Major Healthcare Project in Toronto",
  location: "New York, USA",
  country: "",
  content: [
    "Buildbrite Construction Ltd. has secured a landmark contract to lead the development of a new state-of-the-art healthcare facility in downtown Toronto. The project, valued at over $450 million, marks one of the company's largest undertakings to date and reinforces its position as a leader in USA's construction and infrastructure sector. The new healthcare complex, commissioned by the New York Ministry of Health, will include advanced patient care units, research laboratories, and a sustainable design aimed at achieving LEED Platinum certification. Construction is scheduled to begin in early 2026, with completion expected by late 2029.",
    "This project represents an incredible opportunity to improve access to world-class healthcare for NY residents while setting new standards for environmental sustainability, said Buildbrite CEO Laura Chen.Our team is proud to contribute to a development that will serve the community for generations to come.",
    "In addition to expanding healthcare capacity, the project is expected to generate more than 2,000 local jobs during construction and provide long-term employment in operations and maintenance.",
    "City officials praised the initiative as a milestone in NY's ongoing efforts to modernize its public health infrastructure. This investment not only enhances healthcare delivery but also strengthens our local economy, said Mayor Olivia Reynolds. With Buildbrite's proven track record in delivering large-scale institutional projects, the company is poised to play a key role in shaping the future of healthcare facilities across USA.",
    "Buildbrite's extensive portfolio includes several major institutional and infrastructure projects across Canada, including the Vancouver Medical Innovation Campus and the LA Green Energy Hospital Wing. With this latest win, the company continues to strengthen its reputation as a trusted partner in delivering complex, high-impact public projects.",
  ],
  image: {
    src: "/case-studies-details/gold-cup.png",
    alt: "Golden trophy award",
  },
  shareLinks: {
    facebook: "/case-studies-details/fb.svg",
    linkedin: "/case-studies-details/linkedin.svg",
    twitter: "/case-studies-details/twitter.svg",
  },
};

const HealthCareProject: React.FC = () => {
  return (
    <section className="bg-white" data-theme="light">
      <div className="container-custom flex flex-col pt-8 pb-[60px] md:pb-[100px]">
        <div className="flex flex-col gap-10 items-start md:flex-row md:justify-between ">
          {/* left */}
          <div className="flex flex-col gap-4 md:gap-6">
            <Heading
              variant="jakarta"
              level="h2"
              className="text-dark1 max-w-[548px]"
            >
              {newsArticleData.title}
            </Heading>

            <div className="flex items-center gap-2">
              <Image
                src="/globals/location.svg"
                alt="location icon"
                width={16}
                height={16}
              />

              <BodyText variant="body-sm" className="text-dark1/70">
                {newsArticleData.location}
              </BodyText>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-10 max-w-[664px]">
            {newsArticleData.content.slice(0, -1).map((item, index) => (
              <BodyText key={index} variant="body" className="text-tertiary/70">
                {item}
              </BodyText>
            ))}

            <div className="aspect-[664/283]">
              <Image
                src="/case-studies-details/gold-cup.png"
                width={664}
                height={283}
                alt="trophy"
              />
            </div>

            <BodyText variant="body" className="text-tertiary/70">
              {newsArticleData.content.at(-1)}
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCareProject;
