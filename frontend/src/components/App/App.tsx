import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "../../utils/hooks";
import { getPlayers } from "../../services/actions";
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
  AddPlayerPage,
  EditPlayerPage,
  PlayerInfoPage,
} from "../../pages";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import {
  MainForm,
  DocumentsForm,
  GameInfoForm,
  AdditionalForm,
} from "../Forms";

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
          <Route path="/players/:pageNumber" element={<PlayersPage />} />
          <Route path="/players/add-player" element={<AddPlayerPage />}>
            <Route index element={<MainForm />} />
            <Route path="main" element={<MainForm />} />
            <Route path="documents" element={<DocumentsForm />} />
            <Route path="game-info" element={<GameInfoForm />} />
            <Route path="additional" element={<AdditionalForm />} />
          </Route>
          <Route path="/players/edit-player/:id" element={<EditPlayerPage />}>
            <Route index element={<MainForm />} />
            <Route path="main" element={<MainForm />} />
            <Route path="documents" element={<DocumentsForm />} />
            <Route path="game-info" element={<GameInfoForm />} />
            <Route path="additional" element={<AdditionalForm />} />
          </Route>
          <Route path="/player/:id" element={<PlayerInfoPage />} />
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers(""));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;
