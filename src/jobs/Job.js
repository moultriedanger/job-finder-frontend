import { createSearchParams, useAsyncError, useParams} from "react-router-dom"
import useJobData from "./useJobData"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

const Job = () => {

    const {id} = useParams()

    const jobData = useJobData(id)
    
    const [companyId, setCompanyId] = useState(null)

    useEffect(() =>{
        const fetchCompany = async () => {

            const url = `http://localhost:8080/jobs/${id}/company`

            try{
                const companyResponse = await fetch(url);
                
                const companyData = await companyResponse.json();

                const cId = companyData.companyId;
                console.log(companyData);

                setCompanyId(cId);
            }
            catch (error){
                console.error("Caught an error:", error.message);
            }
        }
        fetchCompany();
    },[])
    
    if (!jobData) {
    return <p>Loading job data...</p>;
    }

    return (
        <>
        <h1>{jobData.jobTitle}</h1>
        <h2>{jobData.companyName}</h2>

        <Link to = {`/companies/${companyId}/jobs`}>
            <button>Company Page</button>
        </Link>
        
        <h2>Full Job Description:</h2>
        <p>{jobData.jobDescription}</p>
        </>
    )
}

export default Job