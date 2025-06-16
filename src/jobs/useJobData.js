import { useState, useEffect} from "react";


const useJobData = (jobId) => {

    const [data, setData] = useState(null);

    const url = jobId != null ?`http://localhost:8080/jobs/${jobId}`: 'http://localhost:8080/jobs'

    useEffect(() => {
        const fetchJobData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching jobs:", error.message);
        }
        };

        fetchJobData(); // Call it once on component mount
    }, [url]);


    return data;
}

export default useJobData