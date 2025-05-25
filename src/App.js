import Navbar from "./Navbar";
import Search from "./Search";
import JobList from "./JobList";
import jobs from "./data/jobs.json"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <JobList jobs = {jobs}/>
      
    </div>
  );
}

export default App;
