import Navbar from "./Navbar";
import Search from "./Search";
import JobList from "./JobList";
// import jobs from "./data/jobs.json"
import { useEffect, useState } from 'react';


function App() {

const [jobs, setJobs] = useState([]);
const url = "http://localhost:8080/jobs"

useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };

    fetchJobs(); // Call it once on component mount
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <JobList jobs = {jobs}/>
      
    </div>
  );
}

export default App;
