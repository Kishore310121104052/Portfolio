import React from 'react';
import './ProfilePage.css'; // Add CSS for styling
import { FaLinkedin, FaGithub, FaBook, FaBriefcase, FaCode, FaBasketballBall } from 'react-icons/fa'; // Add icons for menu
import { Link } from 'react-router-dom'; // Import Link for navigation

const ProfilePage = () => {
  // Handler to download resume
  const downloadResume = () => {
    // This should be the URL to your resume file
    window.open('https://drive.google.com/file/d/1MkGzqgEXwYnr3VNi4-2wOCaAsvjzJis7/view?usp=drive_link', '_blank');
  };

  return (
    <div className="profile-page">
      {/* Top menu bar */}
      <nav className="top-menu">
        <ul>
          {/* Use Link for navigation to the Education page */}
          <li>
            <Link to="/education">
              <FaBook size={20} /> My Education
            </Link>
          </li>
          {/* Modify this to use Link for navigating to the Experience page */}
          <li>
            <Link to="/experience">
              <FaBriefcase size={20} /> My Experience
            </Link>
          </li>
          <li>
            <Link to="/project">
              <FaCode size={20} /> My Projects
            </Link>
          </li>
          {/* Link to the Extracurriculars page */}
          <li>
            <Link to="/extracurriculars">
              <FaBasketballBall size={20} /> My Extracurriculars
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main profile content */}
      <div className="profile-container">
        <div className="profile-details">
          <h2><strong>NAME</strong> : Kishore. P</h2>
          <h3><strong>PRONOUNS</strong> : He/Him/His</h3>
          <h3><strong>SCHOOL</strong> : Chennai Higher Secondary School</h3>
          <h3><strong>COLLEGE</strong> : Anand Institute of Higher Technology</h3>
          <h3><strong>AGE</strong> : 20 Years</h3>
          <h3><strong>HOMETOWN</strong> : Kadaladi</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/kishore-p-98a416323" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/Kishore310121104052/-IBM-Marginal-Workers.git" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </div>
        </div>
        <div className="profile-description">
          <p>
            I am currently pursuing a Bachelor of Engineering (B.E.) degree in Computer Science Engineering 
            at Anand Institute of Higher Technology. My journey in programming began early, and I have 
            developed proficiency in several languages, including HTML, CSS, JavaScript, and Java.
          </p>
          <p>
            In addition to my academic pursuits, I am actively engaged in projects and internships that 
            enhance my expertise in software engineering and web development. I thrive in collaborative 
            environments and enjoy contributing to innovative tech initiatives.
          </p>
          <p>
            Beyond academics, I participate in various extracurricular activities that encourage teamwork 
            and creativity. In my spare time, I enjoy exploring new technologies, playing music, and immersing 
            myself in the vibrant culture of Chennai.
          </p>
          <button className="resume-btn" onClick={downloadResume}>DOWNLOAD RESUME</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
