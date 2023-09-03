import React, { useEffect } from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import RightCarousel from "./RightCarousel";
import LeftCarousel from "./LeftCarousel";
import ArrowTools from "../ArrowTools/ArrowTools";
import ArrowTools1 from "../ArrowTools/ArrowTools1";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 10);
  }, [data]);

  return <></>;
};

const myWrappStyles={
display:'flex',
position:'absolute',
zIndex:1,
top:0,
left:'80%',
paddingTop:'65px',
gap:'20px',
}

const mySwiperStyles={
    marginLeft: 'auto',
    position:'static',
    marginRight: 'auto',
    overflow: 'clip',
    listStyle: 'none',
    padding: 0,
    zIndex: 1,
    display: 'block',
}

const Carousel = ({ data, renderUserCard }) => {
  return (
    <div>
      <Swiper
       style={mySwiperStyles}
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <div style={myWrappStyles}>
          <LeftCarousel />
          <RightCarousel />
        </div>

        {data.map((item, index) => (
          <SwiperSlide>{renderUserCard(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
