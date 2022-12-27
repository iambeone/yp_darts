import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tabs from "../../utils/constants";
import styles from "./Tabs.module.css";

type Ttab = {
  id: number;
  title: string;
  img: string;
  imgActive: string;
  path: string;
};

function Tabs() {
  const activeTab = JSON.parse(localStorage.getItem("activeTab")!);
  const [active, setActive] = useState<Ttab>(activeTab);

  const filteredTabs = tabs.filter((tab) => {
    if (window.innerWidth > 500) {
      return tab.title !== "Еще";
    }
    return tab.title !== "Настройки";
  });
  const [arr, setArr] = useState(filteredTabs);

  const onClick = (tab: Ttab) => {
    setActive(tab);
    localStorage.setItem("activeTab", JSON.stringify(tab));
  };

  useEffect(() => {
    window.onresize = () => {
      setArr(filteredTabs);
    };
  }, [filteredTabs, arr, setActive]);

  return (
    <ul className={styles.ul}>
      {arr.map((tab) => {
        return (
          <Link
            className={styles.link}
            to={tab.path}
            onClick={() => onClick(tab)}
            onKeyPress={() => onClick(tab)}
            key={tab.id}
          >
            <li className={styles.li}>
              {JSON.stringify(active) === JSON.stringify(tab) && (
                <div className={styles.border} />
              )}
              <div
                className={styles.group}
                style={{
                  paddingLeft:
                    JSON.stringify(active) !== JSON.stringify(tab) &&
                    window.innerWidth > 500
                      ? "4px"
                      : "0",
                  paddingBottom:
                    JSON.stringify(active) !== JSON.stringify(tab) &&
                    window.innerWidth < 500
                      ? "4px"
                      : "0",
                }}
              >
                <img
                  className={styles.img}
                  src={
                    JSON.stringify(active) === JSON.stringify(tab)
                      ? tab.imgActive
                      : tab.img
                  }
                  alt="Иконка"
                />
                <p
                  className={styles.title}
                  style={{
                    color:
                      JSON.stringify(active) === JSON.stringify(tab)
                        ? "#FFF"
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {tab.title}
                </p>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
export default Tabs;
