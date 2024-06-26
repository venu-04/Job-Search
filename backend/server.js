import express from 'express';
import cors from 'cors';

// Initialize Express
const app = express();
const router = express.Router();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // Enable CORS

let appliedJobs = [];

router.post('/job-application', async (req, res) => {
  try {
    
    const { email, mobileNumber, resume,job} = req.body;
    console.log(email)

    // Save job application details to the database or perform any other necessary operations
    // For this example, we'll just push the details to the appliedJobs array
    appliedJobs.push({ email, mobileNumber, resume ,job});

    console.log('Job application received:', { email, mobileNumber, resume,job });

    res.status(201).json({ message: 'Job application received successfully' });
  } catch (error) {
    console.error('Error submitting job application:', error);
    res.status(500).json({ message: 'Failed to submit job application. Please try again later.' });
  }
});

router.get('/applied-jobs', async (req, res) => {
  try {
    res.json(appliedJobs);
  } catch (error) {
    console.error('Error fetching applied jobs:', error);
    res.status(500).json({ message: 'Failed to fetch applied jobs. Please try again later.' });
  }
});

// Mount the router at the base path
app.use('/', router);

const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      deadline: new Date("2025-02-20"),
      status: "active",
      description:
        "We are seeking a passionate Software Engineer to join our dynamic team. The ideal candidate will have a strong background in software development, with a focus on web applications. Responsibilities include designing, coding, and debugging software applications, collaborating with cross-functional teams, and ensuring the delivery of high-quality software products. Proficiency in JavaScript, React, and Node.js is required. Experience with Agile methodologies and a commitment to continuous learning are highly valued.",
    },
    {
      id: 2,
      title: "Marketing Manager",
      deadline: new Date("2025-02-20"),
      status: "ongoing",
      description:
        "As a Marketing Manager, you will be responsible for developing and implementing marketing strategies to achieve our company's goals. This includes managing a team of marketers, overseeing the creation of marketing campaigns, and analyzing marketing performance. You will need to have a strong understanding of digital marketing, SEO, and social media marketing. Experience in managing a team and a track record of successful marketing campaigns are essential.",
    },
    {
      id: 3,
      title: "Data Analyst",
      deadline:new Date("2025-02-20"),
      status: "archive",
      description:
        "We are looking for a Data Analyst with strong analytical skills and experience in data analysis and interpretation. The ideal candidate will be responsible for analyzing data to provide actionable insights, creating reports, and presenting findings to stakeholders. Proficiency in SQL, Python, and data visualization tools is required. Experience with data mining, statistical analysis, and a passion for data-driven decision making are highly valued.",
    },
    // Add more jobs as needed
  ];


// Sample route to fetch all jobs
app.get('/jobs', (req, res) => {
 res.json(jobs);
});

app.get('/jobs/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find(job => job.id === jobId);
  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }
   res.json(job);
});
// Start the server
const port = 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
