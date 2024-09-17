import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link component
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { IoCall } from "react-icons/io5";
import logo1 from "../../Assets/Logo1.png";
import { cardData, images, testingSolutions } from "../../utility/cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";

const Example = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};


const FlyoutNav = () => {

  const location = useLocation();
  const data  = ({bg:"#00000"})
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  // const isHome = window.location.pathname === "/";
  const isHome = location.pathname === "/";

  // Handle scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setScrolled(latest > 20 ? true : false);

    if (latest > previous && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(latest);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ease-out lg:px-12 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || !isHome
          ? "bg-white py-2 shadow-xl" // Reduced padding
          : "bg-white py-2 shadow-none" // Reduced padding
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex items-center justify-between">
          <Links isHome={isHome} scrolled={scrolled} />
          <CTAs isHome={isHome} scrolled={scrolled} />
          {/* <a href="tel:+1-800-790-4550" className="mr-3 self-center text-black">
            <FontAwesomeIcon icon={faPhone} size="xl" />
          </a> */}
        </div>
        <MobileMenu isHome={isHome} scrolled={scrolled} />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }) => {
  return (
    <Link to="/" className="flex items-start md:mr-5 xl:mr-0 2xl:ml-[-70px] space-x-3 rtl:space-x-reverse">
      <img
        src={logo1}
        className="max-w-[250px] max-h-[75px]" // Adjusted the size
        alt="Flowbite Logo"
      />
    </Link>
  );
};

const Links = ({ isHome, scrolled }) => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink
          key={l.text}
          to={l.href}
          FlyoutContent={l.component}
          isHome={isHome}
          scrolled={scrolled}
        >
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, to, FlyoutContent, isHome, scrolled }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  const handleClick = () => {
    setOpen(false); // Close the dropdown on link click
  };
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link
        to={to}
        onClick={handleClick}
        className={`relative font-semibold no-underline text-xl ${
          isHome ? (scrolled ? "text-black" : "text-black") : "text-black"
        }`}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = ({ isHome, scrolled }) => {
  const navigate = useNavigate()
  const data =()=>{
    // navigate()https://patient-us.creliohealth.com/patient/login
    window.location.href ="https://patient-us.creliohealth.com/patient/login"
  } 
  return (
    <div className="flex items-center gap-3">
      <button
        className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2 font-semibold transition-colors ${
          isHome
            ? scrolled
              ? "bg-yellow-600 text-white"
              : "text-white border-white bg-yellow-600 hover:text-white"
            : "bg-yellow-600 text-white"
        }`}
        onClick={()=>data()}
      >
        <FaUserCircle />
        <span>Check Your Test Result</span>
      </button>
      {/* <button className="rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-orange-600 hover:bg-orange-600 hover:text-white"> */}
      <a
      href="tel:+1-800-790-4550"
      className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 font-semibold transition-colors no-underline ${
        isHome
          ? scrolled
            ? "bg-orange-600 text-white"
            : "text-white border-white bg-orange-600 hover:text-white"
          : "bg-orange-600 text-white"
      }`}
    >
      <FontAwesomeIcon icon={faPhone} size="lg" />
      <span>+1-800-790-4550</span>
    </a>
      {/* <button className="rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-orange-600 hover:bg-orange-600 hover:text-white">
      <FaUserCircle /> +1-800-790-4550
      </button> */}
    </div>
  );
};

const AboutUsContent = ({ handleClick }) => {
  const navigate = useNavigate(); // Initialize useNavigate
// const sample = {{...cardData , imageUrl: images[index % images.length] }}
  if (!cardData || !images || cardData.length === 0 || images.length === 0) {
    return null; // Return null to render nothing if the arrays are not available
  }

  const formatCategoryName = (categoryName) => {
    return categoryName
      .replace(/[&%@!#^*+\|"'<>?]/g, '-') // Replaces special characters with hyphens
      .replace(/\s+|\.|,|:/g, '-') // Replaces spaces, dots, commas, and colons with hyphens
      .replace(/-+/g, '-') // Removes consecutive hyphens
      .replace(/-+$/, '') // Removes trailing hyphens
      .toLowerCase();
  };
  
  const handleBookNowClick = (cardData) => {
    console.log(cardData,'sdvkjvnsvnsdjvsdnjvcnsjsdnv');
    
    const formattedCategory = formatCategoryName(cardData.category);
    navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData: cardData } });

    // THE BOOKING SYSTEM TTHAT I HAVE CREATED 

  //   if(cardData?.title=="PCR COVID-19, RSV, and Influenza A/B Test Kit"){
  //     navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
  //  }else{

  //    // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
  //    navigate(`/covid-test-locations/${formattedCategory}`, { state: { cardData } });
  //    // navigate(`/bookingcompletion`, { state: { cardData } });
  //    console.log("Navigating with card data:", cardData);
  //  }
    // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData: card } });
    // console.log("Navigating with card data:", card);
    handleClick();
  };
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[950px] xl:grid-cols-12">
    <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-4 lg:col-span-4 xl:col-span-4">
      <div>
        <h2 className="mb-2 text-lg font-semibold text-white">
           Testing Locations
        </h2>
        <p className="mb-4 max-w-xs text-xs text-neutral-400">
        Choose the Location or Service That is Most Convenient for You!
        </p>
        <p className="mb-4 max-w-xs text-lg text-neutral-400">
        5500 Stewart Avenue, Suite 108,
        Fremont, CA 94538
        </p>
      </div>
      <Link
        to="/covid-test-locations"
        className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
      >
        Learn more <FiArrowRight />
      </Link>
    </div>
    <div className="col-span-12 grid grid-cols-1 gap-3 bg-white p-3 lg:col-span-8 xl:col-span-8 xl:grid-cols-3">
      {cardData.slice(0, 6).map((card, index) => (
        <div
          key={card.id}
          className="rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
        >
          <img
            src={images[index % images.length]}
            alt={card.title}
            className="h-24 w-full object-cover" // Adjusted image height for larger size
          />
          <div className="p-3 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-sm my-1">{card.category}</h2>
              <p className="text-xs text-gray-800 mt-1">
                <strong>Hours:</strong> {card.timing}
              </p>
              <p className="text-xs text-gray-800">
                <strong>Location:</strong> {card.location}
              </p>
            </div>
            <button
              onClick={() => handleBookNowClick({ ...card, imageUrl: images[index % images.length] })}
              className="mt-3 px-3 py-2 text-center text-white bg-green-600 hover:bg-green-500 rounded-lg text-xs font-semibold w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

const PricingContent = () => {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">About Us</h3>
          <Link
            to="/careers"
            className="block text-sm text-black no-underline hover:underline"
          >
            Careers
          </Link>
          <Link
            to="/about"
            className="block text-sm text-black no-underline hover:underline"
          >
            About Company
          </Link>
        </div>
        {/* <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <Link
            to="#"
            className="block text-sm text-black no-underline hover:underline"
          >
            Startups
          </Link>
          <Link
            to="#"
            className="block text-sm text-black no-underline hover:underline"
          >
            SMBs
          </Link>
          <Link
            to="#"
            className="block text-sm text-black no-underline hover:underline"
          >
            Enterprise
          </Link>
        </div> */}
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};


const CareersContent = ({ handleClick }) => {
  return (
    <div className="grid w-full grid-cols-12 overflow-hidden rounded-lg shadow-xl lg:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-gradient-to-b from-indigo-700 to-indigo-500 p-6 lg:col-span-4">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-white">Solutions</h2>
          <p className="text-sm text-indigo-100">
           Solution that we provide to keep you healthy and going.
          </p>
        </div>
        <Link
          to="#" 
          className="flex items-center gap-1 text-sm font-medium text-indigo-200 hover:text-white hover:underline"
        >
          Solutions <FiArrowRight />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-6 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
        {testingSolutions
          .filter((solution) => solution.tests.length > 0) // Exclude categories with no tests
          .map((solution, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 border-b-2 border-gray-100 pb-4 transition-all duration-200 ease-in-out hover:bg-gray-50"
            >
              <Link
                to={solution.route} // Navigate to category route
                onClick={handleClick}
                className="font-semibold text-lg  text-gray-800  no-underline leading-tight hover:text-blue-800 hover:underline"
              >
                {solution.category}
              </Link>
              {solution.tests.map((test, idx) => (
                <Link
                  key={idx}
                  onClick={handleClick}
                  to={test.route} // Navigate to test route
                  className="block text-sm text-blue-600 no-underline  hover:text-blue-800 hover:underline"
                >
                  {test.name}
                </Link>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-2 text-start text-base font-medium"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            to={href}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          to={href}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-2 text-start text-base font-medium"
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "8px" : "0px",
            marginTop: open ? "4px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = ({ isHome, scrolled }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className={`block text-xl ${
          isHome ? (scrolled ? "text-neutral-950" : "text-white") : "text-neutral-950"
        }`}
        style={{ padding: '4px 8px' }} // Reduced padding
      >
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-3">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-3">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-3">
              <CTAs isHome={isHome} scrolled={false} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example;


const LINKS = [
  {
    text2: "COVID-19 ",
    text: "Testing Locations",
    href: "/covid-test-locations",
    component: AboutUsContent,
  },
  {
    text: "Solutions",
    href: "#",
    component: CareersContent,
  },
  {
    text: "Company",
    href: "/about",
    // component: PricingContent,
  },
  {
    text: "Blog",
    href: "/blog",
  },
];
