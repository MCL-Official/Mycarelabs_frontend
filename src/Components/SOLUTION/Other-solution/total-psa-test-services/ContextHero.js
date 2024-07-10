import { useState } from 'react';

const ContextHero = () => {
    const navigation = [
        {
            name: "What is a PSA",
            image: "https://img.freepik.com/free-photo/front-view-asian-women-working-together-chemical-project_23-2148776747.jpg?t=st=1719954992~exp=1719958592~hmac=aca523616acc66080469fbcee673438a6c98008479540d75dfe351a03d11686d&w=2000",  // Replace with the correct path
            text: "The PSA test is a blood test designed to measure the levels of prostate-specific antigen; a protein produced by the prostate gland. This screening tool plays a crucial role in assessing the health of the prostate and detecting potential issues early on."
        },
        {
            name: "What is it Used For?",
            image: "https://img.freepik.com/free-photo/asian-women-working-together-chemical-project_23-2148776749.jpg?t=st=1719954975~exp=1719958575~hmac=d8a9d57b35d7a297eda1d6a52f050ae919c396bef1efa084e42be06257542068&w=2000",  // Replace with the correct path
            text: "Early Detection of Prostate Conditions: The primary purpose of the PSA test is to aid in the early detection of prostate conditions, particularly prostate cancer. Regular screening allows for timely intervention and improved outcomes."
        },
        {
            name: "Why Choose My Care Labs?",
            image: "https://img.freepik.com/free-photo/coronavirus-test-assortment-lab_23-2149107257.jpg?t=st=1719954931~exp=1719958531~hmac=9d043decf6673000fa1c4ca424bac760d5782668f55c05b2caa7d4e406db2622&w=2000",  // Replace with the correct path
            text: "Guiding Clinical Decision-Making: The PSA test results, when combined with other clinical information, guide healthcare professionals in making informed decisions about additional tests, treatments, or ongoing monitoring based on an individual's unique health profile."
        },
        {
            name: "The Total PSA Testing Process",
            image: "/mnt/data/file-T5ptyziBxDTwB2Gw3phXsmkU.png",  // Replace with the correct path
            text: "Accurate and Reliable Results: Our cutting-edge laboratory equipment and skilled technicians guarantee precise and dependable results. Experienced Professionals: Our team of healthcare professionals includes experienced pathologists and laboratory technicians dedicated to ensuring the highest standards of quality."
        },
        {
            name: "Plans",
            image: "/mnt/data/file-odS2C0mHKSG8W8bAJFEIQahZ.png",  // Replace with the correct path
            text: "Scheduling: Book an appointment with My Care Labs for your Total PSA test. We offer flexible scheduling to accommodate your convenience. Sample Collection: Our experienced phlebotomists will collect a small blood sample using advanced and minimally invasive techniques."
        },
    ];

    const [selectedTab, setSelectedTab] = useState(navigation[0]);

    return (
        <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div>
                    <h3 className="text-gray-800 text-2xl font-bold">
                        Payments
                    </h3>
                </div>
                <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
                    <a
                        href="javascript:void(0)"
                        className="flex items-center justify-center gap-x-2 px-4 py-2 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500">
                            <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                        </svg>
                        Filter
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="block px-4 py-2 mt-3 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 sm:mt-0 md:text-sm"
                    >
                        Create payment
                    </a>
                </div>
            </div>
            <div className="mt-6 md:mt-4">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {navigation.map((item, idx) => (
                        <li
                            key={idx}
                            className={`py-2 border-b-2 ${selectedTab.name === item.name ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            <a
                                href="javascript:void(0)"
                                className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <img src={selectedTab.image} alt={selectedTab.name} className="w-64 h-64 object-cover mx-auto" />
                    <p className="text-center text-gray-700 mt-4">{selectedTab.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ContextHero;
