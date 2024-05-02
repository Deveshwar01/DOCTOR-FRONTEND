import React, { useState } from 'react';
import LeftPage from '../../components/LeftSide/LeftSide';
import { FaRegUser } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";

function ProfileForm() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='flex'>
      <LeftPage />
      <div className='lg:ml-[250px]'>
        <div className="w-full p-10">
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-4xl font-bold text-blue-500 p-1 ">My Profile</p>
              <FaRegUser className='text-[70px]' />
              <div className='flex p-4 gap-2'>
                <FaCamera />
                <RxCross1 />
              </div>
              <p className='text-[10px] w-[120px] '>JPEG, JPG or PNG image less than 1 MB
                (Close up face picture looks great)</p>
            </div>
            <div className=" ">
              <button type="submit" className="px-4 py-2 border text-sm font-medium rounded-md text-white bg-indigo-600 ">Save</button>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">Phone No</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">BloodGroup</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">House no</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">Coloney Street </label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text"
                  name="name"
                  onChange={handleChange}
                  className='border w-[389px] h-[56px] '
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
