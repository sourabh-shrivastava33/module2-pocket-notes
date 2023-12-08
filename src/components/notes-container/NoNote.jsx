import React from "react";
import banner from "../../assets/images/banner.png";
import lock from "../../assets/icons/lock.svg";
import styles from "./NoNote.module.css";
const NoNote = () => {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.bannerContainer}>
        <img src={banner} alt="homepage banner" className={styles.banner} />
      </div>
      <h2 className={styles.title}>Pocket Notes</h2>
      <p className={styles.para}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <p className={styles.encrytpMessage}>
        <img src={lock} alt="lock" /> <span>end-to-end encrypted</span>
      </p>
    </div>
  );
};

export default NoNote;
