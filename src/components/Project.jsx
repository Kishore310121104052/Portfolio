import React from 'react';
import { FaArrowLeft, FaNodeJs, FaReact, FaDatabase, FaPython, FaCss3Alt, FaHtml5, FaChartBar } from 'react-icons/fa';
import { SiMongodb, SiFlask, SiJavascript, SiDjango, SiKeras, SiPandas, SiSqlite } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Project.css';
import { FaProjectDiagram } from 'react-icons/fa'; // Importing the project icon

const Projects = () => {
    return (
        <div className="projects-page">
            <header className="projects-header">
                <Link to="/profile">
                    <FaArrowLeft className="back-arrow" />
                </Link>
                <h1>
                    <FaProjectDiagram style={{ marginRight: '10px' }} /> My Projects {/* Adding the icon here */}
                </h1>
                <p>Click on any project to learn more</p>
            </header>

            <div className="projects-grid">
                {/* Project 1 */}
                <div className="project-card" onClick={() => window.open('https://github.com/Kishore310121104052/Ride-Share-Project.git', '_blank')}>
                    <FaNodeJs className="project-icon" />
                    <h2>Ride Share</h2>
                    <p>
                        The RideShare Project is a full-stack application that connects drivers and passengers, enabling seamless ride booking and management.
                    </p>
                    <div className="tech-stack">
                        <span><FaNodeJs /> Node.js</span>
                        <span><FaReact /> React.js</span>
                        <span><SiMongodb /> MongoDB</span>
                    </div>
                    <button className="project-button">View Project</button>
                </div>

                {/* Project 2 */}
                <div className="project-card" onClick={() => window.open('https://github.com/Kishore310121104052/password.git', '_blank')}>
                    <FaCss3Alt className="project-icon" />
                    <h2>Password Generator</h2>
                    <p>
                        The Password Generator is a web application that creates secure, customizable passwords based on user-defined criteria.
                    </p>
                    <div className="tech-stack">
                        <span><FaHtml5 /> HTML</span>
                        <span><FaCss3Alt /> CSS</span>
                        <span><SiJavascript /> JavaScript</span>
                    </div>
                    <button className="project-button">View Project</button>
                </div>

                {/* Project 3 */}
                <div className="project-card" onClick={() => window.open('https://github.com/Kishore310121104052/Smart-India-Hackathon-.git', '_blank')}>
                    <SiFlask className="project-icon" />
                    <h2>Smart India Hackathon</h2>
                    <p>
                        AI-Powered Student Assistance Chatbot that enhances educational support by providing guidance on courses and career options.
                    </p>
                    <div className="tech-stack">
                        <span><SiFlask /> Flask</span>
                        <span><FaReact /> React.js</span>
                        <span><SiMongodb /> MongoDB</span>
                    </div>
                    <button className="project-button">View Project</button>
                </div>

                {/* Project 4 */}
                <div className="project-card" onClick={() => window.open('https://github.com/Kishore310121104052/-IBM-Marginal-Workers.git', '_blank')}>
                    <FaPython className="project-icon" />
                    <h2>IBM Marginal Workers</h2>
                    <p>
                        Analyze and enhance the livelihoods of marginalized workers by leveraging data analytics and machine learning.
                    </p>
                    <div className="tech-stack">
                        <span><FaPython /> Python</span>
                        <span><SiPandas /> Pandas</span>
                        <span><SiKeras /> Keras</span>
                        <span><FaChartBar /> Matplotlib</span>
                        <span><SiDjango /> Django</span>
                        <span><SiSqlite /> SQLite</span>
                    </div>
                    <button className="project-button">View Project</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
