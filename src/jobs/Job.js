import { useParams} from "react-router-dom"
import useJobData from "./useJobData"

const Job = () => {
    const {id} = useParams()

    const jobData = useJobData(id)

    if (!jobData) {
    return <p>Loading job data...</p>;
    }

    return (
        <>
        <h1>{jobData.jobTitle}</h1>
        <h2>{jobData.companyName}</h2>
        <h2>Full Job Description:</h2>
        <p>{jobData.jobDescription}</p>
        </>
    )
}

export default Job