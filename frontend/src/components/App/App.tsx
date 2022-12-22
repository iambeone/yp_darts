import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>Start App</h1>
      <SearchBar />
    </div>
  );
}

export default App;
