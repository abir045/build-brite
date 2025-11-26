import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Heading from "../globals/typography/Heading";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// FAQ data
const faqData: FaqItem[] = [
  {
    id: "01",
    question: "What services does Buildbrite offer?",
    answer:
      "Buildbrite provides comprehensive corporate website solutions for construction firms, real estate companies, and architecture studios, including project showcases, corporate profiles, and client engagement tools.",
  },
  {
    id: "02",
    question: "Who can benefit from Buildbrite?",
    answer:
      "Construction firms, real estate companies, architecture studios, and related businesses looking to establish a professional online presence can benefit from Buildbrite's services.",
  },
  {
    id: "03",
    question: "Can Buildbrite help manage multiple projects?",
    answer:
      "Yes, Buildbrite offers project management features that allow you to showcase and manage multiple projects efficiently through an intuitive dashboard.",
  },
  {
    id: "04",
    question: "How can clients get in touch through Buildbrite?",
    answer:
      "Buildbrite includes built-in contact forms, inquiry systems, and client engagement tools that make it easy for potential clients to reach out to your business.",
  },
  {
    id: "05",
    question: "Is Buildbrite suitable for startups and small firms?",
    answer:
      "Absolutely! Buildbrite is designed to be scalable and affordable, making it perfect for businesses of all sizes, from startups to established enterprises.",
  },
];

const FaqAccordion = () => {
  return (
    <section className="bg-light-blue">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3"
          defaultValue="item-0"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-0  shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-5 md:px-10 pt-8 hover:no-underline  transition-colors">
                <div className="flex items-center gap-5 md:gap-10 text-left w-full">
                  <Heading
                    variant="jakarta"
                    level="h3"
                    className="text-accent shrink-0"
                  >
                    {faq.id}
                  </Heading>

                  <LargeText variant="large-20-bold" className="text-dark1">
                    {faq.question}
                  </LargeText>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 md:px-[124px] pt-0 shrink-0">
                <BodyText variant="body" className="text-tertiary/80">
                  {faq.answer}
                </BodyText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
