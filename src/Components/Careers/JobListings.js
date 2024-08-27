import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobDetail from "./JobDetail";
import JobApplicationForm from "./JobApplicationForm";

const JobListings = () => {
    const navigate = useNavigate();
  const [jobs, setJobs] = useState([ ]);

  useEffect(() => {
    fetch("http://localhost:5100/jobs/admin/")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

const applyForJob=(job)=>{
    console.log(job,"sdkjdvsjvdns");
    
    navigate(`${job?._id}`, { state: { job }  })
}

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Careers</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.description}</p>
          <button
            onClick={() => applyForJob(job)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default JobListings;
