import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors()); // Enable CORS

// Connect to MongoDB
const uri = 'mongodb+srv://kamsuvenu2004:Mongodb123@cluster0.zluijik.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a simple schema for job listings
const jobSchema = new mongoose.Schema({
 id: Number,
 title: String,
 deadline: Date,
 status: String,
 description: String,
});

// Create a model from the schema
const Job = mongoose.model('Job', jobSchema);

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

// Insert jobs into the database
mongoose.connection.once('open', () => {
 Job.insertMany(jobs)
    .then(jobs => console.log('Jobs inserted:', jobs))
    .catch(err => console.error('Error inserting jobs:', err));
});

// Sample route to fetch all jobs
app.get('/jobs', (req, res) => {
 Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Start the server
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
