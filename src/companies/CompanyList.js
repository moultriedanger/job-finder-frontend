import CompanyCard from "./CompanyCard";
import { useState, useEffect } from 'react';

const CompanyList = () => {

    const url = 'http://localhost:8080/companies';

    const [companies, setCompanies] = useState([])

    const fetchCompanies = async () => {

        try{
            const response = await fetch(url);

            const data = await response.json()
            
            setCompanies(data)
            return data;
        }
        catch (err){
            console.log(err)
            console.log("this is basd")
        }
    }

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (

        <div className="list-container">
            {console.log(companies.slice(0,10))}
            {companies.slice(0,10).map((company) => <CompanyCard company = {company} key = {company.companyId}/>)}
            
        </div>
    )
}

export default CompanyList;