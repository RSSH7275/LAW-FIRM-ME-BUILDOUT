import React, { useState, useEffect } from "react";
import styles from "./LawFirm.module.css";
import Logo from "../../assets/LawFirmLogo.png";
import HeroImg from "../HeroImg/HeroImg";

const LawFirm = () => {
  return (
    <div className={styles.lawBody}>
      <div className={styles.navBarStyling}>
        <div>
          <img src={Logo} alt="logo" sx={{ width: "144px", height: "100%" }} />
        </div>
        <div className={styles.allButtonStyle}>
          <h4>Home</h4>
          <h4>Attorneys</h4>
          <h4>Practice Areas</h4>
          <h4>About Us</h4>
        </div>
        <div>
          <button className={styles.buttonStyle}>Contact Now</button>
        </div>
      </div>
      <HeroImg/>
    </div>
  );
};

export default LawFirm;
