import React, { useState } from "react";
import { Link } from "react-router-dom";
import TournamentActive from "../../images/tournament-active.svg";
import Tournament from "../../images/tournament.svg";
import PlayersActive from "../../images/players-active.svg";
import Players from "../../images/players.svg";
import ProtocolsActive from "../../images/protocols-active.svg";
import Protocols from "../../images/protocols.svg";
import SettingsActive from "../../images/settings-active.svg";
import Settings from "../../images/settings.svg";
import styles from "./Tabs.module.css";

const tabs = [
  {
    title: "Турниры",
    img: Tournament,
    imgActive: TournamentActive,
    path: "/tournaments",
  },
  {
    title: "Игроки",
    img: Players,
    imgActive: PlayersActive,
    path: "/players",
  },
  {
    title: "Протоколы",
    img: Protocols,
    imgActive: ProtocolsActive,
    path: "/protocols",
  },
  {
    title: "Настройки",
    img: Settings,
    imgActive: SettingsActive,
    path: "/settings",
  },
];

function Tabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <ul className={styles.ul}>
      {tabs.map((tab) => (
        <Link
          className={styles.link}
          to={tab.path}
          onClick={() => setActive(tab)}
          onKeyPress={() => setActive(tab)}
        >
          <li className={styles.li} key={tab.title}>
            {active === tab && <div className={styles.border} />}
            <div
              className={styles.group}
              style={{
                paddingLeft: active !== tab ? "4px" : "0",
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
