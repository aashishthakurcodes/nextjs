"use client";
import React from "react";
import courseData from "../../../data/music.json";
import Link from "next/link";
import Image from "next/image";

function MoreInfo({ params }) {
    const courseItem = courseData.courses.find(
        (item) => item.id.toString() === params.id
    );

    if (!courseItem) {
        return <div>No data found for ID: {params.id}</div>;
    }

    return (
        <main
            key={courseItem.id}
            className="container mx-auto py-10   md:mt-20 p-5 md:p-15 lg:p-20  rounded-lg "
            style={{ marginTop: "90px" }}
        >
            <div className=" md:grid-cols-2 gap-8">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <Image
                       width={100}
                       height={100}
                        className="w-full h-auto object-cover"
                        src={courseItem.image}
                        alt={courseItem.title}
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-black md:text-xl">{courseItem.title}</h2>
                        <p className="text-gray-600 mb-4 md:text-xl ">{courseItem.description}</p>
                        <p className="text-gray-800 font-bold">Price: ${courseItem.price}</p>
                        <div className="mt-4 flex justify-end">
                            <Link href={courseItem.link}>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                             Visit
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MoreInfo;
