import React from 'react'
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import Logo from "../../assets/LawFirmLogo.png";
import styles from '../Footer/Footer.module.css';
import Insta from '../../assets/X.svg';
import FaceBook from '../../assets/FaceBook.svg';
import X from '../../assets/X.svg';
import Pin from '../../assets/Pin.svg';



const Footer = () => {
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
        <div className={styles.mediaStyling}>
          <img src={Insta} alt="insta" />
          <img src={FaceBook} alt="fb" />
          <img src={X} alt="x" />
          <img src={Pin} alt="pintrest" />
        </div>
      </div>
         
       <div className={styles.copyStyling}>
        <p>© 2020 Acme. All rig</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
       </div>

    </div>
  )
}

export default Footer;