import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {loginUser,STATUSES} from '../../Redux/userAuth/loginAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const { status } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser({ identifier, password }));
    } catch (error) {
      console.error(`Error during login: ${Error}`);
      window.alert(`Error during login: ${error.message}`);
    }
  };

  if (status === STATUSES.LOADING) {
    return <h2>LOADING.....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong...</h2>;
  }


  return (
    <>
      <div className='flex sm:items-center sm:justify-between sm:p-5 sm:gap-100 h-full overflow-hidden'>
        <div className='sm:mr-20'>
          <img className='w-[716px] mt-[100px] hidden md:hidden lg:block ' src="https://my-doctors.net/assests/images/login%20and%20registration/login.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center lg:w-[496px] lg:h-[341px] gap-10  sm:mt-[-300px] sm:mr-[100px] p-8 sm:p-0 ">
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
          <div className=" w-[311px] h-[358px] sm:w-full sm:max-w-md  ">
            <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4 border">
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  LOGIN
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>

              <NavLink to={'/register'}>
                <div className='text-center p-7  text-sm flex  gap-2 '>
                  Don't have an account yet ?
                  <p className='text-blue-500'>signup</p>
                </div>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
