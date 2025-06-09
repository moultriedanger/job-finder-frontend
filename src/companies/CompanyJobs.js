import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import JobCard from '../jobs/JobCard';

const CompanyJobs = () => {

    const [companyJobs, setCompanyJobs] = useState([]);
    const [company, setCompany] = useState("");
    const { id } = useParams();
    const url = `http://localhost:8080/companies/${id}/jobs`

    const fetchCompanyJobs = async () => {
        
        try{
            const response = await fetch(url)
          
            const data = await response.json();
            const companyJobs = setCompanyJobs(data);
    
            return data;
        }
        catch(e){
            console.log(e);
        }
    }
    
    useEffect(() => {
        fetchCompanyJobs();
    }, []);

    return (

        <div className="jobs-container">
            {companyJobs.map((job) => 
                <JobCard job = {job} key = {job.jobId}/>
            )}
        </div>
    )
}

export default CompanyJobs