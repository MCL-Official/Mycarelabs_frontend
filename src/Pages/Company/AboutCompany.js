import React from "react";
function AboutCompany() {
    const people = [
        {
            name: 'Harvey Singh',
            role: 'Chief Executive Officer',
            imageUrl:
                'https://i.ibb.co/pwcpzQc/1.png',
        },
        {
            name: 'Dr. Carl Johnson',
            role: 'Medical Director',
            imageUrl:
                'https://i.ibb.co/P9Grxrt/dbfdbfc.png',
        },
        {
            name: 'Aman Singh',
            role: 'Vice President, Global Operations',
            imageUrl:
                'https://i.ibb.co/6yDHzWF/5.png',
        },
        {
            name: 'Pramo Virk',
            role: 'Chief Financial Officer',
            imageUrl:
                'https://i.ibb.co/kSkNcws/7.png',
        },
        // {
        //     name: 'Kishan Singh',
        //     role: 'Vice President, India Operations',
        //     imageUrl:
        //         'https://i.ibb.co/pRCR5C0/6.png',
        // },
        {
            name: 'Rajtanu Banerjee',
            role: 'Vice President, Business Development',
            imageUrl:
                'https://i.ibb.co/hVxKLxZ/9.png',
        },
        // {
        //     name: 'Emily Garcia',
        //     role: 'Marketing Manager',
        //     imageUrl:
        //         'https://i.ibb.co/jwrkf3x/2.png',
        // },
        {
            name: 'Soun Kanwar',
            role: 'Communications Director',
            imageUrl:
                'https://i.ibb.co/mFwp2Qt/3.png',
        },
        // More people...
    ]
    return (
        <div className="container mx-auto pt-2">



            <div className="bg-white py-24 sm:py-32">
                {/* <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"> */}
                <div className=" flex justify-center mb-14 ">
                    <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                </div>
                {/* </div> */}
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-4">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center text-center gap-x-4 border-2 border-black rounded-2xl ">
                                <img alt="" src={person.imageUrl} className="h-24 w-24 rounded-full" />
                                <div>
                                    <h3 className="text-xl font-semibold leading-7  tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                            {/* <button >Learn more</button> */}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="xl:w-full w-11/12 mx-auto">
                <h1 className="text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center">
                    Hear From Our Team
                </h1>
                {/* <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0 text-gray-600">Content</p> */}
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                {/* Left section for image */}
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center xl:pr-8 lg:pr-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img
                            src="https://i.ibb.co/pwcpzQc/1.png"
                            alt="Harvey Singh"
                            className="rounded h-full w-full object-cover shadow"
                        />
                    </div>
                </div>

                {/* Right section for text */}
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">
                        Harvey Singh, as the CEO of My Care Labs, brings a wealth of experience in healthcare administration. With a keen eye for innovation, he steers the company towards cutting-edge testing solutions for infectious diseases.
                    </p>
                    <p className="text-base text-gray-800">
                        His leadership is characterized by a commitment to community well-being, ensuring that My Care Labs not only meets but exceeds industry standards in delivering accessible and reliable diagnostic services. Harvey’s vision extends beyond the laboratory, aiming to create a lasting impact on public health and safety throughout California.
                    </p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Harvey Singh</p>
                        <p className="text-sm text-gray-600 pl-2">Chief Executive Officer</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                {/* Left section for image */}
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center xl:pr-8 lg:pr-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://i.ibb.co/P9Grxrt/dbfdbfc.png" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
                {/* Right section for text */}
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">Dr. Carl Johnson, serving as the Medical Director at My Care Labs, is at the forefront of maintaining the highest standards of medical excellence. With a distinguished background in clinical practice, Dr. Johnson oversees the medical aspects of testing solutions. </p>
                    <p className="text-base text-gray-800">His role involves not only ensuring the accuracy of diagnostic services but also staying abreast of the latest medical advancements to continuously enhance the quality of care provided by My Care Labs. Dr. Johnson’s commitment to scientific rigor and patient well-being underscores the reliability and trustworthiness of the laboratory’s results.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Dr. Carl Johnson</p>
                        <p className="text-sm text-gray-600 pl-2">Medical Director</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                {/* Left section for image */}
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center xl:pr-8 lg:pr-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://i.ibb.co/6yDHzWF/5.png" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
                {/* Right section for text */}
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">Aman Singh, in his role as the VP of Global Operations, is the architect behind the seamless functioning of My Care Labs on a global scale. With a background in operational excellence, Aman optimizes processes to ensure that testing solutions reach communities efficiently and effectively.</p>
                    <p className="text-base text-gray-800"> His strategic approach involves fostering strong partnerships with healthcare entities, governmental agencies, and community organizations, expanding My Care Labs’ reach and impact. Aman’s dedication to precision and scalability ensures that the company’s commitment to health extends across borders, making a positive difference worldwide. </p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Aman Singh</p>
                        <p className="text-sm text-gray-600 pl-2">Vice President, Global Operations</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                {/* Left section for image */}
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center xl:pr-8 lg:pr-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://i.ibb.co/kSkNcws/7.png" alt="AmanImg" className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
                {/* Right section for text */}
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">Pramo Virk, as the Chief Financial Officer (CFO) of My Care Labs, is instrumental in driving the company’s financial strategy and ensuring fiscal sustainability. With a profound understanding of healthcare economics and extensive expertise in financial management, Pramo oversees budgeting, forecasting, and resource allocation to support the company’s strategic goals and operational efficiency. </p>
                    <p className="text-base text-gray-800">Pramo’s dedication to financial innovation and growth has empowered My Care Labs to expand its diagnostic services while maintaining affordability and accessibility. His commitment to transparency and sound financial practices ensures the company is well-positioned to invest in cutting-edge technology, enhance service delivery, and drive long-term value for stakeholders, ultimately contributing to improved healthcare outcomes for communities globally.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Pramo Virk</p>
                        <p className="text-sm text-gray-600 pl-2">Chief Financial Officer</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                {/* Left section for image */}
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-start lg:justify-start md:justify-start sm:justify-center justify-center xl:pr-8 lg:pr-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://i.ibb.co/hVxKLxZ/9.png" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
                {/* Right section for text */}
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">Dr. Raj Banerjee, Vice President of Business Development at My Care Labs, combines his medical background with extensive expertise in sales to drive client acquisition and strategic partnerships.  </p>
                    <p className="text-base text-gray-800">Dr. Banerjee excels in understanding the unique needs of healthcare providers, ensuring tailored solutions that enhance patient care and operational efficiency. His ability to forge lasting partnerships and optimize contracting processes positions My Care Labs as a trusted leader in the healthcare industry.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Rajtanu Banerjee</p>
                        <p className="text-sm text-gray-600 pl-2">Vice President, Business Development</p>
                    </div>
                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default AboutCompany;
