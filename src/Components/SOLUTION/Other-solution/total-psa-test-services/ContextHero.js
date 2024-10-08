import { useState } from 'react';

const ContextHero = () => {
    const navigation = [
        {
            name: "What is a PSA",
            image: "https://i.ibb.co/gjbJTny/3.png",  // Replace with the correct path
            text: `
                <h2>1. What is a Prostate-Specific Antigen (PSA) Test?</h2>
                <p>The PSA test is a blood test designed to measure the levels of prostate-specific antigen; a protein produced by the prostate gland. This screening tool plays a crucial role in assessing the health of the prostate and detecting potential issues early on.</p>
                <p><strong>Understanding the Basics:</strong> Prostate-specific antigen is a normal component of semen, but a small amount also enters the bloodstream. The PSA test measures the concentration of this protein in the blood, helping healthcare professionals evaluate the prostate's condition.</p>
                <p><strong>Why is it Done?</strong> The PSA test is commonly used to screen for prostate conditions, including benign prostatic hyperplasia (BPH) and prostate cancer. While elevated PSA levels don't necessarily indicate cancer, they can be a signal for further investigation.</p>
            `
        },
        {
            name: "What is it Used For?",
            image: "https://i.ibb.co/cJ654jq/Untitled-1280-x-720-px-1300-x-1000-px.png",  // Replace with the correct path
            text: `
                <h2>2. What is it Used For?</h2>
                <p><strong>Early Detection of Prostate Conditions:</strong> The primary purpose of the PSA test is to aid in the early detection of prostate conditions, particularly prostate cancer. Regular screening allows for timely intervention and improved outcomes.</p>
                <p><strong>Monitoring Prostate Health:</strong> For individuals with known prostate issues or those undergoing treatment, the PSA test is used to monitor changes in PSA levels over time. This monitoring helps healthcare providers assess the effectiveness of interventions and adjust treatment plans accordingly.</p>
                <p><strong>Assessing Treatment Success:</strong> After prostate cancer treatment, the PSA test is valuable in assessing treatment success. A decreasing PSA level post-treatment often indicates a positive response, while rising levels may suggest a recurrence that requires further evaluation.</p>
            `
        },
        {
            name: "Why Choose My Care Labs?",
            image: "https://i.ibb.co/b79svsR/4.png",  // Replace with the correct path
            text: `
                <h2>3. Why Choose My Care Labs for Total PSA Testing?</h2>
                <p><strong>Accurate and Reliable Results:</strong> Our cutting-edge laboratory equipment and skilled technicians guarantee precise and dependable results.</p>
                <p><strong>Experienced Professionals:</strong> Our team of healthcare professionals includes experienced pathologists and laboratory technicians dedicated to ensuring the highest standards of quality.</p>
                <p><strong>Convenient Location:</strong> Located in Fremont, California, our lab is easily accessible, making it convenient for individuals seeking Total PSA testing.</p>
                <p><strong>State-of-the-Art Facilities:</strong> My Care Labs is equipped with modern facilities, adhering to the latest advancements in medical technology for efficient and accurate testing.</p>
            `
        },
        {
            name: "The Total PSA Testing Process",
            image: "https://i.ibb.co/XXmTtnP/5.png",  // Replace with the correct path
            text: `
                <h2>4. The Total PSA Testing Process</h2>
                <p><strong>Scheduling:</strong> Book an appointment with My Care Labs for your Total PSA test. We offer flexible scheduling to accommodate your convenience.</p>
                <p><strong>Sample Collection:</strong> Our experienced phlebotomists will collect a small blood sample using advanced and minimally invasive techniques.</p>
                <p><strong>Laboratory Analysis:</strong> The collected sample will undergo thorough laboratory analysis using advanced technology to measure the total PSA levels accurately.</p>
                <p><strong>Results Delivery:</strong> Once the analysis is complete, you can expect timely and confidential delivery of your Total PSA test results.</p>
            `
        },
    ];

    const [selectedTab, setSelectedTab] = useState(navigation[0]);

    return (
        <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
            <div className="items-start justify-between md:flex">
                <div>
                    <h3 className="text-gray-800  text-justify text-2xl font-bold">
                    Understanding the Total PSA Test
                    </h3>
                <p className='text-gray-500 text-justify'>
                The Total PSA test measures the total amount of prostate-specific antigen in the blood. PSA is a
                 protein produced by the prostate gland, and elevated levels may indicate various prostate conditions,
                  including benign prostatic hyperplasia (BPH) or prostate cancer. Our Total PSA test is a vital component 
                  in the early detection and monitoring of prostate-related issues.
                </p>
                </div>
             
            </div>
            <div className="mt-6 md:mt-4">
                <ul className="w-full border-b flex items-center sm:gap-x-3 overflow-x-auto">
                    {navigation.map((item, idx) => (
                        <li
                            key={idx}
                            className={`py-2 border-b-2 ${selectedTab.name === item.name ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            <a
                                href="javascript:void(0)"
                                className="py-2.5 sm:px-4 px-1 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="my-8">
                    <img src={selectedTab.image} alt={selectedTab.name} className="w-64 h-64 object-cover mx-auto" />
                    <div className="prose max-w-none text-justify" dangerouslySetInnerHTML={{ __html: selectedTab.text }}></div>
                </div>
            </div>
        </div>
    );
};

export default ContextHero;
