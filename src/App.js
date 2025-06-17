import Nav from './shared/Nav';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./Home"
import Jobs from "./jobs/Jobs";
import Job from "./jobs/Job";
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
        <Route path="/jobs/:id" element={<Job />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:id/jobs" element={<Company/>}></Route>
      </Routes>

      
      </div>
    </Router>
  
  );
}

export default App;
