import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import background from "../../Assets/backgroundHero.webp";
import background2 from "../../Assets/Website Images/Wellness Testing Bg.webp";
import background3 from "../../Assets/Website Images/Toxicology Testing bg.webp";
import background4 from "../../Assets/Website Images/UTI Testing bg.webp";
import background5 from "../../Assets/Website Images/One Place for All Your Testing Needs bg.webp";
import heroRightImg from "../../Assets/heroRightImg.webp";
import heroRightImg2 from "../../Assets/Website Images/Wellness Testing.webp";
import heroRightImg3 from "../../Assets/Website Images/Toxicology Testing.webp";
import heroRightImg4 from "../../Assets/Website Images/UTI Testing.webp";
import heroRightImg5 from "../../Assets/Website Images/One Place for All Your Testing Needs 1.webp";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      title: "One Place for All Your Testing Needs",
      subTitle: "Comprehensive Testing for Your Health & Wellness",
      desc: "We provide quick, accurate, and affordable lab testing solutions. ",
      points: [
        "COVID/RSV/FLU A&B Testing",
        "Wellness Testing",
        "Toxicology Testing",
        "UTI Testing",
      ],
      background: background5,
      heroRightImg: heroRightImg5,
    },
    {
      title: "COVID/RSV/FLU A&B Testing",
      subTitle: "Fast & Reliable Testing",
      desc: "Stay protected with same-day testing & quick results. Book now for peace of mind.",
      points: [
        "Same-Day/24 Hour Results Available",
        "Convenient On-site or Mobile Testing",
        "Walk-ins & Appointments Welcome",
      ],
      background: background,
      heroRightImg: heroRightImg,
    },
    {
      title: "Wellness Testing",
      subTitle: "Comprehensive Wellness Testing for a Healthier You",
      desc: "Get insights into your health with affordable and accurate lab tests.",
      points: [
        "100+ Tests for Overall Health",
        "Affordable Pricing – No Hidden Costs ",
        "Fast & Accurate Lab Results",
      ],
      background: background2,
      heroRightImg: heroRightImg2,
    },
    {
      title: "Toxicology Testing",
      subTitle: "Fast & Reliable Toxicology Testing",
      desc: "Stay protected with same-day testing & quick results. Book now for peace of mind.",
      points: [
        "Comprehensive Drug & Alcohol Testing",
        "24 to 48 Hour Turnaround Time",
        "Confidential & Fast Results",
      ],
      background: background3,
      heroRightImg: heroRightImg3,
    },
    {
      title: "UTI Testing",
      subTitle: "Fast & Easy UTI Testing",
      desc: "Don’t wait—get quick & accurate UTI test results for better health.",
      points: [
        "Quick Detection for UTI Symptoms",
        "Lab-Tested for Accurate Results",
        "Discreet & Private Testing",
      ],
      background: background4,
      heroRightImg: heroRightImg4,
    },
  ];

  const cardData = {
    id: 1,
    category: "Northern California: Fremont Lab",
    title: "Fremont Laboratory",
    shortDescription: [
      "COVID-19, RSV & FLU A/B",
      "Wellness Testing ",
      "Toxicology Testing",
      "UTI Testing (coming soon)",
    ],
    longDescription:
      "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week for patients experiencing Covid-19 symptoms: high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours.",
    timing: "8:30 AM - 5:00 PM",
    location: "5500 Stewart Avenue, Suite 108, Fremont, CA 94538",
    Contact: "1-800-790-4550",
    imageUrl: "https://i.ibb.co/Jswx1fx/afljsdg.png",
  };

  const navigate = useNavigate();
  // console.log(cardData);

  // Utility function to format the category name
  const formatCategoryName = (categoryName) => {
    return categoryName
      .replace(/[&%@!#^*+\|"'<>?]/g, "-") // Replaces special characters with hyphens
      .replace(/\s+|\.|,|:/g, "-") // Replaces spaces, dots, commas, and colons with hyphens
      .replace(/-+/g, "-") // Removes consecutive hyphens
      .replace(/-+$/, "") // Removes trailing hyphens
      .toLowerCase();
  };
  // Format the category name
  const formattedCategory = formatCategoryName(cardData.category);

  const handleClick = () => {
    // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
    //  this is for our own booking system that i have created
    console.log(cardData, "Card Data");
    if (cardData?.title === "Fremont Laboratory") {
      navigate(`/covid-test-locations/${formattedCategory}`, {
        state: { cardData },
      });
    }
  };
  return (
    <Swiper
  spaceBetween={50}
  slidesPerView={1}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="min-h-screen"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className="relative bg-gray-50 pt-20 min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 mt-8 md:mt-16">
          <img
            src={slide.background}
            alt="Healthcare setup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-8 flex-1">
          <div className="text-center text-black mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {slide.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white relative">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h2 className="my-2 text-left text-[#6291ff] text-lg md:text-2xl">
                  {slide.subTitle}
                </h2>
                <h3 className="my-2 text-left text-black text-base md:text-xl font-thin">
                  {slide.desc}
                </h3>
                <h3 className="mt-4 mb-2 text-left text-[#ff6b1e] text-lg md:text-2xl">
                  What We Offer:
                </h3>
                <ul className="space-y-2">
                  {slide.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-black font-thin text-base md:text-xl text-left flex items-center"
                    >
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        <TiTick size={16} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Call-to-Action Buttons */}
                <h3 className="mt-4 mb-4 text-center text-black font-bold text-lg md:text-2xl">
                  Book your Appointment
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleClick}
                    className="px-4 py-2 text-lg sm:text-xl md:text-2xl font-bold rounded-2xl bg-gradient-to-r from-[#f15a24] to-[#ff9450] text-white w-[90%] sm:w-auto"
                  >
                    Book Now
                  </button>
                  <div className="font-bold text-black text-lg md:text-xl">or</div>
                  <a
                    href="tel:+91-800-790-4550"
                    className="px-4 py-2 text-lg sm:text-xl md:text-2xl font-bold rounded-2xl bg-gradient-to-r from-[#f15a24] to-[#ff9450] text-white w-[90%] sm:w-auto no-underline"
                  >
                    800-790-4550
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <img
          src={slide.heroRightImg}
          alt="Healthcare setup"
          className="hidden md:block absolute bottom-0 right-0 w-[30%] max-w-[35rem] h-auto z-10 lg:z-20"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
  );
};

export default Hero;
