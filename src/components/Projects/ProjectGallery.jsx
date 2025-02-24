import React from "react";
import ProjectCard from "./ProjectCard";
const ProjectGallery = () => {
  const projects = [
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
    location: "England",
    title: "Interior Works",
    status: "Progress",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
    location: "England",
    title: "Stone Fixing",
    status: "Progress",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
    location: "England",
    title: "Electricals Works",
    status: "Progress",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
    location: "England",
    title: "Gardening Setup",
    status: "Progress",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
    location: "England",
    title: "Gardening Setup",
    status: "Progress",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
    location: "England",
    title: "Gardening Setup",
    status: "Progress",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];


  return (
    <div className="p-4 shadow-xl">
      <div className="flex space-x-4 overflow-x-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-end text-blue-600 font-bold cursor-pointer mt-4">
        View All
      </div>
    </div>
  );
};

export default ProjectGallery;
