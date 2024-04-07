// import React from 'react';
import { useNavigate } from 'react-router-dom';
import Jobdetails from './Jobdetails';

function Job({job}) {
    const navigate = useNavigate();

 const handlebutton = () => {
    navigate(`/Jobdetails/${job.id}`)
 };
  
  return (
    <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.deadline}</p>
            <p className="text-gray-500">{job.description}</p>
            <button onClick={handlebutton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Details
            </button>
          </div>
    </div>
  );
}

export default Job
