import React from "react";
import styles from "./Title.module.css";

const Title = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

Title.defaultProps = {
  title: "Upload stats",
};
export default Title;
