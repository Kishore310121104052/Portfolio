import React from 'react';
import './Experience.css';
import { FaArrowLeft, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className="experience-page">
      <header className="experience-header">
        <Link to="/profile">
          <FaArrowLeft className="back-arrow" />
        </Link>
        <FaBriefcase className="book-icon" />
        <h1>My Experience</h1>
      </header>

      <div className="timeline">
        {/* First Experience Box */}
        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>Adventure Learning</h2>
            <p>I am Kishore P, a student of Computer Science Engineering at Anand Institute of Higher Technology. I completed an internship in Full Stack Development at Adventure Technology Solutions Pvt Ltd from 06/07/2024 to 25/08/2024.</p>
          </div>
        </div>

        {/* Other Experience Boxes */}
        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>MongoDB (Node.js)</h2>
            <p>Congratulations to Kishore P for successfully completing the MongoDB Node.js Developer Path for SmartBridge on August 15, 2024. This certification, introduced through my college as part of the Naan Mudhalvan initiative, has equipped me with essential skills in MongoDB and Node.js.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>MongoDB (Students)</h2>
            <p>Congratulations to Kishore P for successfully completing the Introduction to MongoDB (For Students) course on August 17, 2024. This course has provided me with a solid foundation in MongoDB, enabling me to understand its capabilities and applications.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>Certification Exam Experience</h2>
            <p>On September 15, 2024, I participated in the MongoDB Associate Developer Java Certification Exam, where I had the opportunity to assess my knowledge and skills in MongoDB. Although I did not pass the exam, this experience provided me with valuable insights.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>cognitiveclass.ai</h2>
            <p>I am pleased to announce that I successfully completed the SQL and Relational Databases 101 course on cognitiveclass.ai, powered by IBM Developer Skills Network, on September 6, 2024.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>Achievement in MongoDB Java Developer Path</h2>
            <p>I have successfully completed the MongoDB Java Developer Path on September 14, 2024, as part of my college's Naan Mudhalvan initiative.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>RideShare Application – Hexaware Hackathon Project</h2>
            <p>As part of the Hexaware Hackathon, I developed a RideShare Application aimed at simplifying transportation by connecting passengers with drivers.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>Password Generator Internship Project</h2>
            <p>I developed a Password Generator for my Summer Internship Project in Full-Stack Development at Adventure Learning/AIHT.</p>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="experience-box">
            <h2>Smart India Hackathon 2024</h2>
            <p>As part of the Smart India Hackathon 2024, my team and I developed an AI-powered Career Counselling Platform to guide students in making informed career choices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;