import CompanyJobs from "./CompanyJobs"
import { useParams } from 'react-router-dom';

import {useState, useEffect} from "react"

const Company = () => {

    const { id } = useParams();

    var [company, setCompany] = useState([]);

    const url = `http://localhost:8080/companies/${id}`

    const fetchCompany = async () =>{

        try {
            console.log("tried to make compnayt")
            const response = await fetch(url);

            const companyData = await response.json();

            company = setCompany(companyData)
            console.log("set compaany")
            
            return company
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(() =>{

        fetchCompany();
    },[])

    return (
        <div className="page">
            <h1>Welcome to: {company.companyName}</h1>
            <p>{company.companyDescription}</p>
            <button
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(company.companyWebsite, '_blank');
                    }}
                >
                    Company LinkedIn
                </button>
            <h2>Below are our active listings: </h2>
            
            
            <CompanyJobs/>

        </div> 
    )
}

export default Company