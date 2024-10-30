// src/Hero.js
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex items-center justify-center bg-indigo-700">
        <main>
          <div className="text-xl  text-cyan-50 text-center">
            <h1>
              <span className="text-5xl">Welcome to Our</span> <br />
              <span className="text-4xl">Amazing Landing Page</span>
            </h1>
            <p>
              Discover the power of Tailwind CSS with this beautifully crafted
              landing page. Responsive, modern, and easy to customize.
            </p>
            <div>
              <div>
                <a href="#">Get started</a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex-1">
        <img
          src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Banner"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
