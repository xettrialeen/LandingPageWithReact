import React from "react";

import { HashLink } from "react-router-hash-link";

import Header from "./Header";
import Client from "../client/Client";
import App from "../../../App";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-logo">Logo Here</div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
            <li>
      About Us
            </li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
