import React from 'react'
import { FiShare2 } from "react-icons/fi";

const projects = [
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7", // Replace with actual image URL
    category: "Kitchen Worktop",
    location: "Bristol - England",
    slab: "Marble",
    duration: "Completed",
    members: 9,
    profilePics: ["https://randomuser.me/api/portraits/men/1.jpg", "https://randomuser.me/api/portraits/women/2.jpg","https://randomuser.me/api/portraits/women/3.jpg"],
  },
  {
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    category: "Kitchen Worktop",
    location: "Bristol - England",
    slab: "Marble",
    duration: "Completed",
    members: 9,
    profilePics: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    category: "Kitchen Worktop",
    location: "Bristol - England",
    slab: "Marble",
    duration: "Completed",
    members: 9,
    profilePics: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    category: "Kitchen Worktop",
    location: "Bristol - England",
    slab: "Marble",
    duration: "Completed",
    members: 9,
    profilePics: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
];

function RecentProjCard() {
  return (
    <>
        <div className=" mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Project Post</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 border-none">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg overflow-hidden">
          <p className='font-bold text-xl'>Bedroom Renovaion</p>
            <img src={project.image} alt={project.category} className="w-full h-48 object-cover" />
            <div className=" border p-4">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-md mt-2 flex items-center">
                  {project.category} <FiShare2 className="text-gray-600 cursor-pointer ml-2" />
                </h4>
              </div>
              <p className="text-gray-600">{project.location}</p>
              <p className="text-gray-600">Slab: {project.slab}</p>
              <div className="flex items-center mt-2 space-x-2">
                <p className="text-gray-600">Duration: {project.duration}</p>
                <div className="flex">
                  {project.profilePics.map((pic, i) => (
                    <img key={i} src={pic} alt="profile" className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0" />
                  ))}
                </div>
                <span className="text-gray-600">+{project.members}</span>
              </div>
            </div>
            <div className="bg-blue-900 rounded-b-lg text-white text-center p-2 cursor-pointer hover:bg-blue-700">
              View Project
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default RecentProjCard