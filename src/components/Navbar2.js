import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.png';
import { FaChevronDown, FaChevronUp, FaPaperclip, FaSignOutAlt, FaUser, FaBars } from 'react-icons/fa';
import { useUser } from '../screens/UserContext';


function Navbar2() {
    const {userData} = useUser()
    
    const profileimage = userData?.profileimage;
    const name = userData?.name;

    const [isArrowMenuOpen, setIsArrowMenuOpen] = useState(false);
    const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const dropdownRef = useRef(null);
    const toggleArrowMenu = () => {
        setIsArrowMenuOpen(!isArrowMenuOpen);
    };

    const toggleResponsiveMenu = () => {
        setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsArrowMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderProfileImage = () => {
        if (profileimage) {
            return (
                <img
                    src={profileimage}
                    className={`${windowWidth <= 450 ? 'h-9 w-9 rounded-full' : 'h-12 w-12 rounded-full'}`}
                    alt="Profile"
                />
            );
        } else {
            // If profile image is undefined, show the first character of the name
            return (
                <div className={`${windowWidth <= 450 ? 'h-9 w-9 rounded-full flex items-center justify-center' : 'h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center'}`}>
                    {name.charAt(0)}
                </div>
            );
        }
    };

    return (
        <nav className="bg-white from-blue-500 to-purple-500 shadow-lg sticky top-0 z-10 p-0 m-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <FaBars className="h-8 w-8 cursor-pointer md:hidden" onClick={toggleResponsiveMenu} />
                        <img className={`${windowWidth <= 450 ? 'h-9 w-auto mr-2 ml-2' : 'h-12 w-auto mr-2 ml-2'}`} src={logo} alt="Logo" />
                        <Link to="/" className={`${windowWidth <= 450 ? 'text-sm' : 'text-xl'} text-black font-bold font-poppins mr-4`}>Neuro-Insight AI</Link>
                        <div className="ml-4 space-x-4 hidden md:flex">
                            <Link to="/dashboard/checkBrainTumor" className="text-black font-semibold font-poppins hover:underline">Check Brain Tumor</Link>
                            <Link to="/dashboard/checkAlzheimer" className="text-black font-semibold font-poppins hover:underline">Check Alzheimer's</Link>
                            <Link to="/dashboard/ViewAllReports" className="text-black font-semibold font-poppins hover:underline">View Generated Reports</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 relative">
                        {renderProfileImage()}
                        <span className={`${windowWidth <= 450 ? 'text-sm' : 'font-poppins'}`}>{name}</span>
                        <div className="flex items-center hover:cursor-pointer" onClick={toggleArrowMenu}>
                            {isArrowMenuOpen ? <FaChevronDown className="ml-1" /> : <FaChevronUp className="ml-1" />}
                        </div>
                        {/* Dropdown Menu */}
                        {isArrowMenuOpen && (
                            <div ref={dropdownRef} className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <Link to="/dashboard/viewProfile" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                    <FaUser className="mr-2" />
                                    View Profile
                                </Link>
                                <Link to="/dashboard/giveFeedback" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                    <FaPaperclip className="mr-2" />
                                    Feedback
                                </Link>
                                <Link to="/" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                    <FaSignOutAlt className="mr-2" />
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                {/* Responsive Menu */}
                {(isResponsiveMenuOpen) && (
                    <div className="md:hidden bg-white pt-4">
                        <Link to="/dashboard/checkBrainTumor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins">Check Brain Tumor</Link>
                        <Link to="/dashboard/checkAlzheimer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins">Check Alzheimer's</Link>
                        <Link to="/dashboard/ViewAllReports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-poppins">View Generated Reports</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar2;
