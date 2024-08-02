import { Link } from "react-router-dom";

export function RenalTest ()  {
    return (
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                    Renal Function Panel  <span className="text-indigo-600">Test</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                    The Renal Function Panel serves as a critical diagnostic tool in assessing the health and functionality of the kidneys. Consisting of a series of blood and urine tests, this panel evaluates various markers crucial for understanding kidney function. The kidneys play a vital role in filtering waste, regulating electrolytes, maintaining fluid balance, and producing hormones essential for overall health. Any impairment in kidney function can lead to severe health complications, making the Renal Function Panel a valuable tool for early detection and monitoring of kidney-related conditions.         </p>
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
                        src="https://www.bannerhealth.com/healthcareblog/-/media/images/project/healthcareblog/hero-images/2022/03/how-to-prepare-for-a-blood-draw.ashx" 
                        alt="" 
                        className="w-full" 
                    />
                </div>
            </div>
        </section>
    )
}
