import React from "react";
import EventScroll from "../components/eventsScroll";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Events() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar />
      <h1 className="text-white text-center font-bold font-serif text-6xl pt-4">
        Events
      </h1>
      
      <div className="flex">
        <div>
        <p className="text-white text-center font-serif text-2xl mt-2">
            Past Events
        </p>
        <EventScroll />
        </div>
        <div>
        <p className="text-white text-center font-serif text-2xl mt-2">
            Upcoming Events
        </p>
        <EventScroll />
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}