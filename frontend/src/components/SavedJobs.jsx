import  { useEffect, useState } from 'react';
import axios from 'axios';

function JobListings() {
 const [jobs, setJobs] = useState([]);

 useEffect(() => {
    axios.get('http://localhost:5000/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
 }, []);

 return (
    <div>
      {jobs.map(job => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          {/* Render other job details here */}
        </div>
      ))}
    </div>
 );
}

export default JobListings;
