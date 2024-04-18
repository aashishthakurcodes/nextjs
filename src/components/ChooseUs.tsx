"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const data=[
    {
      "title": "Maruti Suzuki Swift",
      "description": "The Maruti Suzuki Swift is a popular hatchback known for its reliability, fuel efficiency, and affordability. It offers a peppy performance, thanks to its responsive engine and agile handling, making it an enjoyable drive in urban traffic conditions. The Swift's spacious interiors provide ample room for passengers, while its versatile cargo space adds to its practicality. With a host of features such as touchscreen infotainment system, automatic climate control, and keyless entry, the Swift offers excellent value for money, making it a top choice for buyers in India."
    },
    {
      "title": "Hyundai Creta",
      "description": "The Hyundai Creta is a compact SUV that has gained widespread popularity in India for its stylish design, comfortable ride quality, and feature-packed interiors. Its refined engine options deliver a balanced mix of power and fuel efficiency, making it suitable for both city commutes and highway drives. Inside the cabin, the Creta offers a premium feel with high-quality materials and a range of advanced features such as a touchscreen infotainment system, wireless charging, and connected car technology. With its spacious seating, ample cargo space, and excellent safety ratings, the Creta continues to dominate the SUV segment, appealing to urban commuters and adventure enthusiasts alike."
    },
    {
      "title": "Honda City",
      "description": "The Honda City has been a long-standing favorite in the sedan segment in India, known for its refined engine, spacious cabin, and excellent driving dynamics. Its smooth and responsive engine options deliver impressive performance while maintaining good fuel efficiency. The City's well-designed interiors offer a comfortable and premium feel, with features such as leather upholstery, sunroof, and touchscreen infotainment system with navigation. With Honda's reputation for reliability and low maintenance costs, the City remains a top choice among sedan buyers, offering a perfect blend of comfort, performance, and practicality."
    },
    {
      "title": "Tata Nexon",
      "description": "The Tata Nexon is a compact SUV that has gained traction in the Indian market for its bold design, robust build quality, and value-for-money proposition. Its striking exterior design, with Tata's signature 'Humanity Line' grille and coupe-like roofline, sets it apart in its segment. The Nexon offers a comfortable and feature-rich cabin, with highlights such as a Harman touchscreen infotainment system, multi-function steering wheel, and automatic climate control. Safety is a top priority for the Nexon, with standard features like dual airbags, ABS with EBD, and rear parking sensors. With competitive pricing and a range of engine options, including petrol, diesel, and electric, the Nexon appeals to buyers looking for a stylish, safe, and practical urban SUV."
    },
    {
      "title": "Mahindra Thar",
      "description": "The Mahindra Thar is an iconic off-roader that holds a special place in the hearts of adventure enthusiasts in India. Its rugged design, with classic Jeep-inspired elements, exudes a sense of adventure and capability. Available in both soft-top and hard-top variants, the Thar offers open-air driving experiences and unmatched off-road capabilities. Its powerful engine options, including petrol and diesel, coupled with features like 4x4 drivetrain, low-range transfer case, and locking differentials, make it capable of tackling the toughest terrains with ease. Despite its rugged persona, the Thar offers modern comforts and conveniences, such as touchscreen infotainment system, cruise control, and power windows. With its timeless appeal and unbeatable off-road prowess, the Mahindra Thar continues to be the preferred choice for those seeking thrilling off-road adventures."
    }
  ]
  
function ChooseUs() {
  return (
    <div>
        <StickyScroll content={data} />
    </div>
  )
}

export default ChooseUs