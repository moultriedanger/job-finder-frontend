import JobCard from "./JobCard"
import { useEffect, useState } from 'react';
import useJobData from "./useJobData";

function JobList(){ 
 
    const jobs = useJobData()

    if (!jobs) {
        return <p>Loading jobs...</p>;
    }

    return(
        <div className="job-list-container">
        {
        jobs.slice(0,5).map((job) => (
            <JobCard job = {job} key = {job.jobId}/>
        ))
        }
    </div>
    )
}

export default JobList