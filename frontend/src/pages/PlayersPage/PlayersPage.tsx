import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks";
import GamersTable from "../../components/DataTable/GamersTable";
import BasicModal from "../../components/modals/BasicModal";
import Filters from "../../components/modals/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import DialogWindow from "../../components/DialogWindow/DialogWindow";
import {
  deletePlayer,
  getPlayers,
  setAcceptDeleteOpen,
  setConfirmDeleteOpen,
  setContextMenuOpen,
  setCurrentPlayerID,
} from "../../services/actions";
import ContextMenu from "../../components/ContextMenu/ContextMenu";

export default function PlayersPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredPlayersData = useSelector(
    (state) => state.players.filteredPlayersData,
  );
  const acceptDeleteOpen = useSelector(
    (state) => state.players.acceptDeleteOpen,
  );
  const confirmDeleteOpen = useSelector(
    (state) => state.players.confirmDeleteOpen,
  );
  const currentPlayerId = useSelector((state) => state.players.currentPlayerId);
  const deleteTitle = "Вы уверены, что хотите удалить игрока?";
  const deleteText = "После удаления отменить действие невозможно.";
  const confirmDeleteTitle = "Игрок успешно удален";

  const anchor = useSelector((state) => state.players.contextMenuOpen);

  // не работает закрытие по клику не по меню, разобраться
  const closeContextMenu = () => {
    dispatch(setContextMenuOpen(null));
  };

  const addToTournament = (id: number) => {
    return id;
  };

  const contextMenuPlayersTableFull = [
    {
      icon: "person_add",
      value: "Добавить в турнир",
      callback: () => addToTournament(currentPlayerId),
    },
    {
      icon: "edit",
      value: "Изменить",
      callback: () => navigate(`/players/edit-player/${currentPlayerId}`),
    },
    {
      icon: "delete",
      value: "Удалить",
      callback: () => {
        dispatch(setAcceptDeleteOpen(true));
      },
    },
  ];

  const contextMenuPlayersTableDelete = [
    {
      icon: "delete",
      value: "Удалить",
      callback: () => {
        dispatch(setAcceptDeleteOpen(true));
      },
    },
  ];

  const handleDeletePlayer = () => {
    Promise.resolve(dispatch(deletePlayer(currentPlayerId))).then(() => {
      dispatch(getPlayers(""));
      dispatch(setAcceptDeleteOpen(false));
      dispatch(setConfirmDeleteOpen(true));
      dispatch(setCurrentPlayerID(0));
    });
    dispatch(setAcceptDeleteOpen(false));
  };

  return (
    <>
      <PageTitle title="Игроки" />
      <SearchBar />
      {filteredPlayersData && <GamersTable data={filteredPlayersData} />}
      <BasicModal>
        <Filters />
      </BasicModal>
      <DialogWindow
        open={acceptDeleteOpen}
        type="accept"
        title={deleteTitle}
        contentText={deleteText}
        handleClose={() => dispatch(setAcceptDeleteOpen(false))}
      >
        <Button onClick={() => dispatch(setAcceptDeleteOpen(false))}>
          Отмена
        </Button>
        <Button onClick={handleDeletePlayer} color="error">
          Да, удалить
        </Button>
      </DialogWindow>
      <DialogWindow
        open={confirmDeleteOpen}
        handleClose={() => dispatch(setConfirmDeleteOpen(false))}
        type="success"
        title={confirmDeleteTitle}
      >
        <Button onClick={() => dispatch(setConfirmDeleteOpen(false))}>
          Перейти в список игроков
        </Button>
      </DialogWindow>
      {window.innerWidth < 1200 ? (
        <ContextMenu
          items={contextMenuPlayersTableFull}
          anchorEl={anchor}
          handleClose={closeContextMenu}
        />
      ) : (
        <ContextMenu
          items={contextMenuPlayersTableDelete}
          anchorEl={anchor}
          handleClose={closeContextMenu}
        />
      )}
    </>
  );
}
