import React from "react";
import InputText from "../InputText/Input-Text";
import styles from "./App.module.css";

function App() {
  // const [name, setName] = React.useState("");
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  return (
    <div className={styles.App}>
      <h1>Start App</h1>
      <InputText
        required
        placeholder="fullWide"
        label="full"
        size="medium"
        rows={2}
        // value={name}
        // onChange={handleChange}
        name="phone"
      />
    </div>
  );
}

export default App;
