// src/components/Extracurriculars.jsx
import React from "react";
import "./Extracurriculars.css"; // Import the associated CSS file for styling
import uiuxImage from "../assets/Screenshot_18.png"; // Update to assets folder
import joggingImage from "../assets/jogging_image.jpg"; // Updated name
import symposiumImage from "../assets/symposium_image.jpg"; // Updated name
import { FaArrowLeft, FaBasketballBall } from 'react-icons/fa'; // Imported basketball icon and back arrow
import { Link } from 'react-router-dom'; // Assuming routing is used

const Extracurriculars = () => {
    return (
        <div className="extracurriculars-container">
            {/* Header Section */}
            <div className="logo-container">
                <header className="extracurriculars-header">
                    <Link to="/profile">
                        <FaArrowLeft className="back-arrow" /> {/* Back Arrow */}
                    </Link>
                    <h1>
                        <FaBasketballBall className="extracurriculars-logo" /> {/* Basketball Logo */}
                        My Extracurriculars
                    </h1>
                </header>  
            </div>

            {/* Content Section */}
            <div className="extracurriculars-content">
                {/* UI/UX Design Section */}
                <div className="section">
                    <img src={uiuxImage} alt="UI/UX Design" className="section-image" />
                    <div className="section-text">
                        <h2>I Love UI/UX Design</h2>
                        <p>
                            This photo captures my passion for UI/UX design, where I immerse myself 
                            in creating user-friendly and visually appealing interfaces. Using Figma 
                            as my primary tool, I explore innovative design solutions that enhance user experiences. 
                            My dedication to understanding user needs drives me to craft intuitive designs that 
                            not only look great but also provide seamless interactions.
                        </p>
                    </div>
                </div>

                {/* Early Morning Jog Section */}
                <div className="section">
                    <img src={joggingImage} alt="Jog by the Beach" className="section-image" />
                    <div className="section-text">
                        <h2>Early Morning Jog by the Beach</h2>
                        <p>
                            This photo captures my early morning routine of jogging along the serene beachside at 6 AM. 
                            The tranquil waves and soft morning light create the perfect atmosphere for reflection and rejuvenation. 
                            Jogging not only keeps me physically fit but also clears my mind and sets a positive tone for the day ahead.
                        </p>
                    </div>
                </div>

                {/* Symposium Participation Section */}
                <div className="section">
                    <img src={symposiumImage} alt="Symposium" className="section-image" />
                    <div className="section-text">
                        <h2>2023 Symposium at Anand Institute of Higher Technology</h2>
                        <p>
                            This photo showcases my participation in the 2023 symposium at Anand Institute of Higher Technology, 
                            where I not only engaged in various activities but also took part in a Free Fire gaming competition. 
                            I am proud to have won a cash prize of ₹1500, highlighting my skills and strategic thinking in the game. 
                            This experience enriched my college journey, allowing me to connect with peers while enjoying a competitive 
                            and fun environment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feedback Button */}
            <Link to="/feedback" className="feedback-button">Feedback</Link> {/* Feedback Button */}
        </div>
    );
};

export default Extracurriculars;