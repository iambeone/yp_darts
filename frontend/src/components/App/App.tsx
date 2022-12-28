import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import {
  HomePage,
  LoginPage,
  TournamentsPage,
  PlayersPage,
  ProtocolsPage,
  SettingsPage,
  ProfilePage,
  NotFound404,
} from "../../pages";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

function ModalSwitch() {
  return (
    <div className={styles.section}>
      <div className={styles.section__item}>
        <Sidebar />
      </div>
      <div className={styles.section__item}>
        <Header />
      </div>
      <div className={styles.section__item}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          {/* <Route path="/players/:pageNumber" element={<PlayersPage />} /> вариант для просмотра таблицы */}
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;
