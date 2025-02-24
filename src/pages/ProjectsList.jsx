import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjList from '../components/ProjectLists/ProjList';

function ProjectsList() {
  return (
    <>
      <Header />

    {/* Banner Title */}
    <div className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center" style={{
      backgroundImage: "url('/images/mai/image1.jpg')"
    }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-8 bg-black opacity-70 w-full py-4 mt-70">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold px-50">
            Post your projects with specifications and details explaining the depth of the project, materials needed, time limit to be taken, and budget
          </h2>
        </div>
      </div>
    </div>

    {/* Project List Titles */}

    <div className="w-full ml-6 px-25 py-6 bg-white ">
      <h2 className="text-2xl font-bold mb-4">Project List</h2>
      <div className="flex items-center gap-6">
        <div className="relative w-2/3 mr-40">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-5 py-3 text-lg border-black rounded-lg bg-gray-100 focus:outline-none"
          />
          <FaSearch className="absolute right-4 top-4 text-gray-500 text-xl" />
        </div>
        <div className="flex items-center gap-3">
          <FaFilter className="text-blue-900 cursor-pointer text-2xl" />
          <button className="flex items-center bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg">
            Sort by <span className="mx-3 border-l border-gray-400 h-6"></span> <span className="text-xl cursor-pointer">▼</span>
          </button>
        </div>
      </div>
    </div>

    {/* Project List Items */}
    <ProjList/>

    {/* Pagination */}

    <div className="flex justify-center mt-4 mb-20">
      <button className="px-4 py-2 border rounded-md text-2xl cursor-pointer text-blue-600 font-bold">1</button>
      <button className="px-4 py-2 border rounded-md text-2xl cursor-pointer text-black font-bold ml-2">2</button>
    </div>


      <Footer />
    </>
  )
}

export default ProjectsList