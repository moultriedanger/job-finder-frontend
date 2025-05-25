import JobCard from "./JobCard"

function JobList({jobs}){ 
    return(
        <div className="job-list-container">
        {
        jobs.map((job) => (
            <JobCard job = {job} key = {job.id}/>
        ))
        }
    </div>
    )
}

export default JobList