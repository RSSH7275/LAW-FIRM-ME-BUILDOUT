import React from "react";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { userData } from "../mockData/mock";
import styles from "./LawClients.module.css";
import Carousel from "../Carousel/Carousel";
import ArrowTools from "../ArrowTools/ArrowTools";
import ArrowTools1 from "../ArrowTools/ArrowTools1";
import CardUser from "../CardUser/CardUser";


const LawClients = () => {
  const myStyler = {
    color: "var(--Pure-White, #FFF)",
    fontFamily: "Inter",
    fontSize: "54px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "143.023%",
    width: '30vw',
  };

  let data = userData;
  return (
    <Box className={styles.parentContainer}>
      <Box className={styles.childClass1}>
        <Box><p style={myStyler}>What says our happy Clients</p></Box>
        <Box className={styles.arrowStyler}>
          {/* <ArrowTools/>
        <ArrowTools1/> */}
        </Box>
      </Box>
      <Box className={styles.childClass2}>
        <Carousel
          data={data}
          renderUserCard={(data, index) => 
            <CardUser data={data} index={index} />
          }
        />
      </Box>
    </Box>
  );
};

export default LawClients;

{
  /* <Box className={styles.childClass2}>  
{
  
 data.map((item,index)=>{
   const {profile,firstName,position,info}=item
   if(index===1){
     return <Box className={styles.card2}>
     
     <Box className={styles.headertitle}>
     <img className={styles.img1} src={profile} alt="img1" />
     </Box>
     <p className={styles.myPStyle1}>{firstName}</p>
     <p className={styles.myPStyle2}>{position}</p>
     <p className={styles.myPStyle3}>{info}</p>
     </Box>
    }
    return <Box className={styles.card1}>
    
    <Box className={styles.headertitle}>
      <img className={styles.img1} src={profile} alt="img1" />
    </Box>
    <p className={styles.myPStyle1}>{firstName}</p>
    <p className={styles.myPStyle2}>{position}</p>
    <p className={styles.myPStyle3}>{info}</p>
      
  </Box>
}) 

}
</Box> */
}
