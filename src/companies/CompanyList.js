import CompanyCard from "./CompanyCard";
import { useState, useEffect } from 'react';

const CompanyList = ({companies}) => {
    console.log(companies)

    return (

        <div className="list-container">
            {companies.map(
                (company) => <CompanyCard company = {company} key = {company.companyId}/>
            )}
        </div>
    )
}

export default CompanyList;