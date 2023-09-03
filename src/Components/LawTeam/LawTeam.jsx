import React from "react";
import styles from "./LawTeam.module.css";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { teamMember } from "../mockData/mock";

const LawTeam = () => {
  //   console.log("team", teamMember);
  let data = teamMember;
  const myStyles = {
    width: "68px",
    height: "68px",
    borderRadius: "68px",
  };

  const myNameStyle = {
    color: "var(--Pure-White, #FFF)",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
  };
  const myNameStyle1 = {
    color: "var(--Text-Black, #373737)",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
  };

  const mycaseStyle = {
    color: "var(--Pure-White, #FFF)",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    opacity:'0.3',
  };
  const mycaseStyle1 = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    opacity:'0.3',
  };

  return (
    <Grid container className={styles.parent_Container} display='flex' flexDirection='column'>
      <Grid>
        <p className={styles.pTagStyle}>Our Team</p>
      </Grid>

      <Grid container style={{paddingTop:'105px', marginLeft: 'auto' , marginRight: 'auto', alignItems: 'baseline'}} rowSpacing={{ xs: 2, md: 5 }} columnSpacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((teamMember, index) => (
            <>
          { index===1? (<Grid key={index} container className={styles.profile_Styling1} item xs={12} md={4}>
            <Box>
              <img style={myStyles} src={teamMember.profile} alt="profile" />
            </Box>
            <Box className={styles.membInfoStyle}>
              <p style={myNameStyle1}>{teamMember.firstName}</p>
              <p style={mycaseStyle1}>{teamMember.case}</p>
            </Box>
          </Grid>):(<Grid key={index} container className={styles.profile_Styling} item xs={12} md={4}>
            <Box>
              <img style={myStyles} src={teamMember.profile} alt="profile" />
            </Box>
            <Box className={styles.membInfoStyle}>
              <p style={myNameStyle}>{teamMember.firstName}</p>
              <p style={mycaseStyle}>{teamMember.case}</p>
            </Box>
          </Grid>)}
            </>
        ))}
      </Grid>
    </Grid>
  );
};

export default LawTeam;
