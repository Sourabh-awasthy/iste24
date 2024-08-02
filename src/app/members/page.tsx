import React from "react";
import AnimatedCard from "../components/card";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Members() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar />
      <h1 className="text-white text-center font-bold font-serif text-6xl pt-4">
        Members
      </h1>
      <p className="text-white text-center font-serif text-2xl mt-2">
        Meet our team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
      </div>
        <Footer />
    </div>
  );
}
