'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const carsQuote =[
    {
      "quote": "Embark on a thrilling journey of adventure and discovery, where every turn opens up a world of limitless possibilities and untamed excitement.",
      "name": "Mahindra Thar",
      "title": "Adventure-Seeking Off-Roader"
    },
    {
      "quote": "Indulge in the epitome of refined luxury as you commandeer the roads with confidence and sophistication, making every drive an experience to cherish.",
      "name": "Tata Harrier",
      "title": "Premium SUV"
    },
    {
      "quote": "Efficiency meets elegance in every mile you traverse, as the perfect blend of style and substance accompanies you on your journey towards greatness.",
      "name": "Maruti Suzuki Dzire",
      "title": "Compact Sedan"
    },
    {
      "quote": "Experience power, performance, and perfection fused into a single driving experience, where every moment behind the wheel is a testament to your unstoppable spirit.",
      "name": "Hyundai Creta",
      "title": "Versatile Crossover"
    },
    {
      "quote": "Drive the future today with sustainable innovation that empowers you to embrace progress while preserving the planet, one electrifying adventure at a time.",
      "name": "Tata Nexon EV",
      "title": "Electric Compact SUV"
    },
    {
      "quote": "Indulge in luxury with every feature-packed mile, where cutting-edge technology and unparalleled comfort redefine the very essence of automotive excellence.",
      "name": "MG Hector",
      "title": "Feature-Packed SUV"
    },
    {
      "quote": "Innovate. Inspire. Drive. Redefine your journey with a dynamic companion that embodies the spirit of exploration and sets the standard for modern adventure.",
      "name": "Kia Seltos",
      "title": "Dynamic Compact SUV"
    },
    {
      "quote": "Elevate your driving experience to new heights of excitement and possibility, as you navigate the urban landscape with confidence and style at every turn.",
      "name": "Ford EcoSport",
      "title": "Urban Crossover"
    },
    {
      "quote": "Experience legendary performance and iconic design come together in perfect harmony, as you command attention and admiration with every graceful curve and powerful surge.",
      "name": "Honda City",
      "title": "Iconic Sedan"
    },
    {
      "quote": "Crafted for the modern explorer, the Renault Kiger invites you to embark on a journey of discovery and adventure, where every drive is a testament to your boundless spirit.",
      "name": "Renault Kiger",
      "title": "Compact Urban SUV"
    }
  ]
  
 
function TestinomialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-5xl font-bold text-center mb-8 z-10">Harmony in Motion: The Cadence of Car Culture</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={carsQuote}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestinomialCard;