import React from "react";
import styles from "./FriendItem.module.css";

const FriendItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.statusOn}></span>
      ) : (
        <span className={styles.statusOff}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendItem;
