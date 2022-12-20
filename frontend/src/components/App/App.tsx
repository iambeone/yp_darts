import React from "react";
import styles from "./App.module.css";
import GamersTable from "../DataTable/GamersTable";

const gamers = [
  { name: "Sam", email: "sam@ya.ru" },
  { name: "Sam", email: "sam@ya.ru" },
  { name: "Sam", email: "sam@ya.ru" },
];

function App() {
  return (
    <div className={styles.App}>
      <h1>Start App</h1>
      <GamersTable rows={gamers} />
    </div>
  );
}

export default App;
