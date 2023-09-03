import React from "react";
import styles from "./HeroImg.module.css";
import Image from "../../assets/layerPhoto.png";
import Msg from "../../assets/Message.png";

const HeroImg = () => {
  const inputStyle = {
    color: 'red', // Change this to your desired color
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.child1}>
        <h1 className={styles.hTagStyling}>You don’t have to</h1>
        <h1 className={styles.h1Styling}>Fight them Alone.</h1>
        <p className={styles.pStyling}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>

        <div className={styles.fieldStyling}>
        <img className="msgIcon icon" src={Msg} alt="icon" />
        <input className={styles.inputStyler} type="text" placeholder="Enter your eamil address"/>
        <button className={styles.buttonStyler}>Let’s Talk</button>
        </div>
        <div>
      
    </div>
      </div>
      <div className={styles.child2}>
        <img className={styles.lawyerMan} src={Image} alt="lawyer-man" />
      </div>
    </div>
  );
};

export default HeroImg;
