// import { WavyBackground } from "@/components/ui/wavy-background";

"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";

function AboutUs() {
  return (
    <div className=" w-full rounded-md relative mx-auto py-10 md:py-0 relative mx-auto py-40 md:py-40  ">
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          About uS <br /> the right way
          <div className="text-center mt-6">
            <h3 className="text-3xl font-bold mb-2">
              Your Premier Destination for <span className="text-red-600">Automotive Luxury</span>
            </h3>
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <p className="text-lg tracking-wide leading-8">Whether you aspire to elevate your vehicle aesthetics to new
                heights or safeguard its integrity for the long haul Comfort
                Drive stands as your unrivaled beacon of automotive opulence and
                excellence. Entrust your ride to us and experience the epitome
                of automotive luxury
              </p>
            </div>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}

export default AboutUs;
