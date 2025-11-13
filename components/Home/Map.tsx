"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import BodyText from "../globals/typography/BodyText";
import Heading from "../globals/typography/Heading";

interface Location {
  id: number;
  name: string;
  address: string;
  top: string;
  left: string;
}
interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "11+",
    label: "Countries",
  },
  {
    value: "500+",
    label: "Active Projects",
  },
  {
    value: "10,000+",
    label: "Professionals",
  },
  {
    value: "$15B",
    label: "Annual Revenue",
  },
];

const Map: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const locations: Location[] = [
    {
      id: 1,
      name: "United States",
      address: "1234 Main Street, New York",
      top: "32%",
      left: "20%",
    },
    {
      id: 2,
      name: "Canada",
      address: "147 Toronto Lane",
      top: "25%",
      left: "22%",
    },
    {
      id: 3,
      name: "United Kingdom",
      address: "456 London Road",
      top: "22%",
      left: "47%",
    },
    {
      id: 4,
      name: "Germany",
      address: "Henriette-Strasse 12",
      top: "24%",
      left: "50%",
    },
    {
      id: 5,
      name: "France",
      address: "789 Paris Avenue",
      top: "26%",
      left: "48.5%",
    },
    {
      id: 6,
      name: "UAE",
      address: "321 Dubai Street",
      top: "36%",
      left: "58%",
    },
    {
      id: 7,
      name: "India",
      address: "987 Mumbai Road",
      top: "35%",
      left: "68%",
    },
    {
      id: 8,
      name: "Singapore",
      address: "654 Marina Boulevard",
      top: "48%",
      left: "73%",
    },
    {
      id: 9,
      name: "Japan",
      address: "321 Tokyo Street",
      top: "30%",
      left: "82%",
    },
    {
      id: 10,
      name: "Australia",
      address: "789 Sydney Avenue",
      top: "68%",
      left: "81%",
    },
    {
      id: 11,
      name: "Brazil",
      address: "654 Rio Boulevard",
      top: "58%",
      left: "30%",
    },
  ];

  const handlePinClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setActiveLocation(activeLocation === id ? null : id);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setActiveLocation(null);
      }
    };

    if (activeLocation !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeLocation]);

  return (
    <div className="bg-white" data-theme="light">
      <div className="flex flex-col container-custom py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/home/green-circle.svg"
              width={8}
              height={8}
              alt="green circle"
            />
            <BodyText variant="body-sm" className="text-tertiary">
              Global presence
            </BodyText>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <Heading variant="jakarta" level="h2" className="text-dark1">
              Delivering projects in{" "}
              <span className="font-playfair">11+ countries worldwide</span>{" "}
              with local expertise and global standards
            </Heading>
          </div>
        </div>

        {/* Map with Location Pins */}
        <div
          ref={mapRef}
          className="relative w-full h-[594px] mt-8 md:mt-14"
          onClick={() => setActiveLocation(null)}
        >
          <Image
            src="/home/map/map.png"
            fill
            alt="map"
            className="object-cover"
          />

          {/* Location Pins */}
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{ top: location.top, left: location.left }}
            >
              {/* Pin */}
              <button
                onClick={(e) => handlePinClick(e, location.id)}
                className="bg-primary flex items-center justify-center rounded-full w-8 h-8 relative z-10 transform -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform"
              >
                <Image
                  src="/home/map/location.svg"
                  width={24}
                  height={24}
                  alt={`${location.name} location`}
                  className="drop-shadow-lg"
                />
              </button>

              {/* Tooltip */}
              {activeLocation === location.id && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-20 animate-in fade-in slide-in-from-bottom-2 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 px-4 py-3 min-w-[200px] whitespace-nowrap">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 border-2 border-white/80 rounded-full flex items-center justify-center shrink-0">
                        <Image
                          src="/home/map/country.svg"
                          width={32}
                          height={32}
                          alt="pin"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <BodyText variant="mapTitle" className="text-dark1">
                          {location.name}
                        </BodyText>

                        <BodyText variant="caption" className="text-dark1 mt-1">
                          {location.address}
                        </BodyText>
                      </div>
                    </div>
                  </div>
                  {/* Tooltip Arrow */}
                  {/* <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white drop-shadow"></div> */}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* bottom data */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4  ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center justify-center"
            >
              <Heading variant="playfair" level="h2" className="text-dark1">
                {stat.value}
              </Heading>
              <BodyText variant="body-sm">{stat.label}</BodyText>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;

// // import Image from "next/image";
// // import React from "react";
// // import BodyText from "../globals/typography/BodyText";
// // import Heading from "../globals/typography/Heading";

// // interface Stat {
// //   value: string;
// //   label: string;
// // }

// // const Map: React.FC = () => {
// //   const stats: Stat[] = [
// //     { value: "11+", label: "Countries" },
// //     { value: "500+", label: "Active Projects" },
// //     { value: "10,000+", label: "Professionals" },
// //     { value: "$15B", label: "Annual Revenue" },
// //   ];

// //   return (
// //     <div className="bg-white">
// //       <div className="flex flex-col container-custom py-[60px] md:py-[100px]">
// //         <div className="flex flex-col  gap-4 md:gap-6">
// //           <div className="flex items-center justify-center gap-2">
// //             <Image
// //               src="/home/green-circle.svg"
// //               width={8}
// //               height={8}
// //               alt="green circle"
// //             />
// //             <BodyText variant="body-sm" className="text-tertiary">
// //               Global presence
// //             </BodyText>
// //           </div>

// //           <div className="w-[62.22%] mx-auto">
// //             <Heading
// //               variant="jakarta"
// //               level="h2"
// //               className="text-dark1 !text-center inline-block"
// //             >
// //               Delivering projects in{" "}
// //               <Heading
// //                 level="h2"
// //                 variant="playfair"
// //                 className="inline-block text-dark1 !text-center"
// //               >
// //                 11+ countries worldwide
// //               </Heading>{" "}
// //               with local expertise and global standards
// //             </Heading>
// //           </div>
// //         </div>

// //         {/* map */}
// //         <div className="relative w-full h-[594px] mt-8 md:mt-14">
// //           <Image src={"/home/map/map.png"} fill alt="map" />
// //         </div>
// //         <Image src="/home/map/location.svg" width={16} height={16} alt="map" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Map;
// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import BodyText from "../globals/typography/BodyText";
// import Heading from "../globals/typography/Heading";

// interface Location {
//   id: number;
//   name: string;
//   address: string;
//   top: string;
//   left: string;
// }

// const Map: React.FC = () => {
//   const [activeLocation, setActiveLocation] = useState<number | null>(null);

//   const locations: Location[] = [
//     {
//       id: 1,
//       name: "Germany",
//       address: "Henriette-Strasse 12",
//       top: "20%",
//       left: "48%",
//     },
//     {
//       id: 2,
//       name: "United States",
//       address: "1234 Main Street",
//       top: "35%",
//       left: "18%",
//     },
//     {
//       id: 3,
//       name: "United Kingdom",
//       address: "456 London Road",
//       top: "25%",
//       left: "46%",
//     },
//     {
//       id: 4,
//       name: "Australia",
//       address: "789 Sydney Ave",
//       top: "70%",
//       left: "82%",
//     },
//     {
//       id: 5,
//       name: "Japan",
//       address: "321 Tokyo Street",
//       top: "30%",
//       left: "85%",
//     },
//     {
//       id: 6,
//       name: "Brazil",
//       address: "654 Rio Boulevard",
//       top: "60%",
//       left: "28%",
//     },
//     {
//       id: 7,
//       name: "India",
//       address: "987 Mumbai Road",
//       top: "40%",
//       left: "68%",
//     },
//     {
//       id: 8,
//       name: "Canada",
//       address: "147 Toronto Lane",
//       top: "22%",
//       left: "20%",
//     },
//   ];

//   const handlePinClick = (id: number) => {
//     setActiveLocation(activeLocation === id ? null : id);
//   };

//   return (
//     <div className="bg-white">
//       <div className="flex flex-col container-custom py-[60px] md:py-[100px]">
//         <div className="flex flex-col gap-4 md:gap-6">
//           <div className="flex items-center justify-center gap-2">
//             <Image
//               src="/home/green-circle.svg"
//               width={8}
//               height={8}
//               alt="green circle"
//             />
//             <BodyText variant="body-sm" className="text-tertiary">
//               Global presence
//             </BodyText>
//           </div>

//           <div className="mx-auto max-w-4xl text-center">
//             <Heading variant="jakarta" level="h2" className="text-dark1">
//               Delivering projects in{" "}
//               <span className="font-playfair">11+ countries worldwide</span>{" "}
//               with local expertise and global standards
//             </Heading>
//           </div>
//         </div>

//         {/* Map with Location Pins */}
//         <div className="relative w-full h-[594px] mt-8 md:mt-14">
//           <Image
//             src="/home/map/map.png"
//             fill
//             alt="map"
//             className="object-cover"
//           />

//           {/* Location Pins */}
//           {locations.map((location) => (
//             <div
//               key={location.id}
//               className="absolute"
//               style={{ top: location.top, left: location.left }}
//             >
//               {/* Pin */}
//               <button
//                 onClick={() => handlePinClick(location.id)}
//                 className="relative z-10 transform -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform"
//               >
//                 <div className="bg-primary flex items-center justify-center rounded-full w-8 h-8">
//                   <Image
//                     src="/home/map/location.svg"
//                     width={16}
//                     height={16}
//                     alt={`${location.name} location`}
//                     className="drop-shadow-lg"
//                   />
//                 </div>
//               </button>

//               {/* Tooltip */}
//               {activeLocation === location.id && (
//                 <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
//                   <div className="bg-white rounded-lg shadow-xl border border-gray-200 px-4 py-3 min-w-[180px] whitespace-nowrap">
//                     <div className="flex items-start gap-2">
//                       <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
//                         <Image
//                           src="/home/map/location.svg"
//                           width={16}
//                           height={16}
//                           alt="pin"
//                           className="brightness-0 invert"
//                         />
//                       </div>
//                       <div className="text-left">
//                         <p className="font-semibold text-gray-900 text-sm">
//                           {location.name}
//                         </p>
//                         <p className="text-xs text-gray-600">
//                           {location.address}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Tooltip Arrow */}
//                   <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white drop-shadow"></div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;
