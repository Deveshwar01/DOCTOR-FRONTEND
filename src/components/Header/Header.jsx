import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaCalendar } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import SwiperComponent from '../Swipper/Swipper';

const buttons = [
  { text: "Dementia" },
  { text: "Depression" },
  { text: "Diabetes" },
  { text: "Diphtheria" },
  { text: "Dyslexia" },
  { text: "Obesity" },
  { text: "Vertigo" },
  { text: "Vaginitis" },
  { text: "Ulcers" },
  { text: "Typhoid" },
  { text: "Alcholism" },
  // Add more buttons as needed
];

const user = { _id: "jh" };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutHandler = async () => {
  };
  return (
    <>
      <div className='sticky top-0 bg-white overflow-hidden z-10 '>
        <header className="flex flex-col items-center sm:flex-row sm:items-center justify-between p-4 px-5">
          {/* Logo section */}
          <div className="hidden sm:flex items-center mb-4 sm:mb-0">
            <NavLink to={'/'}>
              <img src="https://my-doctors.net/logo.svg" alt="My Doctors Logo" className="h-10" />
            </NavLink>
          </div>

          {/* Mobile view */}
          <div className='flex flex-row items-center justify-between w-full sm:hidden bg-white'>
            {/* Mobile menu button */}
            <button>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            {/* Logo in mobile view */}
            <div className="sm:hidden">
              <img src="https://my-doctors.net/logo.svg" alt="My Doctors Logo" className="h-8" />
            </div>
            {/* Login button in mobile view */}
            <div className="sm:hidden">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </div>
          </div>

          {/* Search section */}
          <div className="flex justify-center sm:w-auto bg-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 sm:px-4 sm:py-2 border border-r-0 w-[120px] sm:w-auto border-none bg-gray-100"
            />
            <input
              type="text"
              placeholder="Search a Doctor..."
              className="px-4 py-2 border focus:outline-none sm:w-auto border-none bg-gray-100"
            />
            <div className='pt-2 pr-2'>
              <FaSearch className='bg-gray-100 text-gray-400 text-xl' />
            </div>
          </div>

          {/* Profile/Login button */}
          <div className="hidden sm:block">
            {user && user._id ? (
              <NavLink to={''}>
                <button onClick={() => setIsOpen(!isOpen)}> {/* Toggle dialog visibility */}
                  <FaUser className='text-2xl' />
                </button>
                <dialog open={isOpen} className="fixed top-[70px] md:top-[60px] left-[280px]  md:left-[1350px] bg-white p-2 rounded-md border z-10">
                  <div className="flex flex-col gap-1">
                    {/* Add conditional rendering for admin links */}
                    <NavLink onClick={() => setIsOpen(false)} to="" className='flex gap-1 bg-gray-200'>
                      <FaUser />
                      <p> Account Setting</p>
                    </NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to="" className='flex gap-1  hover:bg-gray-200'>
                      <FaCalendar />
                      <p> My Appointments</p>
                    </NavLink>
                    {/* Add logout handler */}
                    <button onClick={logoutHandler} className='flex gap-1 hover:bg-gray-200'>
                      <IoLogOut />
                      <p> Logout</p>
                    </button>
                  </div>
                </dialog>
              </NavLink>
            ) : (
              <NavLink to={'/login'}>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold focus:outline-none focus:bg-blue-600">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </header>
        <SwiperComponent buttons={buttons} />
      </div>


    </>
  );
};

export default Header;
