import React from "react";

// importing components
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import HaveProject from "./HaveProject";


const Header = () => {
  return (
    <header style={{ backgroundImage: `url(/assets/background.svg) ` }}>
      {/* Calling the NavBar component. */}
      <NavBar />
      <HeroSection />
      <HaveProject />
   
    </header>
  );
};

export default Header;
