import { useState } from "react"
import JobList from "../jobs/JobList"
import CompanyList from "../companies/CompanyList"

const PageNav = ({jobs, companies}) => {

    const [page, setPage] = useState(1)
    const [itemsPerPage, setNumItems] = useState(5)
    
    const lastPageNumber = jobs?jobs.length / itemsPerPage:companies.length /itemsPerPage
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = jobs?jobs.slice(indexOfFirstItem, indexOfLastItem):companies.slice(indexOfFirstItem, indexOfLastItem);

    if (jobs){
        return(
            <div className="container">
                <div className="job-list-container">
                    <JobList jobs={currentItems}/>
                </div>
                <div className="page-nav">
                    {page > 1?<button onClick={() => setPage(page-1)}>Left</button>: ""}
                    <button onClick={() => setPage(page)}>{page}</button>
                    {page + 1 <= lastPageNumber?<button onClick={() => setPage(page + 1)}>{page +1}</button>:""}
                    {page + 2 <= lastPageNumber?<button onClick={() => setPage(page + 2)}>{page +2}</button>:""}
                    {page< lastPageNumber?<button onClick={() => setPage(page+1)}>Right</button>:""}
                </div>
            </div>
        )
    }

    if (companies){
        return (
            <div className="container">
                <div className="company-list-container">
                    <CompanyList companies={currentItems}/>
                </div>
                <div className="page-nav">
                    {page > 1?<button onClick={() => setPage(page-1)}>Left</button>: ""}
                    <button onClick={() => setPage(page)}>{page}</button>
                    {page + 1 <= lastPageNumber?<button onClick={() => setPage(page + 1)}>{page +1}</button>:""}
                    {page + 2 <= lastPageNumber?<button onClick={() => setPage(page + 2)}>{page +2}</button>:""}
                    {page< lastPageNumber?<button onClick={() => setPage(page+1)}>Right</button>:""}
                </div>
            </div>
        )
    }
}

export default PageNav


