// import React from 'react';
import { useNavigate} from 'react-router-dom';


function Jobdetails({jobs}) {
    if (!jobs) {
        return <div>No job details available.</div>;
    }
    const navigate = useNavigate();
    const handleapply = () => {
        navigate('/JobApplicationForm');
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="p-8">
                   
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{jobs.title}</h1>
                    <h2 className="mt-2 text-gray-500">{jobs.deadline}</h2>
                    <h2 className="mt-2 text-gray-500">{jobs.description}</h2>
                    <button
                        onClick={handleapply}
                        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Easy Apply!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Jobdetails;
