import React, { useState } from 'react';
import LeftPage from '../../components/LeftSide/LeftSide';
import { FaSearch } from 'react-icons/fa';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Specialities = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='flex px-10'>
            <LeftPage />
            <div className='lg:ml-[250px]'>
                <div className='flex items-center justify-between p-4'>
                    <h1 className='text-4xl font-bold text-blue-500'>20+ Speciality</h1>
                    <div className='flex items-center justify-between gap-2 '>
                        <div className='border flex items-center justify-between p-2 w-[266px]'>
                            <input
                                aria-invalid="false"
                                placeholder="Search a Speciality"
                                type="text"
                                className=""
                                value=""
                            />
                            <FaSearch />
                        </div>
                        <FormControl className='w-[56px] '>
                            <InputLabel className='text-sm' id="">10</InputLabel>
                            <Select
                            >
                                <MenuItem>10</MenuItem>
                                <MenuItem>20</MenuItem>
                                <MenuItem>30</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                    <div className='sm:w-[371px] sm:h-[190px] border '>
                        <div className='flex flex-col  items-center p-10'>
                            <img className='w-[100px] items-center' src="https://my-doctors.net/assests/images/specialities/g/gastroenterology.svg" />
                            <p>Gastroenterology</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialities;
