import { useState } from "react"
import useJobData from "../jobs/useJobData"
import JobCard from "../jobs/JobCard"

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
                {
                jobs.slice(indexOfFirstItem, indexOfLastItem).map((job) => (
                    <JobCard job = {job} key = {job.jobId}/>
                ))
                }
            </div>
        
            <h2>This is page: {page}</h2>

            {page > 1?<button onClick={() => setPage(page-1)}>Left</button>: ""}
            <button onClick={() => setPage(page)}>{page}</button>
            {page + 1 <= lastPageNumber?<button onClick={() => setPage(page + 1)}>{page +1}</button>:""}
            {page + 2 <= lastPageNumber?<button onClick={() => setPage(page + 2)}>{page +2}</button>:""}
            {page< lastPageNumber?<button onClick={() => setPage(page+1)}>Right</button>:""}
        </div>
    )
}

export default PageNav


