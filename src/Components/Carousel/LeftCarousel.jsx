import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import ArrowTools from "../ArrowTools/ArrowTools";
// import styles from "./Carousel.module.css"
import {ReactComponent as LeftArrow} from "../../assets/LeftArrow.svg";
import Box from "@mui/material/Box";
import Ellipse from '../../assets/Ellipse.png';
import LeftDown from '../../assets/Down1.png';
import styles from '../ArrowTools/ArrowTools.module.css';



const LeftNavigationCarousel = () => {
  // console.log("This is left navigation");
  const swiper = useSwiper();

  const [isBegining, setIsBegining] = useState(swiper.isBegining);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegining(swiper.isBegining);
    });
  }, []);

  return (
  <div className={styles.leftNavigation}>
  {!isBegining && <Box className={styles.mainContainer1} onClick={()=> swiper.slidePrev()}>
      <img className={styles.ellipClass1} src={Ellipse} alt="Ellpse1" />
      <img className={styles.arrowClass1} src={LeftDown} alt="LeftDown1" />
    </Box> }
  </div>
  );
};

export default LeftNavigationCarousel;