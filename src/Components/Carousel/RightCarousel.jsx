import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import ArrowTools1 from "../ArrowTools/ArrowTools1";
import {ReactComponent as RightArrow} from "../../assets/RightArrow.svg";
import styles from '../ArrowTools/ArrowTools.module.css';
import Box from "@mui/material/Box";
import Ellipse from '../../assets/Ellipse13.png';
import LeftDown from '../../assets/Down2.png';


const RightNavigationCarousel = () => {
  // console.log("This is Right navigation");
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
        setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
  <div className={styles.rightNavigation}>
  {!isEnd && <Box className={styles.mainContainer} onClick={()=> swiper.slideNext()}>
      <img className={styles.ellipClass} src={Ellipse} alt="Ellpse1" />
      <img className={styles.arrowClass} src={LeftDown} alt="LeftDown1" />
    </Box>}
  </div>
  );
};

export default RightNavigationCarousel;