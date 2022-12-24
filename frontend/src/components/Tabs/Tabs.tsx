import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tabs from "../../utils/constants";
// import TournamentActive from "../../images/tournament-active.svg";
// import Tournament from "../../images/tournament.svg";
// import PlayersActive from "../../images/players-active.svg";
// import Players from "../../images/players.svg";
// import ProtocolsActive from "../../images/protocols-active.svg";
// import Protocols from "../../images/protocols.svg";
// import SettingsActive from "../../images/settings-active.svg";
// import Settings from "../../images/settings.svg";
// import ElseActive from "../../images/else-active.svg";
// import Else from "../../images/else.svg";
import styles from "./Tabs.module.css";

// const tabs = [
//   {
//     id: 1,
//     title: "Турниры",
//     img: Tournament,
//     imgActive: TournamentActive,
//     path: "/tournaments",
//   },
//   {
//     id: 2,
//     title: "Игроки",
//     img: Players,
//     imgActive: PlayersActive,
//     path: "/players",
//   },
//   {
//     id: 3,
//     title: "Протоколы",
//     img: Protocols,
//     imgActive: ProtocolsActive,
//     path: "/protocols",
//   },
//   {
//     id: 4,
//     title: "Настройки",
//     img: Settings,
//     imgActive: SettingsActive,
//     path: "/settings",
//   },
//   {
//     id: 5,
//     title: "Еще",
//     img: Else,
//     imgActive: ElseActive,
//     path: "/settings",
//   },
// ];

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
