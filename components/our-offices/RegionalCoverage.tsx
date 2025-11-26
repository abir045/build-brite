import React from "react";
import Heading from "../globals/typography/Heading";
import LargeText from "../globals/typography/LargeText";
import BodyText from "../globals/typography/BodyText";

interface RegionalOffice {
  id: number;
  count: number;
  region: string;
  countries: string[];
}

const regionalOffices: RegionalOffice[] = [
  {
    id: 1,
    count: 4,
    region: "North America",
    countries: ["United States", "Canada", "Mexico"],
  },
  {
    id: 2,
    count: 2,
    region: "Europe",
    countries: ["UK", "France", "Germany", "Spain"],
  },
  {
    id: 3,
    count: 2,
    region: "Asia Pacific",
    countries: ["Singapore", "Japan", "Australia"],
  },
  {
    id: 4,
    count: 1,
    region: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar"],
  },
];

const RegionalCoverage = () => {
  return (
    <section className="bg-accent">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <Heading
          variant="jakarta"
          level="h4"
          className="text-white text-center"
        >
          Regional coverage
        </Heading>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 md:mt-14">
          {regionalOffices.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 items-center">
              <LargeText variant="large-32-playfair" className="text-primary">
                {item.count} {""}
                {item.count === 1 ? "office" : "offices"}
              </LargeText>

              <BodyText variant="body-sm-bold" className="text-white mt-3">
                {item.region}
              </BodyText>

              <BodyText variant="body-sm" className="text-white">
                {item.countries.join(", ")}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCoverage;
