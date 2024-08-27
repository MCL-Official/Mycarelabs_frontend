import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s3 from './AWS'

const ApplyPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { jobId } = location.state || {};
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        phoneNumber: '',
        website: '',
        email: '',
        location: '',
        gender: '',
        education: '',
        address: '',
        college: ''
    });



    
    const handleChange = async (e) => {
        const { name, type, value, files } = e.target;
        
        if (type === 'file' && files.length > 0) {
            const file = files[0];
    
            const params = {
                Bucket: 'imagesuploadforwebsite', // Your S3 Bucket name
                Key: `resumes/${file.name}`, // File name you want to save as in S3
                Body: file,
                ACL: 'public-read' // Optional: File permission
            };
    
            try {
                const data = await s3.upload(params).promise();
                console.log('File uploaded successfully at:', data.Location);
                setFormData({
                    ...formData,
                    [name]: data.Location // Save the S3 file URL in the form data
                });
            } catch (err) {
                console.error('Error uploading file:', err);
            }
        } else {
            setFormData({
                ...formData,
                [name]: value // Handle other inputs
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
    
        // Append text fields
        data.append('name', `${formData.firstName} ${formData.lastName}`);
        data.append('email', formData.email);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('location', formData.location);
        data.append('gender', formData.gender);
        data.append('education', formData.education);
        data.append('address', formData.address);
        data.append('college', formData.college);
        data.append('jobId', jobId);
    
        // Append file if available
        if (formData.resume) {
            data.append('resume', formData.resume);
        }
    
        try {
            const response = await fetch('http://localhost:5100/applicants/admin/apply', {
                method: 'POST',
                body: data // FormData is automatically set as multipart/form-data
            });
    
            if (!response.ok) {
                throw new Error('Something went wrong with the API request');
            }
    
            const result = await response.json();
            console.log('Success:', result);
            alert('Application submitted successfully!');
            navigate('/success'); // Redirect after successful submission
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit application');
        }
    };
    

    return (
        <>
            <br></br>
            <br></br>
            <div className="container mx-auto px-4 py-12">
                <form onSubmit={handleSubmit} className="grid gap-6 mb-6 md:grid-cols-2">
                    {/* Dynamically generating form fields for basic information */}
                    {Object.entries({
                        firstName: "First name",
                        lastName: "Last name",
                        company: "Company",
                        phoneNumber: "Phone number",
                        website: "Website URL",
                        email: "Email address",
                        location: "Location",
                        address: "Address",
                        college: "College"
                    }).map(([key, label]) => (
                        <div key={key}>
                            <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder={label}
                                required
                            />
                        </div>
                    ))}

                    {/* Gender and Education Select Fields */}
                    <div>
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Education</label>
                        <select
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required>
                            <option value="">Select Education</option>
                            <option value="high_school">High School</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">Ph.D.</option>
                        </select>
                    </div>

                    {/* Resume Upload Field */}
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="resume" type="file" className="hidden" accept=".pdf,.svg,.png,.jpg,.gif" onChange={handleChange} name="resume" />
                        </label>
                    </div>


                    {/* Submit Button */}
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center md:col-span-2">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ApplyPage;
