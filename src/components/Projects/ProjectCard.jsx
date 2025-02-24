import React from "react";

const ProjectCard = ({ image, location, title, status, avatar }) => {
  return (
    <div className="w-100 bg-gray-150 rounded-lg shadow-md overflow-hidden m-2">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-50 object-cover" />
        <div className="absolute top-2 left-2 text-blue-900 bg-white px-2 py-1 rounded-full text-sm flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-900 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
          </svg>
          {location}
        </div>
        <img
          src={avatar}
          alt="User Avatar"
          className="absolute top-2 right-2 w-8 h-8 rounded-full border border-white"
        />
      </div>
      <div className="p-4 text-center">
        <div className="flex justify-end">
          <p className="text-blue-500 text-sm font-semibold">{status}</p>
        </div>
        <h3 className="text-blue-900 text-lg font-bold mt-1 text-center">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;