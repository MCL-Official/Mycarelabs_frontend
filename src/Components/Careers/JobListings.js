import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobListings = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch("http://localhost:5100/jobs/admin/")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setJobs(data);
                setFilteredJobs(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs(jobs.filter(job => job.type === filter));
        }
    }, [filter, jobs]);

    const applyForJob = (job) => {
        navigate(`${job?._id}`, { state: { job } });
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading jobs: {error}</p>;
    if (filteredJobs.length === 0) return <p>No job listings available.</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Careers</h1>
            <p className="mb-6 text-gray-700">Explore our exciting career opportunities and join us in shaping the future of our industry.</p>
            <div className="mb-4">
                <label htmlFor="job-filter" className="block text-gray-700 mb-2">Filter by Type:</label>
                <select
                    id="job-filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="form-select block w-full border-gray-300 rounded-md shadow-sm"
                >
                    <option value="all">All Jobs</option>
                    <option value="engineering">Engineering</option>
                    <option value="marketing">Marketing</option>
                    <option value="administration">Administration</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                    <div key={job._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <p className="text-gray-600">{job.description}</p>
                        <button
                            onClick={() => applyForJob(job)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
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
