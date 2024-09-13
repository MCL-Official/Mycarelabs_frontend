import React from "react";
 
const About3 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            {/* <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">About</p> */}
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full text-blue-600 font-extrabold lg:text-5xl  pb-12 text-3xl lg:leading-10 leading-9">Our Story</h2>
                    <div className="mt-6 text-gray-600 text-left">
  <p className="font-normal  text-pretty text-base leading-6 pb-4">
    We are a CLIA-certified laboratory and a member of the California Department of Public Health (CDPH) and California COVID Task Force. Our commitment to public health continues as we regularly add new testing options to meet the evolving needs of our communities. My Care Labs was established in 2021 in response to the growing need for COVID-19 testing during the pandemic.
  </p>
  <p className="font-normal  text-pretty text-base leading-6  pb-4">
    As the pandemic began to subside, My Care Labs shifted its focus towards expanding our diagnostic services. At the beginning of 2024, we started offering additional tests, growing our test and service <span className="block text-center">menu.</span>
  </p>
  <p className="font-normal text-pretty  text-base leading-6  pb-4">
    Additionally, we also partner with nursing homes, care homes, schools, nearby hospitals, and other facilities throughout California to provide essential diagnostic services to these populations. We have also launched our discounted wellness testing program, available on Tuesdays and Thursdays, as a commitment to serving overlooked and underserved communities. This initiative has allowed us to provide affordable access to essential diagnostic services for individuals who may otherwise face <span className="block text-center">financial barriers to healthcare.</span>
  </p>
</div>
 
                </div>
                <div className="w-full lg:max-w-2xl">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/jfFvWVR/6.png" alt="people discussing on board" />  
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/jfFvWVR/6.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/jfFvWVR/6.png" alt="people discussing on board" />
                </div>
            </div>
 
            
        </div>
    );
};
 
export default About3;
 
 