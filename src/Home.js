import Search from "./Search";
import JobList from "./jobs/JobList";
// import jobs from "./data/jobs.json"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Home = () => {

    return ( 
        <>
            <Search/>
            <JobList/>
        </>
    );
}
 
export default Home;