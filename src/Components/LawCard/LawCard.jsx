import React from "react";
import Box from "@mui/material/Box";
import styles from "./LawCard.module.css";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import Img1 from "../../assets/Ellipse.png";
import Img2 from "../../assets/Gift.png";

const LawCard = () => {
  const myPStyle = {
    color: "var(--Pure-White, #FFF)",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    paddingTop: "25px",
  };

  const myPStyle1={
    color: 'var(--Pure-White, #FFF)',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '162.523%',
    paddingTop:'26px',
    opacity: 0.3,
  }

 const mybuttonStyle={
  
  }


  return (
    <Box className={styles.parentContainer} item xs={12}>
      <Box className={styles.divChild1}>
        <p className={styles.chooseClass}>Why Choose us?</p>
      </Box>

      <Box className={styles.divChild2}>
        <Box className={styles.card1}>
          <Box className={styles.headertitle}>
            <img className={styles.img1} src={Img1} alt="img1" />
            <img className={styles.img2} src={Img2} alt="img2" />
          </Box>
          <p style={myPStyle}>98% Success Rate</p>
          <p style={myPStyle1}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button sx={{marginTop:'22px', width: '121px', height: '43px',borderRadius: '24px', backgroundColor: '#E3B748',color:'#000',fontFamily:'Inter',fontSize:'14px',fontWeight:600}} variant="text">Read More</Button>
        </Box>

        <Box className={styles.card1}>
          {" "}
          <Box className={styles.headertitle}>
            <img className={styles.img1} src={Img1} alt="img3" />
            <img className={styles.img2} src={Img2} alt="img4" />
          </Box>
          <p style={myPStyle}>100% Success Rate</p>
          <p style={myPStyle1}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button sx={{marginTop:'22px', width: '121px', height: '43px',borderRadius: '24px', backgroundColor: '#E3B748',color:'#000',fontFamily:'Inter',fontSize:'14px',fontWeight:600}} variant="text">Read More</Button>
        </Box>

        <Box className={styles.card1}>
          {" "}
          <Box className={styles.headertitle}>
            <img className={styles.img1} src={Img1} alt="img5" />
            <img className={styles.img2} src={Img2} alt="img6" />
          </Box>
          <p style={myPStyle}>100% Success Rate</p>
          <p style={myPStyle1}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button sx={{marginTop:'22px', width: '121px', height: '43px',borderRadius: '24px', backgroundColor: '#E3B748',color:'#000',fontFamily:'Inter',fontSize:'14px',fontWeight:600}} variant="text">Read More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LawCard;
