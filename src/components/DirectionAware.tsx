"use client"

import jsonData from '../data/music.json';
import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}

function DirectionAware() {
    return (
        <div className='flex justify-center items-center flex-col'> 
        <div className="text-center m-8">
          <h2 className="font-poppins text-base text-teal-600 font-semibold tracking-wide uppercase ">
          OUR INVENTORY
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          The most important persons arrive in style
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-cente">
            {jsonData.courses.map((course: Course) => (
                <DirectionAwareHover key={course.id} imageUrl={course.image}>
                    <p className="font-bold text-xl">{course.title}</p>
                    <p className="font-normal text-sm">${course.price}</p>
                </DirectionAwareHover>
            ))}
        </div>
        </div>
    );
}

export default DirectionAware;