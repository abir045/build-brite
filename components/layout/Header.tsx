// "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Button } from "../ui/button";
// // import NavigationText from "../globals/typography/NavigationText";
// // import { useState } from "react";
// // import { X } from "lucide-react";
// // import BodyText from "../globals/typography/BodyText";

// // export default function Header() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <>
// //       <header className="fixed top-0 left-0 z-50 w-full px-6 lg:px-10 py-4 lg:py-6 bg-transparent">
// //         <div className="flex items-center justify-between">
// //           {/* Logo */}
// //           <div className="flex items-center gap-2.5">
// //             <Image src="/header/logo.svg" alt="logo" width={20} height={20} />
// //             <span className="text-white text-xl lg:text-[25px] font-semibold leading-[150%] tracking-[-0.31px] lg:tracking-[-0.39px]">
// //               buildbrite
// //             </span>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center gap-2">
// //             <div className="flex items-center gap-5 bg-[#E4E4E4] opacity-80 px-6 py-[9px] backdrop-blur-[10px] rounded-md">
// //               <Link href="/about">
// //                 <BodyText variant="navigation" className="text-[#364153]">
// //                   about
// //                 </BodyText>
// //               </Link>
// //               <Link href="/services">
// //                 <BodyText variant="navigation" className="text-[#364153]">
// //                   {" "}
// //                   services
// //                 </BodyText>
// //               </Link>
// //               <Link href="/projects">
// //                 <BodyText variant="navigation" className="text-[#364153]">
// //                   projects{" "}
// //                 </BodyText>
// //               </Link>
// //               <Link href="/news">
// //                 <BodyText variant="navigation" className="text-[#364153]">
// //                   news{" "}
// //                 </BodyText>
// //               </Link>
// //               <Link href="/career">
// //                 <BodyText variant="navigation" className="text-[#364153]">
// //                   career{" "}
// //                 </BodyText>
// //               </Link>
// //             </div>

// //             <Button
// //               variant="default"
// //               className="rounded-[4px] px-6 py-2.5 bg-[#0A181B] text-white"
// //             >
// //               <BodyText variant="navigation"> contact us</BodyText>
// //             </Button>
// //           </div>

// //           {/* Mobile Right Side */}
// //           <div className="flex lg:hidden items-center gap-2">
// //             {/* Contact Button stays visible */}
// //             <Button
// //               variant="default"
// //               className="rounded-[4px] px-4 py-2.5 bg-[#0A181B] text-white"
// //             >
// //               <BodyText variant="navigation">contact us </BodyText>
// //             </Button>

// //             {/* Hamburger Menu */}
// //             <button
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               className="p-2  opacity-80 backdrop-blur-[10px] rounded-md"
// //             >
// //               {menuOpen ? (
// //                 <X size={20} />
// //               ) : (
// //                 <Image
// //                   src="/header/hamburger.svg"
// //                   alt="menu"
// //                   width={24}
// //                   height={24}
// //                 />
// //               )}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu Dropdown */}
// //         {menuOpen && (
// //           <div className="mt-4 flex flex-col items-center gap-4 bg-[#E4E4E4]/90 backdrop-blur-[10px] py-4 rounded-lg lg:hidden">
// //             <Link href="/about" onClick={() => setMenuOpen(false)}>
// //               <NavigationText text="about" className="text-[#364153]" />
// //             </Link>
// //             <Link href="/services" onClick={() => setMenuOpen(false)}>
// //               <NavigationText text="services" className="text-[#364153]" />
// //             </Link>
// //             <Link href="/projects" onClick={() => setMenuOpen(false)}>
// //               <NavigationText text="projects" className="text-[#364153]" />
// //             </Link>
// //             <Link href="/news" onClick={() => setMenuOpen(false)}>
// //               <NavigationText text="news" className="text-[#364153]" />
// //             </Link>
// //             <Link href="/career" onClick={() => setMenuOpen(false)}>
// //               <NavigationText text="career" className="text-[#364153]" />
// //             </Link>
// //           </div>
// //         )}
// //       </header>
// //     </>
// //   );
// // }

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import NavigationText from "../globals/typography/NavigationText";
// import { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import BodyText from "../globals/typography/BodyText";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       console.log("🔍 handleScroll called");
//       const headerHeight = 120; // Increased from 100

//       const checkPoints = [
//         window.innerWidth * 0.25,
//         window.innerWidth * 0.5,
//         window.innerWidth * 0.75,
//       ];

//       let foundLightBackground = false;

//       for (const xPos of checkPoints) {
//         const element = document.elementFromPoint(xPos, headerHeight);
//         console.log(`📍 Checking point ${xPos}, element:`, element?.tagName);

//         if (element) {
//           let currentElement: HTMLElement | null = element as HTMLElement;

//           // Continue past document.body to check html and further
//           while (currentElement) {
//             console.log(`  🔼 Checking element: ${currentElement.tagName}`);

//             if (currentElement.tagName === "HEADER") {
//               console.log("  ⏭️ Skipping HEADER");
//               currentElement = currentElement.parentElement;
//               continue;
//             }

//             const computedBg =
//               window.getComputedStyle(currentElement).backgroundColor;

//             console.log(`  🎨 Background color: ${computedBg}`);

//             if (
//               computedBg &&
//               computedBg !== "rgba(0, 0, 0, 0)" &&
//               computedBg !== "transparent"
//             ) {
//               const rgb = computedBg.match(/\d+/g);
//               if (rgb && rgb.length >= 3) {
//                 const [r, g, b] = rgb.map(Number);
//                 const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

//                 console.log(
//                   `  💡 Luminance: ${luminance} (r:${r}, g:${g}, b:${b})`
//                 );

//                 if (luminance > 0.5) {
//                   console.log("  ✅ LIGHT background found!");
//                   foundLightBackground = true;
//                   break;
//                 }
//               }
//               break;
//             }

//             currentElement = currentElement.parentElement;

//             // Break if we've gone too far up
//             if (currentElement?.tagName === "HTML") {
//               break;
//             }
//           }
//         }

//         if (foundLightBackground) break;
//       }

//       console.log(`🎯 Final isDark state: ${foundLightBackground}`);
//       setIsDark(foundLightBackground);
//     };

//     // Run immediately
//     console.log("⚡ Running handleScroll immediately");
//     handleScroll();

//     // Run again after a delay to catch late-rendering content
//     console.log("⏰ Setting timeout for 200ms");
//     const timeoutId = setTimeout(() => {
//       console.log("⏰ Timeout fired - running handleScroll again");
//       handleScroll();
//     }, 200);

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(timeoutId);
//     };
//   }, []);
//   return (
//     <>
//       <header className="fixed top-0 left-0 z-50 w-full px-6 lg:px-10 py-4 lg:py-6 bg-transparent">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2.5">
//             <Image
//               src={isDark ? "/header/logo-dark.svg" : "/header/logo.svg"}
//               alt="logo"
//               width={20}
//               height={20}
//             />
//             <span
//               className={`text-xl lg:text-[25px] font-semibold leading-[150%] tracking-[-0.31px] lg:tracking-[-0.39px] transition-colors duration-300 ${
//                 isDark ? "text-[#0A181B]" : "text-white"
//               }`}
//             >
//               buildbrite
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-2">
//             <div className="flex items-center gap-5 bg-[#E4E4E4] opacity-80 px-6 py-[9px] backdrop-blur-[10px] rounded-md">
//               <Link href="/about">
//                 <BodyText variant="navigation" className="text-[#364153]">
//                   about
//                 </BodyText>
//               </Link>
//               <Link href="/services">
//                 <BodyText variant="navigation" className="text-[#364153]">
//                   services
//                 </BodyText>
//               </Link>
//               <Link href="/projects">
//                 <BodyText variant="navigation" className="text-[#364153]">
//                   projects
//                 </BodyText>
//               </Link>
//               <Link href="/news">
//                 <BodyText variant="navigation" className="text-[#364153]">
//                   news
//                 </BodyText>
//               </Link>
//               <Link href="/career">
//                 <BodyText variant="navigation" className="text-[#364153]">
//                   career
//                 </BodyText>
//               </Link>
//             </div>

//             <Button
//               variant="default"
//               className="rounded-[4px] px-6 py-2.5 bg-[#0A181B] text-white"
//             >
//               <BodyText variant="navigation">contact us</BodyText>
//             </Button>
//           </div>

//           {/* Mobile Right Side */}
//           <div className="flex lg:hidden items-center gap-2">
//             {/* Contact Button stays visible */}
//             <Button
//               variant="default"
//               className="rounded-[4px] px-4 py-2.5 bg-[#0A181B] text-white"
//             >
//               <BodyText variant="navigation">contact us</BodyText>
//             </Button>

//             {/* Hamburger Menu */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 opacity-80 backdrop-blur-[10px] rounded-md"
//             >
//               {menuOpen ? (
//                 <X size={20} className={isDark ? "text-dark1" : "text-white"} />
//               ) : (
//                 <Image
//                   src={
//                     isDark
//                       ? "/header/hamburger-dark.svg"
//                       : "/header/hamburger.svg"
//                   }
//                   alt="menu"
//                   width={24}
//                   height={24}
//                 />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {menuOpen && (
//           <div className="mt-4 flex flex-col items-center gap-4 bg-[#E4E4E4]/90 backdrop-blur-[10px] py-4 rounded-lg lg:hidden">
//             <Link href="/about" onClick={() => setMenuOpen(false)}>
//               <NavigationText text="about" className="text-[#364153]" />
//             </Link>
//             <Link href="/services" onClick={() => setMenuOpen(false)}>
//               <NavigationText text="services" className="text-[#364153]" />
//             </Link>
//             <Link href="/projects" onClick={() => setMenuOpen(false)}>
//               <NavigationText text="projects" className="text-[#364153]" />
//             </Link>
//             <Link href="/news" onClick={() => setMenuOpen(false)}>
//               <NavigationText text="news" className="text-[#364153]" />
//             </Link>
//             <Link href="/career" onClick={() => setMenuOpen(false)}>
//               <NavigationText text="career" className="text-[#364153]" />
//             </Link>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavigationText from "../globals/typography/NavigationText";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import BodyText from "../globals/typography/BodyText";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const theme = entry.target.getAttribute("data-theme");
  //         if (entry.isIntersecting && theme) {
  //           setIsDark(theme === "light");
  //         }
  //       });
  //     },
  //     { threshold: 0.3 }
  //   );

  //   // Observe all theme-marked sections
  //   const themeSections = document.querySelectorAll("[data-theme]");
  //   themeSections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the largest visible area
        const mostVisible = entries.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );

        if (mostVisible.isIntersecting) {
          const theme = mostVisible.target.getAttribute("data-theme");
          const id = mostVisible.target.getAttribute("id");
          console.log(`🎯 Active section: ${id}, theme: ${theme}`);
          if (theme) setIsDark(theme === "light");
        }
      },
      { threshold: [0.2] } // multiple thresholds for smoother tracking
    );

    const themeSections = document.querySelectorAll("[data-theme]");
    themeSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   let lastTheme: string | null = null;
  //   let switchTimeout: NodeJS.Timeout | null = null;
  //   let scrollTimeout: NodeJS.Timeout | null = null;
  //   let lastRatio = 0;

  //   const applyTheme = (theme: string) => {
  //     if (theme !== lastTheme) {
  //       lastTheme = theme;
  //       setIsDark(theme === "light");
  //       console.log(`🎨 Theme applied: ${theme}`);
  //     }
  //   };

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       // Get the most visible section
  //       const mostVisible = entries.reduce((prev, curr) =>
  //         curr.intersectionRatio > prev.intersectionRatio ? curr : prev
  //       );

  //       const theme = mostVisible.target.getAttribute("data-theme");
  //       const ratio = mostVisible.intersectionRatio;

  //       if (!theme || !mostVisible.isIntersecting) return;

  //       // ✅ Only trigger if visibility improved significantly
  //       if (ratio - lastRatio > 0.1 || lastTheme !== theme) {
  //         if (switchTimeout) clearTimeout(switchTimeout);
  //         switchTimeout = setTimeout(() => applyTheme(theme), 80);
  //         lastRatio = ratio;
  //       }
  //     },
  //     {
  //       threshold: Array.from({ length: 21 }, (_, i) => i / 20),
  //       rootMargin: "150px 0px -150px 0px",
  //     }
  //   );

  //   const sections = document.querySelectorAll("[data-theme]");
  //   sections.forEach((section) => observer.observe(section));

  //   // 🩵 Safety correction after scroll ends
  //   const handleScroll = () => {
  //     if (scrollTimeout) clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       const mid = window.innerHeight / 2;
  //       for (const section of sections) {
  //         const rect = section.getBoundingClientRect();
  //         if (rect.top <= mid && rect.bottom >= mid) {
  //           const theme = section.getAttribute("data-theme");
  //           if (theme) applyTheme(theme);
  //           break;
  //         }
  //       }
  //     }, 180);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener("scroll", handleScroll);
  //     if (switchTimeout) clearTimeout(switchTimeout);
  //     if (scrollTimeout) clearTimeout(scrollTimeout);
  //   };
  // }, []);

  return (
    <>
      {/* Sentinel example: place <section data-theme="light"> or <section data-theme="dark"> in your page */}
      <header className="fixed top-0 left-0 z-50 w-full px-6 lg:px-10 py-4 lg:py-6 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src={isDark ? "/header/logo-dark.svg" : "/header/logo.svg"}
              alt="logo"
              width={20}
              height={20}
            />
            <span
              className={`text-xl lg:text-[25px] font-semibold leading-[150%] tracking-[-0.31px] lg:tracking-[-0.39px] transition-colors duration-300 ${
                isDark ? "text-[#0A181B]" : "text-white"
              }`}
            >
              buildbrite
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-5 bg-[#E4E4E4] opacity-80 px-6 py-[9px] backdrop-blur-[10px] rounded-md">
              <Link href="/about-us">
                <BodyText variant="navigation" className="text-[#364153]">
                  about
                </BodyText>
              </Link>
              <Link href="/services">
                <BodyText variant="navigation" className="text-[#364153]">
                  services
                </BodyText>
              </Link>
              <Link href="/projects">
                <BodyText variant="navigation" className="text-[#364153]">
                  projects
                </BodyText>
              </Link>
              <Link href="/news">
                <BodyText variant="navigation" className="text-[#364153]">
                  news
                </BodyText>
              </Link>
              <Link href="/career">
                <BodyText variant="navigation" className="text-[#364153]">
                  career
                </BodyText>
              </Link>
            </div>

            <Button
              variant="default"
              className="rounded-[4px] px-6 py-2.5 bg-[#0A181B] text-white"
            >
              <BodyText variant="navigation">contact us</BodyText>
            </Button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Contact Button stays visible */}
            <Button
              variant="default"
              className="rounded-[4px] px-4 py-2.5 bg-[#0A181B] text-white"
            >
              <BodyText variant="navigation">contact us</BodyText>
            </Button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 opacity-80 backdrop-blur-[10px] rounded-md"
            >
              {menuOpen ? (
                <X size={20} className={isDark ? "text-dark1" : "text-white"} />
              ) : (
                <Image
                  src={
                    isDark
                      ? "/header/hamburger-dark.svg"
                      : "/header/hamburger.svg"
                  }
                  alt="menu"
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mt-4 flex flex-col items-center gap-4 bg-[#E4E4E4]/90 backdrop-blur-[10px] py-4 rounded-lg lg:hidden">
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <NavigationText text="about" className="text-[#364153]" />
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              <NavigationText text="services" className="text-[#364153]" />
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              <NavigationText text="projects" className="text-[#364153]" />
            </Link>
            <Link href="/news" onClick={() => setMenuOpen(false)}>
              <NavigationText text="news" className="text-[#364153]" />
            </Link>
            <Link href="/career" onClick={() => setMenuOpen(false)}>
              <NavigationText text="career" className="text-[#364153]" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
