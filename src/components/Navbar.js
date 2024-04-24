import React from 'react';
import logo from '../../src/assets/logo.png';
import Button from './Button';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="bg-white from-blue-500 to-purple-500 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img className="h-12 w-auto mr-2" src={logo} alt="Logo" />
            <Link to="/" className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">Neuro-Insight AI</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              text="Login"
              href="/login"
              bgColor="purple-700"
              textColor="white"
              hoverBgColor="purple-600"
              hoverTextColor="purple-300"
              fontStyle="poppins"
            />
            <Button
              text="Sign Up"
              href="/signup"
              bgColor="white"
              textColor="purple"
              hoverBgColor="purple-700"
              hoverTextColor="white"
              fontStyle="poppins"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

