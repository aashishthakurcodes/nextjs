import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingEvents (){
    return(
        <div className="max-w-5xl mx-auto px-8 flex flex-col">
          <div>
            <h2 className="text-white">Badge of Excellence: Exploring Supercar Emblem History"</h2>
          </div>
      <HoverEffect items={projects} />
    </div>
    )

}
export const projects = [
    {
      title: "FERRARI 488GTB",
      description:
        "The prancing horse is a symbol of power and speed; the horse was originally the emblem of Count Francesco Baracca..",
      link: "https://stripe.com",
    },
    {
      title: "LAMBORGHINI AVENTADOOR",
      description:
        "Ferruccio Lamborghini saw the bull as a powerful and determined animal that embodied the strength and performance of his sports cars.",
      link: "https://netflix.com",
    },
    {
      title: "ASTON MARTIN VANTAGE",
      description:
        "The company's founders, Lionel Martin and Robert Bamford, were both aviation enthusiasts and chose the wings as a symbol of speed, power, and freedom.",
      link: "https://google.com",
    },
    {
      title: "PORSCHE 911 TURBO C",
      description:
        "The Porsche logo is a combination of different elements that represent the origin of the company (Stuttgart) and the culture of the region in which it is located..",
      link: "https://meta.com",
    },
    {
      title: "Mercedes-Benz AMG",
      description:
        "According to Daimler-Motoren-Gesellschaft (DMG), the three-pointed star symbolized the use of their engines on land, sea, and air.",
      link: "https://amazon.com",
    },
    {
      title: "Audi R8",
      description:
        "The four rings in the Audi logo symbolize the unity and collaboration between these four brands that came together to form the Auto Union and eventually Audi.",
      link: "https://microsoft.com",
    },
  ];
export default UpcomingEvents;