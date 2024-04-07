import  { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function JobApplicationForm() {
  const navigate = useNavigate();
 const [email, setEmail] = useState('');
 const [mobileNumber, setMobileNumber] = useState('');
 const [resume, setResume] = useState(null);

 const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ email, mobileNumber, resume });
    navigate('/applied');

 };

 const handleFileChange = (event) => {
    setResume(event.target.files[0]);
 };

 return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input type="tel" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume</label>
          <input type="file" id="resume" onChange={handleFileChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
 );
}

export default JobApplicationForm;
