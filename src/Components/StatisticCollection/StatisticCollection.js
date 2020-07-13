import React from "react";
import styles from "./StatisticCollection.module.css";
import data from "../../db/statistical-data.json";
import Statistics from "../Statistics/Statistics";

const colorSwitch = () => {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
};

const StatisticCollection = () => {
  return (
    <ul className={styles.statList}>
      {data.map((stats) => {
        const color = colorSwitch();
        return (
          <Statistics
            color={color}
            key={stats.id}
            label={stats.label}
            percentage={stats.percentage}
          />
        );
      })}
    </ul>
  );
};

export default StatisticCollection;
