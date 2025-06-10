import Nav from './shared/Nav';
import CompanyJobs from './companies/CompanyJobs';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./Home"
import Jobs from "./jobs/Jobs";
import Companies from "./companies/Companies";
import Company from "./companies/Company"


function App() {

  return (
    <Router>
      <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:id/jobs" element={<Company/>}></Route>
      </Routes>
      
      </div>
    </Router>
  
  );
}

export default App;
