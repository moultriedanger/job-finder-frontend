import { Link } from "react-router-dom";


function JobCard({job}){

    // Destructure for convenience
    const { jobId, jobTitle, companyName, location, maxSalary, postingUrl } = job;

    // Now maxSalary is numeric—treat <1,000 as hourly
    const isHourly = (salary) => salary < 1000;

    // Truncate any decimals and return a string
    const removeDecimal = (salary) => Math.trunc(salary).toString();

    // Format a yearly salary with commas (e.g. 70000 → "70,000")
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

