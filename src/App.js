import Navbar from "./Navbar";
// import jobs from "./data/jobs.json"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./Navbar";
import Home from "./Home"
import Jobs from "./Jobs";


function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>

      {/* <Search/>
      <JobList jobs = {jobs}/> */}
      
      </div>
    </Router>
  
  );
}

export default App;
