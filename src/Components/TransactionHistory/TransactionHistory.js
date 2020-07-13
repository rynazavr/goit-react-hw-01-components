import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.trr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item) => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string,
      type: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
