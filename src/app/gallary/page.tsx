import React from "react";

import GallaryCards from "../components/gallary";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Gallary() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar />
      <h1 className="text-white text-center font-bold font-serif text-6xl pt-4">
        Gallary
      </h1>
      <p className="text-white text-center font-serif text-2xl mt-2">
        Iste in Action
      </p>
      <div className="flex">
        <GallaryCards/>
      </div>
      <Footer/>
    </div>
  );
}