"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Bentley",
    description:
      "The wings in the Bentley's logo stand for speed and grace and The Bentley automobile logo is quite simple in concept, consisting of a bird's wings and tail feathers with a capital “B” in the middle..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/logo/th.jpeg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="sunx"
      />
    </div>
    ),
  },
  {
    title: "Aston Martin’s Timeless Wings",
    description:
      "The company's founders, Lionel Martin and Robert Bamford, were both aviation enthusiasts and chose the wings as a symbol of speed, power, and freedom..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo/aston.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="sunx"
        />
      </div>
    ),
  },
  {
    title: "Rolls-Royc",
    description:
      "The overlapping “R” in Rolls-Royce logo represents “you have me, I have you”. andThe Rolls-Royce logo, two Rs overlapping represents both harmony and a harmonious relationship.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo/rr2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="sunx"
        />
      </div>
    ),
  },
  {
    title: "Porsche’s Dynamic Crest",
    description:
      "The Porsche logo is a combination of different elements that represent the origin of the company (Stuttgart) and the culture of the region in which it is located..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/logo/pors.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="sunx"
      />
    </div>
    ),
  },
  {
    title: "Lamborghini – Raging Bull",
    description:
      "Ferruccio Lamborghini saw the bull as a powerful and determined animal that embodied the strength and performance of his sports cars.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/logo/lamb.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="sunx"
      />
    </div>
    ),
  },
  {
    title: "Mercedes-Benz AMG",
    description:
      "According to Daimler-Motoren-Gesellschaft (DMG), the three-pointed star symbolized the use of their engines on land, sea, and air..",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/logo/mrec.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="sunx"
      />
    </div>
    ),
  },
  {
    title: "Audi R8",
    description:
      ".The overlapping circles in Audi's logo represent unity and The Audi logo is one of my favorite vehicle logos and brands of all time—it is as basic and effective as you can find in business.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/logo/audi.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="sunx"
      />
    </div>
    ),
  },
  {
    title: "Land Rover",
    description:
      "The Land Rover logo shows off the rich history of the brand. Represents elegant and elite cars of a premium class. Rich decoration, impressive dimensions – all these are elements of the lifestyle of off-road drivers, which the emblem conveys.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/logo/lr.jpeg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="sunx"
      />
    </div>
    ),
  },
  {
    title: "The Story Behind Legendary Car Logos",
    description:
      "Explore the fascinating world of automotive branding and uncover the meanings embedded within iconic car logos.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
     
    </div>
    ),
  },


];
  
function ChooseUs() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-center m-8">
          <h2 className="font-poppins text-base text-teal-600 font-semibold tracking-wide uppercase">
            Unique Colors
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Badge of Excellence: Exploring Supercar Emblem History
          </p>
        </div>
        <StickyScroll content={content} />
    </div>
  )
}

export default ChooseUs