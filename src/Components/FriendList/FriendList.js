import React from "react";
import FriendItem from "../FriendItem/FriendItem";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ data }) => {
  return (
    <ul className={styles["friend-list"]}>
      {data.map((dataItem) => (
        <FriendItem
          key={dataItem.id}
          avatar={dataItem.avatar}
          isOnline={dataItem.isOnline}
          name={dataItem.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
