import { Link } from "react-router-dom";

const CompanyCard = ({company}) =>{

    return (
       <Link to={`/companies/${company.companyId}/jobs`} className="company-link">
            <div className="company-card">
                <h1>{company.companyName}</h1>
                {/* <p>Company Description: {company.companyDescription}</p> */}
                <p>Location: {company.countryLocated}</p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(company.companyWebsite, '_blank');
                    }}
                >
                    Company LinkedIn
                </button>
            </div>
        </Link>
    );
}
export default CompanyCard
