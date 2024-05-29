import React, { useState } from 'react';
import "./OurTeam.css"
import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
// import alex from "../../images/alex.png";
// import fred from "../../images/fred.png";
// import mariana from "../../images/mariana.png";
// import daren from "../../images/daren.png";
// import Martaimg from "../../images/Marta.png";
// import companyone from "../../images/Company109.png";
// import companytwo from "../../images/Company110.png";
// import companythree from "../../images/Company112.png";
// import companyfour from "../../images/Company113.png";
// import companyfive from "../../images/Company114.png";

const OurTeam = () => {
    const settings = {
        className: "center",
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500
    };

    const testimonials = [
        {
            // img: Martaimg,
            quote:
                "The ability to have all of my financial needs met in one place has been incredibly convenient, and the online platform is easy to use and navigate. The insurance policies they offer are comprehensive and affordable too.",
            author: "Muzi",
            post: "Founder of Preesoft"
        },
        {
            // img: Martaimg,
            quote:
                "I've been using this service for years and it has never let me down. The customer support is top-notch and the platform is always up-to-date with the latest features.",
            author: "John",
            post: "Founder of Upque"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const showSlide = (n) => {
        setCurrentSlide((prevSlide) => (n + testimonials.length) % testimonials.length);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    return (
        <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='main-div-container'>
                        <h5 className='text-white'>Team</h5>
                        <p className='text-white'>We put our heart in every work we done for Covermatch</p>

                        <div>
                            <Slider {...settings}>
                                {/* <img className='sliderimages m-4' src={daren} alt="Daren" />
                                <img className='sliderimages m-4' src={fred} alt="Fred" />
                                <img className='sliderimages m-4' src={mariana} alt="Mariana" />
                                <img className='sliderimages m-4' src={daren} alt="Alex" />
                                <img className='sliderimages m-4' src={daren} alt="Daren" />
                                <img className='sliderimages m-4' src={fred} alt="Fred" /> */}
                            </Slider>
                        </div>

                        <div className='pt-5 mt-4'>
                            <h1 className='text-white'>Our Awesome Users</h1>

                            <div className='row mt-5'>
                                <div className='col-md-2'>
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className={index === currentSlide ? "slide active" : "slide"}
                                        >
                                            <div className="testimonial">
                                                {/* <img width={100} src={testimonial.img} alt="User" /> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='col-md-7'>
                                    <div className="slider">
                                        {testimonials.map((testimonial, index) => (
                                            <div
                                                key={index}
                                                className={index === currentSlide ? "slide active" : "slide"}
                                            >
                                                <div className="testimonial">
                                                    <p className='text-white' style={{ fontSize: "20px", fontWeight: "100" }}>"{testimonial.quote}"</p>
                                                    <h5 className='text-white pt-4' >{testimonial.author}</h5>
                                                    <p className='text-white pt-2' style={{ fontSize: "12px" }}>{testimonial.post}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className='pt-2'>
                                            <BsArrowLeftCircle onClick={prevSlide} className='prev' />
                                            <BsArrowRightCircle onClick={nextSlide} className='next' />
                                        </div>
                                    </div>
                                </div>


                           



                            </div>
                        </div>
                    </div>
                </div>

                <div className='row pt-5 mt-5' style={{placeContent:"center" , justifyContent:"space-between"}}>
                                    {/* <div className='col-md-2 text-center'><img width={150} src={companyone} /></div>
                                    <div className='col-md-2 text-center'> <img width={150} src={companytwo} /></div>
                                    <div className='col-md-2 text-center'>  <img width={150} src={companythree} /></div>
                                    <div className='col-md-2 text-center'><img width={150} src={companyfour} /></div>
                                    <div className='col-md-2 text-center'> <img width={150} src={companyfive} /></div> */}
                                </div>
            </div>
        </div>
    );
};

export default OurTeam;