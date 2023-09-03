import React from "react";
import Box from "@mui/material/Box";
import styles from "../LawClients/LawClients.module.css";

const CardUser = ({ data, index }) => {
  return (
    <Box key={index}>
      {index === 1 ? (
          <Box className={styles.card2}>
          <Box className={styles.headertitle}>
            <img className={styles.img1} src={data.profile} alt="img1" />
          </Box>
          <p className={styles.myPStyle1}>{data.firstName}</p>
          <p className={styles.myPStyle2}>{data.position}</p>
          <p className={styles.myPStyle3}>{data.info}</p>
        </Box>
      ) : (
        <Box className={styles.card1}>
          <Box className={styles.headertitle}>
            <img className={styles.img1} src={data.profile} alt="img1" />
          </Box>
          <p className={styles.myPStyle1}>{data.firstName}</p>
          <p className={styles.myPStyle2}>{data.position}</p>
          <p className={styles.myPStyle3}>{data.info}</p>
        </Box>
      )}
    
    </Box>
  );
};

export default CardUser;
