import React from "react";
import Navbar2 from "../components/Navbar2";
import profileImage from "../../src/assets/myprofilepic.png"; // Import your profile image
import viewProfile1 from "../../src/assets/viewProfile1.png";
import Button2 from "../components/Button2";

function ViewProfile() {
  return (
    <>
      <Navbar2 />

      <div className="container mx-auto mt-10 px-4 justify-center text-center">
        <h1 className="font-poppins text-3xl font-bold mb-8 text-center">My Profile</h1>
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <img
              src={profileImage}
              className="w-40 h-40 md:w-64 md:h-64 rounded-full mx-auto mb-4"
              alt="Profile"
            />
            <div>
              <p className="font-bold">Shoaib Hassan</p>
              <p className="text-gray-500">201400124@gift.eu.pk</p>
              <p className="text-gray-500">Date of Birth: 22-06-2000</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button2
              title="Update Profile"
              href="/dashboard/viewProfile/updateProfile"
              icon="input"
              icon_style="h-5 w-5 mr-2"
            />
            <Button2
              title="Change Password"
              href="/dashboard/viewProfile/changePassword"
              icon="password"
              icon_style=" h-5 w-5 mr-2"
            />
          </div>
        </div>
        <div className="md:hidden text-center mb-4">
          <img
            src={viewProfile1}
            className="w-40 h-32 rounded-lg mx-auto"
            alt="Profile Background"
          />
        </div>
        <img
          src={viewProfile1}
          className="hidden md:block absolute bottom-0 left-0 w-80 h-64"
          alt="Profile Background"
        />
      </div>
    </>
  );
}

export default ViewProfile;
