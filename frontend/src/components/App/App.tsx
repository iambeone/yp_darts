import React from "react";
import RadioOption from "../RadioOption/Radio-Option";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>Start App</h1>
      <RadioOption
        name="Пол"
        values={["Мужской", "Женский", "Оно"]}
        isRequired
      />
    </div>
  );
}

export default App;
