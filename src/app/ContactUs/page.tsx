'use client'
import { Spotlight } from "@/components/ui/Spotlight";

import { FormEvent } from "react";

function ContactUs() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="relative h-[40rem] overflow-hidden flex justify-center px-10 w-auto">
   <div className=" my-10 md:w-2/3 lg:w-1/3 xl:w-1/3 sm:w-2/3 rounded-xl">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
       
        <div className="border-4 p-5 pt-10 mt-8 mx-auto bg-white rounded-3xl">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">Contact Us</h2>
          <form>
            <div className="w-full">
              <div className="relative">
                <label className="leading-7 py-4 text-lg text-gray-900">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label className="leading-7 py-4 text-lg text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label className="leading-7 py-4 text-lg text-gray-900">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2">
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-auto flex-col text-center"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
