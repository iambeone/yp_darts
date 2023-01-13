import React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "../../utils/hooks";
import GamersTable from "../../components/DataTable/GamersTable";
import BasicModal from "../../components/Modals/BasicModal";
import Filters from "../../components/Modals/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import DialogWindow from "../../components/DialogWindow/DialogWindow";

export default function PlayersPage() {
  const players = useSelector((state) => state.players.playersData);
  const deleteTitle = "Вы уверены, что хотите удалить игрока?";
  const deleteText = "После удаления отменить действие невозможно.";
  const handleClose = () => {
    return null;
  };
  // const filteredPlayers = players.filter((item) => {
  //   if (
  //     item.name.toLowerCase() === "kate7" ||
  //     item.email.toLowerCase() === "kate7"
  //   )
  //     return item;
  //   return null;
  // });
  return (
    <>
      <DialogWindow
        open
        type="accept"
        title={deleteTitle}
        contentText={deleteText}
      >
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleClose} color="error">
          Да, удалить
        </Button>
      </DialogWindow>
      <PageTitle title="Игроки" />
      <SearchBar />
      {players && <GamersTable data={players} />}
      <BasicModal>
        <Filters />
      </BasicModal>
    </>
  );
}
