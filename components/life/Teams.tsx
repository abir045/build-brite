"use client";
import React, { useState } from "react";
import Heading from "../globals/typography/Heading";
import BodyText from "../globals/typography/BodyText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import LargeText from "../globals/typography/LargeText";

// Interface definition
interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  position: string;
  bgColor?: string;
}

// Data object
export const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 99,
    quote:
      "The opportunities for growth here are incredible. I started as a project engineer and was promoted to senior PM within five years. The mentorship and support I received made all the difference.",
    name: "Sarah Chen",
    position: "Senior Project Manager",
    bgColor: "bg-dark1",
  },
  {
    id: "2",
    rating: 99,
    quote:
      "Safety isn't just a policy here—it's a culture. Every day, I see leadership demonstrate their commitment to ensuring every worker goes home safe. That's the kind of company I'm proud to work for.",
    name: "Marcus Johnson",
    position: "Field Superintendent",
    bgColor: "bg-dark1",
  },
  {
    id: "3",
    rating: 99,
    quote:
      "I'm proud to work for a company that takes sustainability seriously. We're not just building structures—we're building better. Our green initiatives and innovation make a real impact on our communities.",
    name: "Emily Rodriguez",
    position: "Sustainability Coordinator",
    bgColor: "bg-dark1",
  },
  {
    id: "4",
    rating: 99,
    quote:
      "The innovative technology we use here is incredible. From BIM to advanced project management tools, we're always at the cutting edge of construction.",
    name: "James Park",
    position: "BIM Coordinator",
    bgColor: "bg-dark1",
  },
];

const Teams = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <section className="bg-primary">
      <div className="container-custom flex flex-col py-[60px] md:py-[100px]">
        <div className="flex flex-col gap-10 items-center xl:flex-row xl:items-end xl:justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <Heading variant="jakarta" level="h2" className="text-dark1">
              What our{" "}
              <Heading variant="playfair" level="span" className="inline">
                team says
              </Heading>
            </Heading>

            <BodyText variant="body" className="text-dark1/70 max-w-[896px]">
              At BuildCorp, we believe our people are our greatest asset. We're
              committed to fostering a culture of excellence, innovation, and
              continuous growth. Join us in building the future while building
              your career.
            </BodyText>
          </div>

          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-8">
            {/* Slide Counter */}
            <div className="bg-dark1  px-[33.5px] py-[5.5px] rounded-[2px] h-8">
              <BodyText variant="body-sm" className="text-primary">
                {currentSlide} / {testimonials.length}
              </BodyText>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="bg-primary  w-8 h-8 rounded border border-black/10 flex items-center justify-center "
                aria-label="Previous slide"
              >
                <Image
                  src="/globals/left-dark-arrow.svg"
                  alt="icon"
                  width={13}
                  height={13}
                />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="bg-dark1  w-8 h-8 rounded flex items-center justify-center"
                aria-label="Next slide"
              >
                <Image
                  src="/globals/right-nav.svg"
                  alt="icon"
                  width={13}
                  height={13}
                />
              </button>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="mt-14">
          <Swiper
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3.5,
              },
            }}
            className="testimonials-swiper mb-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className={`${testimonial.bgColor} p-5 md:p-8  h-[500px]  flex flex-col justify-between`}
                >
                  {/* Rating Badge */}
                  <div className="bg-primary text-dark1 w-16 h-16 rounded-[2px] flex items-center justify-center shrink-0">
                    {/* {testimonial.rating} */}
                    <Image
                      src="/globals/quote.svg"
                      alt="quote"
                      width={32}
                      height={32}
                    />
                  </div>

                  <div className="flex flex-col">
                    {/* Quote */}
                    <BodyText variant="body" className="text-white/80 mb-6">
                      {testimonial.quote}
                    </BodyText>

                    {/* Author Info */}
                    <div className="flex flex-col gap-2">
                      <LargeText
                        variant="large-28-semibold"
                        className="text-white"
                      >
                        {testimonial.name}
                      </LargeText>

                      <BodyText variant="body-large" className="text-white">
                        {testimonial.position}
                      </BodyText>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Teams;
