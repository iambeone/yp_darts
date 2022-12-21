/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import TournamentActive from "../../images/tournament-active.svg";
import Tournament from "../../images/tournament.svg";
import PlayersActive from "../../images/players-active.svg";
import Players from "../../images/players.svg";
import ProtocolsActive from "../../images/protocols-active.svg";
import Protocols from "../../images/protocols.svg";
import SettingsActive from "../../images/settings-active.svg";
import Settings from "../../images/settings.svg";
import styles from "./tabs.module.css";

const types = [
  {
    title: "Турниры",
    img: Tournament,
    imgActive: TournamentActive,
  },
  {
    title: "Игроки",
    img: Players,
    imgActive: PlayersActive,
  },
  {
    title: "Протоколы",
    img: Protocols,
    imgActive: ProtocolsActive,
  },
  {
    title: "Настройки",
    img: Settings,
    imgActive: SettingsActive,
  },
];

function Tabs() {
  const [active, setActive] = useState(types[0]);
  return (
    <ul className={styles.ul}>
      {types.map((type) => (
        <li
          key={type.title}
          className={styles.li}
          onKeyPress={() => setActive(type)}
          onClick={() => setActive(type)}
        >
          {active === type && <div className={styles.border} />}
          <img
            className={styles.img}
            src={active === type ? type.imgActive : type.img}
            alt="Иконка"
            style={{ paddingLeft: active !== type ? "4px" : "0" }}
          />
          <p
            className={styles.title}
            style={{
              color: active === type ? "#FFF" : "rgba(255, 255, 255, 0.5)",
            }}
          >
            {type.title}
          </p>
        </li>
      ))}
    </ul>
  );
}
export default Tabs;
