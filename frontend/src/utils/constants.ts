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
  { id: 1, title: "Республика Адыгея (Адыгея)" },
  { id: 2, title: "Республика Алтай" },
  { id: 3, title: "Республика Башкортостан" },
  { id: 4, title: "Республика Бурятия" },
  { id: 5, title: "Республика Дагестан" },
  { id: 6, title: "Республика Ингушетия" },
  { id: 7, title: "Кабардино-Балкарская Республика" },
  { id: 8, title: "Республика Калмыкия" },
  { id: 9, title: "Карачаево-Черкесская Республика" },
  { id: 10, title: "Республика Карелия" },
  { id: 11, title: "Республика Коми" },
  { id: 12, title: "Республика Крым" },
  { id: 13, title: "Республика Марий Эл" },
  { id: 14, title: "Республика Мордовия" },
  { id: 15, title: "Республика Саха (Якутия)" },
  { id: 16, title: "Республика Северная Осетия – Алания" },
  { id: 17, title: "Республика Татарстан (Татарстан)" },
  { id: 18, title: "Республика Тыва" },
  { id: 19, title: "Удмуртская Республика" },
  { id: 20, title: "Республика Хакасия" },
  { id: 21, title: "Чеченская Республика" },
  { id: 22, title: "Чувашская Республика – Чувашия" },
  { id: 23, title: "Алтайский край" },
  { id: 24, title: "Забайкальский край" },
  { id: 25, title: "Камчатский край" },
  { id: 26, title: "Краснодарский край" },
  { id: 27, title: "Красноярский край" },
  { id: 28, title: "Пермский край" },
  { id: 29, title: "Приморский край" },
  { id: 30, title: "Ставропольский край" },
  { id: 31, title: "Хабаровский край" },
  { id: 32, title: "Амурская область" },
  { id: 33, title: "Архангельская область" },
  { id: 34, title: "Астраханская область" },
  { id: 35, title: "Белгородская область" },
  { id: 36, title: "Брянская область" },
  { id: 37, title: "Владимирская область" },
  { id: 38, title: "Волгоградская область" },
  { id: 39, title: "Вологодская область" },
  { id: 40, title: "Воронежская область" },
  { id: 41, title: "Ивановская область" },
  { id: 42, title: "Иркутская область" },
  { id: 43, title: "Калининградская область" },
  { id: 44, title: "Калужская область" },
  { id: 45, title: "Кемеровская область" },
  { id: 46, title: "Кировская область" },
  { id: 47, title: "Костромская область" },
  { id: 48, title: "Курганская область" },
  { id: 49, title: "Курская область" },
  { id: 50, title: "Ленинградская область" },
  { id: 51, title: "Липецкая область" },
  { id: 52, title: "Магаданская область" },
  { id: 53, title: "Московская область" },
  { id: 54, title: "Мурманская область" },
  { id: 55, title: "Нижегородская область" },
  { id: 56, title: "Новгородская область" },
  { id: 57, title: "Новосибирская область" },
  { id: 58, title: "Омская область" },
  { id: 59, title: "Оренбургская область" },
  { id: 60, title: "Орловская область" },
  { id: 61, title: "Пензенская область" },
  { id: 62, title: "Псковская область" },
  { id: 63, title: "Ростовская область" },
  { id: 64, title: "Рязанская область" },
  { id: 65, title: "Самарская область" },
  { id: 66, title: "Саратовская область" },
  { id: 67, title: "Сахалинская область" },
  { id: 68, title: "Свердловская область" },
  { id: 69, title: "Смоленская область" },
  { id: 70, title: "Тамбовская область" },
  { id: 71, title: "Тверская область" },
  { id: 72, title: "Томская область" },
  { id: 73, title: "Тульская область" },
  { id: 74, title: "Тюменская область" },
  { id: 75, title: "Ульяновская область" },
  { id: 76, title: "Челябинская область" },
  { id: 77, title: "Ярославская область" },
  { id: 78, title: "Город Москва" },
  { id: 79, title: "Город Санкт-Петербург" },
  { id: 80, title: "Город Севастополь" },
  { id: 81, title: "Еврейская автономная область" },
  { id: 82, title: "Ненецкий автономный округ" },
  { id: 83, title: "Ханты-Мансийский автономный округ – Югра" },
  { id: 84, title: "Чукотский автономный округ" },
  { id: 85, title: "Ямало-Ненецкий автономный округ" },
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
    "@media (min-width: 1440px)": { width: 355, maxWidth: 355 },
  },
  large: {
    width: "92.2%",
    maxWidth: 734,
    "@media (min-width: 1194px)": { width: "100%", maxWidth: 636 },
    "@media (min-width: 1440px)": { width: "100%", maxWidth: "100%" },
    "@media (max-width: 769px)": { width: 328 },
  },
};

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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3MzU5NzE3NCwiZXhwIjoxNjczNjgzNTc0fQ.kqQS2A_h4lMDHZswdMfuQhSDgsxu5Npelj3HHgba9ho";

  const requestOptions = {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return requestOptions;
};

export const subjectRF = [
  { id: 1, title: "Республика Адыгея (Адыгея)" },
  { id: 2, title: "Республика Алтай" },
  { id: 3, title: "Республика Башкортостан" },
  { id: 4, title: "Республика Бурятия" },
  { id: 5, title: "Республика Дагестан" },
  { id: 6, title: "Республика Ингушетия" },
  { id: 7, title: "Кабардино-Балкарская Республика" },
  { id: 8, title: "Республика Калмыкия" },
  { id: 9, title: "Карачаево-Черкесская Республика" },
  { id: 10, title: "Республика Карелия" },
  { id: 11, title: "Республика Коми" },
  { id: 12, title: "Республика Крым" },
  { id: 13, title: "Республика Марий Эл" },
  { id: 14, title: "Республика Мордовия" },
  { id: 15, title: "Республика Саха (Якутия)" },
  { id: 16, title: "Республика Северная Осетия – Алания" },
  { id: 17, title: "Республика Татарстан (Татарстан)" },
  { id: 18, title: "Республика Тыва" },
  { id: 19, title: "Удмуртская Республика" },
  { id: 20, title: "Республика Хакасия" },
  { id: 21, title: "Чеченская Республика" },
  { id: 22, title: "Чувашская Республика – Чувашия" },
  { id: 23, title: "Алтайский край" },
  { id: 24, title: "Забайкальский край" },
  { id: 25, title: "Камчатский край" },
  { id: 26, title: "Краснодарский край" },
  { id: 27, title: "Красноярский край" },
  { id: 28, title: "Пермский край" },
  { id: 29, title: "Приморский край" },
  { id: 30, title: "Ставропольский край" },
  { id: 31, title: "Хабаровский край" },
  { id: 32, title: "Амурская область" },
  { id: 33, title: "Архангельская область" },
  { id: 34, title: "Астраханская область" },
  { id: 35, title: "Белгородская область" },
  { id: 36, title: "Брянская область" },
  { id: 37, title: "Владимирская область" },
  { id: 38, title: "Волгоградская область" },
  { id: 39, title: "Вологодская область" },
  { id: 40, title: "Воронежская область" },
  { id: 41, title: "Ивановская область" },
  { id: 42, title: "Иркутская область" },
  { id: 43, title: "Калининградская область" },
  { id: 44, title: "Калужская область" },
  { id: 45, title: "Кемеровская область" },
  { id: 46, title: "Кировская область" },
  { id: 47, title: "Костромская область" },
  { id: 48, title: "Курганская область" },
  { id: 49, title: "Курская область" },
  { id: 50, title: "Ленинградская область" },
  { id: 51, title: "Липецкая область" },
  { id: 52, title: "Магаданская область" },
  { id: 53, title: "Московская область" },
  { id: 54, title: "Мурманская область" },
  { id: 55, title: "Нижегородская область" },
  { id: 56, title: "Новгородская область" },
  { id: 57, title: "Новосибирская область" },
  { id: 58, title: "Омская область" },
  { id: 59, title: "Оренбургская область" },
  { id: 60, title: "Орловская область" },
  { id: 61, title: "Пензенская область" },
  { id: 62, title: "Псковская область" },
  { id: 63, title: "Ростовская область" },
  { id: 64, title: "Рязанская область" },
  { id: 65, title: "Самарская область" },
  { id: 66, title: "Саратовская область" },
  { id: 67, title: "Сахалинская область" },
  { id: 68, title: "Свердловская область" },
  { id: 69, title: "Смоленская область" },
  { id: 70, title: "Тамбовская область" },
  { id: 71, title: "Тверская область" },
  { id: 72, title: "Томская область" },
  { id: 73, title: "Тульская область" },
  { id: 74, title: "Тюменская область" },
  { id: 75, title: "Ульяновская область" },
  { id: 76, title: "Челябинская область" },
  { id: 77, title: "Ярославская область" },
  { id: 78, title: "Город Москва" },
  { id: 79, title: "Город Санкт-Петербург" },
  { id: 80, title: "Город Севастополь" },
  { id: 81, title: "Еврейская автономная область" },
  { id: 82, title: "Ненецкий автономный округ" },
  { id: 83, title: "Ханты-Мансийский автономный округ – Югра" },
  { id: 84, title: "Чукотский автономный округ" },
  { id: 85, title: "Ямало-Ненецкий автономный округ" },
];

export const sportsCategory = [
  { id: 1, title: "Кандидат в мастера спорта России (КМС)" },
  { id: 2, title: "1-й спортивный разряд" },
  { id: 3, title: "2-й спортивный разряд" },
  { id: 4, title: "3-й спортивный разряд" },
  { id: 5, title: "1-й юношеский разряд" },
  { id: 6, title: "3-й юношеский разряд" },
];
