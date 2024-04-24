import React from 'react';
import { RiSaveLine } from 'react-icons/ri'; // Import React Icons for save icon

import profileImage from '../../src/assets/myprofilepic.png'; // Import your profile image
import Navbar2 from '../components/Navbar2';

function UpdateProfile() {
  return (
    <>
      <Navbar2 />
    
      <div className="container mx-auto my-20 px-4">
        <h1 className="font-poppins text-3xl font-bold mb-8">Update Profile</h1>
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <img src={profileImage} className="w-40 h-40 md:w-64 md:h-64 rounded-full" alt="Profile" />
            <button className="absolute bottom-0 right-6 md:right-8 bg-purple-600 text-white px-2 py-1 rounded-md">Change Photo</button>
          </div>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="Shoaib" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="Hassan" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input id="email" type="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="201400124@gift.eu.pk" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of Birth</label>
              <input id="dob" type="date" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="2000-06-22" />
            </div>
            <div className="flex justify-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center">
                <RiSaveLine className="h-5 w-5 mr-2" />
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
