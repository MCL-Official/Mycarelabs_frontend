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
  // const location = useLocation();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(null);
  const [clickedButton, setClickedButton] = useState(null); // Separate state for buttons

  const openNav = () => {
    setNav(!nav);
  };

  const handleClick = (id) => {
    setClicked(id);
  };

  const handleButtonClick = (buttonId, path) => {
    setClickedButton(buttonId);
    setClicked(buttonId);
    navigate(path); // Navigate to the specified path
  };
  const linkStyle = {
    color: '#000000',
    fontWeight: 'normal',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'color 0.3s, background-color 0.3s, transform 0.3s',
    marginRight: '15px',
  };

  const linkStyle1 = {
    color: '#000000',
    fontWeight: 'normal',
    textDecoration: 'none',
    padding: '5px 1px',
    borderRadius: '2px',
    marginBottom: '7px',
    transition: 'color 0.3s, background-color 0.3s, transform 0.3s',
    marginRight: '10px',
  };

  const activeLinkStyle = {
    color: '#ffffff',
    backgroundColor: '#007bff',
    fontWeight: 'bold',
    transform: 'scale(1.1)',
  };

  const hoverStyle = {
    transform: 'translateY(-5px)',
  };

  const handleLinkClick = (hash) => {
    setClicked(hash);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
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
                className="nav-link"
                aria-current="page"
                to="#har"
                style={{
                  ...linkStyle,
                  ...(location.hash === '#har' ? activeLinkStyle : {}),
                  ...(clicked === '#har' ? activeLinkStyle : {}),
                  ...(clicked !== '#har' && { ':hover': hoverStyle })
                }}
                onClick={() => handleLinkClick('#har')}
              >
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#team"
                style={{
                  ...linkStyle,
                  ...(location.hash === '#team' ? activeLinkStyle : {}),
                  ...(clicked === '#team' ? activeLinkStyle : {}),
                  ...(clicked !== '#team' && { ':hover': hoverStyle })
                }}
                onClick={() => handleLinkClick('#team')}
              >
                COVID-19 Testing Locations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#projects"
                style={{
                  ...linkStyle,
                  ...(location.hash === '#projects' ? activeLinkStyle : {}),
                  ...(clicked === '#projects' ? activeLinkStyle : {}),
                  ...(clicked !== '#projects' && { ':hover': hoverStyle })
                }}
                onClick={() => handleLinkClick('#projects')}
              >
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#calendar"
                style={{
                  ...linkStyle,
                  ...(location.hash === '#calendar' ? activeLinkStyle : {}),
                  ...(clicked === '#calendar' ? activeLinkStyle : {}),
                  ...(clicked !== '#calendar' && { ':hover': hoverStyle })
                }}
                onClick={() => handleLinkClick('#calendar')}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#support"
                style={{
                  ...linkStyle,
                  ...(location.hash === '#support' ? activeLinkStyle : {}),
                  ...(clicked === '#support' ? activeLinkStyle : {}),
                  ...(clicked !== '#support' && { ':hover': hoverStyle })
                }}
                onClick={() => handleLinkClick('#support')}
              >
                Support
              </Link>
            </li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: nav ? '-30px' : '0px', marginBottom: nav ? '2px' : '0' }}>
            <button
              className="nav-link navbar-button"
              // onClick={() => handleClick('bookButton')}
              onClick={() => handleButtonClick('bookButton', '#teamq1')}
              style={{
                ...linkStyle1,
                backgroundColor: clicked === 'bookButton' ? 'green' : 'white',
                borderRadius: '20px',
                color:  clicked === 'bookButton' ?'#ffffff':"black",
                fontWeight: clicked === 'bookButton' ?'bold':"normal",
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
              // onClick={() => handleClick('resultsButton')}
              onClick={() => handleButtonClick('resultsButton', '#team1')}
              style={{
                ...linkStyle1,
                // backgroundColor: clicked === 'resultsButton' ? 'orange' : '#007bff',
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
