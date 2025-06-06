function JobCard({job}){
    return (
    <div className="job-card">
      <h2>{job.jobTitle}</h2>
      <p className="location">{job.jobLocation}</p>
      <p>{job.jobDescription}</p>
      <p className="salary">{job.maxSalary}</p>
    </div>
  );
}

export default JobCard


