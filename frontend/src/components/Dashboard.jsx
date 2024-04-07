function Dashboard() {
    return (
       <div className="flex flex-wrap justify-center items-start gap-4 p-4">
         <div className="bg-white rounded-lg shadow-md w-64">
           <h2 className="text-xl font-bold p-4">Wishlist</h2>
           {/* List of saved jobs */}
           <ul className="divide-y divide-gray-200">
             <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 1</li>
             <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 2</li>
             {/* Add more jobs as needed */}
           </ul>
         </div>
         <div className="bg-white rounded-lg shadow-md w-64">
           <h2 className="text-xl font-bold p-4">Applied</h2>
           {/* List of applied jobs */}
           <ul className="divide-y divide-gray-200">
             <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 3</li>
             <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 4</li>
             {/* Add more jobs as needed */}
           </ul>
         </div>
         <div className="bg-white rounded-lg shadow-md w-64">
           <h2 className="text-xl font-bold p-4">Interview</h2>
           {/* List of jobs called for interview */}
           <ul className="divide-y divide-gray-200">
             <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 5</li>
             <li className="p-4 hover:bg-gray-100 transition-colors duration-200">Job Title 6</li>
             {/* Add more jobs as needed */}
           </ul>
         </div>
         <div className="bg-white rounded-lg shadow-md w-64">
           <h2 className="text-xl font-bold p-4">Offer</h2>
           {/* List of jobs with offer letter */}
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
   