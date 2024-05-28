import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css"; // Remove this line if not needed
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon me-2" /> */}
          <span className="logo-icon">🌊</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={openNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#calendar">Calendar</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <FontAwesomeIcon icon={faBell} className="text-white me-3 align-self-center" />
            <img src="https://via.placeholder.com/30" alt="Profile" className="rounded-circle" width="30" height="30" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
