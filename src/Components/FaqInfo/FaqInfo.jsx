import React from "react";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import styles from "./FaqInfo.module.css";
// import Arrow from '../../assets/Ellipse17.png'
import FooterAccordion from "../AccordFooter/AccordFooter";

const FaqInfo = () => {
 const myStyle={
color: 'var(--Pure-White, #FFF)',
fontFamily: 'Inter',
fontSize: '18px',
fontStyle: 'normal',
fontWeight: 500,
lineHeight: '162.523%',
opacity:'0.3', 
paddingRight:'106px',
 }

 const myFaq={
color: 'var(--Pure-White, #FFF)',
fontFamily: 'Inter',
fontSize: '54px',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: '138.023%', /* 74.532px */
 }


  return (
    <Box className={styles.mainContainer}>
      <Box>
        <p style={myFaq}>FAQ</p>
      </Box>

      <Grid container className={styles.accordionStyling} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
        <Grid className={styles.info} item xs={12} sm={12} md={6}>
          <p style={myStyle}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </Grid>

        <Grid className={styles.accordStyling} item xs={12} sm={12} md={6}><FooterAccordion/></Grid>
      </Grid>
    </Box>
  );
};

export default FaqInfo;
