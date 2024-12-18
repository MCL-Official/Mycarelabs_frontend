import background from "../../Assets/uti-background.png";
import circle from "../../Assets/uti-circle1.png";
import ladyImage from "../../Assets/uti-lady2.png";

const UtaComp = () => {
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
                    02
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Days
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    02
                  </p>
                </div>
              </div>

              {/* Mins */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Days
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    02
                  </p>
                </div>
              </div>

              {/* Sec */}
              <div className="flex flex-col items-center">
                <span className="text-gray-600 text-xl sm:text-base mb-2">
                  Days
                </span>
                <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                  <p className="text-3xl md:text-6xl text-white font-bold">
                    02
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 justify-center mt-4">
              <a
                href="/"
                className="py-2 px-4 text-xl text-white text-center font-medium bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 no-underline w-72"
              >
                Learn More & Pre-Book
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
            <div className="absolute p-3 lg:top-[27%] sm:top-[10%] top-[15%] sm:right-[60%] right-[50%] w-40 h-32 sm:w-56 sm:h-48 xl:w-72 xl:h-60 outline-1 rounded-2xl bg-white drop-shadow-lg sm:p-6 xl:text-xl sm:text-lg sm:leading-6 text-xs font-poppins">
              Get ready for fast, reliable and professional UTI testing at My
              Care labs. Be the first to experience our seamless booking and
              accurate diagnostics.
            </div>
            {/* Circle Behind */}
            <img
              src={circle}
              alt="Circle Design"
              className="absolute top-2/4 left-1/4 w-[400px] -translate-y-1/2 sm:w-[500px] xl:w-[800px] -z-10"
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
