import React from 'react';
import { RiLockPasswordLine } from 'react-icons/ri'; // Import React Icons for password icon
import Navbar2 from '../components/Navbar2';

function ChangePassword() {
  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="font-poppins text-3xl font-bold mb-8">Change Password</h1>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oldPassword">Old Password</label>
              <input id="oldPassword" type="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Old Password" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">New Password</label>
              <input id="newPassword" type="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="New Password" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirm Password" />
            </div>
            <div className="flex justify-center">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                <RiLockPasswordLine className="h-5 w-5 mr-2" />
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
