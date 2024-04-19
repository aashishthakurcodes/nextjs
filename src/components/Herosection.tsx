import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import car1 from '../../public/27991.jpg'
import Image from "next/image";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md relative mx-auto py-10 md:py-0 mt-20 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-10 text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> The Detailing <span className="text-red-600">Mafia</span></h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Elevate your ride to new heights of brilliance with our signature detailing expertise. Discover automotive excellence at The Detailing Mafia</p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button borderRadius="1.75rem" className="bg-dark"> Explore courses</Button>
          </Link>
        </div>
      </div>
      <Image src={car1} alt="car1" className="absolute top-0 left-0 w-full h-full object-cover" />
    </div>
  );
}

export default HeroSection;
