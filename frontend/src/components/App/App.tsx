import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function ModalSwitch() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/protocols" element={<ProtocolsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
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
