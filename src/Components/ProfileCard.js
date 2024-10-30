// src/ProfileCard.js
import React from "react";
import myImage from "./FinalJayarajImage.jpg";

const ProfileCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
      {/* Big Banner */}
      <div className="h-48 bg-blue-300 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Welcome to My Profile</h2>
      </div>
      {/* Circular Image */}
      <div className="flex justify-center -mt-16">
        <img
          src={myImage}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-white"
        />
      </div>
      {/* Centered Text */}
      <div className="text-center p-4">
        <h2 className="text-xl font-semibold">Jayaraj</h2>
        <p className="text-gray-600">Web Developer</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
