import React from "react";
import DestinationPic from "../../assets/images/undraw_Destination_6jtj.png";
import styles from "./image.module.scss";

export default () => (
  <div className={styles.Image}>
    <h3>Travel to the most beautiful place in the world</h3>
    <img src={DestinationPic} alt="_Destination_Avatar_" />
  </div>
);
