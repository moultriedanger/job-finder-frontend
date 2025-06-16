import { useParams} from "react-router-dom"
import useJobData from "./useJobData"
import { useEffect } from "react"

const Job = () => {
    const {id} = useParams()

    const jobData = useJobData(id)

    
    if (!jobData) {
    return <p>Loading job data...</p>;
    }

    return (
        <>
        <h1>This is job: {id}</h1>
        <p>{jobData.jobDescription}</p>
        </>
    )
}

export default Job