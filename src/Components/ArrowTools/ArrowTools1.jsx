import React from "react";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import styles from "./ArrowTools.module.css";
import Ellipse from "../../assets/Ellipse13.png";
import LeftDown from "../../assets/Down2.png";

const ArrowTools1 = () => {
  return (
    <Box className={styles.mainContainer1}>
      <img className={styles.ellipClass1} src={Ellipse} alt="Ellpse2" />

      <img className={styles.arrowClass1} src={LeftDown} alt="LeftDown2" />
    </Box>
  );
};

export default ArrowTools1;
