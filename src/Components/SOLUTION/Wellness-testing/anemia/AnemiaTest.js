import { Link } from "react-router-dom";

export function AnemiaTest ()  {
    return (
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                    Anemia Profile  <span className="text-indigo-600">Test</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                    Welcome to Care Labs, your trusted medical laboratory in Fremont, California, dedicated to providing accurate and comprehensive diagnostic services. One of our specialized offerings is the Anemia Profile Test, a comprehensive assessment tool designed to evaluate various aspects related to anemia. Our advanced facilities and experienced professionals ensure reliable results, contributing to your overall well-being.                   </p>
                    <Link
                        className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                        to="/covid-test-locations">
                        Book Now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img 
                        src="https://img.freepik.com/free-photo/female-researcher-male-colleague-laboratory-with-test-tubes-safety-glasses_23-2148816412.jpg?t=st=1719950338~exp=1719953938~hmac=834456c33cebbbe24c51f3effd38a00168ddc51b035c067f541fe2cf3f1cf8d3&w=1380" 
                        alt="" 
                        className="w-full" 
                    />
                </div>
            </div>
        </section>
    )
}
