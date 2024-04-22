import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Dashboard() {
 const location = useLocation();
 const [appliedJobs, setAppliedJobs] = useState([]);
 const { jobTitle } = location.state || {};

 useEffect(() => {
    if (jobTitle) {
      setAppliedJobs(prevJobs => [...prevJobs, jobTitle]);
    }
 }, [jobTitle]);

 return (
    <div className="flex flex-wrap justify-center items-start gap-4 p-4">
      <div className="bg-white rounded-lg shadow-lg w-64">
        <h2 className="text-2xl font-semibold p-4 border-b border-gray-200">Wishlist</h2>
        <ul className="divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 1</li>
          <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 2</li>
          {/* Add more jobs as needed */}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg w-64">
        <h2 className="text-2xl font-semibold p-4 border-b border-gray-200">Applied</h2>
        <ul className="divide-y divide-gray-200">
          {
            appliedJobs.map((job, index) => (
              <li key={index} className="p-4 hover:bg-gray-100 transition-colors duration-200">{job}</li>
            ))
          }
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg w-64">
        <h2 className="text-2xl font-semibold p-4 border-b border-gray-200">Interview</h2>
        <ul className="divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 5</li>
          <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 6</li>
          {/* Add more jobs as needed */}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg w-64">
        <h2 className="text-2xl font-semibold p-4 border-b border-gray-200">Offer</h2>
        <ul className="divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 7</li>
          <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 8</li>
          {/* Add more jobs as needed */}
        </ul>
      </div>
    </div>
 );
}

export default Dashboard;
