import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <div className={styles.heading}>Twittr.</div>
      </Link>
      <div className={styles.tagline}>The Determining Ratio </div>
    </div>
  );
};

export default Navbar;
