import React from "react";

const project = [
  {
    title: "Home Renovation",
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7", 
    description:
      "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget...",
    budget: "£100",
  },
  {
    title: "Living room",
    image: "https://via.placeholder.com/300",
    description:
      "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget...",
    budget: "£100",
  },
  {
    title: "Living Room Gardening",
    image: "https://via.placeholder.com/300",
    description:
      "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget...",
    budget: "£100",
  },
  {
    title: "Home Exterior",
    image: "https://via.placeholder.com/300",
    description:
      "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget...",
    budget: "£100",
  },
  {
    title: "Home Exterior",
    image: "https://via.placeholder.com/300",
    description:
      "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget...",
    budget: "£100",
  },
  
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl w-80 m-1 flex flex-col">
      <div className="relative max-w-full h-48">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-xl" />
        <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 text-white p-1 text-lg font-semibold">
          {project.title}
        </div>
      </div>
      <div className=" p-4 flex-grow bg-gray-100">
        <p className="bg-white px-1 py-2 rounded-lg text-gray-600 text-sm whitespace-normal break-words">{project.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-900 font-semibold">Budget: {project.budget}</span>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer">View</button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="px-6 py-10 overflow-x-auto">
      <h2 className="text-2xl font-bold">PROJECTS</h2>
      <div className="flex gap-2 mt-6 ">
        {project.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="text-right mt-4">
        <button className="text-black font-bold text-lg cursor-pointer">View All</button>
      </div>
    </div>
  );
};

export default Projects;
