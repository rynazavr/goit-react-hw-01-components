import React from "react";
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
