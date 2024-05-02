import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    return (
        <div className='flex flex-col'>
            <div>Change Password</div>
            <div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">Current Password</label>
                        <input type="password" id="currentPassword" name="currentPassword" value={formData.currentPassword} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                        <input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmNewPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password</label>
                        <input type="password" id="confirmNewPassword" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={!formData.currentPassword || !formData.newPassword || !formData.confirmNewPassword}>Change Password</button>
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    )
}

export default ChangePassword