// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from './components/ProfileCard'; 
import ProfilePage from './components/ProfilePage'; 
import Education from './components/Education'; 
import Experience from "./components/Experience";
import Project from "./components/Project";
import Extracurriculars from "./components/Extracurriculars";
import Feedback from "./components/Feedback"; // Import Feedback Component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileCard />} /> {/* Home page route */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route */}
        <Route path="/education" element={<Education />} /> {/* Education page route */}
        <Route path="/experience" element={<Experience />} /> {/* Experience page route */}
        <Route path="/project" element={<Project />} /> {/* Project page route */}
        <Route path="/extracurriculars" element={<Extracurriculars />} /> {/* Extracurriculars page route */}
        <Route path="/feedback" element={<Feedback />} /> {/* Feedback page route */}
      </Routes>
    </Router>
  );
}

export default App;
