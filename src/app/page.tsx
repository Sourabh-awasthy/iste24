import React from "react";
import { Vortex } from "../components/ui/vortex";
import Animatedbutton from "./components/button";
import Image from "next/image";

export default function VortexDemoSecond() {
  return (
    <div className="w-100% mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        rangeSpeed={0.3}
        baseHue={200}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <Image
          src="https://www.srit.ac.in/wp-content/uploads/2022/01/iste.png"
          alt="vortex"
          width={300}
          height={300}
          className="rounded-full"
        />
        <h1 className="text-white text-2xl md:text-6xl font-bold text-center font-mono mt-2">
          ISTE NITH
        </h1>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country.
        </p>
        <div className="items-center mt-10 ">
          <Animatedbutton/>
        </div>
      </Vortex>
    </div>
  );
}
