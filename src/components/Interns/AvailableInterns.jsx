import React from "react";

const interns = [
  {
    name: "Jery Macson",
    role: "Intern",
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7",
  },
  {
    name: "Jery Macson",
    role: "Intern",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jery Macson",
    role: "Intern",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jery Macson",
    role: "Intern",
    image: "https://via.placeholder.com/100",
  },
];

const AvailableInterns = () => {
  return (
    <div className="max-w-6xl  p-6 -mb-10">
      <h2 className="text-2xl font-bold mb-4">AVAILABLE INTERN</h2>
      <div className="flex space-x-4 overflow-x-auto h-70">
        {interns.map((intern, index) => (
          <div key={index} className="bg-blue-900 h-20 text-white rounded-lg p-4 w-64  flex-grow relative">
            <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2">
              <img
                src={intern.image}
                alt={intern.name}
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="mt-12 z-10  py-10 bg-white text-black p-4 rounded-lg">
              <p className="text-lg">Name : {intern.name}</p>
              <p className="text-lg">Role : {intern.role}</p>
            <button className="w-full bg-blue-900 text-white font-bold py-2 mt-4 cursor-pointer">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableInterns;
