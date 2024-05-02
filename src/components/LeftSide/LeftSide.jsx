import React, { useState } from 'react';
import { FaRegUser, FaCalendar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaLock } from "react-icons/fa";

const user = { _id: "hjgh" };

const LeftPage = () => {
    const [accountSetting, SetAccountSetting] = useState(false);

    const toogleAccount = () => {
        SetAccountSetting(!accountSetting)
    }

    return (
        <>
            <div className='fixed top-[125px] left-0 bottom-[103px] z-10 w-[250px] border-r-2 bg-white hidden lg:block '>
                <div className='pt-2 flex flex-col gap-5'>
                    {
                        user._id ? (
                            <>
                                <div className='flex bg-gray-200 p-2 gap-5'>
                                    <FaRegUser className='text-2xl' />
                                    <h1>Doctors</h1>
                                </div>
                                <NavLink to={'specialities'}>
                                    <div className='flex hover:bg-gray-100 p-2 gap-5'>
                                        <FaRegUser className='text-2xl' />
                                        <h1>Specialities</h1>
                                    </div>
                                </NavLink>
                                <NavLink to={'appointments'}>
                                    <div className='flex hover:bg-gray-100 p-2 gap-5'>
                                        <FaCalendar className='text-2xl' />
                                        <h1>My Appointments</h1>
                                    </div>
                                </NavLink>
                                <NavLink to={'/profile'} onClick={toogleAccount}>
                                    <div className='flex hover:bg-gray-100 p-2 gap-5'>
                                        <FaRegUser className='text-2xl' />
                                        <h1>Account Settings</h1>
                                    </div>
                                </NavLink>
                                {
                                    accountSetting && (
                                        <>
                                            <NavLink to={'/profile'}>
                                                <div className='pl-16'>
                                                    <div className='flex bg-gray-100  p-2 gap-5'>
                                                        <FaRegUser className='text-2xl' />
                                                        <h1>My profile</h1>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to={'/changepassword'}>
                                                <div className='pl-16'>
                                                    <div className='flex hover:bg-gray-100  p-2 gap-5'>
                                                        <FaLock className='text-2xl' />
                                                        <h1>Change Password</h1>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </>
                                    )
                                }
                            </>
                        ) : (
                            <>
                                <div className='flex bg-gray-300 p-2 gap-5'>
                                    <FaRegUser className='text-2xl' />
                                    <h1>Doctors</h1>
                                </div>
                                <div className='flex bg-gray-300 p-2 gap-5'>
                                    <FaRegUser className='text-2xl' />
                                    <h1>Doctors</h1>
                                </div>
                            </>
                        )
                    }
                </div>
            </div ></>
    )
}

export default LeftPage;
