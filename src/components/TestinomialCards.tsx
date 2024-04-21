'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const carsQuote =[
    {
        "title": "Porsche Cayenne Coupe GT",
        "stars": 5,
        "quote": "Absolutely thrilled with my new Cayenne Coupe GT! It's incredibly fast and handles like a dream. The track-focused treatment truly shines through, and it's a joy to drive both on and off the road."
    },
    {
        "title": "Rolls-Royce Cullinan",
        "stars": 4.5,
        "quote": "The Rolls-Royce Cullinan exudes luxury and power. The ride is smooth, and the interior is opulent. While it's not as nimble as some of its competitors, it more than makes up for it in comfort and style."
    },
    {
        "title": "Aston Martin DBX 2020",
        "stars": 4.8,
        "quote": "The Aston Martin DBX is a true marvel. It combines the performance of a sports car with the practicality of an SUV. The 707 horsepower engine delivers exhilarating power, and the interior is luxurious and spacious."
    },
    {
        "title": "Mercedes-AMG G63",
        "stars": 4.3,
        "quote": "The Mercedes-AMG G63 is an icon for a reason. It retains the rugged off-road capability of the original G-Wagen while offering improved handling and performance. The interior is plush, and the driving experience is unmatched."
    },
    {
        "title": "Range Rover P530",
        "stars": 4.7,
        "quote": "The Range Rover P530 is a perfect blend of power and elegance. The twin-turbocharged engine provides ample power, and the interior is spacious and luxurious. It's a pleasure to drive both in the city and on the highway."
    },
    {
        "title": "GMC Denali",
        "stars": 4.9,
        "quote": "I'm extremely satisfied with my GMC Denali. It offers excellent performance, comfort, and versatility. Whether it's long road trips or daily commutes, the Denali delivers a smooth and enjoyable driving experience."
    },
    {
        "title": "Mercedes-AMG GLC 63 S",
        "stars": 4.8,
        "quote": "The Mercedes-AMG GLC 63 S is a true powerhouse. The V8 engine provides exhilarating acceleration, and the handling is precise. The interior is well-appointed, and the technology features are top-notch."
    },
    {
        "title": "Porsche Macan GTS",
        "stars": 4.6,
        "quote": "The Porsche Macan GTS is a perfect blend of performance and practicality. It offers sporty handling, a powerful engine, and a comfortable ride. The interior is beautifully crafted, and the driving experience is thrilling."
    },
    {
        "title": "Land Rover Defender 90 V8",
        "stars": 4.9,
        "quote": "The Land Rover Defender 90 V8 is an absolute beast. The supercharged engine delivers impressive power, and the off-road capabilities are unmatched. The interior is rugged yet refined, making it perfect for any adventure."
    }
]


  
 
function TestinomialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-8 z-10 font-mono">"Roaring Reviews: Supercar Enthusiasts Speak Out!"</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl border-3 border-red-800">
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