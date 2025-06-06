import JobCard from "./JobCard"

function JobList({jobs}){ 
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