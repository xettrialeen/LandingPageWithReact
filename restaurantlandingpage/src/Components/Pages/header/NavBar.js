import React from "react";

import Header from "./Header";
import Client from "../client/Client";
import App from "../../../App";

import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo">Logo Here</div>
        <div className="navbar-menu">
          <ul>
            <li>
          
              <Link smooth to="#home" > Home</Link>
            </li>
            <li>
              <Link smooth to="#about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link smooth to="#services">Services</Link>{" "}
            </li>
            <li>
              <Link smooth to="#portfolio">Portfolio</Link>{" "}
            </li>
            <li> 
              <Link smooth to="#contact">Contact Us</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
