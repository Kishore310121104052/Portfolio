import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [notRobot, setNotRobot] = useState(false); // Simulated checkbox for "I'm not a robot"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!notRobot) {
      alert("Please confirm that you're not a robot!");
      return;
    }

    // Show the fake success message
    alert("Message sent successfully!");
    
    // Optionally clear the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setNotRobot(false); // Reset the checkbox state
  };

  return (
    <div className="feedback-container">
      <h1>Thank You for Visiting My Page!</h1>
      <p>
        I appreciate your time and interest in exploring my journey and activities. 
        If you have any questions, feedback, or would like to connect further, 
        please feel free to reach out!
      </p>

      <h2>Get in Touch!</h2>
      <p>If you want to contact me, fill out the following form and I will do my best to get back to you as soon as I can!</p>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
          required
        />

        <div className="recaptcha">
          <input
            type="checkbox"
            name="notRobot"
            checked={notRobot}
            onChange={() => setNotRobot(!notRobot)}
            required
          />
          <label htmlFor="notRobot">I'm not a robot</label>
        </div>

        <div className="privacy-links">
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            privacy
          </a> 
          - 
          <a 
            href="https://policies.google.com/terms" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Terms
          </a>
        </div>

        <button type="submit" className="submit-button" disabled={!notRobot}>
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Feedback;
