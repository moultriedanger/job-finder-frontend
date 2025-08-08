import { Link } from "react-router-dom";


function JobCard({job}){

    const { jobId, jobTitle, companyName, location, maxSalary, postingUrl } = job;

    const isHourly = (salary) => salary < 1000;

    const removeDecimal = (salary) => Math.trunc(salary).toString();

    const formatYearly = (salary) => Math.trunc(salary).toLocaleString();
    console.log(job)

    return (
    <Link to={`/jobs/${jobId}`} className="job-link">
      <div className="job-card">
        <h2>{jobTitle}</h2>
        <p>{companyName}</p>
        <p className="location">{location}</p>
        <div>
          {isHourly(maxSalary) ? (
            <p>${removeDecimal(maxSalary)} per hour</p>
          ) : (
            <p>${formatYearly(maxSalary)} per year</p>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(postingUrl, "_blank");
          }}
        >
          Apply on LinkedIn
        </button>
      </div>
    </Link>
  );
}

export default JobCard;

