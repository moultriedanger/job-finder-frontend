import Navbar from "./Navbar";
// import jobs from "./data/jobs.json"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home"
import Jobs from "./Jobs";
import Companies from "./Companies";


function App() {

  return (
    <Router>
      <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
      
      </div>
    </Router>
  
  );
}

export default App;
