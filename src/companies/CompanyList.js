import CompanyCard from "./CompanyCard";
import { useState, useEffect } from 'react';

const CompanyList = ({companies}) => {

    return (

        <div className="list-container">
            {console.log(companies.slice(0,10))}
            {companies.slice(0,10).map((company) => <CompanyCard company = {company} key = {company.companyId}/>)}
            
        </div>
    )
}

export default CompanyList;