import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tabs from "../../utils/constants";
import styles from "./Tabs.module.css";

function Tabs() {
  const [active, setActive] = useState(tabs[0]);

  const filteredTabs = tabs.filter((tab) => {
    if (window.innerWidth > 500) {
      return tab.title !== "Еще";
    }
    return tab.title !== "Настройки";
  });
  const [arr, setArr] = useState(filteredTabs);

  useEffect(() => {
    window.onresize = () => {
      setArr(filteredTabs);
    };
  }, [filteredTabs, arr]);

  return (
    <ul className={styles.ul}>
      {arr.map((tab) => (
        <Link
          className={styles.link}
          to={tab.path}
          onClick={() => setActive(tab)}
          onKeyPress={() => setActive(tab)}
          key={tab.id}
        >
          <li className={styles.li}>
            {active === tab && <div className={styles.border} />}
            <div
              className={styles.group}
              style={{
                paddingLeft:
                  active !== tab && window.innerWidth > 500 ? "4px" : "0",
                paddingBottom:
                  active !== tab && window.innerWidth < 500 ? "4px" : "0",
              }}
            >
              <img
                className={styles.img}
                src={active === tab ? tab.imgActive : tab.img}
                alt="Иконка"
              />
              <p
                className={styles.title}
                style={{
                  color: active === tab ? "#FFF" : "rgba(255, 255, 255, 0.5)",
                }}
              >
                {tab.title}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default Tabs;
