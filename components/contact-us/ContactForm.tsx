"use client";

import React from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";
import { div } from "framer-motion/client";

type Inputs = {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
};

interface ContactOption {
  id: number;
  icon: string;
  title: string;
  description: string;
  email: string;
  phone: string;
}

const contactOptions: ContactOption[] = [
  {
    id: 1,
    icon: "/globals/inquiry.svg",
    title: "General Inquiries",
    description: "For general questions about our services and projects",
    email: "info@buildbrite.com",
    phone: "+1 (212) 229-6000",
  },
  {
    id: 2,
    icon: "/globals/relations.svg",
    title: "Media Relations",
    description: "Press inquiries and media requests",
    email: "info@buildbrite.com",
    phone: "+1 (212) 229-6100",
  },
  {
    id: 3,
    icon: "/globals/support.svg",
    title: "Client Support",
    description: "Project inquiries and client services",
    email: "clients@buildcorp.com",
    phone: "+1 (212) 229-6300",
  },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="bg-light-blue">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <Heading variant="jakarta" level="h2" className="text-dark1">
            Let's build{" "}
            <Heading variant="playfair" level="span" className="inline">
              together
            </Heading>
          </Heading>

          <BodyText variant="body" className="text-dark1/70">
            We’re here to help — reach out with any questions or inquiries.
          </BodyText>
        </div>

        <div className="bg-white p-5 md:p-20 mt-10 md:mt-14">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="fullname">
                <BodyText variant="body-sm" className="text-dark1">
                  Full Name*
                </BodyText>
              </Label>
              <Input
                type="text"
                id="fullname"
                placeholder="Bony Amin"
                {...register("fullName", { required: "Full name is required" })}
                className="px-4 py-3 rounded-none border border-black/10 placeholder:text-sm placeholder:md:text-base placeholder:font-medium placeholder:leading-[150%] placeholder:text-tertiary/50"
              />

              {errors.fullName && (
                <BodyText variant="body-sm" className="text-red-500">
                  {errors.fullName.message}
                </BodyText>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 mt-8 w-full">
              {/* left */}
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="email">
                  <BodyText variant="body-sm" className="text-dark1">
                    Email Address *
                  </BodyText>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="bonyamin@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="px-4 py-3 rounded-none border border-black/10 placeholder:text-sm placeholder:md:text-base placeholder:font-medium placeholder:leading-[150%] placeholder:text-tertiary/50"
                />

                <div className="min-h-[20px]">
                  {errors.email && (
                    <BodyText variant="body-sm" className="text-red-500">
                      {errors.email.message}
                    </BodyText>
                  )}
                </div>
              </div>
              {/* right */}

              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="phone">
                  <BodyText variant="body-sm" className="text-dark1">
                    Phone Number
                  </BodyText>
                </Label>
                <Input
                  type="number"
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  className="px-4 py-3 rounded-none border border-black/10 placeholder:text-sm placeholder:md:text-base placeholder:font-medium placeholder:leading-[150%] placeholder:text-tertiary/50"
                  {...register("phone")}
                />
              </div>
            </div>

            <div className="mt-8">
              <Textarea
                rows={12}
                className=" h-[130px] px-4 py-4 rounded-none placeholder:text-sm placeholder:md:text-base placeholder:font-medium placeholder:leading-[150%] placeholder:text-tertiary/50"
                placeholder="Tell us about your project or inquiry..."
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <BodyText variant="body-sm" className="text-red-500 mt-2">
                  {errors.message.message}
                </BodyText>
              )}
            </div>

            <button
              type="submit"
              className="group rounded px-4 py-2.5 bg-primary hover:text-primary hover:bg-dark1 flex items-center justify-between w-full mt-10"
            >
              <BodyText variant="navigation">Send Message</BodyText>

              <Image
                src="/globals/right-dark-arrow.svg"
                alt="icon"
                width={20}
                height={20}
                className="group-hover:invert"
              />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-10 mt-20">
          <LargeText
            variant="large-28-semibold"
            className="text-dark1 text-center"
          >
            Contact by department
          </LargeText>

          {/* contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactOptions.map((item) => (
              <div key={item.id} className="flex items-start gap-6">
                <div className="bg-dark1 flex items-center w-10 h-10 justify-center rounded-[2px] shrink-0 ">
                  <Image src={item.icon} width={20} height={20} alt="icon" />
                </div>

                <div className="flex flex-col gap-2">
                  <BodyText variant="body-large" className="text-dark1">
                    {item.title}
                  </BodyText>

                  <BodyText variant="body-sm" className="text-tertiary/70">
                    {item.description}
                  </BodyText>

                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/globals/mail.svg"
                        alt="icon"
                        width={16}
                        height={16}
                      />
                      <BodyText variant="body-sm" className="text-tertiary/70">
                        {item.email}
                      </BodyText>
                    </div>
                    {/* phn */}

                    <div className="flex items-center gap-4">
                      <Image
                        src="/globals/phone.svg"
                        alt="icon"
                        width={16}
                        height={16}
                      />
                      <BodyText variant="body-sm" className="text-tertiary/70">
                        {item.phone}
                      </BodyText>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
