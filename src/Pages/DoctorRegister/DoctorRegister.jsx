import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const DoctorRegister = () => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //   dispatch(Login({ email, password }));
        //   navigation('/');
        // } catch (error) {
        //   console.error(`Error during login: ${error}`);
        //   window.alert(`Error during login: ${error.message}`);
        // }
    };

    return (
        <>
            <div className='flex sm:items-center sm:justify-between sm:p-5 gap-100'>
                <div className='sm:mr-20'>
                    <img className='w-[716px] mt-[100px]  hidden sm:block' src="https://my-doctors.net/assests/images/login%20and%20registration/final%20registration.svg" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center sm:w-[496px] sm:h-[341px]  gap-5 sm:gap-10  sm:mt-[-300px] sm:mr-[100px] p-8 sm:p-0 ">
                    <div className='flex w-[311px] sm:w-[450px] '>
                        <NavLink to={'/login'}>
                            <button className='border sm:w-[150px] p-6 sm:p-3'>
                                LOGIN
                            </button>
                        </NavLink>

                        <NavLink to={'/patient-register'}>
                            <button className='border sm:w-[150px] p-3'>
                                PATIENT SIGNUP
                            </button>
                        </NavLink>

                        <NavLink to={'/doctor-register'}>
                            <button className='border sm:w-[150px] p-3'>
                                DOCTOR SIGNUP
                            </button>
                        </NavLink>
                    </div>
                    <div className="w-full  h-[458px] max-w-md ">
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4 border p-2">
                            <div>
                                <label className="block mb-1" htmlFor="full-name">Full Name*</label>
                                <input
                                    id="full-name"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Gender*</label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1">Mobile Number*</label>
                                <input
                                    type="text"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Email*</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Create Password*</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Confirm Password*</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
                            <p className="text-center">Already have an account? Sign in</p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DoctorRegister;
