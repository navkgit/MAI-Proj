import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
  <>
    <header className='text-center top-0'>
      <div className="mx-20 p-4 flex justify-between items-center">
        <Link to={'/'}>
          <img
          src="/images/mai/mai_india_logo.jpg"
          alt="MAI Logo"
          className="w-35 h-25 cursor-pointer" 
         />
        </Link>

      <div className="flex items-center space-x-8 ">
        <Link to={'/post'}>
        <button className="bg-gray-200 border font-semibold cursor-pointer border-gray-200 px-4 py-2 rounded shadow-sm hover:bg-gray-100">
          Post a Project
        </button>
        </Link>
        <button className="text-blue-900 font-semibold cursor-pointer hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
      </svg>
      </button>

        <button className="text-blue-900 font-bold cursor-pointer hover:text-blue-700">
          Login
        </button>
        <button className="text-blue-900 font-bold cursor-pointer hover:text-blue-700">
          Sign Up
        </button>
      </div>
      </div>

      <div className="bg-blue-200 p-4 ">
      <nav className="container mx-20 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-950">
          <a href="#">WWW.MYPROJECT.AI</a>
        </div>
        <div className="flex justify-between space-x-10 mx-40">
        <div className="hidden md:block border-l border-gray-400 h-6"></div>
          <Link to={'/'} className="text-blue-800 font-semibold hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <div className="hidden md:block border-l border-gray-400 h-6"></div>
          <a href="#" className="text-blue-800 font-semibold hover:text-blue-600 transition-colors duration-200">
            How it Works
          </a>
          <div className="hidden md:block border-l border-gray-400 h-6"></div>
          <Link to={'/project'} className="text-blue-800 font-semibold hover:text-blue-600 transition-colors duration-200">
            Project
          </Link>
          <div className="hidden md:block border-l border-gray-400 h-6"></div>
          <a href="#" className="text-blue-800 font-semibold hover:text-blue-600 transition-colors duration-200">
            Blogs
          </a>
          <div className="hidden md:block border-l border-gray-400 h-6"></div>
          <a href="#" className="text-blue-800 font-semibold hover:text-blue-600 transition-colors duration-200">
            DIY Worktops
          </a>
        </div>
      </nav>
    </div>
    </header>
  </>
  )
}

export default Header