import React from 'react';
import './Education.css'; // Link to the CSS file
import { FaArrowLeft, FaBook } from 'react-icons/fa'; // Icons for back and book
import { Link } from 'react-router-dom'; // Import Link for navigation

const Education = () => {
  return (
    <div className="education-page">
      {/* Header with back arrow and title */}
      <header className="education-header flex items-center">
        <Link to="/profile">
          <FaArrowLeft className="back-arrow text-gray-700" />
        </Link>
        <FaBook className="book-icon text-gray-700 mx-2" />
        <h1 className="text-3xl font-bold">My Education</h1>
      </header>

      {/* Timeline with dots and boxes */}
      <div className="timeline border-l-4 border-gray-700 pl-8 mt-8">
        
        {/* Education Block 1 */}
        <div className="education-item relative mb-10">
          
          <div className="education-box bg-white p-6 shadow-lg rounded-lg border-2 border-gray-300">
            <h2 className="text-xl font-bold">Anand Institute of Higher Technology</h2>
            <p className="text-gray-600">Bachelor's Degree | 2021-Present</p>
            <p><strong>Major:</strong> Computer Science Engineering</p>
            <p>
              I am currently pursuing a Bachelor's Degree in Computer Science Engineering at Anand Institute of Higher Technology. 
              My academic focus includes Web Development, Java Programming, Data Structures, and Artificial Intelligence. 
              I have experience with front-end technologies such as HTML, CSS, JavaScript, and back-end programming using Java. 
              I am also developing skills in Machine Learning and Mobile App Development.
            </p>
          </div>
        </div>

        {/* Education Block 2 */}
        <div className="education-item relative mb-10">
          <div className="education-box bg-white p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-xl font-bold">Chennai Higher Secondary School</h2>
            <p className="text-gray-600">High School Degree | 2018-2021</p>
            <p>
              During my school years, I pursued my education in Tamil medium, where I developed a strong love for the Tamil language. 
              Though I wasn’t a topper, I was an average student who actively participated in various school activities. 
              I had the opportunity to visit many interesting places, including the Railway Metro Station in 9th std, 
              and the Mudalai Pannai in Pondicherry, which sparked my curiosity about the world around me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;