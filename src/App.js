import Navbar from "./Navbar";
import Search from "./Search";
import JobCard from "./JobCard";
import jobs from "./data/jobs.json"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      {jobs.map((job) => JobCard(job))}
      
    </div>
  );
}

export default App;
