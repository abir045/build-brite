import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import Image from "next/image";
import Link from "next/link";
import LargeText from "../globals/typography/LargeText";
import { ArrowRight } from "lucide-react";
import darkArrow from "../../public/globals/right-dark-arrow.svg";

interface Office {
  id: number;
  tag?: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const offices: Office[] = [
  {
    id: 1,
    tag: "Headquarter",
    title: "Global Headquarter",
    address: "1738 Hicks Street, New York, NY 10004",
    phone: "+1 (212) 229-6000",
    email: "contact@buildbrite.com",
    image: "/globals-offices/headquarters.png",
  },
  {
    id: 2,
    title: "Los Angeles Office",
    address: "665 West 5th Street, Los Angeles, CA 90012",
    phone: "+1 (213) 629-8000",
    email: "losangeles@buildbrite.com",
    image: "/globals-offices/los-angeles.png",
  },
  {
    id: 3,
    title: "Chicago Office",
    address: "200 East Randolph Street, Chicago, IL 60601",
    phone: "+1 (312) 729-6000",
    email: "chicago@buildbrite.com",
    image: "/globals-offices/chicago.png",
  },
  {
    id: 4,
    title: "Toronto Office",
    address: "200 Yonge Street, Toronto, ON M5B 2L7",
    phone: "+1 (319) 229-6000",
    email: "toronto@buildbrite.com",
    image: "/globals-offices/toronto.png",
  },
  {
    id: 5,
    title: "London Office",
    address: "10 Fleet Place, London EC4M 7RB",
    phone: "+1 (719) 229-6000",
    email: "london@buildbrite.com",
    image: "/globals-offices/london.png",
  },
  {
    id: 6,
    title: "Paris Office",
    address: "32 Avenue Hoche, 75008 Paris",
    phone: "+1 (212) 229-6000",
    email: "paris@buildbrite.com",
    image: "/globals-offices/paris.png",
  },
  {
    id: 7,
    title: "Singapore Office",
    address: "1 Marina Place, #100-02, Singapore 018960",
    phone: "+1 (312) 229-6000",
    email: "singapore@buildbrite.com",
    image: "/globals-offices/singapore.png",
  },
  {
    id: 8,
    title: "Tokyo Office",
    address: "1-1-1 Otemachi, Chiyoda-ku, Tokyo 100-8050",
    phone: "+1 (212) 229-6000",
    email: "tokyo@buildbrite.com",
    image: "/globals-offices/tokyo.png",
  },
  {
    id: 9,
    title: "Dubai Office",
    address: "Level 17, The Opus Building, DIFC, Dubai",
    phone: "+1 (212) 229-6000",
    email: "dubai@buildbrite.com",
    image: "/globals-offices/dubai.png",
  },
];

const GlobalOffices = () => {
  return (
    <section className="bg-white">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Heading variant="jakarta" level="h2" className="text-dark1">
            Global{" "}
            <Heading variant="playfair" level="span" className="inline">
              offices
            </Heading>
          </Heading>

          <BodyText variant="body" className="text-dark1/70">
            Our offices are strategically located in major business centers
            worldwide
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-14">
          {offices.map((office) => (
            <div key={office.id} className="relative  overflow-hidden group">
              {/* Image */}
              <div className="relative h-[500px] p-6 w-full">
                <Image
                  src={office.image}
                  alt={office.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div> */}

                {/* Tag */}
                {office.tag && (
                  <div className="absolute top-6 left-6 bg-primary px-3 py-[5.5px] rounded">
                    <BodyText variant="body-sm" className="text-dark1">
                      {office.tag}
                    </BodyText>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* <h3 className="text-xl font-bold mb-4">{office.title}</h3> */}
                  <LargeText
                    variant="large-20-bold"
                    className="text-white mb-6"
                  >
                    {office.title}
                  </LargeText>

                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-start gap-3">
                      <Image
                        src="/globals/location.svg"
                        width={16}
                        height={16}
                        alt="icon"
                      />
                      <BodyText variant="body-sm" className="text-white/70">
                        {office.address}
                      </BodyText>
                      {/* <span>{office.address}</span> */}
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/globals/phone.svg"
                        width={16}
                        height={16}
                        alt="icon"
                      />
                      {/* <a href={`tel:${office.phone}`}>{office.phone}</a> */}
                      <BodyText variant="body-sm" className="text-white/70">
                        {office.phone}
                      </BodyText>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/globals/mail.svg"
                        width={16}
                        height={16}
                        alt="icon"
                      />
                      <BodyText variant="body-sm" className="text-white/70">
                        {office.email}
                      </BodyText>
                      {/* <a href={`mailto:${office.email}`}>{office.email}</a> */}
                    </div>
                  </div>

                  {/* Button */}

                  <Link
                    href={`/projects?office=${office.id}`}
                    className="group inline-flex items-center justify-between w-full bg-primary text-dark1 px-4 py-2.5 rounded hover:text-primary hover:bg-dark1 duration-300"
                  >
                    <BodyText variant="navigation">VIEW OUR PROJECTS</BodyText>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-colors duration-300"
                    >
                      <path
                        d="M1.66613 10.8334L1.66602 9.16684H15.1426L11.8512 5.87538L13.0297 4.69687L18.333 10.0002L13.0297 15.3035L11.8512 14.1249L15.1427 10.8335L1.66613 10.8334Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalOffices;
