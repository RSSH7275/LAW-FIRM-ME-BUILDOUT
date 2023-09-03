import React from 'react'
import Img1 from '../../assets/Ellipse17.png'
import Img2 from '../../assets/plus.png'
import styles from './AccordFooter.module.css'


const ExpandIcon = () => {
  return (
    <div className={styles.expandIconStyl}>
        <img src={Img1} alt="img" />
        <img src={Img2} alt="img" />
    </div>
  )
}

export default ExpandIcon