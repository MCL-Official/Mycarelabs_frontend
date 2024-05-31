import React, { useState, useRef, useEffect } from 'react';
import "./CarInsurance.css";
// import Navbar1 from '../../component/Navbar/Navbar';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import flash from "../../Assets/flash.png"
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
// import svg1 from "../../images/svg1.png"
// import svg2 from "../../images/svg2.png"
// import svg3 from "../../images/svg3.png"
// import svg4 from "../../images/svg4.png"
// import svg5 from "../../images/svg5.png"
// import svg6 from "../../images/svg6.png"
// import QuickFacts from '../../component/QuickFacts/QuickFacts';
// import ChooseCoverMatch from '../../component/ChooseCoverMatch/ChooseCoverMatch';
// import Sliders from '../../component/Slider/Slider';
// import VideoPlayer from '../../component/videoplayer/VideoPlayer';
// import CoverMatchPartner from '../../component/CoverMatchPartner/CoverMatchPartner';
// import Faq from '../../component/Fqa/Faq';
// import GetStartedCard from '../../component/GetStartedCard/GetStartedCard';
// import Footer from '../../component/Footer/Footer';
import { CSSTransition } from 'react-transition-group';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Slider from "react-slick";
// import Select from "react-select";
import HomePng from "../../Assets/HomeInsurance.png";
// import { useFormik } from 'formik'
// import { ValidationSchema } from '../../component/Yupvalidation/Yub';
// import * as Yup from "yup";
// import { TextField } from '@mui/material';
// import dayjs from 'dayjs';
// import { getDataNationality } from '../../Services/apiservices';
// import { useDispatch, useSelector } from 'react-redux';

// const PropertyType = ({ handleDotClick }) => (
//   <div>
//     PropertyType Component
//     <button onClick={() => handleDotClick(1)}>Next</button>
//   </div>
// );


const PropertyType = (props) => {
  return (
    <div className="accordion-body bg-first-body mb-4">

      <h4 className="detail-head">Are you testing for your self</h4>
      {/* <p>it will not take too long</p> */}

      <div className="floating-select-container">
        <div className="floating-select-label">
          {/* <b>{questionobj.property_type}</b> */}
        </div>
        {/* <Select className="select-border"
          options={propertyTypeOpt} // set list of the data
          value={propertyTypeVal}
          onChange={(e) => {
            handleChange(e, props, 'property_type');
          }}
          styles={colourStyles}
          placeholder={"Search your Property Type"}
        /> */}

      </div>
      {/* {
        propertyTypeOpt.length ?
          <div className='mb-3'>
            {propertyTypeOpt.map((option, index) => (
              <span onClick={() => handleChange(option, props, 'property_type')} key={index} className={`option-segment ${propertyTypeVal?.id === option.id && "selected-option"}`}>
                {option.label}
              </span>
            ))}
          </div> : null
      } */}
    </div>
  )
}
const HomeContentsOnly = ({ handleDotClick }) => (
  <div>
    HomeContentsOnly Component
    <button onClick={() => handleDotClick(2)}>Next</button>
  </div>
);

const NeedCoveredTab = ({ handleDotClick }) => (
  <div>
    NeedCoveredTab Component
    <button onClick={() => handleDotClick(0)}>Next</button>
  </div>
);

const LISTOFLINKS = [
  { id: 0, title: 'Property Type', component: <PropertyType /> },
  { id: 1, title: 'Home Contents Only', component: <HomeContentsOnly /> },
  { id: 2, title: 'What need to be covered', component: <NeedCoveredTab /> },
];

const TestMenu = () => {
  const [stepLable, setStepLablel] = useState([]);
  const [currentComponent, setcurrentComponent] = useState(0);

  const nodeRef = useRef(null);
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };

  const handleDotClick = (index, isback = false) => {
    if (isback) {
      setStepLablel([...stepLable]);
    }
    setcurrentComponent(index);
  };

  return (
    <div className='container'>
      <div className='container mt-5'>
        <div className='row' style={{ placeContent: "center" }}>
          <div className='col-md-5 p-5'>
            <h1>Test We Provide</h1>
            <p>Take a look at our test menu designed for your medical, travel, work, or school related needs.</p>
            <div>
              <Slider className='image-slides'  {...settings} >
                <div className='img-setting'>
                  <img style={{ objectFit: 'contain' }} className='img-slid-one' src={HomePng} />
                </div>
                <div className='img-setting'>
                  <img style={{ objectFit: 'contain' }} className='img-slid-one' src={HomePng} />
                </div>
                <div className='img-setting'>
                  <img style={{ objectFit: 'contain' }} className='img-slid-one' src={HomePng} />
                </div>
              </Slider>
            </div>
          </div>
          <div className='col-md-6 p-5'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button accordion-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                    Get a Test
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <p></p>
                  {LISTOFLINKS.map((linkss, index) => {
                    const Component = linkss.component;
                    const props = { ...linkss.component.props, handleDotClick };

                    return (
                      <CSSTransition
                        key={linkss.id}
                        in={index === currentComponent}
                        nodeRef={nodeRef}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                      >
                        <div ref={nodeRef}>
                          {index === currentComponent ? React.cloneElement(Component, props) : null}
                        </div>
                      </CSSTransition>
                    );
                  })}
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button accordion-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    How it works?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body bg-color mb-4">
                    <div className='d-flex align-items-start'> <img className='pt-2 pe-3' src={flash} /><p className='paragrap-font'> The process takes minutes and you get instant quotes online.</p></div>
                    <div className='d-flex align-items-start'> <img className='pt-2 pe-3' src={flash} /><p className='paragrap-font'>Compare quotes online and find the policy that’s right for you.</p></div>
                    <div className='d-flex align-items-start'><img className='pt-2 pe-3' src={flash} /><p className='paragrap-font'> We guarantee to find you the cheapest car insurance by comparingthe largest car insurance panel in Dubai and the UAE.</p></div>
                    <div className='d-flex align-items-start'> <img className='pt-2 pe-3' src={flash} /><p className='paragrap-font'>If you need help our insurance advisors can offer assistance by phoneor email.</p></div>
                    <div className='d-flex align-items-start'> <img className='pt-2 pe-3' src={flash} /><p className='paragrap-font'>We are here to help! Even after you buy your car insurance, we helpyou with claims, make policy changes... <Link>View more</Link></p></div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button accordion-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Customer Support
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body mb-4">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6>Home Insurance Department</h6>
                        <p className='paragrap-color paragrap-font'>Call at 0444553232</p>
                      </div>
                      <div className='pt-2'>
                        <Link to={"/contactus"}>
                          <button className='btn btn-outline-primary'>
                            Contact us &nbsp;&nbsp;&nbsp;<AiOutlineArrowRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                    <p className='paragrap-font'>Proin vitae accumsan diam. Ut tristique molestie mollis. Proin sollicitudin, ex dictum scelerisque laoreet.</p>
                    <p className='paragrap-font'>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a facilisis lectus. Suspendisse potenti. Sed tincidunt quam nec eleifend molestie. Nunc gravida orci turpis, in feugiat purus dignissim ut.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestMenu;
