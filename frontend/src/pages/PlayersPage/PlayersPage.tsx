import React from "react";
import GamersTable from "../../components/DataTable/GamersTable";
import styles from "./PlayersPage.module.css";

export default function PlayersPage() {
  const gamers = [
    { name: "Sam", email: "sam@ya.ru", id: 1 },
    { name: "Sam", email: "sam@ya.ru", id: 2 },
    { name: "Sam", email: "sam@ya.ru", id: 3 },
    { name: "Sam", email: "sam@ya.ru", id: 4 },
    { name: "Sam", email: "sam@ya.ru", id: 5 },
    { name: "Sam", email: "sam@ya.ru", id: 6 },
    { name: "Sam", email: "sam@ya.ru", id: 7 },
    { name: "Sam", email: "sam@ya.ru", id: 8 },
    { name: "Sam", email: "sam@ya.ru", id: 9 },
    { name: "Sam", email: "sam@ya.ru", id: 10 },
    { name: "Sam", email: "sam@ya.ru", id: 11 },
    { name: "Sam", email: "sam@ya.ru", id: 12 },
    { name: "Henk", email: "Henk@ya.ru", id: 13 },
    { name: "Henk", email: "Henk@ya.ru", id: 14 },
  ];
  return (
    <div className={styles.page}>
      <h4>PlayersPage</h4>
      <GamersTable data={gamers} />
    </div>
  );
}
