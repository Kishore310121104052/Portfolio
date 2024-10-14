import React from "react";
import styles from './ProfileCard.module.css';
import ProfilePage from "../components/ProfilePage";
import { Link } from "react-router-dom";
 // Import CSS module properly

const ProfileCard = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Hello, I Am Kishore!</h1>
        <p>Student, Developer And Friendly Guy</p>
        <Link to="/profile">
        <button className={styles.discoverBtn}>DISCOVER MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
