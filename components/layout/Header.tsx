"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavigationText from "../globals/typography/NavigationText";
import { useState } from "react";
import { X } from "lucide-react";
import BodyText from "../globals/typography/BodyText";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-6 lg:px-10 py-4 lg:py-6 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image src="/header/logo.svg" alt="logo" width={20} height={20} />
            <span className="text-white text-xl lg:text-[25px] font-semibold leading-[150%] tracking-[-0.31px] lg:tracking-[-0.39px]">
              buildbrite
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-5 bg-[#E4E4E4] opacity-80 px-6 py-[9px] backdrop-blur-[10px] rounded-md">
              <Link href="/about">
                <BodyText variant="navigation" className="text-[#364153]">
                  about
                </BodyText>
              </Link>
              <Link href="/services">
                <BodyText variant="navigation" className="text-[#364153]">
                  {" "}
                  services
                </BodyText>
              </Link>
              <Link href="/projects">
                <BodyText variant="navigation" className="text-[#364153]">
                  projects{" "}
                </BodyText>
              </Link>
              <Link href="/news">
                <BodyText variant="navigation" className="text-[#364153]">
                  news{" "}
                </BodyText>
              </Link>
              <Link href="/career">
                <BodyText variant="navigation" className="text-[#364153]">
                  career{" "}
                </BodyText>
              </Link>
            </div>

            <Button
              variant="default"
              className="rounded-[4px] px-6 py-2.5 bg-[#0A181B] text-white"
            >
              <BodyText variant="navigation"> contact us</BodyText>
            </Button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Contact Button stays visible */}
            <Button
              variant="default"
              className="rounded-[4px] px-4 py-2.5 bg-[#0A181B] text-white"
            >
              <BodyText variant="navigation">contact us </BodyText>
            </Button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2  opacity-80 backdrop-blur-[10px] rounded-md"
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Image
                  src="/header/hamburger.svg"
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
