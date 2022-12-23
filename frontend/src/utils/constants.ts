import TournamentActive from "../images/tournament-active.svg";
import Tournament from "../images/tournament.svg";
import PlayersActive from "../images/players-active.svg";
import Players from "../images/players.svg";
import ProtocolsActive from "../images/protocols-active.svg";
import Protocols from "../images/protocols.svg";
import SettingsActive from "../images/settings-active.svg";
import Settings from "../images/settings.svg";
import ElseActive from "../images/else-active.svg";
import Else from "../images/else.svg";

const tabs = [
  {
    id: 1,
    title: "Турниры",
    img: Tournament,
    imgActive: TournamentActive,
    path: "/tournaments",
  },
  {
    id: 2,
    title: "Игроки",
    img: Players,
    imgActive: PlayersActive,
    path: "/players",
  },
  {
    id: 3,
    title: "Протоколы",
    img: Protocols,
    imgActive: ProtocolsActive,
    path: "/protocols",
  },
  {
    id: 4,
    title: "Настройки",
    img: Settings,
    imgActive: SettingsActive,
    path: "/settings",
  },
  {
    id: 5,
    title: "Еще",
    img: Else,
    imgActive: ElseActive,
    path: "/",
  },
];

export default tabs;
