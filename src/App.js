import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ToggleMenu from "./Components/ToggleMenu";
import Hero from "./Components/Hero";
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <ToggleMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Hero />
      <ProfileCard />
    </div>
  );
};

export default App;
