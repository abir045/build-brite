import Image from "next/image";
import BodyMed from "../globals/typography/BodyMed";
import BodySm from "../globals/typography/BodySm";
import Link from "next/link";
import BodySmMed from "../globals/typography/BodySmMed";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import BodyText from "../globals/typography/BodyText";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark1 px-5 lg:px-10 " data-theme="dark">
        {/* outer div */}
        <div className="flex flex-col lg:flex-row items-start justify-between pt-15 lg:pt-[100px] ">
          {/* 1st div */}
          <div className="lg:flex-1">
            {/* <BodyMed className="text-primary  max-w-[432px] text-sm md:text-[16px]">
              Building excellence through innovation, integrity, and sustainable
              practices since 1975.
            </BodyMed> */}
            <BodyText
              variant="body"
              className="text-primary  max-w-[432px] text-sm"
            >
              Building excellence through innovation, integrity, and sustainable
              practices since 1975.
            </BodyText>
            {/* links div */}
            <div className="flex items-center gap-4 mt-8">
              <div className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center">
                <Image
                  src="/footer/linkedin.svg"
                  width={24}
                  height={24}
                  alt="logo"
                />
              </div>

              <Image
                src="/footer/twitter.svg"
                width={40}
                height={40}
                alt="logo"
              />
              <Image
                src="/footer/facebook.svg"
                width={40}
                height={40}
                alt="logo"
              />
              <Image
                src="/footer/insta.svg"
                width={40}
                height={40}
                alt="logo"
              />
            </div>
          </div>

          <div className="flex items-star justify-between gap-8 lg:flex-1 mt-14 lg:mt-0 w-full lg:w-auto">
            {/* 2nd div */}
            <div className="flex-1">
              <BodyText variant="body-sm-bold" className="text-primary ">
                Quick Links
              </BodyText>

              <div className="mt-8 flex flex-col gap-3 text-white opacity-60">
                <Link href="/about">
                  <BodyText variant="body-sm">About Us</BodyText>
                </Link>
                <Link href="/services">
                  <BodyText variant="body-sm">Services</BodyText>
                </Link>
                <Link href="/projects">
                  <BodyText variant="body-sm">Projects</BodyText>
                </Link>
                <Link href="/careers">
                  <BodyText variant="body-sm">Careeres</BodyText>
                </Link>
                <Link href="/news">
                  <BodyText variant="body-sm">News & Insights</BodyText>
                </Link>
              </div>
            </div>

            {/* 3rd div */}
            <div className="flex-1">
              <BodyText variant="body-sm-bold" className="text-primary">
                Services
              </BodyText>

              <div className="mt-8 flex flex-col gap-3 text-white opacity-60">
                <Link href="/about">
                  <BodyText variant="body-sm">Pre construction</BodyText>
                </Link>
                <Link href="/services">
                  <BodyText variant="body-sm" className="shrink-0">
                    Project Management
                  </BodyText>
                </Link>
                <Link href="/projects">
                  <BodyText variant="body-sm">Sustainability</BodyText>
                </Link>
                <Link href="/careers">
                  <BodyText variant="body-sm">Engineering</BodyText>
                </Link>
                <Link href="/news">
                  <BodyText>Design-Build</BodyText>
                </Link>
              </div>
            </div>
          </div>

          {/* 4th div */}
          <div className="mt-8 lg:mt-0">
            <BodyText variant="body-sm-bold" className="text-primary">
              Stay Updated
            </BodyText>

            <BodyText
              variant="body-sm"
              className="text-white opacity-60 mt-6 lg:mt-8 w-full lg:max-w-[200px]"
            >
              Subscribe to our newsletter for industry insights and company
              news.
            </BodyText>

            <div className="flex items-center gap-0 mt-6 w-full lg:max-w-[200px]">
              <Input
                placeholder="Your email"
                className="border-none bg-white/5 rounded-r-none placeholder:caption "
              />{" "}
              <Button variant="outline" className="bg-primary rounded-l-none">
                <Image
                  src="/footer/msg.svg"
                  width={16}
                  height={16}
                  alt="msg logo"
                />
              </Button>
            </div>
          </div>
        </div>
        {/* logo div */}
        <div className="flex items-center gap-[30px] mt-14 lg:mt-10">
          <Image src="/header/logo.svg" width={60} height={60} alt="logo" />
          <span className="text-[62.7px] lg:text-[75px] leading-[150%] tracking-[1.17px] text-white">
            buildbrite
          </span>
        </div>
        {/* copyright div */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-white opacity-60 mt-20 lg:pb-7">
          <BodyText variant="body-sm" className="text-xs md:text-sm">
            © 2025 Buildbrite Global. All rights reserved.
          </BodyText>

          <div className="flex items-center gap-8 mt-8 lg:mt-0 pb-8 lg:pb-0">
            <Link href="/privacy">
              <BodyText variant="body-sm" className="text-xs md:text-sm">
                Privacy Policy
              </BodyText>
            </Link>
            <Link href="/privacy">
              <BodyText variant="body-sm" className="text-xs md:text-sm">
                Terms of Service
              </BodyText>
            </Link>
            <Link href="/privacy">
              <BodyText variant="body-sm" className="text-xs md:text-sm">
                Cookie Policy
              </BodyText>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
