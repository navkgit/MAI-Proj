import React from "react";
import Header from "../components/Header";
import LocationField from "../components/LocationField";
import PrjectField from "../components/PrjectField";
import ProjectGallery from "../components/Projects/ProjectGallery";
import RecentProjCard from "../components/RecentProjects/RecentProjCard";
import Footer from "../components/Footer";
import Projects from "../components/HomeProject/Projects";
import BlogSection from "../components/Blog/BlogSection";
import EnquiryForm from "../components/Enquiry/EnquiryForm";
import AvailableInterns from "../components/Interns/AvailableInterns";

const HomePage = () => {
  
  return (
    <div className="bg-gray-100 ">
      <Header/>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-white  flex items-center  ">
      <div className="mx-15 w-200">
        <h1 className="text-5xl w-100 text-white font-semibold leading-15">Manage your project <span className="bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent">FASTER</span></h1>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-2xs shadow-md">
          Explore Your Project
        </button>
      </div>
      <div className="flex justify-items-start ">
        <img src="/images/mai/worker.jpg" alt="Worker" className=" opacity-50 w-100 h-60" />
      </div>
    </div>

      {/* Live Projects */}
      <section className="py-6 bg-gray-150 shadow-xl">
        <div className="flex items-center space-x-40 mx-30">
          <h1 className="text-2xl text-blue-900 font-semibold mb-4">LIVE PROJECT</h1>

        <div className="flex mb-2 space-x-5">
          <PrjectField/>
          <LocationField/>
        </div>
        </div>
      </section>

      {/* Projects List */}
      <ProjectGallery/>

      {/* Recent Project List */}
      <RecentProjCard/>

      {/* Interns  */}
      <AvailableInterns/>

      {/* Home Renovations */}
      <Projects/>

      {/* Blog Section */}
      <BlogSection/>

      <EnquiryForm/>
      <Footer/>
    </div>
  );
};

export default HomePage;
