import React from "react";
import styles from "./LawIntro.module.css";

const LawIntro = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.child1}>
        <span className={styles.introStyle}>Let’s Introduce Ourself</span>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.child2}>
        <p className={styles.headingStyle}>Criminal Lawyer</p>
        <p className={styles.paraStyle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default LawIntro;
