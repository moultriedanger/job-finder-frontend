import JobCard from "./JobCard"
import { useEffect, useState } from 'react';

function JobList(){ 

    const [jobs, setJobs] = useState([]);
    const url = "http://localhost:8080/jobs"

    useEffect(() => {
        const fetchJobs = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            setJobs(data);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching jobs:", error.message);
        }
        };

        fetchJobs(); // Call it once on component mount
    }, []);


    return(
        <div className="job-list-container">
        {
        jobs.slice(0,15).map((job) => (
            <JobCard job = {job} key = {job.jobId}/>
        ))
        }
    </div>
    )
}

export default JobList