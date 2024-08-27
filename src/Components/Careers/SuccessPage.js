import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-green-50">
            <div className="text-center">
                <svg className="mx-auto mb-4 w-14 h-14 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2 className="text-2xl leading-6 font-medium text-gray-900">Application Successful!</h2>
                <p className="mt-2 text-base text-gray-600">Thank you for submitting your application. We will review your submission and contact you shortly.</p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;
