/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import TournamentActive from "../../images/Vector.svg";

const types = [
  {
    title: "Турниры",
    img: TournamentActive,
  },
  {
    title: "Игроки",
    img: TournamentActive,
  },
  {
    title: "Протоколы",
    img: TournamentActive,
  },
];
function Tabs() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ul>
        {types.map((type) => (
          <li
            key={type.title}
            // active={active === type}
            onKeyPress={() => setActive(type)}
            onClick={() => setActive(type)}
          >
            <img src={type.img} alt="Иконка" />
            <p>{type.title}</p>
          </li>
        ))}
      </ul>
      <p>{active.title}</p>
    </>
  );
}
export default Tabs;
