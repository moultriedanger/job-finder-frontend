const CompanyCard = ({company}) =>{
    return (
        <div className="company-card">
            <h1>{company.companyName}</h1>
            <p>Company Description: {company.companyDescription}</p>
            <p>Location: {company.countryLocated}</p>
            <a href= {company.companyWebsite}>
                <button>Company Linkedin</button>
            </a>
        </div>
    );
}
export default CompanyCard
