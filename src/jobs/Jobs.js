import Search from "../Search"
import PageNav from "../shared/PageNav";
import useJobData from "./useJobData";

const Jobs = () => {

    const jobs = useJobData();

    if (!jobs) {
        return <p>Loading jobs...</p>;
    }

    return (
        <>
            <Search/>
            <PageNav jobs={jobs}/>
        </>
    );
}
 
export default Jobs;