import { useState } from "react"
import useJobData from "../jobs/useJobData"
import JobList from "../jobs/JobList"

const PageNav = () => {

    const jobs = useJobData()

    const [page, setPage] = useState(1)
    const [itemsPerPage, setNumItems] = useState(5)

    if (!jobs) {
        return <p>Loading jobs...</p>;
    }

    const lastPageNumber = jobs.length / itemsPerPage
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

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

export default PageNav


