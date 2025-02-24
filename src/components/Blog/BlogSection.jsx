import React from "react";

const blogs = [
  {
    title: "Safe measures can refer to a wide range of precautions",
    image: "https://tse2.mm.bing.net/th?id=OIP.2kK8CE7SnmJGZhBx4IuyWAHaHa&w=474&h=474&c=7", 
  },
  {
    title: "Safe measures can refer to a wide range of precautions",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Safe measures can refer to a wide range of precautions",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Safe measures can refer to a wide range of precautions",
    image: "https://via.placeholder.com/300",
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl w-72 m-5">
      <img src={blog.image}  className="w-full h-40 px-5 py-5 object-cover " />
      <div className="p-4 -mt-5 text-center">
        <p className="text-gray-600 text-sm whitespace-normal break-words">{blog.title}</p>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="px-6 py-10 -mt-20 overflow-x-auto">
      <h2 className="text-2xl ml-4 font-bold">Blog</h2>
      <div className="flex">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <div className="text-right">
        <button className="text-black font-semibold text-lg cursor-pointer">View All</button>
      </div>
    </div>
  );
};

export default BlogSection;
