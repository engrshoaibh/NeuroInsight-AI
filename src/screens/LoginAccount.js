import React from 'react';
import BG from '../assets/BG.png';
import Button from '../components/Button';
import { Link } from "react-router-dom";
import Button3 from '../components/Button3';
import HandleGoogleLogin from '../firebase/HandleGoogleLogin';


function LoginAccount() {
    const handleGoogleLogin = HandleGoogleLogin()
 
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:h-screen">
            {/* Left Column */}
            <div className="lg:w-2/5 custom-bg-color text-white h-full flex flex-col justify-center items-center p-4">
                <h1 className="text-3xl lg:text-4xl font-semibold font-poppins text-center mb-8 lg:mb-20">
                    Welcome Back!
                </h1>
                <img src={BG} alt="" className="h-auto mb-8 lg:mb-0 max-w-full" />
            </div>

            {/* Right Column */}
            <div className="lg:w-3/5 px-4 lg:px-10 py-8">
                <h2 className="text-2xl lg:text-3xl font-semibold font-poppins mb-4 lg:mb-8 px-4 lg:px-20 text-center lg:text-left">Login Account</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:px-36">
                    {/* First Column */}
                    <div className="flex flex-col space-y-4 lg:w-full">
                        <label htmlFor="email" className="font-poppins text-sm font-semibold">Email</label>
                        <input type="email" id="email" className="border border-gray-300 rounded-md px-3 py-2 lg:w-full" />
                        <label htmlFor="Password" className="font-poppins text-sm font-semibold">Password</label>
                        <input type="password" id="password" className="border border-gray-300 rounded-md px-3 py-2 lg:w-full" />
                        <div className="flex items-center space-x-2 mt-2 lg:mt-4"> {/* Reduced top margin */}
                            <div className='flex items-center'>
                                <input type="checkbox" id="rememberMe" className="mr-2" />
                                <label htmlFor="rememberMe" className="font-poppins text-xs">Remember Me</label>
                            </div>
                            <Link to="#" className="font-poppins text-xs">Forget Password?</Link>
                        </div>
                        <Button
                            text="Login"
                            href="/dashboard"
                            bgColor="purple-700"
                            textColor="white"
                            hoverBgColor="purple-600"
                            hoverTextColor="purple-300"
                            fontStyle="poppins"
                        />

                        <Button3
                            title="Sign-in with Google"
                            href="/login"
                            icon="google"
                            icon_style="h-5 w-5 mr-2"
                            handleGoogleSignIn = {handleGoogleLogin}
                        />
                    </div>
                </div>
                <div className='text-center mt-8'>
                    <p className='font-poppins text-xs'>Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Create an account</Link></p>
                </div>
            </div>

        </div>
    );
}

export default LoginAccount;




