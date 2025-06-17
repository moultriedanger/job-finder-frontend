import CompanyList from "./CompanyList";
import Search from "../Search"

import useCompanyData from "./useCompanyData";
import PageNav from "../shared/PageNav";

const Companies = () => {

    const companies = useCompanyData();

    if (!companies) {
        return <p>Loading companies...</p>;
    }

    return (
        <>
            <Search/>
            <PageNav companies={companies}/>
        </>
      );
}
 
export default Companies;