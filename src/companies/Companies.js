import CompanyList from "./CompanyList";
import Search from "../Search"

import useCompanyData from "./useCompanyData";

const Companies = () => {

    const companies = useCompanyData();

    if (!companies) {
        return <p>Loading companies...</p>;
    }

    return (
        <>
            <Search/>
            <CompanyList companies = {companies}/>
        </>
      );
}
 
export default Companies;