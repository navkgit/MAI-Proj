import React, { useState } from 'react';
import Header from '../components/Header';
import { FaSearch } from 'react-icons/fa';

function PostProject() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [totalDays, setTotalDays] = useState('Days');
  const [postCode, setPostCode] = useState(new Array(7).fill(''));
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newPostCode = [...postCode];
    newPostCode[index] = value;
    setPostCode(newPostCode);

    if (value && index < postCode.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const calculateDays = (start, end) => {
    if (start && end) {
      const startDay = new Date(start);
      const endDay = new Date(end);
      const diffTime = Math.abs(endDay - startDay);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalDays(diffDays);
    } else {
      setTotalDays('Days');
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    calculateDays(e.target.value, expiryDate);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
    calculateDays(startDate, e.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!selectedBudget) newErrors.budget = 'Budget type is required';
    if (!startDate) newErrors.startDate = 'Start date is required';
    if (!expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!isChecked) newErrors.terms = 'You must agree to the terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted successfully!');
    }
  };

  return (
    <>
      <Header />
      <div className="w-full bg-white shadow-md rounded-lg flex overflow-hidden space-x-6 p-4">
        {/* Image */}
        <div className="w-1/2 h-dvh rounded-lg overflow-hidden">
          <img
            src="/images/mai/family.jpg"
            alt="Family in front of a house"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-1/2 p-8 rounded-lg bg-gray-50">
          <div className="bg-blue-100 py-6 rounded mb-4">
            <h3 className="text-lg font-bold text-center text-blue-900">Note</h3>
            <ul className="flex flex-col justify-center items-center list-disc text-sm text-gray-600">
              <li className="mb-2">Precision is key! Provide clear descriptions.</li>
              <li>Upload relevant pictures and documents.</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-center py-2 shadow-xl bg-blue-100 text-blue-900 mb-4">
            Post a Project
          </h2>

          {/* Form */}
          <p className="my-5 text-xs font-semibold">
            Select a relevant category so that we can find your project
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Category */}
            <div>
              <label className="my-2 block text-xs">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                className="w-full p-3 border rounded border-b-2 shadow-sm"
                required
              >
                <option value="">Select Options</option>
                <option value="construction">Construction</option>
                <option value="renovation">Renovation</option>
              </select>
            </div>

            {/* Sub-Category */}
            <div>
              <label className="my-2 block text-sm">
                Sub-Category<span className="text-red-500">*</span>
              </label>
              <select
                name="subCategory"
                className="w-full p-3 border rounded border-b-2 shadow-sm"
                required
              >
                <option value="">Select Options</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
              </select>
            </div>

            {/* Project Title */}
            <div>
              <label className="my-2 block text-xl font-light">
                Project Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-3 border rounded-xl bg-gray-200 border-none"
                placeholder="Type your project title"
                required
              />
            </div>

            {/* Project Description */}
            <div>
              <label className="my-2 block text-xl font-light">
                Project Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                className="w-full p-3 border rounded-xl bg-gray-200 border-none pb-10 resize-none"
                placeholder="Type here..."
                required
              ></textarea>
            </div>

            {/* Upload Files */}
            <div>
              <h2 className="my-2 block text-xl font-light">UPLOAD SAMPLE OTHER HELPFUL</h2>
              <div className="bg-blue-100 p-6 rounded-lg text-center border border-blue-300">
                <label className="flex items-center justify-center w-full h-full cursor-pointer">
                  <i className="fa-solid fa-arrow-up-from-bracket text-gray-600 text-2xl mr-5"></i>
                  <span className="text-gray-600 text-xl">
                    Drag here or <span className="text-blue-600 underline">Browse</span>
                  </span>
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
                <p className="text-sm text-gray-500 mt-2">Format: JPEG, PNG, PDF</p>
                {selectedFile && (
                  <p className="text-sm text-gray-700 mt-2">Selected file: {selectedFile.name}</p>
                )}
              </div>
            </div>

            {/* Budget Type */}
            <div>
              <label className="block text-gray-700 text-xl mb-2">
                Budget Type<span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2 mb-4">
                {['Fixed', 'Range', 'No Idea'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 rounded-lg text-white font-medium cursor-pointer ${
                      selectedBudget === type ? 'bg-blue-900' : 'bg-blue-700'
                    }`}
                    onClick={() => setSelectedBudget(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
            </div>

            {/* Project Location */}
            <div>
              <label className="block text-gray-700 text-xl mb-2">
                Project Location<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for your location.."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  required
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-gray-700 text-xl mb-2">
                Post Code <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-2">
                {postCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-10 h-10 border rounded-xl text-center text-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                ))}
              </div>
            </div>

            {/* Project Duration Days */}
            <div>
              <p className="text-xl text-gray-700 mb-4">
                Project Duration Days<span className="text-red-500">*</span>
              </p>
              <label className="block text-gray-700 font-medium">Start date</label>
              <div className="relative mb-4">
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-b-3"
                  required
                />
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
              </div>

              <label className="block text-gray-700 font-medium">Expiry date</label>
              <div className="relative mb-4">
                <input
                  type="date"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-b-3"
                  required
                />
                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
              </div>

              <div className="flex items-center mt-4">
                <span className="text-gray-700 font-medium mr-2">Total days:</span>
                <div className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700">{totalDays}</div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex items-center text-xl space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-5 h-5 border-gray-300 rounded focus:ring focus:ring-green-500"
                  required
                />
                <span>
                  I Agree the{' '}
                  <a href="#" className="text-blue-500">
                    Terms & Conditions
                  </a>
                </span>
              </label>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-500 text-blue-900 font-bold py-2 px-6 rounded-xl focus:outline-none focus:ring focus:ring-green-300 cursor-pointer"
                // disabled={!isChecked}
              >
                Post a Project
              </button>
              <button
                type="button"
                className="bg-orange-700 text-white font-bold py-2 px-6 rounded-xl focus:outline-none focus:ring focus:ring-red-300 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostProject;