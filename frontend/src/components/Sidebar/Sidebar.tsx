import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "../../images/Logo.png";
import Tabs from "../Tabs/Tabs";

function Sidebar() {
  return (
    <section className={styles.section}>
      <img className={styles.img} src={Logo} alt="Лого" />
      <Tabs />
    </section>
  );
}

export default Sidebar;