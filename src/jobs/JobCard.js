import { Link } from "react-router-dom";


function JobCard({job}){

    function isHourly(salary){
      if (salary.length <= 4){
        return true
      }
      return false
    }
    function removeDecimal(salary){
      if (salary.includes('.')){
        salary = salary.slice(0,salary.length-2)
        return salary;
      }
      return salary
    }

    function formatYearly(s) {
      let salary = removeDecimal(s);
      let final
      
      if (salary.length === 5){
        let index = 2
        final = salary.slice(0,index) + "," + salary.slice(index)
      }
      else{
        let index = 3
        final = salary.slice(0,index) + "," + salary.slice(index)
      }
      return final
    }

    return (
      <Link to = {`/jobs/${job.jobId}`} className="job-link">
        <div className="job-card">
        <h2>{job.jobTitle}</h2>
        <p>{job.companyName}</p>
        <p className="location">{job.location}</p>
        <div>
          {isHourly(job.maxSalary) ? <p>${removeDecimal(job.maxSalary)} per hour</p> : <p>${formatYearly(job.maxSalary)} per year</p> }
        </div>
        <button
              onClick={(e) => {
                  e.stopPropagation();
                  window.open(job.postingUrl, '_blank');
              }}
          >
              Apply on LinkedIn
          </button>
        </div>
      </Link>
  );
}

export default JobCard

