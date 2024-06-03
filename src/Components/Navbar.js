import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo1 from "../Assets/Logo1.png";
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [homeDropdown, setHomeDropdown] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleHomeDropdown = () => {
    setHomeDropdown(!homeDropdown);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const linkStyle = {
    color: "#000000",
    fontWeight: "normal",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "color 0.3s, transform 0.3s",
    marginRight: "15px",
    position: "relative",
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="md:flex items-center p-0">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-0">
          <a
            href="https://flowbite.com"
            className="flex items-center  md:mr-5 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo1} className="h-20" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="mega-menu-full-image"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full-image"
            aria-expanded="false"
            onClick={openNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:flex items-center justify-between w-full  ${
            nav ? "block" : "hidden"
          } `}
        >
          <ul className="flex flex-col mt-2 font-medium md:flex-row items-center pl-0  md:mt-0 ">
            <li className="relative">
              <button
                onClick={toggleHomeDropdown}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
              >
                <span className="font-medium text-sm">COVID-19 Testing Locations</span>
                <motion.span animate={homeDropdown ? "open" : "closed"} variants={iconVariants}>
                  <FiChevronDown />
                </motion.span>
              </button>
              <motion.ul
                initial="closed"
                animate={homeDropdown ? "open" : "closed"}
                variants={wrapperVariants}
                style={{ originY: "top", translateX: "-50%" }}
                className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
              >
                <Option setOpen={setHomeDropdown} Icon={FiEdit} text="Edit" />
                <Option setOpen={setHomeDropdown} Icon={FiPlusSquare} text="Duplicate" />
                <Option setOpen={setHomeDropdown} Icon={FiShare} text="Share" />
                <Option setOpen={setHomeDropdown} Icon={FiTrash} text="Remove" />
              </motion.ul>
            </li>

            <li>
              <button
                id="mega-menu-full-cta-image-button"
                data-collapse-toggle="mega-menu-full-image-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={toggleDropdown}
              >
                Solutions
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Support
              </a>
            </li>
          </ul>
          <div className="flex flex-col mt-2 md:flex-row md:mt-0 ">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: nav ? "5px" : "0",
              }}
            >
              <button
                className="nav-link navbar-button"
                onClick={() => handleButtonClick("bookButton", "#teamq1")}
                style={{
                  ...linkStyle,
                  backgroundColor: clicked === "bookButton" ? "green" : "white",
                  borderRadius: "20px",
                  color: clicked === "bookButton" ? "#ffffff" : "black",
                  fontWeight: clicked === "bookButton" ? "bold" : "normal",
                  padding: "8px 20px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "160px",
                  marginLeft: "5px",
                }}
              >
                Book My Test
              </button>
              <button
                className="nav-link navbar-button"
                onClick={() => handleButtonClick("resultsButton", "#team1")}
                style={{
                  ...linkStyle,
                  backgroundColor:
                    clicked === "resultsButton" ? "#DA5E34" : "white",
                  color: clicked === "resultsButton" ? "white" : "#000000",
                  fontWeight: clicked === "resultsButton" ? "bold" : "normal",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "160px",
                  marginLeft: "5px",
                }}
              >
                View Test Results
              </button>
            </div>
            <form class="flex px-2">
              <input
                class="form-control mr-2 p-2 border border-gray-300 rounded"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a href="tel:+1234567890" class="text-black mr-3 self-center">
                <FontAwesomeIcon icon={faPhone} size="xl" />
              </a>
            </form>
          </div>
        </div>
      </div>
      {dropdownOpen && (
        <div
          id="mega-menu-full-image-dropdown"
          className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-sm px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul
              className="hidden mb-4 space-y-4 md:mb-0 md:block"
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Online Stores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Segmentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Marketing CRM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Online Stores
                </a>
              </li>
            </ul>
            <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Resources
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
              style={{
                backgroundImage: "url(/docs/images/dashboard-overview.png)",
              }}
            >
              <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">
                Preview the new Flowbite dashboard navigation.
              </p>
              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
              >
                Get started
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default Navbar;
