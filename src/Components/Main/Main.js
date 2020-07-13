import React from "react";
// import "./Main.css";
import styles from "./Main.module.css";
import ProfileCollection from "../ProfileCollection/ProfileCollection";
import StatisticCollection from "../StatisticCollection/StatisticCollection";
import Title from "../Title/Title";
import FriendList from "../FriendList/FriendList";
import data from "../../db/friends.json";
import items from "../../db/transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const Main = () => {
  return (
    <main>
      <ProfileCollection />
      <FriendList data={data} />
      <section className={styles.statistics}>
        <Title />
        <StatisticCollection />
      </section>
      <TransactionHistory transactions={items} />
    </main>
  );
};

export default Main;
