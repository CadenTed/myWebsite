import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";

function Header() {
  return (
    <nav className="background navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} height="50" alt="" className="me-1" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="#about-me">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='#contact'>
                Contact Me
              </a>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
