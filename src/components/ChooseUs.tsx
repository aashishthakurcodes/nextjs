"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const data=[
    {
      "id":"1",
      "title": "Porsche Cayenne Coupe GT",
      "description": "It was only a matter of time before Porsche's Motorsport megaminds turned their attention to the Cayenne, giving the firm's high-riding flagship the same track-focused treatment as the 911 GT3. The result is one of the fastest off-roaders you can buy - one that has smashed the SUV lap record at the Nürburgring, should you need to know."
    },
    {
      "id":"2",
      "title": "Rolls-Royce Cullinan",
      "description": "TRolls-Royce's entry into the SUV segment uses a developed version of the Phantom’s 6.8-litre V12 engine, making it one of the market’s most powerful off-roaders. It also sits at the top of the tree in terms of outright luxury, and undoubtedly prefers to be driven in a more laid-back, stately fashion than the likes of the Aston Martin DBX or Bentley Bentayga."
    },
    {
      "id":"3",
      "title": "Aston Martin DBX 2020",
      "description": "The Aston Martin DBX has arguably been one of the British brand's most significant new arrivals. So much of the marque’s future success rests on its shoulders, and so far this newest addition to the ever-expanding super-SUV class has done nothing but impress. And the Aston's appeal has only been enhanced by the addition of the 707, which as the name suggests packs a mighty 707 metric horsepower (that's 697bhp in old money)"
    },
    {
      "id":"4",
      "title": "Mercedes-AMG G63",
      "description": "TMercedes' reimaginging of the G-Wagen – now formally known as the G-Class – has to be regarded as a success. It retains the rich character and off-road ability of the much-loved original but thanks to a new front suspension architecture and steering, its now handles in a fashion more friendly than frightening."
    },
    {
      "id":"5",
      "title": "Range Rover P530",
      "description": "It's all change at the top of the Range Rover tree, the arrival of an all-new version signalling the depature of the old car's dependable supercharged V8 and the installation of a BMW-sourced replacement. Essentially the same twin-turbocharged 4.4-litre unit already seen in models such as the M550i, in the Rangie it develops 523bhp, which is enough for 0-62mph in 4.6sec.."
    }
  ]
  
function ChooseUs() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-center m-8">
          <h2 className="font-poppins text-base text-teal-600 font-semibold tracking-wide uppercase">
            Unique Colors
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Exceptional cars, always at our disposal
          </p>
        </div>
        <StickyScroll content={data} />
    </div>
  )
}

export default ChooseUs