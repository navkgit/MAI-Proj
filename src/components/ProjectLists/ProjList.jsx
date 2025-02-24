import React from "react";

const projects = [
  {
    id: "MAIID123",
    title: "Kitchen Worktop",
    location: "Bristol - England",
    duration: "Completed",
    price: "Fixed",
    expiry: "Marble",
    status: "Active",
    lastUpdate: "2024-08-12",
    proposals: 23,
    postedDate: "07/08/24",
    interns: 0,
    description:
      "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance.",
    image: "/images/mai/kitchen.jpg",
  },
  {
    id: "MAIID124",
    title: "Bathroom Tiles",
    location: "London - England",
    duration: "Ongoing",
    price: "Hourly",
    expiry: "Ceramic",
    status: "In Progress",
    lastUpdate: "2024-08-10",
    proposals: 15,
    postedDate: "06/08/24",
    interns: 2,
    description:
      "High-quality, waterproof, and stylish ceramic tiles for modern bathrooms.",
    image: "/images/mai/kitchen.jpg",
  },
  {
    id: "MAIID125",
    title: "Living Room Paint",
    location: "Manchester - England",
    duration: "Planned",
    price: "Negotiable",
    expiry: "Matte Finish",
    status: "Pending",
    lastUpdate: "2024-08-08",
    proposals: 12,
    postedDate: "05/08/24",
    interns: 1,
    description:
      "Eco-friendly, low-VOC, and durable paint options for a stylish living room.",
    image: "/images/mai/kitchen.jpg",
  },
  {
    id: "MAIID126",
    title: "Garden Landscaping",
    location: "Liverpool - England",
    duration: "Ongoing",
    price: "Fixed",
    expiry: "Stone & Grass",
    status: "Active",
    lastUpdate: "2024-08-07",
    proposals: 18,
    postedDate: "04/08/24",
    interns: 3,
    description:
      "Transforming outdoor spaces with natural stone, lush greenery, and modern design elements.",
    image: "/images/mai/kitchen.jpg",
  },
];


function ProjList() {
  return (
    <>
        <div className="max-w-7xl mx-auto space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-200 border border-gray-400 overflow-hidden flex">
          <img src={project.image} alt={project.title} className="w-1/3 object-center" />
          <div className="w-2/3 p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <div className="text-right">
                <span className="bg-yellow-400 text-black font-bold px-2 py-1">Interns : {project.interns}</span>
                <p className="text-sm text-gray-600 mt-3 mr-10">Posted: {project.postedDate}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm text-gray-700 border-b pb-3">
              <div className="border-r pr-3">
                <p>Project ID : {project.id}</p>
                <p>{project.location}</p>
                <p>Duration : {project.duration}</p>
              </div>
              <div className="col-span-2 pl-3">
                <p>Price - {project.price}</p>
                <p>Expiry Date - {project.expiry}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm font-bold py-3">
              <p>Project Status : {project.status}</p>
              <p>Last Update: {project.lastUpdate}</p>
              <p>Proposal : {project.proposals}</p>
            </div>
            <div className="py-3">
              <h3 className="font-bold">Description</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="flex justify-between mt-5 space-x-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg w-1/3 hover:bg-blue-800 transition">View</button>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg w-1/3 hover:bg-blue-800 transition">Send a Proposal</button>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg w-1/3 hover:bg-blue-800 transition">Apply Internship</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    </>
  )
}

export default ProjList