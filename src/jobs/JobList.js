import JobCard from "./JobCard"

function JobList({jobs}){ 

    if (!jobs) {
        return <p>Loading jobs...</p>;
    }

    return(
        <div className="job-list-container">
        {
        jobs.map((job) => (
            <JobCard job = {job} key = {job.jobId}/>
        ))
        }
    </div>
    )
}

export default JobList