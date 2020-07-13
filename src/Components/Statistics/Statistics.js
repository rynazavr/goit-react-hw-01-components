import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ label, percentage, color }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: color }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default Statistics;

Statistics.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
