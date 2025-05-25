function JobCard(job){
    return (
    <div className="job-card">
      <h2>{job.title}: {job.company}</h2>
      <p className="location">{job.location}</p>
      <p>{job.description}</p>
      <p className="salary">{job.salaryRange}</p>
    </div>
  );
}

export default JobCard


