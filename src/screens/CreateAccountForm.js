import React from 'react';
import BG from '../assets/BG.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Button3 from '../components/Button3';
import HandleGoogleLogin from '../firebase/HandleGoogleLogin';

function CreateAccountForm() {
  const handleGoogleLogin = HandleGoogleLogin()
  return (
    <div className="flex flex-col lg:flex-row">

      {/* Left Column */}
      <div className="lg:w-2/5 custom-bg-color text-white">
        <div className="flex flex-col items-center justify-center lg:h-screen p-10">
          <h1 className="text-3xl font-semibold font-poppins text-center mb-20 text-black">
            Neuro-Insight AI: Brain Tumor and Alzheimer’s
          </h1>
          <img src={BG} alt="" className="h-80 mb-0" />
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-2/3 py-20 justify-center">
        <h2 className="text-2xl font-semibold font-poppins px-6">Create Account</h2>
        <div className="flex flex-col lg:flex-row justify-evenly mt-10 px-14">

          {/* First Column */}
          <div className="lg:w-3/4 flex flex-col space-y-4 py-4">
            <label htmlFor="FirstName" className="font-poppins text-sm font-semibold">First Name</label>
            <input type="text" id="firstName" className="border border-gray-300 rounded-md px-3 py-2 w-full lg:w-64" />
            <label htmlFor="lastName" className="font-poppins text-sm font-semibold">Last Name</label>
            <input type="text" id="lastName" className="border border-gray-300 rounded-md px-3 py-2 w-full lg:w-64" />
            <label htmlFor="FirstName" className="font-poppins text-sm font-semibold">Email</label>
            <input type="text" id="firstName" className="border border-gray-300 rounded-md px-3 py-2 w-full lg:w-64" />            
          </div>

          {/* Second Column */}
          <div className="lg:w-2/4 flex flex-col space-y-4">
            
            <label htmlFor="lastName" className="font-poppins text-sm font-semibold py-2">Date of birth</label>
            <input type="date" id="dob" className="border border-gray-300 rounded-md px-3 py-2 w-full lg:w-64" />
            <label htmlFor="FirstName" className="font-poppins text-sm font-semibold">Password</label>
            <input type="text" id="firstName" className="border border-gray-300 rounded-md px-3 py-2 w-full lg:w-64" />
            <label htmlFor="lastName" className="font-poppins text-sm font-semibold">Confirm Password</label>
            <input type="text" id="lastName" className="border border-gray-300 rounded-md px-3 py-2 w-full lg:w-64" />
            <p className="text-purple-600 text-sm">Forgot password?</p>
            
          </div>
        
        </div>
        <div className="flex items-center space-x-2 mt-4 px-14"> {/* Reduced top margin */}
            <input type="checkbox" id="agreeTerms" className="mr-2" />
            <label htmlFor="agreeTerms" className="font-poppins text-xs">I agree to all the Terms and Privacy Policy</label>
          </div>
        <div className="justify-center text-center px-14">
          
          <div className="flex flex-col justify-center py-4 space-y-3">
            
            <Button
              text="Create Account"
              href="/login"
              bgColor="purple-600"
              textColor="white"
              hoverBgColor="purple-700"
              hoverTextColor="white"
              fontStyle="poppins"
            />
            
            <Button3
              title="Signup with Google"
              href="/login"
              icon="google"
              icon_style="h-5 w-5 mr-2"
              handleGoogleSignIn = {handleGoogleLogin}
            />
          </div>
          
        </div>
        <div className='text-center mt-4 lg:mt-8'>
          <p className='font-poppins text-xs'>Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountForm;
