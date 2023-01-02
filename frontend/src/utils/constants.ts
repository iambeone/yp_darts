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

export const tabs = [
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

export function checkResponse(res: Response) {
  if (!res.ok) {
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }
  return res.json();
}

export const baseUrl = "http://localhost:3000";

export const tokenRequestOptions = (method: string) => {
  // использовать после подключения авторизации
  // const accessToken = localStorage.getItem("accessToken");

  // убрать после подключения авторизации. Залогинится через postman и вставить полученный токен
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY3MjU2NDY3MCwiZXhwIjoxNjcyNjUxMDcwfQ.OjGKexdZsiLzMKg8GEACfNJybD-hLbWG0s4P4Jzj5TI";

  const requestOptions = {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return requestOptions;
};
