import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo1 from "../../Assets/Logo1.png";
import { Helmet } from "react-helmet-async";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [textSize, setTextSize] = useState("text-lg");
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const [location1, setLocation] = useState();

  const LinkItem = ({ to, text }) => (
    <Link to={to} className="block no-underline text-black hover:text-blue-500">
      <p className="text-sm mb-1 hover:text-blue-500">{text}</p>
    </Link>
  );

  const Divider = () => (
    <div className="border-l-2 border-gray-200 my-auto h-16"></div>
  );
  useEffect(() => {
    if (location.pathname !== "/") {
      setBgColor("white");
      setTextColor("black");
      setTextSize("text-md");

      // setBgColor("transparent");
      // setTextColor("white");
      // setTextSize("text-lg");
    }
  }, [location])
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const threshold = 30;

    if (latest > previous && latest > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    console.log(location1, "harshsample");

    if (location.pathname === "/") {
      if (latest > 30) {
        setBgColor("white");
        setTextColor("black");
        setTextSize("text-md");
      } else {
        setBgColor("transparent");
        setTextColor("white");
        setTextSize("text-lg");
      }
    } else {
      setBgColor("white");
      setTextColor("black");
      setTextSize("text-md");
    }
  });

  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(null);
  const dropdownRef = useRef(null);

  const openNav = () => {
    setNav(!nav);
    if (!nav) {
      setBgColor("white");
      setTextColor("black")
    // } else if (location.pathname === "/") {
    //   // Restore previous background if on the home page
    //   setBgColor(scrollY.get() > 30 ? "white" : "transparent");
    }
  };

  const handleClick = (id) => {
    setClicked(id);
    setActiveLink(id);
  };

  const handleButtonClick = (buttonId, path) => {
    setClicked(buttonId);
    navigate(path);
  };

  const linkStyle = {
    fontWeight: "normal",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "color 0.3s, transform 0.3s",
    marginRight: "15px",
    position: "relative",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>My Care Labs</title>
        <meta name="description" content="Hello there" />
        <link rel="canonical" href="/" />
      </Helmet>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="border-gray-200 dark:border-gray-600 dark:bg-gray-900"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <div className="md:flex items-center px-2">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-0">
            <a href="/" className="flex items-center md:mr-5 space-x-3 rtl:space-x-reverse">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex items-center justify-between w-full ${nav ? "block" : "hidden"
              } `}
          >
            <ul className="flex flex-col mt-2 font-medium md:flex-row items-center gap-2 pl-0 md:mt-0">
              <li className="group relative hover:scale-110 duration-300">
                <a
                  href="#"
                  className={`flex no-underline items-center justify-between w-full px-2 ${textSize} ${textColor === "white" ? "text-white" : "text-black"}`}
                  onClick={() => handleButtonClick("bookButton", "/covid-test-locations")}
                >
                  COVID-19 Testing Locations
                </a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007bff] transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
              </li>

              <li className="group relative hover:scale-110 duration-300">
                <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <button className={`flex no-underline items-center justify-between w-full px-2 ${textSize} ${textColor === "white" ? "text-white" : "text-black"}`}>Solutions</button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-20%", translateY: "2%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 transform   mt-1 w-auto bg-blue-100 bg-opacity-95 text-black shadow-lg rounded-lg z-50 flex space-x-12 px-4 py-2 text-left"
                      >
                        <div className="space-y-4 text-left">
                          <Link to="/testing-solutions/infectious-disease-testing-solutions" className="block no-underline text-black hover:text-blue-500">
                            <h5 className="font-bold text-sm whitespace-nowrap hover:text-blue-500">Infectious Disease Testing Solutions</h5>
                          </Link>
                          <Link to="/travel-testing/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Travel PCR Testing</p>
                          </Link>
                          <Link to="/group-covid-testing/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Testing for Groups</p>
                          </Link>
                          <Link to="/testing-for-schools/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Testing for Schools</p>
                          </Link>
                          <Link to="/testing-for-nursing-homes/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Testing for Nursing Homes</p>
                          </Link>
                          <Link to="/covid-rt-pcr-home-test-kit/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">At-Home COVID-19 PCR Test Kit</p>
                          </Link>
                        </div>
                        <div className="border-l-2 border-gray-200 my-auto h-16"></div>
                        <div className="space-y-3 text-left">
                          <Link to="/testing-solutions/wellness-testing-solutions/" className="block no-underline text-black hover:text-blue-500">
                            <h5 className="font-bold text-sm whitespace-nowrap hover:text-blue-500">Wellness Testing Solutions</h5>
                          </Link>
                          <Link to="/testing-solutions/wellness-testing-solutions/anemia-profile-test/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Anemia Profile Test</p>
                          </Link>
                          <Link to="/testing-solutions/wellness-testing-solutions/basic-metabolic-panel/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Basic Metabolic Panel</p>
                          </Link>
                          <Link to="/testing-solutions/wellness-testing-solutions/liver-function-panel-tests/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Liver Function Panel Tests</p>
                          </Link>
                          <Link to="/testing-solutions/wellness-testing-solutions/renal-function-panel-test/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Renal Function Panel Test</p>
                          </Link>
                          <Link to="/testing-solutions/wellness-testing-solutions/thyroid-function-panel-test/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Thyroid Function Panel Test</p>
                          </Link>
                          <Link to="/testing-solutions/wellness-testing-solutions/comprehensive-metabolic-panel-cmp-test/" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Comprehensive Metabolic Panel (CMP) Test</p>
                          </Link>
                        </div>
                        <div className="border-l-2 border-gray-200 my-auto h-16"></div>
                        <div className="flex flex-col justify-between whitespace-nowrap text-left border-black" style={{ height: '100%' }}>
                          <Link to="/testing-solutions/toxicology-testing-solutions/" className="block no-underline text-black hover:text-blue-500 flex-1 flex items-end">
                            <h5 className="font-bold text-sm hover:text-blue-500">Toxicology Testing Solutions</h5>
                          </Link>
                          <div className="border-b border-gray-200 my-2 w-full"></div> {/* Add dividing line */}
                          <Link to="/testing-solutions/oncology-testing-solutions/" className="block no-underline text-black hover:text-blue-500 flex-1 flex items-start">
                            <h5 className="font-bold text-sm hover:text-blue-500">Oncology Testing Solutions</h5>
                          </Link>
                        </div>
                        <div className="border-l-2 border-gray-200 my-auto h-16"></div>
                        <div className="space-y-3 whitespace-nowrap text-left">
                          <Link className="block no-underline text-black hover:text-blue-500">
                            <h5 className="font-bold text-sm hover:text-blue-500">Other Tests</h5>
                          </Link>
                          <Link to="/creatine-kinase" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Creatine Kinase</p>
                          </Link>
                          <Link to="/crp-tests" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">CRP Tests</p>
                          </Link>
                          <Link to="/free-psa-testing" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Free Psa Testing</p>
                          </Link>
                          <Link to="/magnesium-test-in-blood" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Magnesium Test in Blood</p>
                          </Link>
                          <Link to="/anticonvulsant-test-services" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Anticonvulsant Test Services</p>
                          </Link>
                          <Link to="/vitamin-d-test-services" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Vitamin D Test Services</p>
                          </Link>
                          <Link to="/total-psa-test-services" className="block no-underline text-black hover:text-blue-500">
                            <p className="text-sm mb-1 hover:text-blue-500">Total PSA Test Services</p>
                          </Link>
                        </div>
                      </motion.ul>
                    )}

                  </AnimatePresence>
                </div>


              </li>

              <li className="group relative hover:scale-110 duration-300">
                <a
                  href="#"
                  className={`block no-underline px-2 ${textSize} ${textColor === "white" ? "text-white" : "text-black"} border-b border-gray-100 hover:text-blue-300 md:hover:bg-transparent md:border-0 md:p-0`}
                  onClick={() => handleButtonClick("Company", "/about")}
                >
                  Company
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="group relative hover:scale-110 duration-300">
                <Link
                  to="blog"
                  className={`block no-underline px-2 ${textSize} ${textColor === "white" ? "text-white" : "text-black"} border-b border-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0`}
                  onClick={() => handleClick("Blog")}
                >
                  Blog
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
              </li>
              {/* <li className="group relative hover:scale-110 duration-300">
                <a
                  href="#"
                  className={`block no-underline px-2 ${textSize} ${textColor === "white" ? "text-white" : "text-black"} border-b border-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0`}
                  onClick={() => handleClick("Support")}
                >
                  Support
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
              </li> */}
            </ul>
            <div className="flex flex-col md:flex-row md:mt-0">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: nav ? "5px" : "0",
                }}
              >
                <button
                  className="nav-link navbar-button group relative hover:scale-110 hover:bg-slate-500 duration-300"
                  onClick={() => handleButtonClick("bookButton", "/covid-test-locations")}
                  style={{
                    ...linkStyle,
                    backgroundColor:
                      clicked === "bookButton" ? "green" : "#1A8EFD",
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  className="nav-link navbar-button group relative hover:scale-110 hover:bg-red-200 duration-300"
                  onClick={() => handleButtonClick("resultsButton", "/results")}
                  style={{
                    ...linkStyle,
                    backgroundColor:
                      clicked === "resultsButton" ? "#DA5E34" : "#1A8EFD",
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#007bff] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
              <form
                className="flex px-2 text-black"
              >
                <input
                  className="form-control mr-2 p-2 border border-gray-300 bg-transparent rounded text-black"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <a
                  href="tel:+1234567890"
                  className="mr-3 self-center text-black"
                >
                  <FontAwesomeIcon icon={faPhone} size="xl" />
                </a>
              </form>

              <div className="w-32 text-black">
                <select
                  id="language"
                  name="language"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-transparent text-black"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  <option value="jp">Japanese</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}


export default Navbar;
