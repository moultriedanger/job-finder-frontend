import {useState, useEffect} from "react"

const useCompanyData = (companyId) => {
    
    const [companies, setCompanies] = useState(null)

    const fetchCompanies = async () => {

    const url = companyId != null?`http://localhost:8080/companies/${companyId}` :'http://localhost:8080/companies'

    try{
        const response = await fetch(url);

        const data = await response.json()
        
        setCompanies(data)
    }
    catch (err){
        console.log(err)
        console.log("this is bad")
    }
    }
       
    useEffect(()=> {
        fetchCompanies();
    }, [])

    return companies
}

export default useCompanyData