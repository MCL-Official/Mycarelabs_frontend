import { Link } from "react-router-dom";

export function HeroAnti () {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-sm text-indigo-600 font-medium">
                       Anticonvulsant Test Services
                    </h1>
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                    Anticonvulsant Test   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Services</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-left">
                    Anticonvulsants, also known as antiepileptic drugs (AEDs) or antiseizure drugs, are a diverse group of pharmacological agents used in the treatment of epileptic seizures. These medications help suppress the excessive rapid firing of neurons during seizures and prevent the spread of the seizure within the brain¹. Some anticonvulsants also act as mood stabilizers and are used in the treatment of bipolar disorder and borderline personality disorder. Additionally, they are increasingly being used for the treatment of neuropathic pain. However, it’s important to note that anticonvulsants provide symptomatic treatment only and have not been demonstrated to alter the course of epilepsy itself.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <Link to="/covid-test-locations" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Book Apointment
                        </Link>
                        {/* <Link to="/about" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Get access
                        </Link> */}
                    </div>
                </div>
                <div className="mt-14">
                    {/* <img src="https://i.ibb.co/vzGZPFx/10.png" className="w-full shadow-lg rounded-lg border" alt="" /> */}
                    <img src="https://i.ibb.co/pvBkRYq/2.png" className="w-full shadow-lg rounded-lg border" alt="" />
                </div>
            </div>
        </section>
    )
}