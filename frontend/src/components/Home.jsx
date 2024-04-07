import { Link } from 'react-router-dom';
// import Jobdetails from './Jobdetails';
import Job from './Job';
import { useState } from 'react';



function Home({jobs}) {
 
 const [searchitem,setSearchitem] = useState('');
 const [filteredjobs,setFilteredjobs] = useState([]);
 function handleSearch(){
  const filteredres =jobs.filter(job =>{
    const title = job.title.toLowerCase();
    const search = searchitem.toLowerCase();

    return title.includes(search);
  });
   console.log("searching for:",searchitem);
   setFilteredjobs(filteredres);
    

 };

 return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center bg-blue-500 p-4">
        <div className="flex items-center space-x-4">
          <Link to="/Dashboard" className="text-white">Dashboard</Link>
          <Link to="/profile" className="text-white">Profile</Link>
          <Link to="/Saved" className='text-white'>Joblisting</Link>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search jobs..."
            onChange={(e) => setSearchitem(e.target.value)}
            className="rounded-lg p-2 border-2 border-gray-300"
          />
          <button onClick={handleSearch} className="bg-white text-blue-500 rounded-lg p-2">Search</button>
        </div>
      </div>
      <div className="flex-grow overflow-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
        {/* List of available jobs goes here */}
        {
          filteredjobs.length > 0 ? (
            filteredjobs.map((job) => (
              <Job key={job.id} job={job} />
            ))
          ) : (
            jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))
          )
        }
          {/* Repeat the above div for each job */}
        </div>
      </div>
 );
}

export default Home;
