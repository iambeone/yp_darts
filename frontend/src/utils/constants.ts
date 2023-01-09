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
    path: "/players/1",
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

export const subjectsRF = [
  { value: "Московская область", text: "Московская область" },
  { value: "Республика Удмуртия", text: "Республика Удмуртия" },
  {
    value: "Еврейский автономный округ",
    text: "Еврейский автономный округ",
  },
];

export const customSizesInputText = {
  small: {
    width: 156,
    "@media (min-width: 1194px)": { width: 144 },
  },
  medium: {
    width: "92.2%",
    maxWidth: 328,
    "@media (min-width: 1194px)": { maxWidth: 308 },
    "@media (min-width: 1440px)": { width: 355 },
  },
  large: {
    width: "92.2%",
    maxWidth: 328,
    "@media (min-width: 1194px)": { width: "100%", maxWidth: "100%" },
  },
};

export const contextMenuPlayersTable = [
  { icon: "person_add", value: "Добавить в турнир" },
  { icon: "edit", value: "Изменить" },
  { icon: "delete", value: "Удалить" },
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY3MzE4NTg2MSwiZXhwIjoxNjczMjcyMjYxfQ.aSjV9CjTUoP3MzOkw13QrxObK__yWUtKti9astW_BLc";

  const requestOptions = {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return requestOptions;
};
