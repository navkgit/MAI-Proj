import React from "react";

const EnquiryForm = () => {
  return (
    <>
    <div className="px-6 py-2 -mt-5 ml-5 overflow-x-auto">
    <h2 className="text-xl font-bold italic mb-4">Enquiry now</h2>
    </div>
    <div className="max-w-full ml-15 mr-15 mb-40 bg-white shadow-lg rounded-lg overflow-hidden flex space-x-4">
      {/* Left Side Image */}
      <div className="rounded-l-lg border h-150 p-3 relative ">
        <img
          src="/images/mai/enquiry.jpg" 
          alt="Construction Site"
          className=" object-fit"
        />
        <div className="absolute bottom-50 -left-10 text-black px-3 py-1 text-xl font-bold rotate-[-90deg]">
          MYPROJECT.AI
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full shadow-xl  bg-gray-100 p-6 flex flex-col justify-center">
        <form className="space-y-10 ml-15 ">
          <div className="">
            <label className="block text-sm font-medium mb-2">Name*</label>
            <input
              type="text"
              placeholder="Enter"
              className=" w-200 bg-white  overflow-hidden shadow-md flex items-center  border-gray-300 px-3 py-2"
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium mb-2">Mobile Number*</label>
            <input
              type="text"
              placeholder="Enter your number"
              className="w-200 bg-white  overflow-hidden shadow-md flex items-center  border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email ID*</label>
            <input
              type="email"
              placeholder="Enter Mail"
              className="w-200 bg-white  overflow-hidden shadow-md flex items-center  border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Site Location*</label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-200 bg-white  overflow-hidden shadow-md flex items-center  border-gray-300 px-3 py-2"
            />
          </div>
          <button className="w-200 bg-blue-900 text-white py-3 text-lg font-semibold">
            Get a Quotes
          </button>
          <p className="text-center -ml-23 text-gray-500 text-sm">We'll get back to you</p>
        </form>
      </div>
    </div>
    </>
  );
};

export default EnquiryForm;
