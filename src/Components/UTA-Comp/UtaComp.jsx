import background from "../../Assets/uti-background.png";
import circle from "../../Assets/uti-circle1.png";
import ladyImage from "../../Assets/uti-lady2.png";
import { useEffect, useState } from "react";

const UtaComp = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  useEffect(() => {
    // Adjust target date for the desired timezone (e.g., IST)
    const targetDate = new Date("2025-01-25T00:00:00Z"); // UTC date
    const timezoneOffset = targetDate.getTimezoneOffset() * 60000; // Offset in milliseconds
    const localTargetDate = new Date(targetDate.getTime() - timezoneOffset); // Adjust for local timezone

    const interval = setInterval(() => {
      const now = new Date();
      const difference = localTargetDate - now;

      if (difference <= 0) {
        clearInterval(interval); // Stop the timer when the target date is reached
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: formatNumber(days),
          hours: formatNumber(hours),
          minutes: formatNumber(minutes),
          seconds: formatNumber(seconds),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section
        className="sm:pt-24 pt-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="mx-4 px-4 sm:px-6 md:px-8 flex flex-col min-[1025px]:flex-row  items-center min-[1025px]:justify-between relative z-10 ">
          {/* Left Side Content */}
          <div className=" text-left md:text-left min-[1025px]:w-3/6 sm:pl-4 grow w-full  sm:mb-24">
            <div className="xl:text-[5rem] sm:text-6xl text-3xl text-gray-800 font-extrabold font-montserrat">
              <span className="text-orange-500">UTI</span> TESTING
            </div>
            <div className="xl:text-[5rem] sm:text-6xl text-3xl text-gray-800 font-extrabold mt-0 font-montserrat">
              LAUNCHING SOON
            </div>
            <div className="text-gray-700 lg:text-2xl text-lg text-left leading-relaxed min-[1025px]:w-9/12 sm:w-11/12 w-full font-poppins">
              Say goodbye to uncertainty with our accurate and convenient UTI
              Testing.
            </div>

            <div
              style={{ fontSize: "2.5rem" }}
              className="font-bold text-center mt-3 font-poppins"
            >
              Launching in:
            </div>
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mt-4">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Days
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    {timeLeft.days}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Hours
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    {timeLeft.hours}
                  </p>
                </div>
              </div>

              {/* Mins */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Minutes
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    {timeLeft.minutes}
                  </p>
                </div>
              </div>

              {/* Sec */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Seconds
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    {timeLeft.seconds}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 justify-center mt-4">
              <a
                href="#contact-form"
                className="py-2 px-4 text-xl text-white text-center font-medium bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 no-underline w-72"
              >
                Learn More
              </a>
              <a
                href="tel:800-790-4550"
                className="py-2 text-3xl px-4 flex items-center gap-2 text-orange-600 font-bold border border-orange-600 rounded-lg hover:bg-orange-50 no-underline w-72 flex justify-center"
              >
                <span className="text-xl">📞</span> 800-790-4550
              </a>
            </div>
          </div>

          {/* Right Side Image Section */}
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-md h-[400px] md:h-[500px] lg:h-[600px]">
            {/* highlight page */}
            <div className="absolute lg:top-[27%] sm:top-[10%] top-[15%] sm:right-[60%] right-[50%] w-40 h-32 sm:w-56 sm:h-40 xl:w-72 xl:h-52 outline-1 rounded-2xl bg-white drop-shadow-lg p-2 xl:text-xl sm:text-md sm:leading-6 text-xs font-poppins">
              Get ready for fast, reliable and professional UTI testing at My
              Care labs. Be the first to experience our seamless booking and
              accurate diagnostics.
            </div>
            {/* Circle Behind */}
            <img
              src={circle}
              alt="Circle Design"
              className="absolute top-2/4 left-[10%] w-[400px] -translate-y-1/2 sm:w-[500px] xl:w-[800px] -z-10"
            />
            {/* Lady Image */}
            <img
              src={ladyImage}
              alt="Doctor"
              className="absolute bottom-0 right-0 md:right-[-10%] w-[400px] md:w-[500px] lg:w-[650px] z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UtaComp;
