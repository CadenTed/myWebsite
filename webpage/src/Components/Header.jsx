import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";

function Header() {
  return (
    <nav className="background navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} height="50" alt="" className="me-1" />
        </Link>
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
            <li className="nav-item active">
              <Link className="nav-link text-light" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#">
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='#'>
                Contact Me
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
