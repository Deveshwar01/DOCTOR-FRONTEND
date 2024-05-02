import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/userAuth/registerAuth';
import { toast } from 'react-hot-toast';

const UserRegister = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate password and confirm password match
      if (password !== confirmPassword) {
        // Handle password mismatch error
        throw new Error('Passwords do not match');
      }

      // Dispatch registerUser action
      await dispatch(registerUser({
        name,
        gender,
        dateOfBirth,
        contactNo,
        email,
        password
      }));

      // Reset form fields after successful submission
      setName('');
      setGender('');
      setDateOfBirth('');
      setContactNo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Show success toast
      toast.success('Registration successful!');
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error during form submission:', error);
      // Show error toast
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <div className='flex sm:items-center sm:justify-between sm:p-5 gap-100 overflow-hidden'>
        <div className='sm:mr-20'>
          <img className='w-[716px] mt-[100px] hidden sm:block' src="https://my-doctors.net/assests/images/login%20and%20registration/final%20registration.svg" alt="" />
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  <option value="not_specified">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Date of Birth*</label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1">Mobile Number*</label>
                <input
                  type="text"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
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
                <label className="block mb-1">Password*</label>
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
            </form>
            <p className="text-center">Already have an account? Sign in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
