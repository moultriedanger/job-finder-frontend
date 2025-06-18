import Search from "../Search"
import PageNav from "../shared/PageNav";
import useJobData from "./useJobData";
import {useState} from "react"

const Jobs = () => {
    
    const [results, setResults] = useState([])

    const jobs = useJobData();

    if (!jobs) {
        return <p>Loading jobs...</p>;
    }

    // Show results if there are any, otherwise show all jobs
    const jobsToDisplay = results.length > 0 ? results : jobs;


    return (
        <>
            <Search setResults = {setResults}/>
            <PageNav jobs={jobsToDisplay}/>
        </>
    );
}
 
export default Jobs;