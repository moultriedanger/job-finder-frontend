import Nav from './shared/Nav';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./Home"
import Jobs from "./jobs/Jobs";
import Job from "./jobs/Job";
import Companies from "./companies/Companies";
import Company from "./companies/Company"
import UserLogIn from './signIn/UserLogIn';
import UserSignUp from './signIn/UserSignUp'
import UserProfile from './profile/UserProfile';


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
        <Route path="/signIn" element={<UserLogIn/>}></Route>
        <Route path="/signUp" element={<UserSignUp/>}></Route>

        <Route path="/myProfile" element={<UserProfile/>}></Route>
      </Routes>
      
      </div>
    </Router>
  
  );
}

export default App;
