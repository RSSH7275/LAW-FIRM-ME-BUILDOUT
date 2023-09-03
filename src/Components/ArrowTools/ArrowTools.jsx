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
import Ellipse from "../../assets/Ellipse14.png";
import LeftDown from "../../assets/Down1.png";

const ArrowTools = () => {
  return (
    <Box className={styles.mainContainer}>
      <img className={styles.ellipClass} src={Ellipse} alt="Ellpse1" />
      <img className={styles.arrowClass} src={LeftDown} alt="LeftDown1" />
    </Box>
  );
};

export default ArrowTools;
