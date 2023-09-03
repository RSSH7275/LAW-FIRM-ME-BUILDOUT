import React from 'react';
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import styles from './SubscLetter.module.css';

const mypStyles={
width: '40vw',
marginLeft:'auto',
marginRight:'auto',    
color: '#FFF',
textAlign: 'center',
fontFamily: 'Helvetica Now Display',
fontSize: '52px',
fontStyle: 'normal',
fontWeight: 600,
lineHeight: '137%', /* 75.35px */
}

const myButtonStyle={
    color: '#000',
    borderRadius: '0px 8px 8px 0px',
    background: '#E3B748',
    padding: '12px',
}


const SubscLetter = () => {
  return (
    <Box className={styles.parent_Container}>
    <Box className={styles.child2}>
     <p style={mypStyles}>Subscribe Our Newsletter</p>
    </Box>

    <Box className={styles.child1}>
     <Box><input placeholder='Name :' className={styles.customInput}/></Box>
     <Box><input placeholder='Enter your Email' className={styles.customInput}/></Box>
     <Button style={myButtonStyle}>SEND</Button>
    </Box>

    </Box>
  )
}

export default SubscLetter