import React from "react";
import Box from "@mui/material/Box";
import styles from "./LawPractice.module.css";
import SkillImg1 from "../../assets/SkillImg1.png";
import SkillImg2 from "../../assets/SkillImg2.png";
import SkillImg3 from "../../assets/SkillImg3.png";
import SkillImg4 from "../../assets/SkillImg4.png";
import SkillImg5 from "../../assets/SkillImg5.png";
import SkillImg6 from "../../assets/SkillImg6.png";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";

const LawPractice = () => {
  const myImgStyle1 = {
    width: "752px",
    height: "342px",
    bordeRadius: "14px",
    backgroundColor:
      "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.60) 65%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
      filter: 'brightness(50%)',
    }; 

  const myImgStyle2 = {
    width: "358px",
    height: "342px",
    borderRadius: "14px",
    backgroundColor:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 83.33%, rgba(0, 0, 0, 0.70) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
    filter: 'brightness(50%)',
    };



  return (
    <Box className={styles.mainContainer}>
      <Box>
        <p className={styles.chooseClass}>Area of Practices</p>
      </Box>
      <Box className={styles.box2}>
        <Grid item xs={12} style={{ display:'flex' ,columnGap: '22px', paddingBottom: '15px'}}>
          <Box item md={9} className={styles.myBoxingStyle}>
            <img style={myImgStyle1} src={SkillImg1} alt="BUSINESS_LAW" />
            <p className={styles.styleMyText}>BUSINESS LAW</p>
          </Box>
          <Box item md={3} className={styles.myBoxingStyle}>
            <img style={myImgStyle2} src={SkillImg2} alt="Partnership_LAW" />
            <p className={styles.styleMyText1}>Partnership LAW</p>
          </Box>
        </Grid>
        <Grid item xs={12} style={{ display:'flex' ,columnGap: '22px', paddingTop: '15px',paddingBottom: '15px'}}>
          <Box item md={3} className={styles.myBoxingStyle}>
            <img style={myImgStyle2} src={SkillImg3} alt="REAL_ESTATE_LAW" />
            <p className={styles.styleMyText1}>REAL ESTATE LAW</p>
          </Box>
          <Box item md={9} className={styles.myBoxingStyle}>
            <img style={myImgStyle1} src={SkillImg4} alt="BUSINESS_LAW" />
            <p className={styles.styleMyText}>BUSINESS LAW</p>
          </Box>
        </Grid>
        <Grid item xs={12} style={{ display:'flex' ,columnGap: '22px',  paddingTop: '15px',paddingBottom: '15px',}}>
          <Box item md={9} className={styles.myBoxingStyle}>
            <img style={myImgStyle1} src={SkillImg5} alt="LANDLORD_DISPUTES" />
            <p className={styles.styleMyText}>LANDLORD DISPUTES</p>
          </Box>
          <Box item md={3} className={styles.myBoxingStyle}>
            <img style={myImgStyle2} src={SkillImg6} alt="ELDER_ABUSE" />
            <p className={styles.styleMyText1}>ELDER ABUSE</p>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default LawPractice;
