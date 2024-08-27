// src/components/JobDetail.js

import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const JobDetail = () => {

const navigate = useNavigate()
    const location = useLocation();
    const { job } = location.state || {};
    console.log(job,"CDJnsdjvnnsjdnsdvs");
    const handleApply = () => {
      if (job?._id) {
          navigate('/apply', { state: { jobId: job._id } });
      } else {
          console.log("Job ID is undefined");
      }
  };
    
    // const job = jobs?.[0];
  return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
        <br></br>
        <br></br>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <img src={job?.companyLogo} alt="Company Logo" className="h-12 mb-4" />
          <h1 className="text-2xl font-bold">{job?.title}</h1>
          <h2 className="text-lg text-gray-500">{job?.company}</h2>
        </div>
        <button  onClick={handleApply} className="bg-blue-700 text-white px-4 py-2 rounded">Apply Now</button>
      </div>

      {/* Job Details */}
      <div className="flex items-center space-x-4 mt-4 text-left">
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">work_outline</span>
          <span>{job?.type}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">attach_money</span>
          <span>{job?.salary}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">calendar_today</span>
          <span>{job?.experience}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-gray-500">update</span>
          <span>Posted {job?.postedTime}</span>
        </div>
      </div>

      {/* Location */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Location</h3>
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full">{job?.location}</span>
      </div>

      {/* Skills Required */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Skills Required</h3>
        <div className="flex flex-wrap space-x-2 space-y-2">
          {job?.skills?.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* About This Job */}
      <div className="mt-6 text-left">
        <h3 className="text-xl font-semibold">About this Job</h3>
        <p>{job?.description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Responsibilities</h3>
        <ul className="list-disc list-inside space-y-2">
        <p>{job?.responsibilities}</p>
          {/* {job?.responsibilities?.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))} */}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Requirements</h3>
        <ul className="list-disc list-inside space-y-2">
        <p>{job?.requirements}</p>
          {/* {job?.requirements?.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))} */}
        </ul>
      </div>

      {/* Eligible Degrees */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Eligible Degrees</h3>
        <div className="flex flex-wrap space-x-2 space-y-2">
          {job?.eligibleDegrees?.map((degree, index) => (
            <span
              key={index}
              className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full"
            >
              {degree}
            </span>
          ))}
        </div>
      </div>

      {/* Who Can Apply */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Who Can Apply</h3>
        <p>Work Experience: {job?.experience}</p>
        {/* <p>Eligible Graduation Years: {job?.eligibleGraduationYears?.join(', ')}</p> */}
      </div>

      {/* Documents Required */}
      <div className="mt-4 text-left">
        <h3 className="text-xl font-semibold">Documents Required</h3>
        <ul className="list-disc list-inside space-y-2 text-left">
        <p>{job?.documentsRequired}</p>
          {/* {job?.documentsRequired?.map((document, index) => (
            <li key={index}>{document}</li>
          ))} */}
        </ul>
      </div>

      {/* Job Round */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-left">Job Round</h3>
        <p>{job?.jobRound}</p>
      </div>
    </div>
  );
};

export default JobDetail;
