import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Twittr.</div>
      <div className={styles.tagline}>The Determining Ratio </div>
    </div>
  );
};

export default Navbar;
