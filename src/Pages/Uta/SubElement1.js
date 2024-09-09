import React from 'react';

const SubElement1 = () => {
    return (
        <div className='bg-gradient-to-r from-blue-200 via-white to-blue-200 p-8'>
            <div className='max-w-xl mx-auto text-center'>
                <div className="mb-8">
                    <span className="inline-block text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 3xl:text-8xl font-bold mr-2">
                        How it
                    </span>
                    <span className="inline-block text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 3xl:text-8xl font-bold">
                        Works
                    </span>
                </div>

                <div className='text-slate-600 text-xl font-bold mb-10'>
                    Step-by-Step Guide
                </div>

                {/* Steps */}
                <div className='space-y-4 pl-14'>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center text-2xl font-bold text-center ">
                        <span className="text-blue-600 font-bold text-2xl mr-2">1.</span>
                        Book Online
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center text-2xl font-bold text-center ">
                        <span className="text-blue-600 font-bold text-2xl mr-2">2.</span>
                        Visit Lab or Home Collection
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center text-2xl font-bold text-center ">
                        <span className="text-blue-600 font-bold text-2xl mr-2">3.</span>
                        Receive Results
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center text-2xl font-bold text-center ">
                        <span className="text-blue-600 font-bold text-2xl mr-2">4.</span>
                        Get Personalized Care
                    </div>
                </div>

                {/* Get Started Button */}
                <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default SubElement1;
