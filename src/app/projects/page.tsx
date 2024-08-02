import React from "react";

import ProjectCard from "../components/projects";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar />
      <h1 className="text-white text-center font-bold font-serif text-6xl pt-4">
        Projects
      </h1>
      <p className="text-white text-center font-serif text-2xl mt-2">
        Check out our projects
      </p>
      <div className="flex">
        <ProjectCard />
      </div>
      <Footer/>
    </div>
  );
}