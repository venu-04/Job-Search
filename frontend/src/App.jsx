// src/App.js
import {useEffect,useState}from 'react';
import  axios  from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchJobs from './components/SearchJobs';
import SavedJobs from './components/SavedJobs';
import AppliedJobs from './components/AppliedJobs';
import Profile from './components/Profile';
import FeaturedJobs from './components/FeaturedJobs';
import JobCategories from './components/JobCategories';
import Dashboard from './components/Dashboard';
import Jobdetails from './components/Jobdetails';
import JobApplicationForm from './components/JobApplicationForm';




function App() {
  const [jobs,setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobs')
    .then(response =>{
      setJobs(response.data);
    })
    .catch(error =>{
      console.log("there is an error", error)
    })
  },[]);
 
 return (
    <Router>

      <Routes>
        <Route path="/" element={<Home jobs={jobs} />}/>
        <Route path="/search" element={<SearchJobs />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/applied" element={<AppliedJobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/featured" element={<FeaturedJobs />} />
        <Route path="/categories" element={<JobCategories />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Jobdetails" element={<Jobdetails jobs={jobs}/>} />
        <Route path="/JobApplicationForm" element={<JobApplicationForm/>} />
        
      
      </Routes>
     
    </Router>
 );
}

export default App;
