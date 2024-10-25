import React from 'react'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'
import { Helmet } from "react-helmet";


export default function Covid19() {
    return (
        <>
            <Helmet>
                <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
                <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
                <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
                <meta name="author" content="My Care Labs" />
            </Helmet>
            <br></br>
            <br></br>
            <div className='container'>
                <section class="text-gray-600 body-font bg-white dark:bg-slate-900 ">
                    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                        <div
                            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1
                                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                                <span style={{color: "#ff7559"}}>At-Home Test Kits:</span><span style={{color: "#7597E6"}}>Bringing Health to Your Doorstep</span>
                            </h1>
                            <p class="mb-8 md:pl-0 text-lg pl-2 pr-2 leading-relaxed dark:text-gray-700">
                                At My Care Labs, we understand the importance of quick and accurate health information. Our At-Home Test Kits are designed to empower you with the ability to monitor your health conveniently and from the comfort of your own home. Let us explore the key aspects of our At-Home Test Kits and why they are an essential addition to your healthcare toolkit.
                            </p>
                            <div class="flex justify-center">

                            </div>
                        </div>
                        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6 mt-11">
                            <img class="object-cover object-center rounded w-96 h-auto" alt="hero" src="https://i.ibb.co/rk9nDML/Untitled-1280-x-720-px-1300-x-1000-px-1.png" />
                        </div>
                    </div>
                </section>


                <div class="max-w-6xl mx-auto mt-8 px-4">

                    <h2 class="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">Test Procedure Overview</h2>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5">

                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/338097/gloves-protection-shield-protect-medical-protocol-covid19.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 1</h3>
                            <p class="text-gray-600 text-center">Open Kit – Take  swab out. DO NOT touch the swab tip.</p>
                        </div>


                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/376852/covid-exclamation.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 2</h3>
                            <p class="text-gray-600 text-center">Unscrew tube top. Please do not drink the liquid.</p>
                        </div>


                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/307409/nasal-swab-covid-testing-nasal-swab-test-coronavirus-test.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 3</h3>
                            <p class="text-gray-600 text-center">Insert swab halfway into one nostril. Rotate swab around inside (10 time).</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/50505/nose-line.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 4</h3>
                            <p class="text-gray-600 text-center">Repeat the process in other nostril.</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/324482/tube-test-chemistry.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 5</h3>
                            <p class="text-gray-600 text-center">Break swab at the mark. Place in the tube.</p>
                        </div>


                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/504245/covid-cert.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 6</h3>
                            <p class="text-gray-600 text-center">Insert tube in biohazard bag, seal it.</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/313924/fedex.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 7</h3>
                            <p class="text-gray-600 text-center">Put the kit box in the FedEx pack with the label and mail it.</p>
                        </div>

                        <div class="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
                            <img class="h-12 w-12 text-blue-500 mb-4" alt="hero" src="https://www.svgrepo.com/show/415361/file-download-document.svg" />

                            <h3 class="text-xl font-semibold mb-2 text-gray-800">STEP 8</h3>
                            <p class="text-gray-600 text-center">Receive the results
                                within(24Hrs)</p>
                        </div>
                    </div>



                </div>

            </div>
            <BlogPostCarousel />
        </>
    )
}
