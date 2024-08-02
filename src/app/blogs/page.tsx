import React from "react";
import BlogList from "../components/blogCards";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <div className="bg-black min-h-screen">
        <Navbar/>
      <h1 className="text-white text-center font-bold font-serif text-6xl pt-4">
        Blogs
      </h1>
      <p className="text-white text-center font-serif text-2xl mt-2">
        Our Blogs
      </p>
      <div className="flex">
        <BlogList/>
      </div>
        <Footer/>
    </div>
  );
}