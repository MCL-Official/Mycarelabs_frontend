import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from "../Assets/Logo1.png";
import '../Styles/Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const openNav = () => {
    setNav(!nav);
  };

  const handleClick = (id) => {
    setClicked(id);
  };

  const handleButtonClick = (buttonId, path) => {
    setClickedButton(buttonId);
    setClicked(buttonId);
    navigate(path);
  };

  const linkStyle = {
    color: '#000000',
    fontWeight: 'normal',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'color 0.3s, transform 0.3s',
    marginRight: '15px',
    position: 'relative',
  };

  const activeLinkStyle = {
    color: '#007bff',
    fontWeight: 'bold',
    transform: 'scale(1.1)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo1} alt="Icon" style={{ height: '55px', width: '200px', marginRight: '10px' }} />
          <FontAwesomeIcon icon={faBars} onClick={openNav} className="hamb-icon me-2" />
        </Link>
        <button className="navbar-toggler bg-black" type="button" onClick={openNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-5 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link${location.hash === '#har' ? ' active' : ''}`}
                aria-current="page"
                to="#har"
                style={location.hash === '#har' || clicked === '#har' ? activeLinkStyle : {}}
                onClick={() => handleClick('#har')}
              >
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.hash === '#team' ? ' active' : ''}`}
                to="#team"
                style={location.hash === '#team' || clicked === '#team' ? activeLinkStyle : {}}
                onClick={() => handleClick('#team')}
              >
                COVID-19 Testing Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.hash === '#projects' ? ' active' : ''}`}
                to="#projects"
                style={location.hash === '#projects' || clicked === '#projects' ? activeLinkStyle : {}}
                onClick={() => handleClick('#projects')}
              >
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.hash === '#calendar' ? ' active' : ''}`}
                to="#calendar"
                style={location.hash === '#calendar' || clicked === '#calendar' ? activeLinkStyle : {}}
                onClick={() => handleClick('#calendar')}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.hash === '#support' ? ' active' : ''}`}
                to="#support"
                style={location.hash === '#support' || clicked === '#support' ? activeLinkStyle : {}}
                onClick={() => handleClick('#support')}
              >
                Support
              </Link>
            </li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: nav ? '-30px' : '0px', marginBottom: nav ? '2px' : '0' }}>
            <button
              className="nav-link navbar-button"
              onClick={() => handleButtonClick('bookButton', '#teamq1')}
              style={{
                ...linkStyle,
                backgroundColor: clicked === 'bookButton' ? 'green' : 'white',
                borderRadius: '20px',
                color: clicked === 'bookButton' ? '#ffffff' : "black",
                fontWeight: clicked === 'bookButton' ? 'bold' : "normal",
                padding: '8px 20px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '160px',
                marginLeft: '5px'
              }}
            >
              Book My Test
            </button>
            <button
              className="nav-link navbar-button"
              onClick={() => handleButtonClick('resultsButton', '#team1')}
              style={{
                ...linkStyle,
                backgroundColor: clicked === 'resultsButton' ? '#DA5E34' : 'white',
                color: clicked === 'resultsButton' ? 'white' : '#000000',
                fontWeight: clicked === 'resultsButton' ? 'bold' : 'normal',
                borderRadius: '20px',
                padding: '8px 20px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '160px',
                marginLeft: '5px'
              }}
            >
              View Test Results
            </button>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <FontAwesomeIcon icon={faPhone} className="text-black me-3 align-self-center" size={130} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
