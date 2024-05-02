import React from 'react';
import LeftPage from '../../components/LeftSide/LeftSide'; // Assuming this is the file containing your LeftPage component
import Speciality from '../../components/Speciality/Speciality';
import DoctorCard from '../../components/DoctorInfo/DoctorInfo';

const Home = () => {
  return (
    <>
      <div className='flex'>
        <LeftPage />
        <div className='flex flex-col p-5 sm:p-8 lg:ml-[250px]'> {/* Adjust margin to make space for fixed left side */}
          {/* Your existing content */}
          <img className='w-[311px] h-[103px] sm:w-[1215px] sm:h-[405px]' src="https://my-doctors.net/assests/images/final%20banner/final%20banner.svg" alt="" />
          <h1 className='text-[42px] text-blue-500 font-bold'> 20+ Speciality</h1>
          <Speciality />
          <DoctorCard />
        </div>
      </div>
    </>
  )
}

export default Home;
