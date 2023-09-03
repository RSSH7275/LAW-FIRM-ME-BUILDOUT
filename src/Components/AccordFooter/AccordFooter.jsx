import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import {ReactComponent as Arrow} from '../../assets/RightArrow.png'
import { styled } from "@mui/system";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  // borderRadius: "10px",
  // border: "1px solid #FFF",
//   background: "#1D1D1D;",
    backgroundColor:'transparent',
  //   marginBottom:'4px',
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    // "& .css-i4bv87-MuiSvgIcon-root": {
    //   color: '#E3B748',
    // },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    color: 'var(--Pure-White, #FFF)',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '162.523%', 
}));



const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  color: 'var(--Pure-White, #FFF)',
  fontFamily: 'Inter',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '162.523%',
  opacity:'0.3',
}));

function FooterAccordion() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }
  
  return (
    <div>
      <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <CustomAccordionSummary
          expandIcon={<AddCircleIcon style={{ color: '#E3B748' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CustomTypography>
            Do I need a personal injury report?
          </CustomTypography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <CustomAccordionSummary
          expandIcon={<AddCircleIcon style={{ color: '#E3B748' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CustomTypography>How much is my case worth?</CustomTypography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <CustomAccordionSummary
          expandIcon={<AddCircleIcon style={{ color: '#E3B748' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CustomTypography>
            What should I do right after car accidect
          </CustomTypography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
      <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <CustomAccordionSummary
          expandIcon={<AddCircleIcon style={{ color: '#E3B748' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CustomTypography>How much is my case worth?</CustomTypography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
    </div>
  );
}

export default FooterAccordion;
